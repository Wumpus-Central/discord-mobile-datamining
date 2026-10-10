// === Module 8377: useProfileTileGradient ===

// Module 8377 (useProfileTileGradient)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileTileGradient(userId) {
  const cResult = userId(isVideoBackgroundProfileFetchEnabled[3]).c(7);
  userId = userId.userId;
  const guildId = userId.guildId;
  const tmp4 = guildId(isVideoBackgroundProfileFetchEnabled[4])(userId, guildId);
  let themeColors;
  if (tmp4 != null) {
    themeColors = tmp4.themeColors;
  }
  if (cResult[0] !== themeColors) {
    let themeColors1;
    if (tmp4 != null) {
      themeColors1 = tmp4.themeColors;
    }
    if (themeColors1 == null) {
      themeColors1 = [];
    }
    let themeColors2;
    if (tmp4 != null) {
      themeColors2 = tmp4.themeColors;
    }
    cResult[0] = themeColors2;
    cResult[1] = themeColors1;
    let tmp6 = themeColors1;
  } else {
    tmp6 = cResult[1];
  }
  let obj = userId(isVideoBackgroundProfileFetchEnabled[3]);
  [tmp9, tmp10] = tmp6;
  const tmp8 = _slicedToArray(tmp6, 2);
  isVideoBackgroundProfileFetchEnabled = userId(isVideoBackgroundProfileFetchEnabled[5]).useIsVideoBackgroundProfileFetchEnabled(userId.location);
  if (cResult[2] === guildId) {
    if (cResult[3] === isVideoBackgroundProfileFetchEnabled) {
      if (cResult[4] === userId) {
        let tmp12 = cResult[5];
        let tmp13 = cResult[6];
      }
      const effect = noop.useEffect(tmp12, tmp13);
      return tmp(tmp2[7]).useVideoTileGradientColors(tmp9, tmp10);
    }
  }
  const fn = function v() {
    let tmp2 = null != userId;
    if (tmp2) {
      tmp2 = isVideoBackgroundProfileFetchEnabled;
    }
    if (tmp2) {
      const obj = { guildId };
      maybeFetchUserProfileDefault(userId, undefined, obj);
    }
  };
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  cResult[2] = guildId;
  cResult[3] = isVideoBackgroundProfileFetchEnabled;
  cResult[4] = userId;
  cResult[5] = fn;
  cResult[6] = items;
  tmp13 = items;
  tmp12 = fn;
  const tmpResult = userId(isVideoBackgroundProfileFetchEnabled[5]);
}) : (function useProfileTileGradient(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let isVideoBackgroundProfileFetchEnabled;
  let tmp2 = guildId(isVideoBackgroundProfileFetchEnabled[4])(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = themeColors;
  const tmp3Result = _slicedToArray(themeColors, 2);
  isVideoBackgroundProfileFetchEnabled = userId(isVideoBackgroundProfileFetchEnabled[5]).useIsVideoBackgroundProfileFetchEnabled(userId.location);
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  const effect = noop.useEffect(() => {
    let tmp2 = null != userId;
    if (tmp2) {
      tmp2 = isVideoBackgroundProfileFetchEnabled;
    }
    if (tmp2) {
      const obj = { guildId };
      maybeFetchUserProfileDefault(userId, undefined, obj);
    }
  }, items);
  let obj = userId(isVideoBackgroundProfileFetchEnabled[5]);
  return userId(isVideoBackgroundProfileFetchEnabled[7]).useVideoTileGradientColors(tmp5, tmp6);
});