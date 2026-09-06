// discord_app/modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default function useGetGuildPowerupBannerImage(animatedImageUrl, arg1, arg2) {
  initialize;
  [][0] = AccessibilityStore;
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
}
export const getGuildPowerupBannerImage = function getGuildPowerupBannerImage(arr, stateFromStores1, arg2, arg3) {
  if (null != arr) {
    if (!stateFromStores1) {
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
