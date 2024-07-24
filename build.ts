import fs from 'fs';
import path from 'path';


const DIST_LIB = path.resolve(__dirname, 'src', 'documentation', 'lib');
const FONT = '@fontsource/montserrat';
const MODULE_FONT = path.dirname(require.resolve(`${FONT}/package.json`));
const DIST_LIB_FONT = path.resolve(DIST_LIB, FONT);


const fontCopy = (file: string) => fs.cpSync(path.resolve(MODULE_FONT, file), path.resolve(DIST_LIB_FONT, file), {recursive: true});
const fontCopyFiles = (...files: string[]) => files.forEach(fontCopy);

console.log(`Reset dist lib folder at ${DIST_LIB}`);

fs.rmSync(DIST_LIB, {recursive: true, force: true});
fs.mkdirSync(DIST_LIB, {recursive: true});

console.log(`Move font files from ${MODULE_FONT} to ${DIST_LIB_FONT}`);

fontCopyFiles('files', 'index.css', '700.css');

console.log('Done');
