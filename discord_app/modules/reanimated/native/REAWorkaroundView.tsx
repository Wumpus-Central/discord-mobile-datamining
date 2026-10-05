// === Module 4613: REAWorkaroundView ===

// Module 4613 (REAWorkaroundView)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4614 */;
import cancelAnimation from "module_1643" /* 1643 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const forwardRef = react.forwardRef;
const jsx = Fragment.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((entering, ref) => {
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === null != entering.entering) {
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
}) : ((entering, ref) => {
  const tmp = null != entering.entering;
  const merged = Object.assign(entering);
  return <ReanimatedViewNativeComponent hasEnteringAnimation={tmp} ref={ref} />;
}));
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;