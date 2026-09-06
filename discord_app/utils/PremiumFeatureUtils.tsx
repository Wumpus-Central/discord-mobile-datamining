// discord_app/utils/PremiumFeatureUtils.tsx
import PremiumTypeUtils from "PremiumTypeUtils.tsx";
import OverridePremiumTypeStore from "../modules/premium/OverridePremiumTypeStore.tsx";

require = fn;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return React3;
  } else {
    const premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === React5) {
        let tmp2 = React4;
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
          fileSize = timestampProducer[currentUser.premiumType].fileSize;
        }
      }
      obj2 = PremiumTypeUtils;
    }
    tmp2 = React3;
  }
}
const Constants = fn(1074);
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
const PremiumConstants = fn(1373);
({
  PremiumTypes: hasOwnProperty,
  PremiumUserLimits: metroRequire,
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_7,
} = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
