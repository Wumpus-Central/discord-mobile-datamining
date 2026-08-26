// === Module 8592: maybeOpenPremiumUpsellActionSheet ===

// Module 8592 (maybeOpenPremiumUpsellActionSheet)
import set from "set" /* 2 */;
import keys from "keys" /* 691 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8593 */;

const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(8597).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(691).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(8597).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(8597).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(691).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(8597).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(8597).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};