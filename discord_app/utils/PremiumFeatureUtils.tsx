// === Module 8189: getUserMaxFileSize ===

// Module 8189 (getUserMaxFileSize)
import setPremiumTypeActual from "setPremiumTypeActual";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
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
      obj = require(1897) /* isPremiumAtLeast */;
    }
    fileSize = closure_3;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: c4 } = ME);
({ PremiumUserLimits: c5, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_6 } = GuildFeatures);
const result = require("GuildFeatures").fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };