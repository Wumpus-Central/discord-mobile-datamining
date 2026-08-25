// _runtime/14034_ReanimatedScreen.js
import cancelAnimationDefault from "01654_cancelAnimation.js";
import { jsx } from "react/00021_jsxProd.js";
import importDefaultResult from "00019_noop.js";

let closure_1 = cancelAnimationDefault.createAnimatedComponent(require("Animated").InnerScreen);
const forwardRefResult = importDefaultResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={arg1} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;