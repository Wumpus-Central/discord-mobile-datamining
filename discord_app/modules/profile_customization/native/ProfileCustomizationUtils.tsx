// === Module 7930: profile_customization/ProfileCustomizationUtils ===

// Module 7930 (profile_customization/ProfileCustomizationUtils)
import react from "react" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import VideoBackground from "VideoBackground" /* 7931 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let displayProfile;
  let guildId;
  let pendingAvatarSrc;
  let tmp13;
  let tmp16;
  let user;
  const obj = react;
  const cResult = obj.c(10);
  ({ user, guildId, pendingAvatarSrc, displayProfile } = arg0);
  let tmp4 = null;
  if (null != user) {
    if (null == pendingAvatarSrc) {
      if (cResult[0] === guildId) {
        let tmp11;
        if (cResult[1] === user) {
          tmp11 = cResult[2];
        }
        tmp4 = tmp11;
      }
      const avatarURL = user.getAvatarURL(guildId, 80);
      cResult[0] = guildId;
      cResult[1] = user;
      cResult[2] = avatarURL;
      tmp11 = avatarURL;
    } else {
      if (cResult[3] === pendingAvatarSrc) {
        let tmp5;
        if (cResult[4] === user) {
          tmp5 = cResult[5];
        }
        tmp4 = tmp5;
      }
      let userAvatarURL = pendingAvatarSrc;
      if (pendingAvatarSrc == null) {
        const obj2 = { avatar: null };
        const getUserAvatarURL = AvatarUtils.getUserAvatarURL;
        AvatarUtils;
        const merged = Object.assign(user);
        userAvatarURL = getUserAvatarURL(obj2);
      }
      cResult[3] = pendingAvatarSrc;
      cResult[4] = user;
      cResult[5] = userAvatarURL;
      tmp5 = userAvatarURL;
    }
  }
  if (cResult[6] !== tmp4) {
    const tmpResult4 = VideoBackground;
    const memoizedImageSourceResult = tmpResult4.memoizedImageSource(tmp4);
    cResult[6] = tmp4;
    cResult[7] = memoizedImageSourceResult;
    tmp13 = memoizedImageSourceResult;
  } else {
    tmp13 = cResult[7];
  }
  const tmpResult5 = VideoBackground;
  const dominantColorFromImage = tmpResult5.useDominantColorFromImage(tmp4, tmp13);
  if (cResult[8] !== dominantColorFromImage) {
    const tmpResult6 = utils_ColorUtils;
    const rgb2intResult = tmpResult6.rgb2int(dominantColorFromImage);
    cResult[8] = dominantColorFromImage;
    cResult[9] = rgb2intResult;
    tmp16 = rgb2intResult;
  } else {
    tmp16 = cResult[9];
  }
  let primaryColor;
  if (displayProfile != null) {
    primaryColor = displayProfile.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = tmp16;
  }
  return primaryColor;
}) : ((arg0) => {
  let displayProfile;
  let pendingAvatarSrc;
  let user;
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  let tmp2 = null;
  if (null != user) {
    if (null == pendingAvatarSrc) {
      pendingAvatarSrc = user.getAvatarURL(tmp, 80);
    } else if (pendingAvatarSrc == null) {
      const obj = { avatar: null };
      const getUserAvatarURL = AvatarUtils.getUserAvatarURL;
      AvatarUtils;
      const merged = Object.assign(user);
      pendingAvatarSrc = getUserAvatarURL(obj);
    }
    tmp2 = pendingAvatarSrc;
  }
  const obj2 = VideoBackground;
  const memoizedImageSourceResult = obj2.memoizedImageSource(tmp2);
  const rgb2int = utils_ColorUtils.rgb2int;
  utils_ColorUtils;
  let primaryColor;
  const obj3 = VideoBackground;
  const rgb2intResult = rgb2int(obj3.useDominantColorFromImage(tmp2, memoizedImageSourceResult));
  if (displayProfile != null) {
    primaryColor = displayProfile.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = rgb2intResult;
  }
  return primaryColor;
});
const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = tmp2;
export const getAvatarSource = function getAvatarSource(getAvatarURL, guildId, arg2, acked) {
  let tmp = null;
  if (null != getAvatarURL) {
    let memoizedImageSourceResult;
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      const obj2 = VideoBackground;
      memoizedImageSourceResult = obj2.memoizedImageSource(getAvatarURL.getAvatarURL(guildId, 80, !acked));
    } else {
      const memoizedImageSource = VideoBackground.memoizedImageSource;
      VideoBackground;
      if (userAvatarURL == null) {
        const obj = { avatar: null };
        const getUserAvatarURL = AvatarUtils.getUserAvatarURL;
        AvatarUtils;
        const merged = Object.assign(getAvatarURL);
        userAvatarURL = getUserAvatarURL(obj);
      }
      memoizedImageSourceResult = memoizedImageSource(userAvatarURL);
    }
    tmp = memoizedImageSourceResult;
  }
  return tmp;
};