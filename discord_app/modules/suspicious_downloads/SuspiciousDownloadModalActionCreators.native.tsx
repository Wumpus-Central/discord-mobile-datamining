// discord_app/modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    let obj = require("../action_sheet/native/ActionSheetActionCreators.tsx");
    obj = { href };
    obj.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(12133, dependencyMap.paths), "suspicious-download", obj);
  }
};