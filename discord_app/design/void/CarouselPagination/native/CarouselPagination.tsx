// === Module 13962: CarouselPagination ===

// Module 13962 (CarouselPagination)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import Easing from "Easing" /* 13953 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { container: { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 }, dot: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, marginHorizontal: 4, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj.dot = size;
let closure_5 = createStyles.createStyles(obj);
const __initData = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},\"animate-always\");}" };
const __initData2 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
const __initData3 = { code: "function CarouselPaginationTsx3(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
const __initData4 = { code: "function CarouselPaginationTsx4(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((active) => {
  const cResult = active(BRAND_500[6]).c(3);
  active = active.active;
  const tmp3 = closure_5();
  let obj = active(BRAND_500[6]);
  const tmp = BRAND_500;
  const fn = function o() {
    let num = 0;
    if (active) {
      num = 1;
    }
    const obj = timing;
    return obj.withTiming(num, { duration: 250, easing: Easing.STANDARD_EASING }, "animate-always");
  };
  let obj2 = active(BRAND_500[7]);
  fn.__closure = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  fn.__workletHash = 16455320920491;
  fn.__initData = __initData;
  const derivedValue = obj2.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp3.dot.backgroundColor;
  let obj3 = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  const tmp5 = derivedValue;
  const fn2 = function u() {
    const obj = { width: ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: null, opacity: null };
    const items = [backgroundColor, BRAND_500];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(derivedValue.get(), [0, 1], items);
    obj.opacity = ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [0.3, 1]);
    return obj;
  };
  const obj4 = active(BRAND_500[7]);
  fn2.__closure = { interpolate: active(BRAND_500[7]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[7]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__workletHash = 7804335337011;
  fn2.__initData = __initData2;
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.dot) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj6 = { style: null };
  let items = [tmp3.dot, animatedStyle];
  obj6.style = items;
  const tmp8 = jsx(tmp5(tmp[7]).View, { style: null });
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.dot;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((active) => {
  active = active.active;
  let BRAND_500;
  const tmp = closure_5();
  const fn = function o() {
    let num = 0;
    if (active) {
      num = 1;
    }
    const obj = timing;
    return obj.withTiming(num, { duration: 250, easing: Easing.STANDARD_EASING }, "animate-always");
  };
  let obj = active(BRAND_500[7]);
  fn.__closure = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  fn.__workletHash = 16781111073993;
  fn.__initData = __initData3;
  const derivedValue = obj.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  let obj2 = { withTiming: active(BRAND_500[8]).withTiming, active, STANDARD_EASING: active(BRAND_500[9]).STANDARD_EASING };
  const fn2 = function s() {
    const obj = { width: ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: null, opacity: null };
    const items = [backgroundColor, BRAND_500];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(derivedValue.get(), [0, 1], items);
    obj.opacity = ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [0.3, 1]);
    return obj;
  };
  let obj3 = active(BRAND_500[7]);
  fn2.__closure = { interpolate: active(BRAND_500[7]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[7]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__workletHash = 14479151872693;
  fn2.__initData = __initData4;
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const obj5 = { style: null };
  let items = [tmp.dot, animatedStyle];
  obj5.style = items;
  return jsx(derivedValue(BRAND_500[7]).View, { style: null });
}));
ReactCompilerGating = fn(558);
let obj3 = { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 };
size = fn(2);
const result = size.fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((containerStyle) => {
  const cResult = currentIndex(576).c(11);
  ({ numberOfItems, currentIndex } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  const tmp2 = closure_5();
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp2.container) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === currentIndex) {
      if (cResult[4] === numberOfItems) {
        if (cResult[8] === tmp3) {
          if (cResult[9] === tmp4) {
            let tmp9 = cResult[10];
          }
          return tmp9;
        }
        const obj2 = { style: tmp3, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: cResult[5] };
        const tmp12 = <View style={tmp3} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{cResult[5]}</View>;
        cResult[8] = tmp3;
        cResult[9] = cResult[5];
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    if (cResult[6] !== currentIndex) {
      const fn = function u(arg0, key) {
        return <closure_10 key={key} active={key === currentIndex} />;
      };
      cResult[6] = currentIndex;
      cResult[7] = fn;
      let tmp5 = fn;
    } else {
      tmp5 = cResult[7];
    }
    const _Array = Array;
    const obj3 = { length: numberOfItems };
    const arr = Array.from(obj3, tmp5);
    cResult[3] = currentIndex;
    cResult[4] = numberOfItems;
    cResult[5] = arr;
  }
  const items = [tmp2.container, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp2.container;
  cResult[2] = items;
  tmp3 = items;
  const obj = currentIndex(576);
}) : ((currentIndex) => {
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [closure_5().container, containerStyle];
  obj.style = items;
  obj.children = Array.from({ length: numberOfItems }, (arg0, key) => <closure_10 key={key} active={key === currentIndex} />);
  return <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
});