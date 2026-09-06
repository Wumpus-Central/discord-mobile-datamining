// _runtime/metro/06816__.js
import _mod17 from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";
import _mod6817 from "06817__.js";
import noop from "00019__.js";

const useMemo = noop.useMemo;
const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const memoResult = noop.memo((arg0) => {
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [_mod6817.styles.container, backgroundStyle];
    return StyleSheet.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(6818).BottomSheetBackground;
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
