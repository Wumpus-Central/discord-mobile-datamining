// discord_app/design/components/Tabs/native/TabsGradient.native.tsx
import noop from "noop";
import { HorizontalGradient } from "ME";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_8 = { mass: 1, damping: 30, stiffness: 250 };
let closure_9 = createCacheKey.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
let closure_10 = { code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}" };
let closure_11 = { code: "function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}" };
let closure_12 = { code: "function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}" };
let closure_13 = { code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(state) {
  state = state.state;
  let derivedValue2 = state;
  const colors = state.colors;
  let scrollOffset;
  let itemDimensions;
  let pageWidth;
  let derivedValue;
  scrollOffset = state.scrollOffset;
  itemDimensions = state.itemDimensions;
  pageWidth = state.pageWidth;
  let obj = derivedValue2(colors[3]);
  const fn = function f() {
    const value = itemDimensions.get();
    return value.reduce((arg0, width) => {
      let num;
      if (width != null) {
        num = width.width;
      }
      if (num == null) {
        num = 0;
      }
      return arg0 + num;
    }, 0) + value.length * derivedValue2.itemSpacing;
  };
  fn.__closure = { itemDimensions, state };
  fn.__workletHash = 456613763143;
  fn.__initData = closure_11;
  derivedValue = obj.useDerivedValue(fn);
  let obj1 = derivedValue2(colors[3]);
  const fn2 = function y() {
    let tmp = scrollOffset.get() > 0;
    if (tmp) {
      tmp = derivedValue.get() > pageWidth;
    }
    return tmp;
  };
  fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  fn2.__workletHash = 13237586618288;
  fn2.__initData = closure_12;
  const derivedValue1 = obj1.useDerivedValue(fn2);
  derivedValue2 = derivedValue1;
  let obj2 = derivedValue2(colors[3]);
  const fn3 = function s() {
    let obj = derivedValue2(colors[6]);
    let num = 0;
    if (derivedValue2.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, outer1_8) };
    return obj;
  };
  obj = { withSpring: derivedValue2(colors[6]).withSpring, visible: derivedValue1, SPRING_CONFIG: closure_8 };
  fn3.__closure = obj;
  fn3.__workletHash = 14959306962615;
  fn3.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(fn3);
  class W {
    constructor() {
      obj = c5;
      value = scrollOffset.get();
      tmp3 = value < c5.get() - pageWidth && obj.get() > tmp2;
      return tmp3;
    }
  }
  W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  W.__workletHash = 13808489302165;
  W.__initData = closure_13;
  derivedValue2 = derivedValue2(colors[3]).useDerivedValue(W);
  const obj5 = derivedValue2(colors[3]);
  const fn4 = function s() {
    let obj = derivedValue2(colors[6]);
    let num = 0;
    if (derivedValue2.get()) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, outer1_8) };
    return obj;
  };
  obj = { withSpring: derivedValue2(colors[6]).withSpring, visible: derivedValue2, SPRING_CONFIG: closure_8 };
  fn4.__closure = obj;
  fn4.__workletHash = 14959306962615;
  fn4.__initData = closure_10;
  const animatedStyle1 = derivedValue2(colors[3]).useAnimatedStyle(fn4);
  const tmp6 = callback2();
  let items = [colors];
  obj1 = { children: null };
  obj2 = { start: itemDimensions.START, end: itemDimensions.END, colors, style: items1, pointerEvents: "none" };
  items1 = [, , ];
  ({ left: arr2[0], gradient: arr2[1] } = tmp6);
  items1[2] = animatedStyle;
  const memo = scrollOffset.useMemo(() => {
    const items = [...colors];
    return items.reverse();
  }, items);
  const items2 = [pageWidth(LinearGradient, obj2), ];
  const items3 = [, , ];
  ({ right: arr4[0], gradient: arr4[1] } = tmp6);
  items3[2] = animatedStyle1;
  items2[1] = pageWidth(LinearGradient, { start: itemDimensions.START, end: itemDimensions.END, colors: memo, style: items3, pointerEvents: "none" });
  obj1[0] = items2;
  return callback(derivedValue, obj1);
};