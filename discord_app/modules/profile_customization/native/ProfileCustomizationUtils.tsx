// === Module 9512: profile_customization/ProfileCustomizationUtils ===

// Module 9512 (profile_customization/ProfileCustomizationUtils)
import utils_ColorUtils from "utils/ColorUtils" /* 1089 */;
import AvatarUtils from "AvatarUtils" /* 1413 */;
import VideoBackground from "VideoBackground" /* 9513 */;
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
  } else if (undefined === avatarSrcOverride) {
    let memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(guildId, 80, tmp4));
  } else if (null != avatarSrcOverride) {
    memoizedImageSourceResult = VideoBackground.memoizedImageSource(avatarSrcOverride);
  } else if (null != guildId) {
    memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(tmp4, 80, !stateFromStores));
  } else {
    const obj = VideoBackground;
    const obj3 = {};
    const merged = Object.assign(getAvatarURL);
    obj3.avatar = null;
    memoizedImageSourceResult = obj.memoizedImageSource(AvatarUtils.getUserAvatarURL(obj3));
  }
}