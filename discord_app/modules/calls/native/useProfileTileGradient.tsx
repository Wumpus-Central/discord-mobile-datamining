// === Module 8251: useProfileTileGradient ===

// Module 8251 (useProfileTileGradient)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
  isVideoBackgroundProfileFetchEnabled = userId(isVideoBackgroundProfileFetchEnabled[3]).useIsVideoBackgroundProfileFetchEnabled(userId.location);
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
};