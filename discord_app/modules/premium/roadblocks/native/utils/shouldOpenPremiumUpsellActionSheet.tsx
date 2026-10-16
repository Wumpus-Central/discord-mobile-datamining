// === Module 9513: shouldOpenPremiumUpsellActionSheet ===

// Module 9513 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1107 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9514 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9517 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 9771 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    const INCREASED_FILE_UPLOAD_SIZE = EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    ({ analyticsLocations: analyticsLocations6, appEntryKey: appEntryKey6 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(INCREASED_FILE_UPLOAD_SIZE, analyticsLocations6, undefined, appEntryKey6);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    ({ analyticsLocations: analyticsLocations5, appEntryKey: appEntryKey5 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(EMOJIS_EVERYWHERE, analyticsLocations5, undefined, appEntryKey5);
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS;
    ({ analyticsLocations: analyticsLocations4, appEntryKey: appEntryKey4 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, analyticsLocations4, undefined, appEntryKey4);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      const STICKERS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
      ({ analyticsLocations: analyticsLocations3, appEntryKey: appEntryKey3 } = initialUpsellKey);
      openPremiumUpsellActionSheetDefault(STICKERS_EVERYWHERE, analyticsLocations3, undefined, appEntryKey3);
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    ({ analyticsLocations: analyticsLocations2, appEntryKey: appEntryKey2 } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(SOUNDBOARD_EVERYWHERE, analyticsLocations2, undefined, appEntryKey2);
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    ({ analyticsLocations, appEntryKey } = initialUpsellKey);
    openPremiumUpsellActionSheetDefault(STREAM_HIGH_QUALITY, analyticsLocations, undefined, appEntryKey);
    return true;
  } else {
    return false;
  }
};