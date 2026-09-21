// === Module 8516: profile_customization/ProfileCustomizationUtils ===

// Module 8516 (profile_customization/ProfileCustomizationUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import VideoBackground from "VideoBackground" /* 8517 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const memoizedImageSourceResult = VideoBackground.memoizedImageSource(null);
    let primaryColor;
    if (displayProfile != null) {
      primaryColor = displayProfile.primaryColor;
    }
    if (primaryColor == null) {
      primaryColor = rgb2intResult;
    }
    return primaryColor;
  } else if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(tmp, 80);
  } else if (pendingAvatarSrc == null) {
    const obj2 = {};
    const merged = Object.assign(user);
    obj2.avatar = null;
    pendingAvatarSrc = AvatarUtils.getUserAvatarURL(obj2);
  }
};
export const getAvatarSource = function getAvatarSource(getAvatarURL, guild_id, arg2, acked) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(guild_id, 80, !acked));
      const tmp2 = !acked;
    } else {
      if (userAvatarURL == null) {
        const obj2 = {};
        const merged = Object.assign(getAvatarURL);
        obj2.avatar = null;
        userAvatarURL = AvatarUtils.getUserAvatarURL(obj2);
        const tmp3Result = AvatarUtils;
      }
      memoizedImageSourceResult = VideoBackground.memoizedImageSource(userAvatarURL);
    }
  }
};