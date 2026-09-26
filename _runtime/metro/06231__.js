// _runtime/metro/06231__.js
import _mod17 from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";
import _mod6232 from "06232__.js";
import noop_mod from "00019__.js";

let noop = noop_mod;
({ useMemo: c3, memo } = noop);
let noop = noop_mod;
const Platform = _mod17.Platform;
const jsx = jsxProd.jsx;
const __initData = {
  code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}",
};
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  let View = children.BodyComponent;
  if (View === undefined) {
    View = animatedIndex(animatedPosition[3]).View;
  }
  animatedPosition = undefined;
  const bottomSheetInternal = style(animatedPosition[4]).useBottomSheetInternal();
  animatedIndex = bottomSheetInternal.animatedIndex;
  animatedPosition = bottomSheetInternal.animatedPosition;
  let obj = style(animatedPosition[4]);
  const fn = function y() {
    let num = 1;
    if (-1 === animatedIndex.get()) {
      num = 0;
    }
    const obj = { opacity: num, transform: null };
    const items = [{ translateY: animatedPosition.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { Platform, animatedIndex, animatedPosition };
  fn.__workletHash = 5915282482182;
  fn.__initData = __initData;
  let items = [animatedPosition, animatedIndex];
  const animatedStyle = style(animatedPosition[3]).useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  const obj2 = style(animatedPosition[3]);
  const obj3 = { Platform, animatedIndex, animatedPosition };
  return (
    <View
      style={animatedStyle(() => {
        const items = [style, _mod6232.styles.container, animatedStyle];
        return items;
      }, items1)}
      collapsable
    >
      {children.children}
    </View>
  );
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
