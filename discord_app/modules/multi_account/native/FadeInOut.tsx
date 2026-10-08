// discord_app/modules/multi_account/native/FadeInOut.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const __initData2 = { code: "function FadeInOutTsx3(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function FadeInOutTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FadeInOut(arg0) {
  const cResult = duration(576).c(10);
  ({ children, duration } = arg0);
  ({ style, ref } = arg0);
  let obj = duration(576);
  const sharedValue = duration(4810).useSharedValue(0);
  let obj2 = duration(4810);
  let fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = __initData;
  const animatedStyle = duration(4810).useAnimatedStyle(fn);
  dependencyMap = first.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      const current = ref.current;
      if (current != null) {
        current();
      }
    };
    cResult[0] = fn2;
    first = fn2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === duration) {
    if (cResult[2] === sharedValue) {
      let tmp6 = cResult[3];
    }
    const imperativeHandle = obj4.useImperativeHandle(ref, tmp6);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === style) {
        let tmp8 = cResult[6];
      }
      if (cResult[7] === children) {
        if (cResult[8] === tmp8) {
          let tmp9 = cResult[9];
        }
        return tmp9;
      }
      const obj5 = { style: tmp8, children };
      const tmp12 = jsx(sharedValue(4810).View, { style: tmp8, children });
      cResult[7] = children;
      cResult[8] = tmp8;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
    const items = [style, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = style;
    cResult[6] = items;
    tmp8 = items;
  }
  class F {
    constructor() {
      obj = {
        componentDidAppear() {
              const result = sharedValue.set(duration(5091).withTiming(1, { duration }));
            },
        componentDidEnter() {
              const result = sharedValue.set(duration(5091).withTiming(1, { duration }));
            },
        componentWillLeave(current) {
              dependencyMap.current = current;
              const fn = function t() { ... };
              let obj = duration(5091);
              const obj2 = { duration };
              fn.__closure = { runOnJS: duration(4810).runOnJS, handleTransitionFinished };
              fn.__workletHash = 7644958904451;
              fn.__initData = __initData;
              const result = sharedValue.set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
            }
      };
      return obj;
    }
  }
  cResult[1] = duration;
  cResult[2] = sharedValue;
  cResult[3] = F;
  tmp6 = F;
  const obj3 = duration(4810);
  obj4 = first;
}) : (function FadeInOut(duration) {
  duration = duration.duration;
  let ref1;
  noop = undefined;
  ({ children, style, ref } = duration);
  const sharedValue = duration(ref1[4]).useSharedValue(0);
  let obj = duration(ref1[4]);
  let fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13243381431792;
  fn.__initData = __initData2;
  const animatedStyle = duration(ref1[4]).useAnimatedStyle(fn);
  ref1 = noop.useRef(null);
  const items = [ref1];
  noop = noop.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = sharedValue.set(duration(ref1[5]).withTiming(1, { duration }));
    },
    componentDidEnter() {
      const result = sharedValue.set(duration(ref1[5]).withTiming(1, { duration }));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      const fn = function t(arg0) {
        if (arg0) {
          duration(ref1[4]).runOnJS(handleTransitionFinished)();
          const obj = duration(ref1[4]);
        }
      };
      let obj = duration(ref1[5]);
      const obj2 = { duration };
      fn.__closure = { runOnJS: duration(ref1[4]).runOnJS, handleTransitionFinished };
      fn.__workletHash = 14250676490181;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
    }
  }));
  const obj3 = { style: null, children };
  const items1 = [style, animatedStyle];
  obj3.style = items1;
  return jsx(sharedValue(ref1[4]).View, { style: null, children });
});