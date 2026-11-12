// === Module 16505: CarouselPagination ===

// Module 16505 (CarouselPagination)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import Easing_Easing from "Easing/Easing" /* 16313 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj = { container: { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 }, dot: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, marginHorizontal: 4, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj.dot = size;
let closure_5 = createStyles.createStyles(obj);
let closure_6 = { code: "(function CarouselPaginationTsx1(){let[withTiming,active,STANDARD_EASING]=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');})" };
let closure_7 = { code: "(function CarouselPaginationTsx2(){let[interpolate,progress,interpolateColor,backgroundColor,brand500]=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};})" };
let closure_8 = noop.memo(function Dot(active) {
  const tmp = closure_5();
  items = [closure_6, timing_timing.withTiming, active.active, Easing_Easing.STANDARD_EASING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class CarouselPaginationTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { duration: 250, easing: closure_2 };
      return tmp(num, obj, "animate-always");
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  CarouselPaginationTsx1.__closure = items1;
  CarouselPaginationTsx1.__workletHash = 5504332160978;
  CarouselPaginationTsx1.__initData = tmp4;
  const derivedValue = _mod1652.useDerivedValue(CarouselPaginationTsx1);
  const items2 = [closure_7, _mod1652.interpolate, derivedValue, _mod1652.interpolateColor, tmp.dot.backgroundColor, nativeDefault.unsafe_rawColors.BRAND_500];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class CarouselPaginationTsx2 {
    constructor() {
      obj = { width: closure_0(closure_1.get(), [0, 1], [8, 16]), backgroundColor: null, opacity: closure_0(closure_1.get(), [0, 1], [0.3, 1]) };
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      obj.backgroundColor = closure_2(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  CarouselPaginationTsx2.__closure = items3;
  CarouselPaginationTsx2.__workletHash = 9539116065290;
  CarouselPaginationTsx2.__initData = tmp10;
  const animatedStyle = _mod1652.useAnimatedStyle(CarouselPaginationTsx2);
  const obj2 = { style: null };
  const items4 = [tmp.dot, animatedStyle];
  obj2.style = items4;
  return jsx(_modDef1652.View, { style: null });
});
size = fn(2);
const result = size.fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(currentIndex) {
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items = [closure_5().container, containerStyle];
  obj.style = items;
  obj.children = Array.from({ length: numberOfItems }, (arg0, key) => <closure_8 key={key} active={key === currentIndex} />);
  return <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};