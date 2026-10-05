// discord_app/modules/reanimated/native/REAWorkaroundView.tsx
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import ReanimatedViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx";
import cancelAnimation from "../../../../_runtime/metro/01643__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const forwardRef = react.forwardRef;
const jsx = Fragment.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (entering, ref) => {
        const obj = react2;
        const cResult = obj.c(4);
        if ((cResult[0] === null) != entering.entering) {
          if (cResult[1] === entering) {
            let tmp3;
            if (cResult[2] === ref) {
              tmp3 = cResult[3];
            }
            return tmp3;
          }
        }
        const merged = Object.assign(entering);
        const tmp5 = <ReanimatedViewNativeComponent hasEnteringAnimation={null != entering.entering} ref={ref} />;
        cResult[0] = null != entering.entering;
        cResult[1] = entering;
        cResult[2] = ref;
        cResult[3] = tmp5;
        tmp3 = tmp5;
      }
    : (entering, ref) => {
        const tmp = null != entering.entering;
        const merged = Object.assign(entering);
        return <ReanimatedViewNativeComponent hasEnteringAnimation={tmp} ref={ref} />;
      },
);
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;
