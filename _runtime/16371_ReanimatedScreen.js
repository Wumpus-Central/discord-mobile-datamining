// === Module 16371: ReanimatedScreen ===

// Module 16371 (ReanimatedScreen)
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1651 */;

const jsx = fn(21).jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(fn(5978).InnerScreen);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={ref} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;