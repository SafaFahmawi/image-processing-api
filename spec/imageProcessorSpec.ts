import resizeImage from '../src/utilities/imageProcessor';
import fs from 'fs';

describe('Image Processor', () => {
  it('should resize image successfully', async () => {
    console.log('\n Testing image resize...');

    const output = 'src/assets/thumb/fjord-200-200.jpg';

    await resizeImage('src/assets/full/fjord.jpg', output, 200, 200);

    const exists = fs.existsSync(output);

    console.log(' File exists:', exists);

    expect(exists).toBeTrue();
  });

  it('should throw error for non-existent file', async () => {
    await expectAsync(
      resizeImage('src/assets/full/nonexistent.jpg', 'output.jpg', 200, 200),
    ).toBeRejected();
  });
});
