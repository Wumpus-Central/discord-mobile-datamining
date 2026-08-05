// discord_app/modules/blocked_domains/BlockedDomainStore.tsx
import { AnalyticEvents } from "ME";

const prototype = function BlockedDomainStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  let obj = require("../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx") /* isBlockedDomain */;
  let isBlockedDomainResult = null;
  if (obj.isLibdiscoreInitialized()) {
    isBlockedDomainResult = require("../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx") /* isBlockedDomain */.isBlockedDomain(arg0);
    const tmpResult = require("../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx") /* isBlockedDomain */;
  }
  if (tmp5) {
    obj = { blocked_domain: null };
    obj[0] = isBlockedDomainResult;
    require("../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj);
    const obj3 = require("../../utils/AnalyticsUtils.tsx");
  }
  return isBlockedDomainResult;
};
const result = require("expandEventProperties").fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;