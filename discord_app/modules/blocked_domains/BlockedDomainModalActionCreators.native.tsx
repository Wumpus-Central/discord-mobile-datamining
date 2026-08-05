// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = require("../action_sheet/native/ActionSheetActionCreators.tsx");
    obj = { url };
    obj.openLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(12135, dependencyMap.paths), "blocked-domain", obj);
  }
};