// === Module 14096: Collapsible ===

// Module 14096 (Collapsible)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const EXPAND_SPRING = { stiffness: 150, overshootClamping: true };
fn(4560);
let createStyles = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.collapsibleContent = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const __initData = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  isExpanded = isExpanded.isExpanded;
  _slicedToArray = undefined;
  let first2;
  c6 = undefined;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  let obj = first2;
  const tmp2 = _slicedToArray(first2.useState(false), 2);
  const first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = _slicedToArray(first2.useState(0), 2);
  const first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  const tmp7 = _slicedToArray(first2.useState(0), 2);
  first2 = tmp7[0];
  closure_5 = tmp7[1];
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
    let obj1 = first(first1[6]);
    class S {
      constructor() {
        obj = { height: null };
        obj2 = closure_0(closure_2[7]);
        obj.height = obj2.withSpring(closure_6, closure_8);
        return obj;
      }
    }
    obj = { withSpring: first(first1[7]).withSpring, totalHeight: sum, EXPAND_SPRING };
    S.__closure = obj;
    S.__workletHash = 1072657539267;
    S.__initData = __initData;
    const items1 = [first, tmp4];
    const animatedStyle = obj1.useAnimatedStyle(S);
    obj = { style, children: null };
    const callback1 = obj.useCallback(() => {
      closure_1(!first);
    }, items1);
    const items2 = [tmp.collapsible, ];
    let tmp22 = null;
    if (sum > 0) {
      tmp22 = animatedStyle;
    }
    obj1 = { style: null, children: null };
    items2[1] = tmp22;
    obj1.style = items2;
    const obj2 = { onLayout: callback, children: null };
    const obj3 = { onPress: callback1 };
    obj2.children = children(obj3);
    const items3 = [c6(closure_5, obj2), ];
    const obj4 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items3[1] = c6(closure_5, obj4);
    obj1.children = items3;
    obj.children = closure_7(require("ReanimatedRexport").View, obj1);
    return c6(closure_5, obj);
  } else {
    num = 0;
  }
  num = first2;
};