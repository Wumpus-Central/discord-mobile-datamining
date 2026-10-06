// === Module 7934: useProfileTileGradient ===

// Module 7934 (useProfileTileGradient)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7869 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp, tmp3, userId;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let isVideoBackgroundProfileFetchEnabled;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp2 = isVideoBackgroundProfileFetchEnabled;
  let obj = userId(isVideoBackgroundProfileFetchEnabled[3]);
  const cResult = obj.c(7);
  userId = userId.userId;
  const guildId = userId.guildId;
  const _location = userId.location;
  const tmp4 = guildId(isVideoBackgroundProfileFetchEnabled[4])(userId, guildId);
  let themeColors;
  const first = cResult[0];
  if (tmp4 != null) {
    themeColors = tmp4.themeColors;
  }
  if (first !== themeColors) {
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
    tmp7 = themeColors1;
  } else {
    tmp7 = cResult[1];
  }
  [tmp10, tmp11] = tmp7;
  _slicedToArray(tmp7, 2);
  const tmpResult = userId(tmp2[5]);
  isVideoBackgroundProfileFetchEnabled = tmpResult.useIsVideoBackgroundProfileFetchEnabled(_location);
  if (cResult[2] === guildId) {
    if (cResult[3] === isVideoBackgroundProfileFetchEnabled) {
      let tmp13;
      let tmp14;
      if (cResult[4] === userId) {
        tmp13 = cResult[5];
        tmp14 = cResult[6];
      }
      const effect = react.useEffect(tmp13, tmp14);
      const useVideoTileGradientColors = userId(tmp2[7]).useVideoTileGradientColors;
      userId(tmp2[7]);
      return useVideoTileGradientColors(tmp10, tmp11);
    }
  }
  class I {
    constructor() {
      tmp2 = null != userId;
      tmp = userId;
      if (tmp2) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = { guildId: null, dispatchWait: true };
        tmp5 = guildId;
        obj.guildId = guildId;
        tmp6 = closure_1(closure_2[6])(tmp, undefined, obj);
      }
      return;
    }
  }
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  cResult[2] = guildId;
  cResult[3] = isVideoBackgroundProfileFetchEnabled;
  cResult[4] = userId;
  cResult[5] = I;
  cResult[6] = items;
  tmp14 = items;
  tmp13 = I;
}) : ((userId) => {
  let tmp5;
  let tmp6;
  userId = userId.userId;
  const guildId = userId.guildId;
  let isVideoBackgroundProfileFetchEnabled;
  const _location = userId.location;
  let tmp2 = guildId(isVideoBackgroundProfileFetchEnabled[4])(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = themeColors;
  _slicedToArray(themeColors, 2);
  let obj = userId(tmp[5]);
  isVideoBackgroundProfileFetchEnabled = obj.useIsVideoBackgroundProfileFetchEnabled(_location);
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  const effect = react.useEffect(() => {
    const tmp2 = null != userId && isVideoBackgroundProfileFetchEnabled;
    if (tmp2) {
      const obj = { guildId, dispatchWait: true };
      maybeFetchUserProfileDefault(userId, undefined, obj);
    }
  }, items);
  const useVideoTileGradientColors = userId(isVideoBackgroundProfileFetchEnabled[7]).useVideoTileGradientColors;
  userId(isVideoBackgroundProfileFetchEnabled[7]);
  return useVideoTileGradientColors(tmp5, tmp6);
});
const result = size.fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default tmp2;