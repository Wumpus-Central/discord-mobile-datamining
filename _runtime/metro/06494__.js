// _runtime/metro/06494__.js
import _mod17 from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";
import _mod6495 from "06495__.js";
import noop_mod from "00019__.js";

let noop = noop_mod;
const useMemo = noop.useMemo;
let noop = noop_mod;
const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const memoResult = noop.memo((arg0) => {
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [_mod6495.styles.container, backgroundStyle];
    return StyleSheet.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(6496).BottomSheetBackground;
  }
  return (
    <backgroundComponent
      pointerEvents="none"
      animatedIndex={animatedIndex}
      animatedPosition={animatedPosition}
      style={style}
    />
  );
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;
