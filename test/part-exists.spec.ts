import path from 'path';
import fs from 'fs';

const PART_DIR = path.resolve(__dirname, '..', 'part');

const expectPartExists = (...files: string[]) => files.forEach((file) => expect(fs.existsSync(path.resolve(PART_DIR, file))).toBeTruthy());

describe('Part files exists', () => {
  it('Should part files exists', () => {
    expectPartExists(
      'code.pug',
      'component.pug',
      'component-render.pug',
      'template.pug',
      'template-render.pug',
    );
  });
});
