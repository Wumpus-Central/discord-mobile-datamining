// discord_app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import getAvatarURL2 from "../../../utils/AvatarUtils.tsx";
import useDominantRGBFromImage from "../../calls/native/VideoBackground.tsx";

const result = obj132.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const memoizedImageSourceResult = useDominantRGBFromImage.memoizedImageSource(null);
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
export const getAvatarSource = function getAvatarSource(getAvatarURL) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = arg2;
    if (undefined === arg2) {
      let memoizedImageSourceResult = useDominantRGBFromImage.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
    } else {
      let obj = useDominantRGBFromImage;
      if (userAvatarURL == null) {
        obj = {};
        const merged = Object.assign(getAvatarURL);
        obj.avatar = null;
        userAvatarURL = getAvatarURL2.getUserAvatarURL(obj);
        const tmp3Result = getAvatarURL2;
      }
      memoizedImageSourceResult = obj.memoizedImageSource(userAvatarURL);
    }
  }
};