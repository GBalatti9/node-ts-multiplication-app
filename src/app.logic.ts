import fs from 'fs';
import path from 'path';
import { yarg } from './config/plugins/yargs.plugin';

const outputPath = 'outputs';
const outputFile = 'tabla-5.txt';

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const { b:base, l:limit, s:showTable } = yarg;

let header =
    `====================== \n     Tabla del ${base} \n======================`;
let result = ''

for (let i = 1; i <= limit; i++) {
    result += `${base} * ${i} = ${(base * i)}\n`;
}

let content = `${header}\n${result}`

// let content: string = multiplyBy5();

fs.writeFileSync(path.join(outputPath, outputFile), content, 'utf-8');


showTable && console.log(content);
