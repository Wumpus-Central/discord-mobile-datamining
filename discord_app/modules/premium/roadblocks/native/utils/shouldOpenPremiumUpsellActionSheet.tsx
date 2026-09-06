// === Module 9320: shouldOpenPremiumUpsellActionSheet ===

// Module 9320 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7850 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 9321 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};