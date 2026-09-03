// discord_app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
import set from "../../../../../../_runtime/00002_set.js";
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import SoundButtonOverlay from "../../../../soundboard/SoundboardTypes.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";

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
    return tmp(688).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(7608).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    return tmp(688).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(7608).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    return tmp(688).UpsellTypes.GLOBAL_STICKER;
  } else if (tmp(7608).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    return tmp(688).UpsellTypes.UPLOAD;
  } else if (tmp(7608).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    return tmp(688).UpsellTypes.SOUNDBOARD;
  } else if (tmp(7608).EntitlementFeatureNames.CLIENT_THEMES === featureName) {
    return tmp(688).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(7608).EntitlementFeatureNames.APP_ICONS === featureName) {
    return tmp(688).UpsellTypes.APP_ICONS;
  } else if (tmp(7608).EntitlementFeatureNames.SAVED_MESSAGES === featureName) {
    return tmp(688).UpsellTypes.FOR_LATER;
  } else if (tmp(7608).EntitlementFeatureNames.SCHEDULED_MESSAGES === featureName) {
    return tmp(688).UpsellTypes.SCHEDULED_MESSAGES;
  } else if (tmp(7608).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    return tmp(688).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + featureName);
  }
};
