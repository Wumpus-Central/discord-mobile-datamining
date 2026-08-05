// discord_app/modules/user_profile/utils/trackUserAvatarUpdated.tsx
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/user_profile/utils/trackUserAvatarUpdated.tsx");

export const trackUserAvatarUpdated = function trackUserAvatarUpdated(isGuildProfile) {
  let avatarHash;
  let avatarId;
  let flag = isGuildProfile.isGuildProfile;
  ({ avatarHash, avatarId } = isGuildProfile);
  if (flag === undefined) {
    flag = false;
  }
  let NEW_ASSET = isGuildProfile.avatarAssetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = require("../../recent_avatars/RecentAvatarsTypes.tsx") /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET;
  }
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { animated: null, is_guild_profile: null, recent_avatar_id: null, is_edited_recent_avatar: null };
  obj[0] = require("../../../utils/AvatarUtils.tsx") /* getAvatarURL */.isAnimatedIconHash(avatarHash);
  obj[1] = flag;
  let NumberResult;
  if (NEW_ASSET === require("../../recent_avatars/RecentAvatarsTypes.tsx") /* AssetOriginTypes */.AssetOriginTypes.ARCHIVED_ASSET) {
    const _Number = Number;
    NumberResult = Number(avatarId);
  }
  obj[2] = NumberResult;
  obj[3] = NEW_ASSET === require("../../recent_avatars/RecentAvatarsTypes.tsx") /* AssetOriginTypes */.AssetOriginTypes.EDITED_ARCHIVED_ASSET;
  obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
};