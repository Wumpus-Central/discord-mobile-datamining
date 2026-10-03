// discord_app/modules/reanimated/native/REAWorkaroundView.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import ReanimatedViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx";
import cancelAnimation from "../../../../_runtime/01643_cancelAnimation.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = _mod19.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (entering, ref) => {
        const cResult = c.c(4);
        if ((cResult[0] === null) != entering.entering) {
          if (cResult[1] === entering) {
            if (cResult[2] === ref) {
              let tmp3 = cResult[3];
            }
            return tmp3;
          }
        }
        const obj2 = {};
        const merged = Object.assign(entering);
        obj2.hasEnteringAnimation = null != entering.entering;
        obj2.ref = ref;
        const tmp5 = <ReanimatedViewNativeComponent />;
        cResult[0] = null != entering.entering;
        cResult[1] = entering;
        cResult[2] = ref;
        cResult[3] = tmp5;
        tmp3 = tmp5;
      }
    : (entering, ref) => {
        const obj = {};
        const merged = Object.assign(entering);
        obj.hasEnteringAnimation = null != entering.entering;
        obj.ref = ref;
        return <ReanimatedViewNativeComponent />;
      },
);
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
