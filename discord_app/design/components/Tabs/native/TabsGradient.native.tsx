// === Module 14634: TabsGradient ===

// Module 14634 (TabsGradient)
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5717 */;
import spring_spring from "spring/spring" /* 5763 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
function useGradientAnimatedStyle(tmpResult) {
  items = [closure_10, spring_spring.withSpring, tmpResult, closure_8];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp, tmp2, tmp3, tmp4] = items;
  class TabsGradientNativeTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp2, tmp3, tmp4];
  TabsGradientNativeTsx1.__closure = items1;
  TabsGradientNativeTsx1.__workletHash = 15771419844398;
  TabsGradientNativeTsx1.__initData = tmp;
  return _mod1652.useAnimatedStyle(TabsGradientNativeTsx1);
}
const HorizontalGradient = fn(1072).HorizontalGradient;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let closure_8 = { mass: 1, damping: 30, stiffness: 250 };
const createStyles = fn(5142);
let closure_9 = createStyles.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
let closure_10 = { code: "(function TabsGradientNativeTsx1(){let[withSpring,visible,SPRING_CONFIG]=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};})" };
let closure_12 = { code: "(function TabsGradientNativeTsx2(){let[itemDimensions,state]=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;})" };
let closure_13 = { code: "(function TabsGradientNativeTsx3(){let[scrollOffset,totalItemWidth,pageWidth]=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;})" };
let closure_14 = { code: "(function TabsGradientNativeTsx4(){let[scrollOffset,totalItemWidth,pageWidth]=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(arg0) {
  ({ state, colors } = arg0);
  ({ scrollOffset, pageWidth } = state);
  items = [closure_12, state.itemDimensions, state];
  c0 = undefined;
  c1 = undefined;
  [tmp3, tmp4, tmp5] = items;
  class TabsGradientNativeTsx2 {
    constructor() {
      value = closure_0.get();
      return value.reduce((acc, width) => {
        let num;
        if (width != null) {
          num = width.width;
        }
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0) + value.length * closure_1.itemSpacing;
    }
  }
  const items1 = [tmp4, tmp5];
  TabsGradientNativeTsx2.__closure = items1;
  TabsGradientNativeTsx2.__workletHash = 829705063742;
  TabsGradientNativeTsx2.__initData = tmp3;
  const derivedValue = _mod1652.useDerivedValue(TabsGradientNativeTsx2);
  const items2 = [closure_13, scrollOffset, derivedValue, pageWidth];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items2;
  class TabsGradientNativeTsx3 {
    constructor() {
      tmp = closure_0.get() > 0;
      if (tmp) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp = closure_1.get() > closure_2;
      }
      return tmp;
    }
  }
  const items3 = [tmp8, tmp9, tmp10];
  TabsGradientNativeTsx3.__closure = items3;
  TabsGradientNativeTsx3.__workletHash = 2315316338857;
  TabsGradientNativeTsx3.__initData = tmp7;
  const tmpResult = _mod1652;
  const tmp12 = useGradientAnimatedStyle(_mod1652.useDerivedValue(TabsGradientNativeTsx3));
  const items4 = [closure_14, scrollOffset, derivedValue, pageWidth];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items4;
  class TabsGradientNativeTsx4 {
    constructor() {
      obj = closure_1;
      value = closure_0.get();
      tmp3 = value < closure_1.get() - closure_2 && obj.get() > tmp2;
      return tmp3;
    }
  }
  const items5 = [tmp14, tmp15, tmp16];
  TabsGradientNativeTsx4.__closure = items5;
  TabsGradientNativeTsx4.__workletHash = 2346791353228;
  TabsGradientNativeTsx4.__initData = tmp13;
  const tmpResult2 = _mod1652;
  const tmp18 = closure_9();
  const items6 = [colors];
  const obj2 = { children: null };
  const obj3 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: null, pointerEvents: "none" };
  const items7 = [, , ];
  ({ left: arr8[0], gradient: arr8[1] } = tmp18);
  items7[2] = tmp12;
  obj3.style = items7;
  const memo = noop.useMemo(() => {
    items = [...c0];
    return items.reverse();
  }, items6);
  const items8 = [React4(LinearGradient, obj3), ];
  const obj4 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors: memo, style: null, pointerEvents: "none" };
  const items9 = [, , ];
  ({ right: arr10[0], gradient: arr10[1] } = tmp18);
  items9[2] = useGradientAnimatedStyle(_mod1652.useDerivedValue(TabsGradientNativeTsx4));
  obj4.style = items9;
  items8[1] = React4(LinearGradient, obj4);
  obj2.children = items8;
  return timestampProducer(hasOwnProperty, obj2);
};