// === Module 14328: ReanimatedScreen ===

// Module 14328 (ReanimatedScreen)
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1638 */;

const jsx = fn(21).jsx;
let closure_1 = cancelAnimation.createAnimatedComponent(fn(5424).InnerScreen);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_1 ref={ref} />;
});
forwardRefResult.displayName = "ReanimatedScreen";

export default forwardRefResult;