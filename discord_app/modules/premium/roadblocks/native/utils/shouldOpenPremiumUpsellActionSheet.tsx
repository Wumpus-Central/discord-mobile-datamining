// discord_app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
import set from "../../../../../../_runtime/00002_set.js";
import keys from "../../../../../ConstantsIOS.tsx";
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet.tsx";

const result = set.fileFinishedImporting(
  "modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx",
);

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(688).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(8185).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(688).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(688).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7607).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
}
