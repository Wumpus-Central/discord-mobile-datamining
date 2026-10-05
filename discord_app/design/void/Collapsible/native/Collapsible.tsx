// === Module 13911: Collapsible ===

// Module 13911 (Collapsible)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const EXPAND_SPRING = { stiffness: 150, overshootClamping: true };
const createStyles = fn(4890);
let obj2 = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const __initData2 = { code: "function CollapsibleTsx2(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = first(first1[7]).c(26);
  ({ children, collapsibleContent, isExpanded, style } = arg0);
  const tmp4 = closure_9();
  [first, importDefault] = first2.useState(false);
  [first1, _slicedToArray] = first2.useState(0);
  [first2, View] = first2.useState(0);
  if (cResult[0] !== first1) {
    const fn = function _(nativeEvent) {
      if (0 === first1) {
        closure_3(nativeEvent.nativeEvent.layout.height);
      }
    };
    cResult[0] = first1;
    cResult[1] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== first2) {
    class X {
      constructor(arg0) {
        if (0 === closure_4) {
          tmp = arg0;
          tmp2 = closure_5;
          tmp3 = closure_5(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    cResult[2] = first2;
    cResult[3] = X;
  } else {
    class X {
      constructor(arg0) {
        if (0 === closure_4) {
          tmp = arg0;
          tmp2 = closure_5;
          tmp3 = closure_5(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
  }
  if (isExpanded == null) {
    class X {
      constructor(arg0) {
        if (0 === closure_4) {
          tmp = arg0;
          tmp2 = closure_5;
          tmp3 = closure_5(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    const sum = first1 + first2;
    closure_6 = sum;
    const fn2 = function j() {
      const obj = { height: spring.withSpring(sum, closure_8) };
      return obj;
    };
    const obj2 = { withSpring: tmp(tmp2[9]).withSpring, totalHeight: sum, EXPAND_SPRING };
    fn2.__closure = obj2;
    fn2.__workletHash = 1072657539267;
    fn2.__initData = __initData;
    const animatedStyle = tmp(tmp2[8]).useAnimatedStyle(fn2);
    if (cResult[4] !== first) {
      class V {
        constructor() {
          tmp = closure_1(!closure_0);
          return;
        }
      }
      cResult[4] = first;
      cResult[5] = V;
    } else {
      class V {
        constructor() {
          tmp = closure_1(!closure_0);
          return;
        }
      }
    }
    if (sum > 0) {
      class V {
        constructor() {
          tmp = closure_1(!closure_0);
          return;
        }
      }
    }
    if (cResult[6] === tmp4.collapsible) {
      class V {
        constructor() {
          tmp = closure_1(!closure_0);
          return;
        }
      }
      if (cResult[9] === children) {
        class V {
          constructor() {
            tmp = closure_1(!closure_0);
            return;
          }
        }
        if (cResult[12] === tmp11) {
          class V {
            constructor() {
              tmp = closure_1(!closure_0);
              return;
            }
          }
          if (cResult[15] === collapsibleContent) {
            class V {
              constructor() {
                tmp = closure_1(!closure_0);
                return;
              }
            }
          }
          const obj3 = { style: tmp4.collapsibleContent, onLayout: X, children: collapsibleContent };
          const tmp29 = closure_6(View, obj3);
          cResult[15] = collapsibleContent;
          cResult[16] = X;
          cResult[17] = tmp4.collapsibleContent;
          cResult[18] = tmp29;
        }
        const obj4 = { onLayout: tmp11, children: tmp20 };
        const tmp25 = closure_6(View, obj4);
        cResult[12] = tmp11;
        cResult[13] = tmp20;
        cResult[14] = tmp25;
      }
      const obj5 = { onPress: V };
      const childrenResult = children(obj5);
      cResult[9] = children;
      cResult[10] = V;
      cResult[11] = childrenResult;
    }
    const items = [tmp4.collapsible, null];
    cResult[6] = tmp4.collapsible;
    cResult[7] = null;
    cResult[8] = items;
    const tmpResult = tmp(tmp2[8]);
  } else {
    class V {
      constructor() {
        tmp = closure_1(!closure_0);
        return;
      }
    }
  }
  let obj = first(first1[7]);
}) : ((isExpanded) => {
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
    const fn = function v() {
      const obj = { height: spring.withSpring(c6, closure_8) };
      return obj;
    };
    const obj3 = { withSpring: first(first1[9]).withSpring, totalHeight: sum, EXPAND_SPRING };
    fn.__closure = obj3;
    fn.__workletHash = 16011681899808;
    fn.__initData = __initData2;
    const items1 = [first, tmp4];
    const animatedStyle = first(first1[8]).useAnimatedStyle(fn);
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
});