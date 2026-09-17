// === Module 16538: FadeInOut ===

// Module 16538 (FadeInOut)
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
  const sharedValue = duration(ref[2]).useSharedValue(0);
  let obj = duration(ref[2]);
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
      const result = sharedValue.set(duration(ref[3]).withTiming(1, { duration }));
    },
    componentDidEnter() {
      const result = sharedValue.set(duration(ref[3]).withTiming(1, { duration }));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      const fn = function t(arg0) {
        if (arg0) {
          duration(ref[2]).runOnJS(handleTransitionFinished)();
          const obj = duration(ref[2]);
        }
      };
      let obj = duration(ref[3]);
      const obj2 = { duration };
      fn.__closure = { runOnJS: duration(ref[2]).runOnJS, handleTransitionFinished };
      fn.__workletHash = 7644958904451;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
    }
  }));
  const obj3 = { style: null, children };
  const items1 = [style, animatedStyle];
  obj3.style = items1;
  return jsx(sharedValue(ref[2]).View, { style: null, children });
});