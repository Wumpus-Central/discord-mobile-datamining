// === Module 8353: useUserProfileOverscrollStyles ===

// Module 8353 (useUserProfileOverscrollStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
let c6 = 1.5;
const __initData = { code: "function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}" };
const __initData2 = { code: "function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}" };
const __initData3 = { code: "function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform_0=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform_0};}" };
const __initData4 = { code: "function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform_1=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform_1};}" };
const __initData5 = { code: "function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}" };
const __initData6 = { code: "function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}" };
const __initData7 = { code: "function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}" };
const __initData8 = { code: "function useUserProfileOverscrollStylesTsx8(){const{position}=this.__closure;return position.get()<=0;}" };
const __initData9 = { code: "function useUserProfileOverscrollStylesTsx9(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}" };
const __initData10 = { code: "function useUserProfileOverscrollStylesTsx10(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform_0=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform_0};}" };
const __initData11 = { code: "function useUserProfileOverscrollStylesTsx11(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform_1=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform_1};}" };
const __initData12 = { code: "function useUserProfileOverscrollStylesTsx12(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}" };
const __initData13 = { code: "function useUserProfileOverscrollStylesTsx13(){const{position}=this.__closure;return position.get()<0;}" };
const __initData14 = { code: "function useUserProfileOverscrollStylesTsx14(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileOverscrollStyles(arg0) {
  const cResult = height(scrollPosition[4]).c(9);
  ({ scrollPosition, bannerHeight } = arg0);
  height = stateFromStores(scrollPosition[5])().height;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [derivedValue];
    const fn = function v() {
      let num = 1.5;
      if (derivedValue.useReducedMotion) {
        num = 1;
      }
      return num;
    };
    let items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  let obj = height(scrollPosition[4]);
  stateFromStores = height(scrollPosition[6]).useStateFromStores(tmp4, tmp5, tmp6);
  const tmpResult = height(scrollPosition[6]);
  if (scrollPosition == null) {
    scrollPosition = tmpResult8.useSharedValue(0);
  }
  _slicedToArray = tmp9;
  const result = 0.125 * bannerHeight;
  noop = result;
  tmpResult8 = height(scrollPosition[7]);
  const fn2 = function b() {
    return scrollPosition.get() <= 0;
  };
  fn2.__closure = { position: scrollPosition };
  fn2.__workletHash = 11756661427383;
  fn2.__initData = __initData;
  derivedValue = height(scrollPosition[7]).useDerivedValue(fn2);
  const tmpResult9 = height(scrollPosition[7]);
  const fn3 = function x() {
    if (derivedValue.get()) {
      const obj = { translateY: scrollPosition.get() };
      const items = [obj];
      let transform = items;
    } else {
      transform = [];
    }
    return { transform };
  };
  fn3.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
  fn3.__workletHash = 2642279626533;
  fn3.__initData = __initData2;
  const animatedStyle = height(scrollPosition[7]).useAnimatedStyle(fn3);
  const tmpResult10 = height(scrollPosition[7]);
  class T {
    constructor() {
      obj = closure_0(closure_2[7]);
      items = [, ];
      items[0] = closure_3;
      items[1] = 0;
      items1 = [, ];
      items1[0] = c6;
      items1[1] = 1;
      interpolateResult = obj.interpolate(closure_2.get(), items, items1);
      obj2 = closure_0(closure_2[7]);
      items2 = [, ];
      items2[0] = closure_3;
      items2[1] = 0;
      items3 = [, ];
      items3[0] = closure_4;
      items3[1] = 0;
      interpolateResult1 = obj2.interpolate(closure_2.get(), items2, items3);
      if (closure_5.get()) {
        obj1 = { scale: null };
        obj1.scale = interpolateResult;
        items4 = [, ];
        items4[0] = obj1;
        obj5 = { translateY: null };
        obj5.translateY = interpolateResult1;
        items4[1] = obj5;
        items5 = items4;
      } else {
        items5 = [];
      }
      return { transform: items5 };
    }
  }
  const tmpResult11 = height(scrollPosition[7]);
  T.__closure = { interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, minScrollPosition: -bannerHeight, SCALE_FACTOR, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  T.__workletHash = 13680082246548;
  T.__initData = __initData3;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(T);
  let obj2 = { interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, minScrollPosition: -bannerHeight, SCALE_FACTOR, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  class N {
    constructor() {
      if (closure_5.get()) {
        obj = { translateY: null };
        tmp = closure_2;
        tmp2 = closure_1;
        num = 1;
        obj.translateY = closure_2.get() * (1 / closure_1);
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  N.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
  N.__workletHash = 8233067051514;
  N.__initData = __initData4;
  const animatedStyle2 = height(scrollPosition[7]).useAnimatedStyle(N);
  const tmpResult12 = height(scrollPosition[7]);
  class U {
    constructor() {
      obj = { blurAmount: null };
      obj2 = closure_0(closure_2[7]);
      obj3 = closure_0(closure_2[7]);
      items = [0];
      items[1] = -height * closure_1;
      obj.blurAmount = obj2.clamp(obj3.interpolate(closure_2.get(), items, [0, 1]), 0, 1);
      return obj;
    }
  }
  const tmpResult13 = height(scrollPosition[7]);
  U.__closure = { clamp: height(scrollPosition[7]).clamp, interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  U.__workletHash = 849678936428;
  U.__initData = __initData5;
  const animatedProps = tmpResult13.useAnimatedProps(U);
  let obj3 = { clamp: height(scrollPosition[7]).clamp, interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  [tmp17, tmp18] = noop.useState(scrollPosition.get() < 0);
  SCALE_FACTOR = tmp18;
  const tmp16 = _slicedToArray(noop.useState(scrollPosition.get() < 0), 2);
  class Y {
    constructor() {
      return closure_2.get() < 0;
    }
  }
  Y.__closure = { position: scrollPosition };
  Y.__workletHash = 3867620644429;
  Y.__initData = __initData6;
  class D {
    constructor(arg0, arg1) {
      tmp = arg0 !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp4 = closure_6;
        tmp = obj.runOnJS(closure_6)(arg0);
      }
      return tmp;
    }
  }
  const tmpResult14 = height(scrollPosition[7]);
  D.__closure = { runOnJS: height(scrollPosition[7]).runOnJS, setShowBlur: tmp18 };
  D.__workletHash = 6548835412849;
  D.__initData = __initData7;
  const animatedReaction = tmpResult14.useAnimatedReaction(Y, D);
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === animatedStyle1) {
      if (cResult[5] === animatedProps) {
        if (cResult[6] === animatedStyle2) {
          if (cResult[7] === tmp17) {
            let tmp20 = cResult[8];
          }
          return tmp20;
        }
      }
    }
  }
  const obj5 = { bannerAnimatedStyle: animatedStyle, bannerImageAnimatedStyle: animatedStyle1, contentAnimatedStyle: animatedStyle2, blurAnimatedProps: animatedProps, showBlur: tmp17 };
  cResult[3] = animatedStyle;
  cResult[4] = animatedStyle1;
  cResult[5] = animatedProps;
  cResult[6] = animatedStyle2;
  cResult[7] = tmp17;
  cResult[8] = obj5;
  tmp20 = obj5;
}) : (function useUserProfileOverscrollStyles(arg0) {
  ({ scrollPosition, bannerHeight } = arg0);
  let stateFromStores;
  scrollPosition = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let derivedValue;
  SCALE_FACTOR = undefined;
  const height = stateFromStores(scrollPosition[5])().height;
  let items = [derivedValue];
  stateFromStores = height(scrollPosition[6]).useStateFromStores(items, () => {
    let num = 1.5;
    if (derivedValue.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  let obj = height(scrollPosition[6]);
  if (scrollPosition == null) {
    scrollPosition = obj2.useSharedValue(0);
  }
  _slicedToArray = tmp4;
  const result = 0.125 * bannerHeight;
  noop = result;
  obj2 = height(scrollPosition[7]);
  const fn = function u() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { position: scrollPosition };
  fn.__workletHash = 12159392529150;
  fn.__initData = __initData8;
  derivedValue = height(scrollPosition[7]).useDerivedValue(fn);
  const tmp2Result = height(scrollPosition[7]);
  const fn2 = function _() {
    if (derivedValue.get()) {
      const obj = { translateY: scrollPosition.get() };
      const items = [obj];
      let transform = items;
    } else {
      transform = [];
    }
    return { transform };
  };
  fn2.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
  fn2.__workletHash = 11554208783982;
  fn2.__initData = __initData9;
  const bannerAnimatedStyle = height(scrollPosition[7]).useAnimatedStyle(fn2);
  const tmp2Result6 = height(scrollPosition[7]);
  const fn3 = function f() {
    const items = [closure_3, 0];
    const items1 = [c6, 1];
    const interpolateResult = ReanimatedRexport.interpolate(scrollPosition.get(), items, items1);
    const items2 = [closure_3, 0];
    const items3 = [c4, 0];
    if (derivedValue.get()) {
      const obj3 = { scale: interpolateResult };
      const items4 = [obj3, ];
      const obj4 = { translateY: interpolateResult1 };
      items4[1] = obj4;
      let transform = items4;
    } else {
      transform = [];
    }
    return { transform };
  };
  const tmp2Result7 = height(scrollPosition[7]);
  fn3.__closure = { interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, minScrollPosition: -bannerHeight, SCALE_FACTOR, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  fn3.__workletHash = 17180041354278;
  fn3.__initData = __initData10;
  const bannerImageAnimatedStyle = tmp2Result7.useAnimatedStyle(fn3);
  let obj3 = { interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, minScrollPosition: -bannerHeight, SCALE_FACTOR, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  class S {
    constructor() {
      if (closure_5.get()) {
        obj = { translateY: null };
        tmp = closure_2;
        tmp2 = closure_1;
        num = 1;
        obj.translateY = closure_2.get() * (1 / closure_1);
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  S.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
  S.__workletHash = 1631998179662;
  S.__initData = __initData11;
  const contentAnimatedStyle = height(scrollPosition[7]).useAnimatedStyle(S);
  const tmp2Result8 = height(scrollPosition[7]);
  const fn4 = function p() {
    const obj = { blurAmount: null };
    const obj2 = ReanimatedRexport;
    const items = [0, -height * stateFromStores];
    obj.blurAmount = obj2.clamp(ReanimatedRexport.interpolate(scrollPosition.get(), items, [0, 1]), 0, 1);
    return obj;
  };
  const tmp2Result9 = height(scrollPosition[7]);
  fn4.__closure = { clamp: height(scrollPosition[7]).clamp, interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  fn4.__workletHash = 7547059253594;
  fn4.__initData = __initData12;
  const blurAnimatedProps = tmp2Result9.useAnimatedProps(fn4);
  const showBlur = _slicedToArray(noop.useState(scrollPosition.get() < 0), 2);
  SCALE_FACTOR = tmp12;
  let obj4 = { clamp: height(scrollPosition[7]).clamp, interpolate: height(scrollPosition[7]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  const fn5 = function b() {
    return scrollPosition.get() < 0;
  };
  fn5.__closure = { position: scrollPosition };
  fn5.__workletHash = 15655765871577;
  fn5.__initData = __initData13;
  class H {
    constructor(arg0, arg1) {
      tmp = arg0 !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp4 = closure_6;
        tmp = obj.runOnJS(closure_6)(arg0);
      }
      return tmp;
    }
  }
  const tmp2Result10 = height(scrollPosition[7]);
  H.__closure = { runOnJS: height(scrollPosition[7]).runOnJS, setShowBlur: showBlur[1] };
  H.__workletHash = 5835025502051;
  H.__initData = __initData14;
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn5, H);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur: showBlur[0] };
});