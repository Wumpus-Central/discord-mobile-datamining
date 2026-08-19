// === Module 8478: maybeOpenPremiumUpsellActionSheet ===

// Module 8478 (maybeOpenPremiumUpsellActionSheet)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 691 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8479 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8482 */;

const result = obj132.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (keys.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (keys.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (keys.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (keys.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};