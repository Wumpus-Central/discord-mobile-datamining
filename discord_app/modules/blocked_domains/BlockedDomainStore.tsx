// discord_app/modules/blocked_domains/BlockedDomainStore.tsx
import shim from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
class BlockedDomainStore {
  static isBlockedDomain(arg0) {
    let isBlockedDomainResult = null;
    const obj = shim;
    if (obj.isLibdiscoreInitialized()) {
      const tmpResult = shim;
      isBlockedDomainResult = tmpResult.isBlockedDomain(arg0);
    }
    const tmp5 = "" !== isBlockedDomainResult && null !== isBlockedDomainResult;
    if (tmp5) {
      const obj2 = { blocked_domain: isBlockedDomainResult };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj2);
    }
    return isBlockedDomainResult;
  }
}
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default BlockedDomainStore;
