// discord_app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import keys from "../../../../../ConstantsIOS.tsx";
import SoundButtonOverlay from "../../../../soundboard/SoundboardTypes.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";

const result = obj132.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === SoundButtonOverlay.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return keys.UpsellTypes.ANIMATED_EMOJI;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return keys.UpsellTypes.GLOBAL_EMOJI;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return keys.UpsellTypes.UPLOAD;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return keys.UpsellTypes.SOUNDBOARD;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return keys.UpsellTypes.CLIENT_THEMES;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
    return keys.UpsellTypes.APP_ICONS;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return keys.UpsellTypes.FOR_LATER;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return keys.UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + featureName);
  }
};