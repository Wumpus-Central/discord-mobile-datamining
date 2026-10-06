// === Module 13962: CarouselPagination ===

// Module 13962 (CarouselPagination)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import Easing from "Easing" /* 13953 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, dot: size };
obj2 = { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, marginHorizontal: 4, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles(obj);
const __initData = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},\"animate-always\");}" };
const __initData2 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
const __initData3 = { code: "function CarouselPaginationTsx3(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
const __initData4 = { code: "function CarouselPaginationTsx4(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((active) => {
  let BRAND_500;
  let obj = active(BRAND_500[6]);
  const cResult = obj.c(3);
  active = active.active;
  const tmp3 = closure_5();
  let obj2 = active(BRAND_500[7]);
  const fn = function o() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (active) {
      num = 1;
    }
    const obj = { duration: 250, easing: Easing.STANDARD_EASING };
    return withTiming(num, obj, "animate-always");
  };
  let obj3 = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  fn.__closure = obj3;
  fn.__workletHash = 16455320920491;
  fn.__initData = __initData;
  const derivedValue = obj2.useDerivedValue(fn);
  const tmp = BRAND_500;
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp3.dot.backgroundColor;
  let obj4 = active(BRAND_500[7]);
  const fn2 = function u() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    const obj = { width: obj2.interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: obj3.interpolateColor(derivedValue.get(), [0, 1], items), opacity: obj4.interpolate(derivedValue.get(), [0, 1], [0.3, 1]) };
    items = [backgroundColor, BRAND_500];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  fn2.__closure = { interpolate: active(BRAND_500[7]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[7]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__workletHash = 7804335337011;
  fn2.__initData = __initData2;
  ({ interpolate: active(BRAND_500[7]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[7]).interpolateColor, backgroundColor, brand500: BRAND_500 });
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const tmp5 = derivedValue;
  if (cResult[0] === animatedStyle) {
    let tmp7;
    if (cResult[1] === tmp3.dot) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  let items = [tmp3.dot, animatedStyle];
  const tmp8 = jsx(tmp5(tmp[7]).View, { style: items });
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.dot;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((active) => {
  active = active.active;
  let BRAND_500;
  const tmp = closure_5();
  let obj = active(BRAND_500[7]);
  const fn = function o() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (active) {
      num = 1;
    }
    const obj = { duration: 250, easing: Easing.STANDARD_EASING };
    return withTiming(num, obj, "animate-always");
  };
  let obj2 = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  fn.__closure = obj2;
  fn.__workletHash = 16781111073993;
  fn.__initData = __initData3;
  const derivedValue = obj.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  let obj3 = active(BRAND_500[7]);
  const fn2 = function s() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    const obj = { width: obj2.interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: obj3.interpolateColor(derivedValue.get(), [0, 1], items), opacity: obj4.interpolate(derivedValue.get(), [0, 1], [0.3, 1]) };
    items = [backgroundColor, BRAND_500];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj4 = { interpolate: active(BRAND_500[7]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[7]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__closure = obj4;
  fn2.__workletHash = 14479151872693;
  fn2.__initData = __initData4;
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  let items = [tmp.dot, animatedStyle];
  return jsx(derivedValue(BRAND_500[7]).View, { style: items });
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((containerStyle) => {
  let currentIndex;
  let numberOfItems;
  const obj = currentIndex(576);
  const cResult = obj.c(11);
  ({ numberOfItems, currentIndex } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  const tmp2 = closure_5();
  if (cResult[0] === containerStyle) {
    let tmp3;
    let tmp5;
    if (cResult[1] === tmp2.container) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === currentIndex) {
      let tmp4;
      if (cResult[4] === numberOfItems) {
        tmp4 = cResult[5];
      }
      if (cResult[8] === tmp3) {
        let tmp8;
        if (cResult[9] === tmp4) {
          tmp8 = cResult[10];
        }
        return tmp8;
      }
      const tmp11 = <View style={tmp3} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp4}</View>;
      cResult[8] = tmp3;
      cResult[9] = tmp4;
      cResult[10] = tmp11;
      tmp8 = tmp11;
    }
    if (cResult[6] !== currentIndex) {
      const fn = function u(arg0, key) {
        return <closure_10 key={key} active={key === currentIndex} />;
      };
      cResult[6] = currentIndex;
      cResult[7] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[7];
    }
    const _Array = Array;
    const obj3 = { length: numberOfItems };
    const arr = Array.from(obj3, tmp5);
    cResult[3] = currentIndex;
    cResult[4] = numberOfItems;
    cResult[5] = arr;
    tmp4 = arr;
  }
  const items = [tmp2.container, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp2.container;
  cResult[2] = items;
  tmp3 = items;
}) : ((currentIndex) => {
  let containerStyle;
  let numberOfItems;
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const items = [closure_5().container, containerStyle];
  return <View style={items} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{Array.from({ length: numberOfItems }, (arg0, key) => <closure_10 key={key} active={key === currentIndex} />)}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default tmp4;