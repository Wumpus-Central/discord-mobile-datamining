// === Module 7693: trackUserAvatarUpdated ===

// Module 7693 (trackUserAvatarUpdated)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import AssetOriginTypes from "AssetOriginTypes" /* 7694 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export const trackUserAvatarUpdated = function trackUserAvatarUpdated(isGuildProfile) {
  let flag = isGuildProfile.isGuildProfile;
  ({ avatarHash, avatarId } = isGuildProfile);
  if (flag === undefined) {
    flag = false;
  }
  let NEW_ASSET = isGuildProfile.avatarAssetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = AssetOriginTypes.AssetOriginTypes.NEW_ASSET;
  }
  let obj = expandEventPropertiesDefault;
  obj = { animated: getAvatarURL.isAnimatedIconHash(avatarHash), is_guild_profile: flag, recent_avatar_id: null, is_edited_recent_avatar: null };
  let NumberResult;
  if (NEW_ASSET === AssetOriginTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj[2] = NumberResult;
  obj[3] = NEW_ASSET === AssetOriginTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};