// === Module 13602: CarouselPagination ===

// Module 13602 (CarouselPagination)
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { container: null, dot: null };
obj = { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_20, paddingVertical: ThemesDefault.space.PX_32 };
obj[0] = obj;
createCacheKey = { width: 8, height: 8, borderRadius: ThemesDefault.radii.xs, marginHorizontal: 4, backgroundColor: ThemesDefault.colors.ICON_STRONG };
obj[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
let closure_6 = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
let closure_7 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
let closure_8 = importAllResult.memo((active) => {
  active = active.active;
  let derivedValue;
  let BRAND_500;
  let backgroundColor;
  const tmp = callback();
  let obj = active(BRAND_500[5]);
  const fn = function o() {
    let obj = active(BRAND_500[6]);
    let num = 0;
    if (active) {
      num = 1;
    }
    obj = { duration: 250, easing: active(BRAND_500[7]).STANDARD_EASING };
    return obj.withTiming(num, obj, "animate-always");
  };
  obj = { withTiming: active(BRAND_500[6]).withTiming, active, STANDARD_EASING: active(BRAND_500[7]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5885711729227;
  fn.__initData = closure_6;
  derivedValue = obj.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  backgroundColor = tmp.dot.backgroundColor;
  const fn2 = function u() {
    const obj = { width: active(BRAND_500[5]).interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: null, opacity: null };
    const obj2 = active(BRAND_500[5]);
    const items = [backgroundColor, BRAND_500];
    obj[1] = active(BRAND_500[5]).interpolateColor(derivedValue.get(), [0, 1], items);
    const obj3 = active(BRAND_500[5]);
    obj[2] = active(BRAND_500[5]).interpolate(derivedValue.get(), [0, 1], [0.3, 1]);
    return obj;
  };
  obj = { interpolate: active(BRAND_500[5]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[5]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__closure = obj;
  fn2.__workletHash = 7804335337011;
  fn2.__initData = closure_7;
  const animatedStyle = active(BRAND_500[5]).useAnimatedStyle(fn2);
  const style = [tmp.dot, animatedStyle];
  return jsx(derivedValue(BRAND_500[5]).View, { style });
});
const result = require("set").fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(currentIndex) {
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [callback().container, containerStyle];
  obj[0] = items;
  obj[4] = Array.from({ length: numberOfItems }, (arg0, arg1) => closure_1_4(closure_1_8, { active: arg1 === currentIndex }, arg1));
  return <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};