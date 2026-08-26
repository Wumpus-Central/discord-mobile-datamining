// === Module 9148: isBlockedDomain ===

// Module 9148 (isBlockedDomain)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import isBlockedDomain from "isBlockedDomain" /* 1917 */;

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