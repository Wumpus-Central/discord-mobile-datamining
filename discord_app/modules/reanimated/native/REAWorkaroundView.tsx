// discord_app/modules/reanimated/native/REAWorkaroundView.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ReanimatedViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx";
import cancelAnimation from "../../../../_runtime/01636_cancelAnimation.js";
import size from "../../../../_runtime/metro/00002__.js";

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
