// === Module 16747: _initialize ===

// Module 16747 (_initialize)
import isBlockedDomain from "isBlockedDomain" /* 1917 */;
import initializeDefault from "initialize" /* 5433 */;

require = arg1;
initializeDefault;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = isBlockedDomain.startFetchingBlockedDomains(combined);
    const tmpResult = isBlockedDomain;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;