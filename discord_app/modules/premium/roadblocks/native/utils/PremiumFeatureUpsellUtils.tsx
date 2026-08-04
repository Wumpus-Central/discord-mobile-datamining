// discord_app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
const result = require("keys").fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(4646) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(6204) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return tmp(691).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(6204).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(6204).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(691).UpsellTypes.UPLOAD;
  } else if (tmp(6204).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.SOUNDBOARD;
  } else if (tmp(6204).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(691).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(6204).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(691).UpsellTypes.APP_ICONS;
  } else if (tmp(6204).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.FOR_LATER;
  } else if (tmp(6204).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(691).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(38)(false, "Missing featureName: " + featureName);
  }
};