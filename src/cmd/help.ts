import * as constants from '../constants/mod';

type helpCollectionType = {
    [key: string]: string;
};

const helpCollection: helpCollectionType = {
    config: 'show the config',
    set: 'set config value',
    help: 'show this help',
    version: 'show the version',
};

function help() {
    console.log(`Usage: ${constants.BinName} [command]\n`);
    //
    for (let key in helpCollection) {
        console.log(`  ${key} ${helpCollection[key]}\n`);
    }
}

export { help };
