// === Module 8177: isSoundboardSectionNitroLocked ===

// Module 8177 (isSoundboardSectionNitroLocked)
const result = require("keys").fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(4708) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(8171) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return tmp(691).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(8171).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(8171).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(691).UpsellTypes.UPLOAD;
  } else if (tmp(8171).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.SOUNDBOARD;
  } else if (tmp(8171).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(691).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(8171).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(691).UpsellTypes.APP_ICONS;
  } else if (tmp(8171).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.FOR_LATER;
  } else if (tmp(8171).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(691).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(38)(false, "Missing featureName: " + featureName);
  }
};