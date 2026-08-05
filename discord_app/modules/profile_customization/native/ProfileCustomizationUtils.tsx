// discord_app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
import { int2hslRaw } from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { useDominantRGBFromImage } from "../../calls/native/VideoBackground.tsx";
let result = require("int2hslRaw").fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useEditBannerSource = function useEditBannerSource(arg0) {
  let displayProfile;
  let pendingBanner;
  ({ displayProfile, pendingBanner } = arg0);
  if (null != pendingBanner) {
    return useDominantRGBFromImage /* useDominantRGBFromImage */.memoizedImageSource(pendingBanner);
  } else {
    if (null === pendingBanner) {
      let result;
      if (displayProfile != null) {
        result = displayProfile.isUsingGuildMemberBanner();
      }
      if (!result) {
        let guildId;
        if (displayProfile != null) {
          guildId = displayProfile.guildId;
        }
        let source = null;
        if (null != guildId) {
          let bannerURL;
          if (displayProfile != null) {
            bannerURL = displayProfile.getBannerURL({ size: 600, canAnimate: true });
          }
          source = getAvatarURL /* getAvatarURL */.makeSource(bannerURL);
          const obj = getAvatarURL /* getAvatarURL */;
        }
        return source;
      }
    }
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, true, 600);
    }
    let source1 = null;
    if (null != previewBanner) {
      source1 = getAvatarURL /* getAvatarURL */.makeSource(previewBanner);
      const obj2 = getAvatarURL /* getAvatarURL */;
    }
    return source1;
  }
};
export const useUserProfileBannerBackgroundColor = function useUserProfileBannerBackgroundColor(arg0) {
  let displayProfile;
  let pendingAvatarSrc;
  let user;
  ({ user, pendingAvatarSrc, displayProfile } = arg0);
  if (null == user) {
    const obj3 = useDominantRGBFromImage /* useDominantRGBFromImage */;
    const memoizedImageSourceResult = useDominantRGBFromImage /* useDominantRGBFromImage */.memoizedImageSource(null);
    const obj4 = int2hslRaw /* int2hslRaw */;
    let primaryColor;
    const obj5 = useDominantRGBFromImage /* useDominantRGBFromImage */;
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
    let obj = getAvatarURL /* getAvatarURL */;
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
      let memoizedImageSourceResult = useDominantRGBFromImage /* useDominantRGBFromImage */.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const obj4 = useDominantRGBFromImage /* useDominantRGBFromImage */;
      const tmp2 = !arg3;
    } else {
      let obj = useDominantRGBFromImage /* useDominantRGBFromImage */;
      if (userAvatarURL == null) {
        obj = {};
        const merged = Object.assign(getAvatarURL);
        obj.avatar = null;
        userAvatarURL = tmp3(1416).getUserAvatarURL(obj);
        const tmp3Result = tmp3(1416);
      }
      memoizedImageSourceResult = obj.memoizedImageSource(userAvatarURL);
      tmp3 = require;
    }
  }
};