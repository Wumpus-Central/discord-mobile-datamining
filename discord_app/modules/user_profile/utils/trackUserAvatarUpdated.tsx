// === Module 6988: trackUserAvatarUpdated ===

// Module 6988 (trackUserAvatarUpdated)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6989 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export const trackUserAvatarUpdated = function trackUserAvatarUpdated(isGuildProfile) {
  let flag = isGuildProfile.isGuildProfile;
  ({ avatarHash, avatarId } = isGuildProfile);
  if (flag === undefined) {
    flag = false;
  }
  let NEW_ASSET = isGuildProfile.avatarAssetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  const obj = { animated: AvatarUtils.isAnimatedIconHash(avatarHash), is_guild_profile: flag, recent_avatar_id: null, is_edited_recent_avatar: null };
  let NumberResult;
  if (NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj.recent_avatar_id = NumberResult;
  obj.is_edited_recent_avatar = NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};