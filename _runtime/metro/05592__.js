// === Module 5592: ? ===

// Module 5592
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _mod5593 from "module_5593" /* 5593 */;
import noop_mod from "module_19" /* 19 */;

let noop = noop_mod;
const useMemo = noop.useMemo;
let noop = noop_mod;
const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const memoResult = noop.memo((arg0) => {
  ({ backgroundComponent, backgroundStyle } = arg0);
  items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    items = [_mod5593.styles.container, backgroundStyle];
    return StyleSheet.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(5594).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;