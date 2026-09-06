// === Module 16378: FadeInOut ===

// Module 16378 (FadeInOut)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default noop.forwardRef((duration, arg1) => {
  duration = duration.duration;
  let ref;
  noop = undefined;
  ({ children, style } = duration);
  let obj = duration(ref[2]);
  const sharedValue = obj.useSharedValue(0);
  let fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = __initData;
  const animatedStyle = duration(ref[2]).useAnimatedStyle(fn);
  ref = noop.useRef(null);
  const items = [ref];
  noop = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      duration(ref[3]);
      const obj = { duration };
      const result = sharedValue.set(obj.withTiming(1, obj));
    },
    componentDidEnter() {
      duration(ref[3]);
      const obj = { duration };
      const result = sharedValue.set(obj.withTiming(1, obj));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      duration(ref[3]);
      let obj = { duration };
      const fn = function t(arg0) {
        if (arg0) {
          duration(ref[2]).runOnJS(handleTransitionFinished)();
          const obj = duration(ref[2]);
        }
      };
      obj = { runOnJS: duration(ref[2]).runOnJS, handleTransitionFinished };
      fn.__closure = obj;
      fn.__workletHash = 7644958904451;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
    }
  }));
  obj = { style: null, children };
  const items1 = [style, animatedStyle];
  obj.style = items1;
  return jsx(sharedValue(ref[2]).View, { style: null, children });
});