// discord_app/modules/blocked_domains/BlockedDomainStore.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import js_shim_shim from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
