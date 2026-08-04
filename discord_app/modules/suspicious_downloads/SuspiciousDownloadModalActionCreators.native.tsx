// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = importDefault(4161);
    obj = { href };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12307, dependencyMap.paths), "suspicious-download", obj);
  }
};