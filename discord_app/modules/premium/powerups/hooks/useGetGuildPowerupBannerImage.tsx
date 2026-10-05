// discord_app/modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function getGuildPowerupBannerImage(arr, stateFromStores1, arg2, arg3) {
  if (null != arr) {
    const tmp = stateFromStores1;
    if (!tmp) {
      if (false !== arg2) {
        let staticImageUrl;
        const tmp3 = arg3;
        if (!tmp3) {
          staticImageUrl = arr.animatedImageUrl;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animatedImageUrl, arg1, arg2) => {
      let tmp4;
      let tmp5;
      let useReducedMotion;
      const obj = react;
      const cResult = obj.c(7);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arg2) {
        if (cResult[3] === arg1) {
          if (cResult[4] === animatedImageUrl) {
            let tmp8;
            if (cResult[5] === stateFromStores) {
              tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
      }
      let tmp9;
      if (null != animatedImageUrl) {
        if (!stateFromStores) {
          if (false !== arg1) {
            let staticImageUrl;
            if (!arg2) {
              staticImageUrl = animatedImageUrl.animatedImageUrl;
              if (staticImageUrl == null) {
                staticImageUrl = animatedImageUrl.staticImageUrl;
              }
            }
            tmp9 = staticImageUrl;
          }
        }
        staticImageUrl = animatedImageUrl.staticImageUrl;
      }
      cResult[2] = arg2;
      cResult[3] = arg1;
      cResult[4] = animatedImageUrl;
      cResult[5] = stateFromStores;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  : (animatedImageUrl, arg1, arg2) => {
      let useReducedMotion;
      const items = [AccessibilityStore];
      let tmp;
      const obj = get_initialized;
      if (null != animatedImageUrl) {
        if (!obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
          if (false !== arg1) {
            let staticImageUrl;
            const tmp3 = arg2;
            if (!tmp3) {
              staticImageUrl = animatedImageUrl.animatedImageUrl;
              if (staticImageUrl == null) {
                staticImageUrl = animatedImageUrl.staticImageUrl;
              }
            }
            tmp = staticImageUrl;
          }
        }
        staticImageUrl = animatedImageUrl.staticImageUrl;
      }
      return tmp;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx");

export default tmp2;
export { getGuildPowerupBannerImage };
