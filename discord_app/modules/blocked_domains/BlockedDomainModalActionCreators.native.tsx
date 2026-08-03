const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4161);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12309, dependencyMap.paths), "blocked-domain", obj);
  }
};