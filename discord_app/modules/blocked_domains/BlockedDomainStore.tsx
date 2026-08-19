// === Module 8776: isBlockedDomain ===

// Module 8776 (isBlockedDomain)
import obj132 from "obj132" /* 2 */;
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
  }
  return isBlockedDomainResult;
};
const result = obj132.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;