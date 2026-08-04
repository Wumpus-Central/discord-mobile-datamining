const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4253);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12134, dependencyMap.paths), "suspicious-download", obj);
  }
};