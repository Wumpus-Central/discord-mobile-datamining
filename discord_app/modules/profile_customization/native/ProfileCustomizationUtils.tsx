// discord_app/modules/profile_customization/native/ProfileCustomizationUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import VideoBackground from "../../calls/native/VideoBackground.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/profile_customization/native/ProfileCustomizationUtils.tsx");

export const useUserProfileBannerBackgroundColor = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserProfileBannerBackgroundColor(arg0) {
      const cResult = c.c(10);
      ({ user, guildId, pendingAvatarSrc, displayProfile } = arg0);
      let tmp4 = null;
      if (null != user) {
        if (null == pendingAvatarSrc) {
          if (cResult[0] === guildId) {
          }
          const avatarURL = user.getAvatarURL(guildId, 80);
          cResult[0] = guildId;
          cResult[1] = user;
          cResult[2] = avatarURL;
        } else {
          if (cResult[3] === pendingAvatarSrc) {
            if (cResult[4] === user) {
              let tmp5 = cResult[5];
            }
            tmp4 = tmp5;
          }
          let userAvatarURL = pendingAvatarSrc;
          if (pendingAvatarSrc == null) {
            const obj2 = {};
            const merged = Object.assign(user);
            obj2.avatar = null;
            userAvatarURL = AvatarUtils.getUserAvatarURL(obj2);
            const tmpResult = AvatarUtils;
          }
          cResult[3] = pendingAvatarSrc;
          cResult[4] = user;
          cResult[5] = userAvatarURL;
          tmp5 = userAvatarURL;
        }
      }
      if (cResult[6] !== tmp4) {
        const memoizedImageSourceResult = VideoBackground.memoizedImageSource(tmp4);
        cResult[6] = tmp4;
        cResult[7] = memoizedImageSourceResult;
        let tmp13 = memoizedImageSourceResult;
        const tmpResult4 = VideoBackground;
      } else {
        tmp13 = cResult[7];
      }
      const dominantColorFromImage = VideoBackground.useDominantColorFromImage(tmp4, tmp13);
      if (cResult[8] !== dominantColorFromImage) {
        const rgb2intResult = utils_ColorUtils.rgb2int(dominantColorFromImage);
        cResult[8] = dominantColorFromImage;
        cResult[9] = rgb2intResult;
        let tmp16 = rgb2intResult;
        const tmpResult6 = utils_ColorUtils;
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
    }
  : function useUserProfileBannerBackgroundColor(arg0) {
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
export const getAvatarSource = function getAvatarSource(getAvatarURL, guildId, avatarSrcOverride, stateFromStores) {
  if (null == getAvatarURL) {
    return null;
  } else {
    let userAvatarURL = avatarSrcOverride;
    if (undefined === avatarSrcOverride) {
      let memoizedImageSourceResult = VideoBackground.memoizedImageSource(
        getAvatarURL.getAvatarURL(guildId, 80, !stateFromStores),
      );
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
};
