// discord_app/modules/calls/native/useProfileTileGradient.tsx
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default function useProfileTileGradient(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let isVideoBackgroundProfileFetchEnabled;
  let tmp2 = guildId(isVideoBackgroundProfileFetchEnabled[2])(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = _slicedToArray(themeColors, 2);
  const tmp3Result = _slicedToArray(themeColors, 2);
  isVideoBackgroundProfileFetchEnabled = userId(
    isVideoBackgroundProfileFetchEnabled[3],
  ).useIsVideoBackgroundProfileFetchEnabled(userId.location);
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  const effect = noop.useEffect(() => {
    let tmp2 = null != userId;
    if (tmp2) {
      tmp2 = isVideoBackgroundProfileFetchEnabled;
    }
    if (tmp2) {
      const obj = { guildId, dispatchWait: true };
      maybeFetchUserProfileDefault(userId, undefined, obj);
    }
  }, items);
  let obj = userId(isVideoBackgroundProfileFetchEnabled[3]);
  return userId(isVideoBackgroundProfileFetchEnabled[5]).useVideoTileGradientColors(tmp5, tmp6);
}
