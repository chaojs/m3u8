import * as crypto from 'crypto';

const downloader = require('m3u8_multi_downloader');

import * as config from '../config/mod';

function main(url: string) {
    downloader.download({
        url: url,
        processNum: 15,
        filePath: config.DefaultConfig.downloadDir,
        filmName: crypto.createHash('md5').update(url).digest('hex'),
    });
}

export { main };

// test URL: http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8
