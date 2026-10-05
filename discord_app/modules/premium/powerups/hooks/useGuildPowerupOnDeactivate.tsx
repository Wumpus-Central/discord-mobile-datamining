// discord_app/modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let error;
      let isLoading;
      let onToggle;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(6);
      ({ isLoading, error, onToggle } = useGuildPowerupOnToggleDefault(arg0, arg1));
      useGuildPowerupOnToggleDefault(arg0, arg1);
      if (cResult[0] !== onToggle) {
        const fn = function t() {
          return onToggle(false);
        };
        cResult[0] = onToggle;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === error) {
        if (cResult[3] === isLoading) {
          let tmp4;
          if (cResult[4] === tmp3) {
            tmp4 = cResult[5];
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
      let items;
      const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
      const onToggle = tmp.onToggle;
      const obj = {
        isLoading: tmp.isLoading,
        error: tmp.error,
        onDeactivate: react.useCallback(() => onToggle(false), items),
      };
      items = [onToggle];
      return obj;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default tmp2;
