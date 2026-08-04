// discord_app/design/void/Collapsible/native/Collapsible.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { stiffness: 150, overshootClamping: true };
createCacheKey = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  let children;
  let collapsibleContent;
  let style;
  isExpanded = isExpanded.isExpanded;
  let first;
  let importDefault;
  let first1;
  let callback;
  let first2;
  let closure_5;
  let c6;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = createCacheKey();
  let obj = first2;
  const tmp2 = callback(first2.useState(false), 2);
  first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = callback(first2.useState(0), 2);
  first1 = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first2.useState(0), 2);
  first2 = tmp7[0];
  closure_5 = tmp7[1];
  const items = [first1];
  [][0] = first2;
  callback = first2.useCallback((nativeEvent) => {
    if (0 === first1) {
      callback(nativeEvent.nativeEvent.layout.height);
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
        obj2 = c0(c2[7]);
        obj[0] = obj2.withSpring(c6, outer1_8);
        return obj;
      }
    }
    obj = { withSpring: null, totalHeight: null, EXPAND_SPRING: null };
    obj[0] = first(first1[7]).withSpring;
    obj[1] = sum;
    obj[2] = closure_8;
    S.__closure = obj;
    S.__workletHash = 1072657539267;
    S.__initData = closure_10;
    const items1 = [first, tmp4];
    const animatedStyle = obj1.useAnimatedStyle(S);
    obj = { style: null, children: null };
    obj[0] = style;
    const callback1 = obj.useCallback(() => {
      _undefined(!first);
    }, items1);
    const items2 = [tmp.collapsible, ];
    let tmp22 = null;
    if (sum > 0) {
      tmp22 = animatedStyle;
    }
    obj1 = { style: null, children: null };
    items2[1] = tmp22;
    obj1[0] = items2;
    const obj2 = { onLayout: null, children: null };
    obj2[0] = callback;
    const obj3 = { onPress: null };
    obj3[0] = callback1;
    obj2[1] = children(obj3);
    const items3 = [c6(closure_5, obj2), ];
    const obj4 = { style: null, onLayout: null, children: null };
    obj4[0] = tmp.collapsibleContent;
    obj4[1] = tmp10;
    obj4[2] = collapsibleContent;
    items3[1] = c6(closure_5, obj4);
    obj1[1] = items3;
    obj[1] = closure_7(importDefault(first1[6]).View, obj1);
    return c6(closure_5, obj);
  } else {
    num = 0;
  }
  num = first2;
};