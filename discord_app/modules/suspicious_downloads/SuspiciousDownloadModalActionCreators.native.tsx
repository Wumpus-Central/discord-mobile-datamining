const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4223);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12405, dependencyMap.paths), "suspicious-download", obj);
  }
};