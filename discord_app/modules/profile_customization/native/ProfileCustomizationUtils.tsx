// === Module 8101: useEditBannerSource ===

// Module 8101 (useEditBannerSource)
let result = require("int2hslRaw").fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useEditBannerSource = function useEditBannerSource(arg0) {
  let displayProfile;
  let pendingBanner;
  ({ displayProfile, pendingBanner } = arg0);
  if (null != pendingBanner) {
    return require(8102) /* useDominantRGBFromImage */.memoizedImageSource(pendingBanner);
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
          source = require(1416) /* getAvatarURL */.makeSource(bannerURL);
          const obj = require(1416) /* getAvatarURL */;
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
      source1 = require(1416) /* getAvatarURL */.makeSource(previewBanner);
      const obj2 = require(1416) /* getAvatarURL */;
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
    const obj3 = require(8102) /* useDominantRGBFromImage */;
    const memoizedImageSourceResult = require(8102) /* useDominantRGBFromImage */.memoizedImageSource(null);
    const obj4 = require(688) /* int2hslRaw */;
    let primaryColor;
    const obj5 = require(8102) /* useDominantRGBFromImage */;
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
    let obj = require(1416) /* getAvatarURL */;
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
      let memoizedImageSourceResult = require(8102) /* useDominantRGBFromImage */.memoizedImageSource(getAvatarURL.getAvatarURL(arg1, 80, !arg3));
      const obj4 = require(8102) /* useDominantRGBFromImage */;
      const tmp2 = !arg3;
    } else {
      let obj = require(8102) /* useDominantRGBFromImage */;
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