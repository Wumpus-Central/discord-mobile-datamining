// === Module 5074: PremiumFeatureUtils ===

// Module 5074 (PremiumFeatureUtils)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1384 */;

require = fn;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    let tmp3 = React3;
  } else {
    if (currentUser.isStaff()) {
      if (!OverridePremiumTypeStore.hasPremiumTypeOverride(currentUser)) {
        tmp3 = React4;
      }
    }
    if (tmp != currentUser.premiumType) {
      let getNitroFileUploadLimitBytes = require;
      let obj = dependencyMap;
      PremiumTypeUtils;
    }
    if (currentUser.premiumType === TIER_2.TIER_2) {
      const nitroFileUploadLimitBytes = getNitroFileUploadLimitBytes(5075);
      getNitroFileUploadLimitBytes = nitroFileUploadLimitBytes.getNitroFileUploadLimitBytes;
      obj = { location: "getUserMaxFileSize" };
      let fileSize = getNitroFileUploadLimitBytes(obj);
    } else {
      fileSize = timestampProducer[currentUser.premiumType].fileSize;
    }
  }
  return tmp3;
}
const Constants = fn(1072);
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
const PremiumConstants = fn(1385);
({ PremiumTypes: hasOwnProperty, PremiumUserLimits: metroRequire } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };