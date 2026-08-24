// discord_app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import getAvatarURL2 from "../../../utils/AvatarUtils.tsx";
import useDominantRGBFromImage from "../../calls/native/VideoBackground.tsx";

const result = set.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const obj3 = useDominantRGBFromImage;
    const memoizedImageSourceResult = useDominantRGBFromImage.memoizedImageSource(null);
    const obj4 = int2hslRaw;
    let primaryColor;
    const obj5 = useDominantRGBFromImage;
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
    let obj = getAvatarURL2;
    obj = {};
    const merged = Object.assign(user);
    obj.avatar = null;
    pendingAvatarSrc = obj.getUserAvatarURL(obj);
  }
};
export const getAvatarSource = function getAvatarSource(getAvatarURL) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = useDominantRGBFromImage.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const obj4 = useDominantRGBFromImage;
      const tmp2 = !arg3;
    } else {
      let obj = useDominantRGBFromImage;
      if (userAvatarURL == null) {
        obj = {};
        const merged = Object.assign(getAvatarURL);
        obj.avatar = null;
        userAvatarURL = tmp3(1435).getUserAvatarURL(obj);
        const tmp3Result = tmp3(1435);
      }
      memoizedImageSourceResult = obj.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};