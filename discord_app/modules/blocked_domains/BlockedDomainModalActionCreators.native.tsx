const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4223);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12407, dependencyMap.paths), "blocked-domain", obj);
  }
};