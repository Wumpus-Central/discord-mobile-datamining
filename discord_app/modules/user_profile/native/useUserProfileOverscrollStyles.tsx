// === Module 8962: useUserProfileOverscrollStyles ===

// Module 8962 (useUserProfileOverscrollStyles)
import initialize from "initialize" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

require = fn;
let closure_6 = { code: "(function useUserProfileOverscrollStylesTsx1(){let[position]=this.__closure;return position.get()<=0;})" };
let closure_7 = { code: "(function useUserProfileOverscrollStylesTsx2(){let[isNegativeScrollPosition,position]=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};})" };
let closure_8 = { code: "(function useUserProfileOverscrollStylesTsx3(){let[interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition]=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};})" };
let closure_9 = { code: "(function useUserProfileOverscrollStylesTsx4(){let[isNegativeScrollPosition,position,coefficient]=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};})" };
let closure_10 = { code: "(function useUserProfileOverscrollStylesTsx5(){let[clamp,interpolate,position,windowHeight,coefficient]=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};})" };
let closure_11 = { code: "(function useUserProfileOverscrollStylesTsx6(){let[position]=this.__closure;return position.get()<0;})" };
let closure_12 = { code: "(function useUserProfileOverscrollStylesTsx7(result,previous){let[scheduleOnRN,setShowBlur]=this.__closure;return result!==previous&&scheduleOnRN(setShowBlur,result);})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default function useUserProfileOverscrollStyles(arg0) {
  ({ scrollPosition, bannerHeight } = arg0);
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let num = 1.5;
    if (_undefined4.useReducedMotion) {
      num = 1;
    }
    return num;
  }, []);
  if (scrollPosition == null) {
    scrollPosition = obj2.useSharedValue(0);
  }
  obj2 = _mod1652;
  let items1 = [closure_6, scrollPosition];
  [tmp4, tmp5] = items1;
  function useUserProfileOverscrollStylesTsx1() {
    return _undefined.get() <= 0;
  }
  let items2 = [tmp5];
  useUserProfileOverscrollStylesTsx1.__closure = items2;
  useUserProfileOverscrollStylesTsx1.__workletHash = 921106787598;
  useUserProfileOverscrollStylesTsx1.__initData = tmp4;
  const derivedValue = _mod1652.useDerivedValue(useUserProfileOverscrollStylesTsx1);
  const tmp2Result = _mod1652;
  let items3 = [closure_7, derivedValue, scrollPosition];
  [tmp7, tmp8, tmp9] = items3;
  function useUserProfileOverscrollStylesTsx2() {
    if (_undefined.get()) {
      const obj = { translateY: _undefined2.get() };
      items = [obj];
      let transform = items;
    } else {
      transform = [];
    }
    return { transform };
  }
  let items4 = [tmp8, tmp9];
  useUserProfileOverscrollStylesTsx2.__closure = items4;
  useUserProfileOverscrollStylesTsx2.__workletHash = 3658505627420;
  useUserProfileOverscrollStylesTsx2.__initData = tmp7;
  const bannerAnimatedStyle = _mod1652.useAnimatedStyle(useUserProfileOverscrollStylesTsx2);
  const tmp2Result6 = _mod1652;
  const items5 = [closure_8, _mod1652.interpolate, scrollPosition, -bannerHeight, 1.5, 0.125 * bannerHeight, derivedValue];
  c5 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items5;
  function useUserProfileOverscrollStylesTsx3() {
    items = [c2, 0];
    const items1 = [c3, 1];
    const items2 = [c2, 0];
    const items3 = [c4, 0];
    const tmp = _undefined(_undefined2.get(), items, items1);
    if (_undefined4.get()) {
      const obj = { scale: tmp };
      const items4 = [obj, ];
      const obj2 = { translateY: tmp2 };
      items4[1] = obj2;
      let transform = items4;
    } else {
      transform = [];
    }
    return { transform };
  }
  const items6 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  useUserProfileOverscrollStylesTsx3.__closure = items6;
  useUserProfileOverscrollStylesTsx3.__workletHash = 1116167089549;
  useUserProfileOverscrollStylesTsx3.__initData = tmp11;
  const bannerImageAnimatedStyle = _mod1652.useAnimatedStyle(useUserProfileOverscrollStylesTsx3);
  const tmp2Result7 = _mod1652;
  const items7 = [closure_9, derivedValue, scrollPosition, stateFromStores];
  [tmp19, tmp20, tmp21, tmp22] = items7;
  function useUserProfileOverscrollStylesTsx4() {
    if (_undefined.get()) {
      const obj = { translateY: _undefined2.get() * (1 / c2) };
      items = [obj];
      let transform = items;
    } else {
      transform = [];
    }
    return { transform };
  }
  const items8 = [tmp20, tmp21, tmp22];
  useUserProfileOverscrollStylesTsx4.__closure = items8;
  useUserProfileOverscrollStylesTsx4.__workletHash = 2257948482275;
  useUserProfileOverscrollStylesTsx4.__initData = tmp19;
  const contentAnimatedStyle = _mod1652.useAnimatedStyle(useUserProfileOverscrollStylesTsx4);
  const tmp2Result8 = _mod1652;
  const items9 = [closure_10, _mod1652.clamp, _mod1652.interpolate, scrollPosition, useWindowDimensionsDefault().height, stateFromStores];
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items9;
  function useUserProfileOverscrollStylesTsx5() {
    const obj = { blurAmount: null };
    items = [0, -c3 * c4];
    obj.blurAmount = _undefined(_undefined2(_undefined3.get(), items, [0, 1]), 0, 1);
    return obj;
  }
  const items10 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  useUserProfileOverscrollStylesTsx5.__closure = items10;
  useUserProfileOverscrollStylesTsx5.__workletHash = 2283448470325;
  useUserProfileOverscrollStylesTsx5.__initData = tmp24;
  const blurAnimatedProps = _mod1652.useAnimatedProps(useUserProfileOverscrollStylesTsx5);
  const tmp2Result9 = _mod1652;
  [tmp32, tmp33] = noop.useState(scrollPosition.get() < 0);
  const tmp31 = _slicedToArray(noop.useState(scrollPosition.get() < 0), 2);
  const items11 = [closure_11, scrollPosition];
  [tmp34, tmp35] = items11;
  function useUserProfileOverscrollStylesTsx6() {
    return _undefined.get() < 0;
  }
  const items12 = [tmp35];
  useUserProfileOverscrollStylesTsx6.__closure = items12;
  useUserProfileOverscrollStylesTsx6.__workletHash = 4981140014420;
  useUserProfileOverscrollStylesTsx6.__initData = tmp34;
  const items13 = [closure_12, _mod1705.scheduleOnRN, tmp33];
  c0 = undefined;
  c1 = undefined;
  [tmp36, tmp37, tmp38] = items13;
  function useUserProfileOverscrollStylesTsx7(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = _undefined(c1, arg0);
    }
    return tmp;
  }
  const items14 = [tmp37, tmp38];
  useUserProfileOverscrollStylesTsx7.__closure = items14;
  useUserProfileOverscrollStylesTsx7.__workletHash = 9246370536613;
  useUserProfileOverscrollStylesTsx7.__initData = tmp36;
  const animatedReaction = _mod1652.useAnimatedReaction(useUserProfileOverscrollStylesTsx6, useUserProfileOverscrollStylesTsx7);
  return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur };
};