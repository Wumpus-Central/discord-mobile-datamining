// === Module 9055: isSoundboardSectionNitroLocked ===

// Module 9055 (isSoundboardSectionNitroLocked)
import set from "set" /* 2 */;
import _modDef38 from "module_38" /* 38 */;
import SoundButtonOverlay from "SoundButtonOverlay" /* 4925 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7530 */;

const result = set.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === SoundButtonOverlay.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return tmp(691).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(7530).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(7530).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(691).UpsellTypes.UPLOAD;
  } else if (tmp(7530).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.SOUNDBOARD;
  } else if (tmp(7530).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(691).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(7530).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(691).UpsellTypes.APP_ICONS;
  } else if (tmp(7530).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.FOR_LATER;
  } else if (tmp(7530).EntitlementFeatureNames.SCHEDULED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.SCHEDULED_MESSAGES;
  } else if (tmp(7530).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(691).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + featureName);
  }
};