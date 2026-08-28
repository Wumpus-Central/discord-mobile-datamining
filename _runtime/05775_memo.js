// === Module 5775: memo ===

// Module 5775 (memo)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noopDefault from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import noop from "noop" /* 19 */;

({ useMemo: c3, memo } = noop);
noopDefault;
const Platform = get_ActivityIndicator.Platform;
const jsx = jsxProd.jsx;
let closure_6 = { code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}" };
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  let View = children.BodyComponent;
  if (View === undefined) {
    View = animatedIndex(animatedPosition[3]).View;
  }
  animatedIndex = undefined;
  animatedPosition = undefined;
  let animatedStyle;
  let obj = style(animatedPosition[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedIndex = bottomSheetInternal.animatedIndex;
  animatedPosition = bottomSheetInternal.animatedPosition;
  const fn = function y() {
    let num = 1;
    if (-1 === animatedIndex.get()) {
      num = 0;
    }
    let obj = { opacity: num, transform: null };
    obj = { translateY: animatedPosition.get() };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { Platform, animatedIndex, animatedPosition };
  fn.__closure = obj;
  fn.__workletHash = 5915282482182;
  fn.__initData = closure_6;
  let items = [animatedPosition, animatedIndex];
  animatedStyle = style(animatedPosition[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  obj = {
    style: animatedStyle(() => {
      const items = [style, style(animatedPosition[5]).styles.container, animatedStyle];
      return items;
    }, items1),
    collapsable: true,
    children: children.children
  };
  return <View style={animatedStyle(() => {
    const items = [style, style(animatedPosition[5]).styles.container, animatedStyle];
    return items;
  }, items1)} collapsable>{arg0.children}</View>;
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;