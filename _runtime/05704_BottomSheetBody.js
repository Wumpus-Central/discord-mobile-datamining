// _runtime/05704_BottomSheetBody.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import _mod5705 from "metro/05705__.js";
import noop_mod from "metro/00019__.js";

const require = globalThis.__r;

let noop = noop_mod;
({ useMemo: c3, memo } = noop);
let noop = noop_mod;
const Platform = _mod17.Platform;
const jsx = jsxProd.jsx;
let closure_6 = {
  code: "(function pnpm_BottomSheetBodyTsx1(){let[Platform,animatedIndex,animatedPosition]=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};})",
};
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  _require = style;
  let View = children.BodyComponent;
  if (View === undefined) {
    View = animatedStyle(1652).View;
  }
  const bottomSheetInternal = require("metro/05512__.js").useBottomSheetInternal();
  ({ animatedIndex, animatedPosition } = bottomSheetInternal);
  let obj = require("metro/05512__.js");
  items = [closure_6, Platform, animatedIndex, animatedPosition];
  _require = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_BottomSheetBodyTsx1() {
    let num = 1;
    if ("android" === _undefined.OS) {
      num = 1;
      if (-1 === animatedStyle.get()) {
        num = 0;
      }
    }
    const obj = { opacity: num, transform: null };
    items = [{ translateY: _undefined2.get() }];
    obj.transform = items;
    return obj;
  }
  const items1 = [tmp5, tmp6, tmp7];
  pnpm_BottomSheetBodyTsx1.__closure = items1;
  pnpm_BottomSheetBodyTsx1.__workletHash = 9021942799135;
  pnpm_BottomSheetBodyTsx1.__initData = tmp4;
  const items2 = [animatedPosition, animatedIndex];
  animatedStyle = require("metro/01652__.js").useAnimatedStyle(pnpm_BottomSheetBodyTsx1, items2);
  const items3 = [style, animatedStyle];
  const obj2 = require("metro/01652__.js");
  return (
    <View
      style={closure_3(() => {
        items = [c0, _mod5705.styles.container, animatedStyle];
        return items;
      }, items3)}
      collapsable
    >
      {children.children}
    </View>
  );
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
