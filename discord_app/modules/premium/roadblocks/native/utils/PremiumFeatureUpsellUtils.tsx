// discord_app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
const result = require("keys").fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === require(4737) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(featureName) {
  if (require(8184) /* EntitlementFeatureNames */.EntitlementFeatureNames.ANIMATED_EMOJIS === featureName) {
    return tmp(691).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(8184).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(8184).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(691).UpsellTypes.UPLOAD;
  } else if (tmp(8184).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(691).UpsellTypes.SOUNDBOARD;
  } else if (tmp(8184).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(691).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(8184).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(691).UpsellTypes.APP_ICONS;
  } else if (tmp(8184).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(691).UpsellTypes.FOR_LATER;
  } else if (tmp(8184).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(691).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    importDefault(38)(false, "Missing featureName: " + featureName);
  }
};