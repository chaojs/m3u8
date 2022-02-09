import * as process from "process";

import { help } from "./help";
import { main } from './main';

function mod() {
    if (process.argv.length === 3) {
        main(process.argv[2]);
        return;
    } else {
        help();
    }
}


export { mod };
