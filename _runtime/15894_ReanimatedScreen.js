// _runtime/15894_ReanimatedScreen.js
import Fragment from "react/00021_Fragment.js";
import InnerScreen from "05739_InnerScreen.js";
import react from "00019_react.js";
import cancelAnimation from "metro/01643__.js";

const jsx = Fragment.jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={ref} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
