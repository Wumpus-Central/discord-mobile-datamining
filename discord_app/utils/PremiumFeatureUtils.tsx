// === Module 9359: getUserMaxFileSize ===

// Module 9359 (getUserMaxFileSize)
import isPremiumAtLeast from "isPremiumAtLeast" /* 1885 */;
import closure_2 from "setActualFromUser" /* 1372 */;
import ME from "ME" /* 1074 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

require = arg1;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return closure_3;
  } else {
    premiumTypeOverride = premiumTypeOverride.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === closure_7) {
        let tmp2 = closure_4;
      }
      return tmp2;
    }
    if (null != currentUser.premiumType) {
      let getNitroFileUploadLimitBytes = require;
      let obj = dependencyMap;
      if (obj2.isPremium(currentUser)) {
        if (currentUser.premiumType === TIER_2.TIER_2) {
          const nitroFileUploadLimitBytes = getNitroFileUploadLimitBytes(5130);
          getNitroFileUploadLimitBytes = nitroFileUploadLimitBytes.getNitroFileUploadLimitBytes;
          obj = { location: "getUserMaxFileSize" };
          let fileSize = getNitroFileUploadLimitBytes(obj);
        } else {
          fileSize = table[currentUser.premiumType].fileSize;
        }
      }
      obj2 = isPremiumAtLeast;
    }
    tmp2 = closure_3;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: c4 } = ME);
({ PremiumTypes: c5, PremiumUserLimits: closure_6, UNSELECTED_PREMIUM_TYPE_OVERRIDE: error } = GuildFeatures);
const result = require("set").fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };