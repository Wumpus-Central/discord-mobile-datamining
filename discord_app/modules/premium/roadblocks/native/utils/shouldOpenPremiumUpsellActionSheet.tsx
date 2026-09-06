// discord_app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import MobileStickerPickerUpsellRestyleExperiment from "../../../experiments/MobileStickerPickerUpsellRestyleExperiment.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx",
);

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
    let flag4 = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled(
      "native.shouldOpenPremiumUpsellActionSheet",
    );
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
}
