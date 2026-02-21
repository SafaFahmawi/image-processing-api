import sharp from 'sharp';

const resizeImage = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
): Promise<void> => {
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);
  } catch (error) {
    throw new Error(`Image processing failed: ${(error as Error).message}`);
  }
};

export default resizeImage;
