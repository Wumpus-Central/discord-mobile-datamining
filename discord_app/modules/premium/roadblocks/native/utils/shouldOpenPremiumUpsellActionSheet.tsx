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
    const INCREASED_FILE_UPLOAD_SIZE = EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE;
    openPremiumUpsellActionSheetDefault(
      INCREASED_FILE_UPLOAD_SIZE,
      undefined,
      undefined,
      undefined,
      initialUpsellKey.appEntryKey,
    );
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    const EMOJIS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(
      EMOJIS_EVERYWHERE,
      undefined,
      undefined,
      undefined,
      initialUpsellKey.appEntryKey,
    );
    return true;
  } else if (ConstantsIOS.UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    const ANIMATED_EMOJIS = EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS;
    openPremiumUpsellActionSheetDefault(ANIMATED_EMOJIS, undefined, undefined, undefined, initialUpsellKey.appEntryKey);
    return true;
  } else if (ConstantsIOS.UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled(
      "native.shouldOpenPremiumUpsellActionSheet",
    );
    if (flag4) {
      const STICKERS_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
      openPremiumUpsellActionSheetDefault(
        STICKERS_EVERYWHERE,
        undefined,
        undefined,
        undefined,
        initialUpsellKey.appEntryKey,
      );
      flag4 = true;
    }
    return flag4;
  } else if (ConstantsIOS.UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
    openPremiumUpsellActionSheetDefault(
      SOUNDBOARD_EVERYWHERE,
      undefined,
      undefined,
      undefined,
      initialUpsellKey.appEntryKey,
    );
    return true;
  } else if (ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    const STREAM_HIGH_QUALITY = EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY;
    openPremiumUpsellActionSheetDefault(
      STREAM_HIGH_QUALITY,
      undefined,
      undefined,
      undefined,
      initialUpsellKey.appEntryKey,
    );
    return true;
  } else {
    return false;
  }
}
