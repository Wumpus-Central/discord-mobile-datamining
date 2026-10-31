// === Module 8820: profile_customization/ProfileCustomizationUtils ===

// Module 8820 (profile_customization/ProfileCustomizationUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import VideoBackground from "VideoBackground" /* 8821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export function useUserProfileBannerBackgroundColor(arg0) {
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
}
export function getAvatarSource(getAvatarURL, guildId, avatarSrcOverride, stateFromStores) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = avatarSrcOverride;
    if (undefined === avatarSrcOverride) {
      let memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(guildId, 80, !stateFromStores));
      const tmp2 = !stateFromStores;
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
}