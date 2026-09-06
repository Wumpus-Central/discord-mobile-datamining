// discord_app/modules/user_profile/utils/trackUserAvatarUpdated.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import ProfilePendingImageTypes from "../../profile_customization/ProfilePendingImageTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const obj = {
    animated: AvatarUtils.isAnimatedIconHash(avatarHash),
    is_guild_profile: flag,
    recent_avatar_id: null,
    is_edited_recent_avatar: null,
  };
  let NumberResult;
  if (NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj.recent_avatar_id = NumberResult;
  obj.is_edited_recent_avatar = NEW_ASSET === ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};
