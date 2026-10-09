// === Module 12210: useGetGuildPowerupBannerImage ===

// Module 12210 (useGetGuildPowerupBannerImage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
const ReactCompilerGating = fn(558);
function getGuildPowerupBannerImage(arr, stateFromStores1, arg2, arg3) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetGuildPowerupBannerImage(animatedImageUrl, arg1, arg2) {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arg2) {
    if (cResult[3] === arg1) {
      if (cResult[4] === animatedImageUrl) {
        if (cResult[5] === stateFromStores) {
          const tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  if (null == animatedImageUrl) {
    cResult[2] = arg2;
    cResult[3] = arg1;
    cResult[4] = animatedImageUrl;
    cResult[5] = stateFromStores;
    cResult[6] = undefined;
  } else {
    if (!stateFromStores) {
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
  const tmpResult = initialize;
}) : (function useGetGuildPowerupBannerImage(animatedImageUrl, arg1, arg2) {
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
});
export { getGuildPowerupBannerImage };