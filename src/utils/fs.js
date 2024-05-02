import fs from 'fs';

export const writeData = (data, path) => {
    let dataString = JSON.stringify(data);
    fs.writeFileSync(path, `export let User = ${dataString}`);
}