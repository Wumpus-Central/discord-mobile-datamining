// === Module 14451: Collapsible ===

// Module 14451 (Collapsible)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const EXPAND_SPRING = { stiffness: 150, overshootClamping: true };
const createStyles = fn(4827);
const obj2 = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  isExpanded = isExpanded.isExpanded;
  first = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_5 = undefined;
  c6 = undefined;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  [first] = first2.useState(false);
  importDefault = tmp4;
  [first1, _slicedToArray] = first2.useState(0);
  [first2, closure_5] = first2.useState(0);
  const items = [first1];
  [][0] = first2;
  const callback = first2.useCallback((nativeEvent) => {
    if (0 === first1) {
      closure_3(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (isExpanded == null) {
    let num = 0;
    const sum = first1 + num;
    c6 = sum;
    class S {
      constructor() {
        obj = { height: null };
        obj2 = closure_0(closure_2[7]);
        obj.height = obj2.withSpring(closure_6, closure_8);
        return obj;
      }
    }
    const obj3 = { withSpring: first(first1[7]).withSpring, totalHeight: sum, EXPAND_SPRING };
    S.__closure = obj3;
    S.__workletHash = 1072657539267;
    S.__initData = __initData;
    const items1 = [first, tmp4];
    const animatedStyle = first(first1[6]).useAnimatedStyle(S);
    const obj4 = { style, children: null };
    const callback1 = obj.useCallback(() => {
      closure_1(!first);
    }, items1);
    const items2 = [tmp.collapsible, ];
    let tmp22 = null;
    if (sum > 0) {
      tmp22 = animatedStyle;
    }
    const obj5 = { style: null, children: null };
    items2[1] = tmp22;
    obj5.style = items2;
    const obj6 = { onLayout: callback, children: null };
    const obj7 = { onPress: callback1 };
    obj6.children = children(obj7);
    const items3 = [c6(closure_5, obj6), ];
    const obj8 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items3[1] = c6(closure_5, obj8);
    obj5.children = items3;
    obj4.children = closure_7(require("ReanimatedRexport").View, obj5);
    return c6(closure_5, obj4);
  } else {
    num = 0;
  }
  num = first2;
  obj = first2;
};