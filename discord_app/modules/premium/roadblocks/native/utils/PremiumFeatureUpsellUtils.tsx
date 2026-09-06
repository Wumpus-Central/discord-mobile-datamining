// === Module 9965: PremiumFeatureUpsellUtils ===

// Module 9965 (PremiumFeatureUpsellUtils)
import _modDef38 from "module_38" /* 38 */;
import SoundboardTypes from "SoundboardTypes" /* 5020 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === SoundboardTypes.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(EMOJIS_EVERYWHERE) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(7853).EntitlementFeatureNames.EMOJIS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(7853).EntitlementFeatureNames.STICKERS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.GLOBAL_STICKER;
  } else if (tmp(7853).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.UPLOAD;
  } else if (tmp(7853).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.SOUNDBOARD;
  } else if (tmp(7853).EntitlementFeatureNames.CLIENT_THEMES === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(7853).EntitlementFeatureNames.APP_ICONS === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.APP_ICONS;
  } else if (tmp(7853).EntitlementFeatureNames.SAVED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.FOR_LATER;
  } else if (tmp(7853).EntitlementFeatureNames.SCHEDULED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.SCHEDULED_MESSAGES;
  } else if (tmp(7853).EntitlementFeatureNames.STREAM_HIGH_QUALITY === EMOJIS_EVERYWHERE) {
    return tmp(1093).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + EMOJIS_EVERYWHERE);
  }
};