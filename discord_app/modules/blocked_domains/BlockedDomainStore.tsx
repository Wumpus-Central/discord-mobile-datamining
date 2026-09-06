// === Module 8371: BlockedDomainStore ===

// Module 8371 (BlockedDomainStore)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import js_shim_shim from "js_shim/shim" /* 1351 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const prototype = function BlockedDomainStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  let obj = js_shim_shim;
  let isBlockedDomainResult = null;
  if (obj.isLibdiscoreInitialized()) {
    isBlockedDomainResult = js_shim_shim.isBlockedDomain(arg0);
    const tmpResult = js_shim_shim;
  }
  if (tmp5) {
    obj = { blocked_domain: isBlockedDomainResult };
    AnalyticsUtilsDefault.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj);
  }
  return isBlockedDomainResult;
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;