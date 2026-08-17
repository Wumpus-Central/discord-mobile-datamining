// discord_app/modules/blocked_domains/BlockedDomainStore.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import isBlockedDomain from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const prototype = function BlockedDomainStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  let obj = isBlockedDomain;
  let isBlockedDomainResult = null;
  if (obj.isLibdiscoreInitialized()) {
    isBlockedDomainResult = isBlockedDomain.isBlockedDomain(arg0);
    const tmpResult = isBlockedDomain;
  }
  if (tmp5) {
    obj = { blocked_domain: null };
    obj[0] = isBlockedDomainResult;
    expandEventPropertiesDefault.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj);
    const obj3 = expandEventPropertiesDefault;
  }
  return isBlockedDomainResult;
};
const result = set.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;