// discord_app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
import { keys } from "../../../../../ConstantsIOS.tsx";
import { openPremiumUpsellActionSheet } from "openPremiumUpsellActionSheet.tsx";
const result = require("EntitlementFeatureNames").fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (keys.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheet(tmp(8313).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(691).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheet(tmp(8313).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheet(tmp(8313).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(691).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheet(tmp(8313).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(691).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheet(tmp(8313).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};