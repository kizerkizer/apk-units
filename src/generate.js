const fs = require('fs'),
    crypto = require('crypto'),
    path = require('path');

const units = require('./units.js');

let out = '',
    metadata = {
        sourceFileName: ({
            name,
            ext
        } = path.parse(__filename), `${name}${ext}`),
        sourceFileHash: crypto.createHash('md5').update(fs.readFileSync(__filename).toString()).digest('base64'),
        generated: Date.now()
    };

const compatibleName = (unit) => {
    switch (unit) {
        case '%':
            return 'percent';
        case 'in':
            return 'inch';
        default:
            return unit;
    }
};

out += JSON.stringify(metadata, null, 2).split('\n').map((line) => `////  ${line}`).join('\n') + '\n\n';
out += `// Begin generated code. Do not edit the following code by hand.\n\n`;
out += `interface UnitAppender { (value: string | number): string; };\n`
out += 'const _appendUnit: (value: string | number, unit: string) => string =\n    (value: string | number, unit: string) => value + unit;\n'
out += '/'.repeat(80) + '\n';
out +=
    units
        .map((unit) => `export const ${compatibleName(unit)}${' '.repeat(12 - unit.length)}: UnitAppender = (string: string | number) =>\n    _appendUnit(string, '${unit}');\n`)
        .join('');
    out += `// End generated code.\n`

fs.writeFileSync(path.join(__dirname, 'index.ts'), out);