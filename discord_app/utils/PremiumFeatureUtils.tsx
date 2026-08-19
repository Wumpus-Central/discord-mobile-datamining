// === Module 9366: getUserMaxFileSize ===

// Module 9366 (getUserMaxFileSize)
import isPremiumAtLeast from "isPremiumAtLeast" /* 1945 */;
import setPremiumTypeActual from "setPremiumTypeActual" /* 1923 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = fn;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return closure_3;
  } else {
    premiumTypeOverride = premiumTypeOverride.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === closure_6) {
        let fileSize = closure_4;
      }
      return fileSize;
    }
    if (null != currentUser.premiumType) {
      if (obj.isPremium(currentUser)) {
        fileSize = table[currentUser.premiumType].fileSize;
      }
      obj = isPremiumAtLeast;
    }
    fileSize = closure_3;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: c4 } = ME);
({ PremiumUserLimits: c5, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_6 } = GuildFeatures);
const result = require("obj132").fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };