// discord_app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    let obj = importDefault(4253);
    obj = { url };
    obj.openLazy(require(1959) /* asyncRequireImpl */(12135, dependencyMap.paths), "blocked-domain", obj);
  }
};