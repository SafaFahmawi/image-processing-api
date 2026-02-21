import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../server';

const request = supertest(app);

describe('API Test', () => {
  const thumbPath = path.resolve('src/assets/thumb/fjord-200-200.jpg');

  // Clean up test image before/after tests
  beforeAll(() => {
    if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
  });

  afterAll(() => {
    if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
  });

  it('should get endpoint successfully with valid params', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200',
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/image/); // verify it's an image
  });

  it('should return 400 if filename is missing', async () => {
    const response = await request.get('/api/images?width=200&height=200');
    expect(response.status).toBe(400);
  });

  it('should return 400 if width or height is missing', async () => {
    const response1 = await request.get(
      '/api/images?filename=fjord&height=200',
    );
    const response2 = await request.get('/api/images?filename=fjord&width=200');
    expect(response1.status).toBe(400);
    expect(response2.status).toBe(400);
  });

  it('should return 400 if width or height is invalid', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=-100&height=200',
    );
    expect(response.status).toBe(400);
  });

  it('should return 404 for non-existent file', async () => {
    const response = await request.get(
      '/api/images?filename=nonexistent&width=200&height=200',
    );
    expect(response.status).toBe(404);
  });
});
