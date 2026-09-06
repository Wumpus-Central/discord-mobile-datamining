// === Module 12759: TabsGradient ===

// Module 12759 (TabsGradient)
import spring from "spring" /* 4974 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
const HorizontalGradient = fn(1074).HorizontalGradient;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const SPRING_CONFIG = { mass: 1, damping: 30, stiffness: 250 };
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
const __initData = { code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}" };
const __initData2 = { code: "function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}" };
const __initData3 = { code: "function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}" };
const __initData4 = { code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(state) {
  state = state.state;
  let derivedValue1 = state;
  const colors = state.colors;
  const scrollOffset = state.scrollOffset;
  const itemDimensions = state.itemDimensions;
  const pageWidth = state.pageWidth;
  let obj = derivedValue1(colors[3]);
  const fn = function f() {
    value = itemDimensions.get();
    return value.reduce((acc, width) => {
      let num;
      if (width != null) {
        num = width.width;
      }
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0) + value.length * derivedValue1.itemSpacing;
  };
  fn.__closure = { itemDimensions, state };
  fn.__workletHash = 456613763143;
  fn.__initData = __initData2;
  const derivedValue = obj.useDerivedValue(fn);
  let obj1 = derivedValue1(colors[3]);
  const fn2 = function y() {
    let tmp = scrollOffset.get() > 0;
    if (tmp) {
      tmp = derivedValue.get() > pageWidth;
    }
    return tmp;
  };
  fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  fn2.__workletHash = 13237586618288;
  fn2.__initData = __initData3;
  derivedValue1 = obj1.useDerivedValue(fn2);
  let obj2 = derivedValue1(colors[3]);
  const fn3 = function s() {
    let obj = spring;
    let num = 0;
    if (derivedValue1.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_8) };
    return obj;
  };
  obj = { withSpring: derivedValue1(colors[6]).withSpring, visible: derivedValue1, SPRING_CONFIG };
  fn3.__closure = obj;
  fn3.__workletHash = 14959306962615;
  fn3.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn3);
  class W {
    constructor() {
      obj = closure_5;
      value = scrollOffset.get();
      tmp3 = value < closure_5.get() - pageWidth && obj.get() > tmp2;
      return tmp3;
    }
  }
  W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  W.__workletHash = 13808489302165;
  W.__initData = __initData4;
  const derivedValue2 = derivedValue1(colors[3]).useDerivedValue(W);
  closure_129_0 = derivedValue2;
  const obj5 = derivedValue1(colors[3]);
  const fn4 = function s() {
    let obj = spring;
    let num = 0;
    if (derivedValue1.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_8) };
    return obj;
  };
  obj = { withSpring: derivedValue1(colors[6]).withSpring, visible: derivedValue2, SPRING_CONFIG };
  fn4.__closure = obj;
  fn4.__workletHash = 14959306962615;
  fn4.__initData = __initData;
  const animatedStyle1 = derivedValue1(colors[3]).useAnimatedStyle(fn4);
  const tmp6 = closure_9();
  let items = [colors];
  obj1 = { children: null };
  obj2 = { start: itemDimensions.START, end: itemDimensions.END, colors, style: null, pointerEvents: "none" };
  const items1 = [, , ];
  ({ left: arr2[0], gradient: arr2[1] } = tmp6);
  items1[2] = animatedStyle;
  obj2.style = items1;
  const memo = scrollOffset.useMemo(() => {
    const items = [...colors];
    return items.reverse();
  }, items);
  const items2 = [pageWidth(LinearGradient, obj2), ];
  const obj3 = { start: itemDimensions.START, end: itemDimensions.END, colors: memo, style: null, pointerEvents: "none" };
  const items3 = [, , ];
  ({ right: arr4[0], gradient: arr4[1] } = tmp6);
  items3[2] = animatedStyle1;
  obj3.style = items3;
  items2[1] = pageWidth(LinearGradient, obj3);
  obj1.children = items2;
  return closure_6(derivedValue, obj1);
};