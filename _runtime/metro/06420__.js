// === Module 6420: ? ===

// Module 6420
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _mod6421 from "module_6421" /* 6421 */;
import noop_mod from "module_19" /* 19 */;

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
    const items = [_mod6421.styles.container, backgroundStyle];
    return StyleSheet.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(6422).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;