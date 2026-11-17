// discord_app/modules/blocked_domains/BlockedDomainManager.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import js_shim_shim from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
class BlockedDomainManager extends tmp2 {}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (!obj.isDiscordBackendDevelopment()) {
    if (tmpResult.isLibdiscoreInitialized()) {
      const _window = window;
      const _HermesInternal = HermesInternal;
      const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
      const result = js_shim_shim.startFetchingBlockedDomains(combined);
      const tmpResult2 = js_shim_shim;
    }
    tmpResult = js_shim_shim;
  }
  obj = GlobalUtils;
};
const blockedDomainManager = new BlockedDomainManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
