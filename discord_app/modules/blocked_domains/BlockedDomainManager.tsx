import { isBlockedDomain } from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
// discord_app/modules/blocked_domains/BlockedDomainManager.tsx
import "initialize";

const require = arg1;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = isBlockedDomain /* isBlockedDomain */.startFetchingBlockedDomains(combined);
    const tmpResult = isBlockedDomain /* isBlockedDomain */;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;