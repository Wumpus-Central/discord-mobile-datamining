// === Module 4493: REAWorkaroundView ===

// Module 4493 (REAWorkaroundView)
import _mod19 from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4494 */;
import cancelAnimation from "cancelAnimation" /* 1637 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const forwardRefResult = _mod19.forwardRef((entering, ref) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj.hasEnteringAnimation = null != entering.entering;
  obj.ref = ref;
  return <ReanimatedViewNativeComponent />;
});
forwardRefResult.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default forwardRefResult;