// _runtime/06305_BottomSheetBody.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import react_native2 from "06306_react-native.js";
import react_mod from "00019_react.js";

let c3;
let memo;
let react = react_mod;
({ useMemo: c3, memo } = react);
react = react_mod;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
const __initData = {
  code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}",
};
const memoResult = memo(function BottomSheetBodyComponent(style) {
  let animatedIndex;
  let animatedPosition;
  style = style.style;
  let View = style.BodyComponent;
  const children = style.children;
  if (View === undefined) {
    View = animatedIndex(animatedPosition[3]).View;
  }
  animatedPosition = undefined;
  let obj = style(animatedPosition[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedIndex = bottomSheetInternal.animatedIndex;
  animatedPosition = bottomSheetInternal.animatedPosition;
  const obj2 = style(animatedPosition[3]);
  const fn = function y() {
    let items;
    let num = 1;
    if (-1 === animatedIndex.get()) {
      num = 0;
    }
    const obj = { opacity: num, transform: items };
    items = [{ translateY: animatedPosition.get() }];
    ({ translateY: animatedPosition.get() });
    return obj;
  };
  const obj3 = { Platform, animatedIndex, animatedPosition };
  fn.__closure = obj3;
  fn.__workletHash = 5915282482182;
  fn.__initData = __initData;
  let items = [animatedPosition, animatedIndex];
  const animatedStyle = obj2.useAnimatedStyle(fn, items);
  const items1 = [style, animatedStyle];
  return (
    <View
      style={animatedStyle(() => {
        const items = [style, react_native2.styles.container, animatedStyle];
        return items;
      }, items1)}
      collapsable
    >
      {children}
    </View>
  );
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
