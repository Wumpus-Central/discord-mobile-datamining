// === Module 13929: Collapsible ===

// Module 13929 (Collapsible)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5604 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const EXPAND_SPRING = { stiffness: 150, overshootClamping: true };
let obj = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const __initData2 = { code: "function CollapsibleTsx2(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_1;
  let closure_3;
  let closure_5;
  let collapsibleContent;
  let first;
  let first1;
  let first2;
  let isExpanded;
  let style;
  let tmp11;
  let obj = first(first1[7]);
  const cResult = obj.c(26);
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
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== first2) {
    class X {
      constructor(nativeEvent) {
        if (0 === first2) {
          closure_5(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    cResult[2] = first2;
    cResult[3] = X;
  } else {
    class X {
      constructor(nativeEvent) {
        if (0 === first2) {
          closure_5(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
  }
  if (isExpanded == null) {
    class X {
      constructor(nativeEvent) {
        if (0 === first2) {
          closure_5(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    const sum = first1 + first2;
    let closure_6 = sum;
    const fn2 = function j() {
      let obj2;
      const obj = { height: obj2.withSpring(closure_6, EXPAND_SPRING) };
      obj2 = spring;
      return obj;
    };
    let obj2 = { withSpring: tmp(first1[9]).withSpring, totalHeight: sum, EXPAND_SPRING };
    const useAnimatedStyle = tmp(first1[8]).useAnimatedStyle;
    first(first1[8]);
    fn2.__closure = obj2;
    fn2.__workletHash = 1072657539267;
    fn2.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn2);
    if (cResult[4] !== first) {
      class V {
        constructor() {
          closure_1(!first);
        }
      }
      cResult[4] = first;
      cResult[5] = V;
    } else {
      class V {
        constructor() {
          closure_1(!first);
        }
      }
    }
    if (sum > 0) {
      class V {
        constructor() {
          closure_1(!first);
        }
      }
    }
    if (cResult[6] === tmp4.collapsible) {
      class V {
        constructor() {
          closure_1(!first);
        }
      }
      if (cResult[9] === children) {
        class V {
          constructor() {
            closure_1(!first);
          }
        }
        if (cResult[12] === tmp11) {
          class V {
            constructor() {
              closure_1(!first);
            }
          }
          if (cResult[15] === collapsibleContent) {
            class V {
              constructor() {
                closure_1(!first);
              }
            }
          }
          const obj3 = { style: tmp4.collapsibleContent, onLayout: X, children: collapsibleContent };
          cResult[15] = collapsibleContent;
          cResult[16] = X;
          cResult[17] = tmp4.collapsibleContent;
          cResult[18] = closure_6(View, obj3);
          const tmp30 = closure_6(View, obj3);
        }
        const obj4 = { onLayout: tmp11, children: tmp21 };
        cResult[12] = tmp11;
        cResult[13] = tmp21;
        cResult[14] = closure_6(View, obj4);
        const tmp26 = closure_6(View, obj4);
      }
      const obj5 = { onPress: V };
      cResult[9] = children;
      cResult[10] = V;
      cResult[11] = children(obj5);
      const childrenResult = children(obj5);
    }
    const items = [tmp4.collapsible, null];
    cResult[6] = tmp4.collapsible;
    cResult[7] = null;
    cResult[8] = items;
  } else {
    class V {
      constructor() {
        closure_1(!first);
      }
    }
  }
}) : ((isExpanded) => {
  let children;
  let closure_1;
  let closure_3;
  let closure_5;
  let collapsibleContent;
  let first1;
  let first2;
  let items3;
  let num;
  let obj4;
  let obj6;
  let style;
  isExpanded = isExpanded.isExpanded;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_5 = undefined;
  let c6;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  let obj = first2;
  const tmp2 = _slicedToArray(first2.useState(false), 2);
  const first = tmp2[0];
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
    num = 0;
    const sum = first1 + num;
    c6 = sum;
    const fn = function v() {
      let obj2;
      const obj = { height: obj2.withSpring(c6, EXPAND_SPRING) };
      obj2 = spring;
      return obj;
    };
    let obj2 = { withSpring: first(first1[9]).withSpring, totalHeight: sum, EXPAND_SPRING };
    const useAnimatedStyle = first(first1[8]).useAnimatedStyle;
    first(first1[8]);
    fn.__closure = obj2;
    fn.__workletHash = 16011681899808;
    fn.__initData = __initData2;
    const items1 = [first, tmp2[1]];
    const animatedStyle = useAnimatedStyle(fn);
    const obj3 = { style, children: closure_7(View, obj4) };
    const callback1 = obj.useCallback(() => {
      closure_1(!first);
    }, items1);
    const items2 = [tmp.collapsible, ];
    let tmp23 = null;
    View = require("ReanimatedRexport").View;
    if (sum > 0) {
      tmp23 = animatedStyle;
    }
    obj4 = { style: items2, children: items3 };
    items2[1] = tmp23;
    const obj5 = { onLayout: callback, children: children(obj6) };
    obj6 = { onPress: callback1 };
    items3 = [c6(closure_5, obj5), ];
    const obj7 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items3[1] = c6(closure_5, obj7);
    return c6(closure_5, obj3);
  } else {
    num = 0;
  }
  num = first2;
});
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default tmp3;