// === Module 11689: useGetGuildPowerupBannerImage ===

// Module 11689 (useGetGuildPowerupBannerImage)
import initialize from "initialize" /* 589 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(animatedImageUrl) {
  initialize;
  [][0] = closure_2;
  if (null != animatedImageUrl) {
    if (!tmp2) {
      if (false !== arg1) {
        if (!arg2) {
          let staticImageUrl = animatedImageUrl.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = animatedImageUrl.staticImageUrl;
          }
        }
      }
    }
    staticImageUrl = animatedImageUrl.staticImageUrl;
  }
};
export const getGuildPowerupBannerImage = function getGuildPowerupBannerImage(arr, closure_1_4, arg2) {
  if (null != arr) {
    if (!closure_1_4) {
      if (false !== arg2) {
        if (!arg3) {
          let staticImageUrl = arr.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = arr.staticImageUrl;
          }
        }
        return staticImageUrl;
      }
    }
    staticImageUrl = arr.staticImageUrl;
  }
};