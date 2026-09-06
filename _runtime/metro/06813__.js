// === Module 6813: ? ===

// Module 6813
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _mod6814 from "module_6814" /* 6814 */;
import noop from "module_19" /* 19 */;

({ useMemo: c3, memo } = noop);
const Platform = _mod17.Platform;
const jsx = jsxProd.jsx;
const __initData = { code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}" };
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  let View = children.BodyComponent;
  if (View === undefined) {
    View = animatedIndex(animatedPosition[3]).View;
  }
  animatedPosition = undefined;
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
    obj.transform = items;
    return obj;
  };
  obj = { Platform, animatedIndex, animatedPosition };
  fn.__closure = obj;
  fn.__workletHash = 5915282482182;
  fn.__initData = __initData;
  let items = [animatedPosition, animatedIndex];
  const animatedStyle = style(animatedPosition[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  obj = {
    style: animatedStyle(() => {
      const items = [style, _mod6814.styles.container, animatedStyle];
      return items;
    }, items1),
    collapsable: true,
    children: children.children
  };
  return <View style={animatedStyle(() => {
    const items = [style, _mod6814.styles.container, animatedStyle];
    return items;
  }, items1)} collapsable>{arg0.children}</View>;
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;