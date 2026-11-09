// === Module 16293: Collapsible ===

// Module 16293 (Collapsible)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5761 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { stiffness: 150, overshootClamping: true };
const createStyles = fn(5140);
const obj2 = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function CollapsibleTsx1(){let[withSpring,totalHeight,EXPAND_SPRING]=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  isExpanded = isExpanded.isExpanded;
  closure_3 = undefined;
  first2 = undefined;
  closure_5 = undefined;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  [first] = noop.useState(false);
  c0 = first;
  c1 = tmp4;
  [first1, closure_3] = noop.useState(0);
  c2 = first1;
  [first2, closure_5] = noop.useState(0);
  items = [first1];
  [][0] = first2;
  const callback = noop.useCallback((nativeEvent) => {
    if (0 === c2) {
      closure_3(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (isExpanded == null) {
    let num = 0;
    const sum = first1 + num;
    const items1 = [closure_10, spring_spring.withSpring, sum, closure_8];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp17, tmp18, tmp19, tmp20] = items1;
    class CollapsibleTsx1 {
      constructor() {
        obj = { height: closure_0(closure_1, closure_2) };
        return obj;
      }
    }
    const items2 = [tmp18, tmp19, tmp20];
    CollapsibleTsx1.__closure = items2;
    CollapsibleTsx1.__workletHash = 912890471066;
    CollapsibleTsx1.__initData = tmp17;
    const items3 = [first, tmp4];
    const animatedStyle = _mod1652.useAnimatedStyle(CollapsibleTsx1);
    const obj3 = { style, children: null };
    const callback1 = noop.useCallback(() => {
      _undefined2(!c0);
    }, items3);
    const items4 = [tmp.collapsible, ];
    let tmp27 = null;
    if (sum > 0) {
      tmp27 = animatedStyle;
    }
    const obj4 = { style: null, children: null };
    items4[1] = tmp27;
    obj4.style = items4;
    const obj5 = { onLayout: callback, children: null };
    const obj6 = { onPress: callback1 };
    obj5.children = children(obj6);
    const items5 = [timestampProducer(View, obj5), ];
    const obj7 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items5[1] = timestampProducer(View, obj7);
    obj4.children = items5;
    obj3.children = metroImportDefault(_modDef1652.View, obj4);
    return timestampProducer(View, obj3);
  } else {
    num = 0;
  }
  num = first2;
};