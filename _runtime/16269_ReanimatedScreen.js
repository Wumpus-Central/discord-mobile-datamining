// _runtime/16269_ReanimatedScreen.js
import noop from "metro/00019__.js";
import cancelAnimation from "01656_cancelAnimation.js";

const jsx = fn(21).jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(fn(5323).InnerScreen);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={ref} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;
