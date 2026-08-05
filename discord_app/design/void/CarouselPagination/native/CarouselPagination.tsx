// discord_app/design/void/CarouselPagination/native/CarouselPagination.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { Pagination } from "../../../../../_runtime/13339_Pagination.js";

const require = arg1;
let obj = { container: { position: "relative", top: -16, marginBottom: -16 }, dot: null };
obj = { width: 8, height: 8, borderRadius: require("Themes").radii.xs, marginHorizontal: 4, backgroundColor: require("Themes").colors.ICON_STRONG };
obj[1] = obj;
let closure_5 = createCacheKey.createStyles(obj);
let closure_6 = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
let closure_7 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
let closure_8 = require("noop").memo((active) => {
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
  const fn2 = function c() {
    const obj = { width: null, backgroundColor: null, opacity: null };
    obj[0] = active(BRAND_500[5]).interpolate(derivedValue.get(), [0, 1], [8, 16]);
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
const result = require("jsxProd").fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(arg0) {
  let containerStyle;
  let currentIndex;
  let numberOfItems;
  ({ numberOfItems, currentIndex, containerStyle } = arg0);
  const tmp2 = <closure_8 />;
  const tmp = callback();
  const items = [tmp.container, containerStyle];
  return <View style={items}>{jsx(Pagination /* Pagination */.Pagination, { dotElement: tmp2, inactiveDotElement: tmp2, dotsLength: numberOfItems, activeDotIndex: currentIndex })}</View>;
};