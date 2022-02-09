import * as os from 'os';
import * as path from 'path';

import * as constants from '../constants/mod';

const homeDir = os.homedir();

const downloadDir = path.join(homeDir, '.config', constants.BinName, 'downloads');

export { downloadDir };
