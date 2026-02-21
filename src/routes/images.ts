import express from 'express';
import { resizeImageController } from '../controllers/imagesController';

const imagesRoute = express.Router();

imagesRoute.get('/', resizeImageController);

export default imagesRoute;
