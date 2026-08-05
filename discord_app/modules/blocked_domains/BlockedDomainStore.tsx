// discord_app/modules/blocked_domains/BlockedDomainStore.tsx
import { AnalyticEvents } from "ME";
import { isBlockedDomain } from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";

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
    expandEventProperties.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj);
    const obj3 = expandEventProperties;
  }
  return isBlockedDomainResult;
};
const result = require("expandEventProperties").fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;