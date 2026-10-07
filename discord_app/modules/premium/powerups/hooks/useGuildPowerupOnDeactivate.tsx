// discord_app/modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx
import c from "../../../../../_runtime/00576_c.js";
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const cResult = c.c(6);
      ({ isLoading, error, onToggle } = useGuildPowerupOnToggleDefault(arg0, arg1));
      if (cResult[0] !== onToggle) {
        const fn = function t() {
          return onToggle(false);
        };
        cResult[0] = onToggle;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === error) {
        if (cResult[3] === isLoading) {
          if (cResult[4] === tmp3) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
      const obj2 = { isLoading, error, onDeactivate: tmp3 };
      cResult[2] = error;
      cResult[3] = isLoading;
      cResult[4] = tmp3;
      cResult[5] = obj2;
      tmp4 = obj2;
    }
  : (arg0, arg1) => {
      const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
      const onToggle = tmp.onToggle;
      const obj = { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: null };
      const items = [onToggle];
      obj.onDeactivate = noop.useCallback(() => onToggle(false), items);
      return obj;
    };
