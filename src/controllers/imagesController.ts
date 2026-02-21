import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../utilities/imageProcessor';

export const resizeImageController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    if (!filename) {
      res.status(400).json({ error: 'Filename is required' });
      return;
    }

    if (!width || !height || width <= 0 || height <= 0) {
      res.status(400).send('Width and height must be positive numbers');
      return;
    }

    const fullPath = path.resolve('src/assets/full', `${filename}.jpg`);

    const thumbPath = path.resolve(
      'src/assets/thumb',
      `${filename}-${width}-${height}.jpg`,
    );

    if (!fs.existsSync(fullPath)) {
      res.status(404).send('Image not found');
      return;
    }

    if (!fs.existsSync(thumbPath)) {
      await resizeImage(fullPath, thumbPath, width, height);
    }

    res.sendFile(thumbPath);
  } catch (error) {
    res.status(500).send(`Error processing image: ${(error as Error).message}`);
  }
};
