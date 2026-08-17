// discord_app/modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
import initialize from "initialize" /* 589 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

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
export const getGuildPowerupBannerImage = function getGuildPowerupBannerImage(found, closure_1_4, arg2) {
  if (null != found) {
    if (!closure_1_4) {
      if (false !== arg2) {
        if (!arg3) {
          let staticImageUrl = found.animatedImageUrl;
          if (staticImageUrl == null) {
            staticImageUrl = found.staticImageUrl;
          }
        }
        return staticImageUrl;
      }
    }
    staticImageUrl = found.staticImageUrl;
  }
};