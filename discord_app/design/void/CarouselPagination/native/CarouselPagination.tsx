// discord_app/design/void/CarouselPagination/native/CarouselPagination.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import Easing from "../../Easing/native/Easing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null, dot: null };
obj = {
  position: "relative",
  top: -16,
  marginBottom: -16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_20,
  paddingVertical: nativeDefault.space.PX_32,
};
obj.container = obj;
let size = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.xs,
  marginHorizontal: 4,
  backgroundColor: nativeDefault.colors.ICON_STRONG,
};
obj.dot = size;
let closure_5 = createStyles.createStyles(obj);
const __initData = {
  code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}",
};
const __initData2 = {
  code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}",
};
let closure_8 = noop.memo((active) => {
  active = active.active;
  let BRAND_500;
  const tmp = closure_5();
  active(BRAND_500[5]);
  const fn = function o() {
    let obj = timing;
    let num = 0;
    if (active) {
      num = 1;
    }
    obj = { duration: 250, easing: Easing.STANDARD_EASING };
    return obj.withTiming(num, obj, "animate-always");
  };
  let obj = {
    withTiming: active(BRAND_500[6]).withTiming,
    active,
    STANDARD_EASING: active(BRAND_500[7]).STANDARD_EASING,
  };
  fn.__closure = obj;
  fn.__workletHash = 5885711729227;
  fn.__initData = __initData;
  const derivedValue = obj.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  const fn2 = function u() {
    const obj = {
      width: ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [8, 16]),
      backgroundColor: null,
      opacity: null,
    };
    const items = [backgroundColor, BRAND_500];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(derivedValue.get(), [0, 1], items);
    obj.opacity = ReanimatedRexport.interpolate(derivedValue.get(), [0, 1], [0.3, 1]);
    return obj;
  };
  obj = {
    interpolate: active(BRAND_500[5]).interpolate,
    progress: derivedValue,
    interpolateColor: active(BRAND_500[5]).interpolateColor,
    backgroundColor,
    brand500: BRAND_500,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 7804335337011;
  fn2.__initData = __initData2;
  const animatedStyle = active(BRAND_500[5]).useAnimatedStyle(fn2);
  const obj1 = { style: null };
  let items = [tmp.dot, animatedStyle];
  obj1.style = items;
  return jsx(derivedValue(BRAND_500[5]).View, { style: null });
});
size = fn(2);
const result = size.fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(currentIndex) {
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const obj = {
    style: null,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items = [closure_5().container, containerStyle];
  obj.style = items;
  obj.children = Array.from({ length: numberOfItems }, (arg0, arg1) => (
    <closure_8 key={arg1} active={arg1 === currentIndex} />
  ));
  return (
    <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {null}
    </View>
  );
}
