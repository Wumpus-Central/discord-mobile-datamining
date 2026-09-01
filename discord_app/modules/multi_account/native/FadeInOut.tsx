// discord_app/modules/multi_account/native/FadeInOut.tsx
import importAllResult from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
let closure_5 = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = {
  code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}",
};
const forwardRefResult = importAllResult.forwardRef((duration, ref) => {
  duration = duration.duration;
  let sharedValue;
  ref = undefined;
  importAllResult = undefined;
  ({ children, style } = duration);
  sharedValue = duration(ref[2]).useSharedValue(0);
  let obj = duration(ref[2]);
  let fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = closure_5;
  const animatedStyle = duration(ref[2]).useAnimatedStyle(fn);
  ref = importAllResult.useRef(null);
  const items = [ref];
  importAllResult = importAllResult.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      let obj = closure_1_0(closure_1_2[3]);
      obj = { duration: closure_0 };
      const result = store.set(obj.withTiming(1, obj));
    },
    componentDidEnter() {
      let obj = closure_1_0(closure_1_2[3]);
      obj = { duration: closure_0 };
      const result = store.set(obj.withTiming(1, obj));
    },
    componentWillLeave(current) {
      closure_2.current = current;
      let obj = closure_1_0(closure_1_2[3]);
      obj = { duration: closure_0 };
      const fn = function t(arg0) {
        if (arg0) {
          closure_1_0(closure_1_2[2]).runOnJS(closure_3)();
          const obj = closure_1_0(closure_1_2[2]);
        }
      };
      obj = { runOnJS: closure_1_0(closure_1_2[2]).runOnJS, handleTransitionFinished: closure_3 };
      fn.__closure = obj;
      fn.__workletHash = 7644958904451;
      fn.__initData = closure_1_6;
      const result = store.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
    },
  }));
  style = [,];
  style[0] = style;
  style[1] = animatedStyle;
  return jsx(sharedValue(ref[2]).View, { style, children });
});
let result = require("set").fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default forwardRefResult;
