import * as process from 'process';

import { help } from './help';
import { main } from './main';
import { version } from './version';

function mod() {
    if (process.argv.length === 3) {
        if (process.argv[2] === 'version') {
            version();
        } else if (process.argv[2].endsWith('.m3u8')) {
            main(process.argv[2]);
        } else if (process.argv[2].includes('.m3u8')) {
            main(process.argv[2]);
        } else {
            help();
        }
    } else {
        help();
    }
}

export { mod };
