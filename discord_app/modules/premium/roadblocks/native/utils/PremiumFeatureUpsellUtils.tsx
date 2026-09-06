// === Module 9965: PremiumFeatureUpsellUtils ===

// Module 9965 (PremiumFeatureUpsellUtils)
import _modDef38 from "module_38" /* 38 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
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
    return ConstantsIOS.UpsellTypes.ANIMATED_EMOJI;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.GLOBAL_EMOJI;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.GLOBAL_STICKER;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.UPLOAD;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.SOUNDBOARD;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.CLIENT_THEMES;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.APP_ICONS;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.FOR_LATER;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES;
  } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === EMOJIS_EVERYWHERE) {
    return ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + EMOJIS_EVERYWHERE);
  }
};