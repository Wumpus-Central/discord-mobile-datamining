// === Module 18606: FadeInOut ===

// Module 18606 (FadeInOut)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
let closure_5 = { code: "(function FadeInOutTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_6 = { code: "(function FadeInOutTsx2(finished){let[scheduleOnRN,handleTransitionFinished]=this.__closure;if(finished){scheduleOnRN(handleTransitionFinished);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default function FadeInOut(duration) {
  _require = duration.duration;
  let ref1;
  noop = undefined;
  ({ children, style, ref } = duration);
  const sharedValue = require("module_1652").useSharedValue(0);
  let obj = require("module_1652");
  const tmp = ref1;
  items = [closure_5, sharedValue];
  _require = undefined;
  [tmp3, tmp4] = items;
  class FadeInOutTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  let items1 = [tmp4];
  FadeInOutTsx1.__closure = items1;
  FadeInOutTsx1.__workletHash = 15661759270347;
  FadeInOutTsx1.__initData = tmp3;
  const animatedStyle = require("module_1652").useAnimatedStyle(FadeInOutTsx1);
  ref1 = noop.useRef(null);
  const items2 = [ref1];
  noop = noop.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items2);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = sharedValue.set(duration(ref1[3]).withTiming(1, { duration }));
    },
    componentDidEnter() {
      const result = sharedValue.set(duration(ref1[3]).withTiming(1, { duration }));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      items = [closure_2_6, duration(ref1[4]).scheduleOnRN, closure_1_3];
      duration = undefined;
      c1 = undefined;
      [tmp2, tmp3, tmp4] = items;
      class FadeInOutTsx2 {
        constructor(arg0) {
          if (current) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp3, tmp4];
      FadeInOutTsx2.__closure = items1;
      FadeInOutTsx2.__workletHash = 4334797531387;
      FadeInOutTsx2.__initData = tmp2;
      const result = sharedValue.set(duration(ref1[3]).withTiming(0, { duration }, "respect-motion-settings", FadeInOutTsx2));
      const obj = duration(ref1[3]);
      const obj2 = { duration };
    }
  }));
  const obj3 = { style: null, children };
  const items3 = [style, animatedStyle];
  obj3.style = items3;
  return jsx(sharedValue(tmp[2]).View, { style: null, children });
};