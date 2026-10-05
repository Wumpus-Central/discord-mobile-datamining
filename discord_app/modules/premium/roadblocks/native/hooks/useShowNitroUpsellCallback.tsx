// discord_app/modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(false);
      if (cResult[0] !== sharedValue) {
        const fn = function l(arg0) {
          const result = sharedValue.set(arg0);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        let tmp4;
        if (cResult[3] === sharedValue) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      const obj3 = { shouldShowUpsell: sharedValue, onShowNitroUpsell: tmp3 };
      cResult[2] = tmp3;
      cResult[3] = sharedValue;
      cResult[4] = obj3;
      tmp4 = obj3;
    }
  : () => {
      const obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(false);
      const items = [sharedValue];
      const obj2 = {
        shouldShowUpsell: sharedValue,
        onShowNitroUpsell: react.useCallback((arg0) => {
          const result = sharedValue.set(arg0);
        }, items),
      };
      return obj2;
    };
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default tmp2;
