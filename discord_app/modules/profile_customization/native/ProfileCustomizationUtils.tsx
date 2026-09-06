// discord_app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import VideoBackground from "../../calls/native/VideoBackground.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    const obj = {};
    const merged = Object.assign(user);
    obj.avatar = null;
    pendingAvatarSrc = obj.getUserAvatarURL(obj);
  }
};
export const getAvatarSource = function getAvatarSource(getAvatarURL, arg1, arg2, arg3) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = VideoBackground.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const tmp2 = !arg3;
    } else {
      let obj = VideoBackground;
      if (userAvatarURL == null) {
        obj = {};
        const merged = Object.assign(getAvatarURL);
        obj.avatar = null;
        userAvatarURL = tmp3(1396).getUserAvatarURL(obj);
        const tmp3Result = tmp3(1396);
      }
      memoizedImageSourceResult = obj.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};
