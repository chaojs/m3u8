const downloader = require('m3u8_multi_downloader');

function main(url:string) {
    downloader.download({
        url: url,
        processNum: 15,
        filePath: 'video',
        filmName: '测试视频',
    });
}

export {
    main,
}