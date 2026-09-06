// === Module 8243: useUserProfileOverscrollStyles ===

// Module 8243 (useUserProfileOverscrollStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
let __initData = { code: "function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}" };
const __initData2 = { code: "function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}" };
const __initData3 = { code: "function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}" };
const __initData4 = { code: "function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};}" };
const __initData5 = { code: "function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}" };
const __initData6 = { code: "function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}" };
const __initData7 = { code: "function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default function useUserProfileOverscrollStyles(arg0) {
  ({ scrollPosition, bannerHeight } = arg0);
  let stateFromStores;
  scrollPosition = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let derivedValue;
  __initData = undefined;
  const height = stateFromStores(scrollPosition[3])().height;
  let obj = height(scrollPosition[4]);
  let items = [derivedValue];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1.5;
    if (derivedValue.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  let obj1 = height(scrollPosition[5]);
  if (scrollPosition == null) {
    scrollPosition = obj1.useSharedValue(0);
  }
  _slicedToArray = tmp4;
  const result = 0.125 * bannerHeight;
  noop = result;
  let tmp2Result = tmp2(tmp[5]);
  const fn = function v() {
    return scrollPosition.get() <= 0;
  };
  fn.__closure = { position: scrollPosition };
  fn.__workletHash = 11756661427383;
  fn.__initData = __initData;
  derivedValue = tmp2Result.useDerivedValue(fn);
  tmp2Result = tmp2(tmp[5]);
  class P {
    constructor() {
      if (closure_5.get()) {
        obj = { translateY: null };
        tmp = closure_2;
        obj.translateY = closure_2.get();
        items = [];
        items[0] = obj;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  P.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
  P.__workletHash = 2642279626533;
  P.__initData = __initData2;
  const bannerAnimatedStyle = tmp2Result.useAnimatedStyle(P);
  class O {
    constructor() {
      obj = closure_0(closure_2[5]);
      items = [, ];
      items[0] = closure_3;
      items[1] = 0;
      interpolateResult = obj.interpolate(closure_2.get(), items, [1.5, 1]);
      obj2 = closure_0(closure_2[5]);
      items1 = [, ];
      items1[0] = closure_3;
      items1[1] = 0;
      items2 = [, ];
      items2[0] = closure_4;
      items2[1] = 0;
      interpolateResult1 = obj2.interpolate(closure_2.get(), items1, items2);
      if (closure_5.get()) {
        obj = { scale: null };
        obj.scale = interpolateResult;
        items3 = [, ];
        items3[0] = obj;
        obj1 = { translateY: null };
        obj1.translateY = interpolateResult1;
        items3[1] = obj1;
        items4 = items3;
      } else {
        items4 = [];
      }
      return { transform: items4 };
    }
  }
  obj = { interpolate: tmp2(tmp[5]).interpolate, position: scrollPosition, minScrollPosition: tmp4, SCALE_FACTOR: 1.5, translateOnScale: result, isNegativeScrollPosition: derivedValue };
  O.__closure = obj;
  O.__workletHash = 5375176079092;
  O.__initData = __initData3;
  const bannerImageAnimatedStyle = height(scrollPosition[5]).useAnimatedStyle(O);
  const tmp2Result1 = height(scrollPosition[5]);
  const fn2 = function w() {
    if (derivedValue.get()) {
      const obj = { translateY: scrollPosition.get() * (1 / stateFromStores) };
      const items = [obj];
      let transform = items;
    } else {
      transform = [];
    }
    return { transform };
  };
  fn2.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
  fn2.__workletHash = 16539417859130;
  fn2.__initData = __initData4;
  const contentAnimatedStyle = height(scrollPosition[5]).useAnimatedStyle(fn2);
  const tmp2Result2 = height(scrollPosition[5]);
  class A {
    constructor() {
      obj = { blurAmount: null };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0(closure_2[5]);
      items = [0];
      items[1] = -height * closure_1;
      obj.blurAmount = obj2.clamp(obj3.interpolate(closure_2.get(), items, [0, 1]), 0, 1);
      return obj;
    }
  }
  obj = { clamp: tmp2(tmp[5]).clamp, interpolate: tmp2(tmp[5]).interpolate, position: scrollPosition, windowHeight: height, coefficient: stateFromStores };
  A.__closure = obj;
  A.__workletHash = 849678936428;
  A.__initData = __initData5;
  const blurAnimatedProps = height(scrollPosition[5]).useAnimatedProps(A);
  const showBlur = _slicedToArray(noop.useState(scrollPosition.get() < 0), 2);
  __initData = tmp12;
  const tmp2Result3 = height(scrollPosition[5]);
  class H {
    constructor() {
      return closure_2.get() < 0;
    }
  }
  H.__closure = { position: scrollPosition };
  H.__workletHash = 3867620644429;
  H.__initData = __initData6;
  const fn3 = function y(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = ReanimatedRexport.runOnJS(closure_6)(arg0);
    }
    return tmp;
  };
  obj1 = { runOnJS: tmp2(tmp[5]).runOnJS, setShowBlur: tmp12 };
  fn3.__closure = obj1;
  fn3.__workletHash = 6548835412849;
  fn3.__initData = __initData7;
  const animatedReaction = height(scrollPosition[5]).useAnimatedReaction(H, fn3);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur: showBlur[0] };
};