// === Module 8108: maybeOpenPremiumUpsellActionSheet ===

// Module 8108 (maybeOpenPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import keys from "keys" /* 691 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7527 */;

const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7530).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(691).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7530).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7530).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(691).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7530).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7530).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};