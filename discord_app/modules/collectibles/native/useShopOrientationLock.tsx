// discord_app/modules/collectibles/native/useShopOrientationLock.tsx
import c from "../../../../_runtime/00576_c.js";
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          applyOrientationLock.applyOrientationLock("PORTRAIT", true);
          return applyOrientationLock.restoreDefaultOrientationLock;
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = noop.useEffect(() => {
        applyOrientationLock.applyOrientationLock("PORTRAIT", true);
        return applyOrientationLock.restoreDefaultOrientationLock;
      }, []);
    };
