// discord_app/utils/PremiumFeatureUtils.tsx
import PremiumTypeUtils from "PremiumTypeUtils.tsx";
import NitroFileUploadExperiments from "../modules/premium/experiments/NitroFileUploadExperiments.tsx";
import OverridePremiumTypeStore from "../modules/premium/OverridePremiumTypeStore.tsx";
import Constants from "../Constants.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function getUserMaxFileSize(currentUser) {
  if (null == currentUser) {
    return _false;
  } else {
    let tmp4;
    const premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
    if (currentUser.isStaff()) {
      if (premiumTypeOverride === metroImportDefault) {
        tmp4 = React3;
      }
      return tmp4;
    }
    if (null != currentUser.premiumType) {
      const obj = PremiumTypeUtils;
      if (obj.isPremium(currentUser)) {
        let fileSize;
        if (currentUser.premiumType === hasOwnProperty.TIER_2) {
          const tmp2Result = NitroFileUploadExperiments;
          fileSize = tmp2Result.getNitroFileUploadLimitBytes({ location: "getUserMaxFileSize" });
        } else {
          fileSize = metroRequire[currentUser.premiumType].fileSize;
        }
        tmp4 = fileSize;
      }
    }
    tmp4 = _false;
  }
}
({ MAX_ATTACHMENT_SIZE: c3, MAX_STAFF_ATTACHMENT_SIZE: closure_4 } = Constants);
({
  PremiumTypes: hasOwnProperty,
  PremiumUserLimits: metroRequire,
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: metroImportDefault,
} = PremiumConstants);
const result = size.fileFinishedImporting("utils/PremiumFeatureUtils.tsx");

export default { getUserMaxFileSize };
export { getUserMaxFileSize };
