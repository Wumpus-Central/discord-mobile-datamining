// === Module 5781: BottomSheetBackgroundContainer ===

// Module 5781 (BottomSheetBackgroundContainer)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noopDefault from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import noop from "noop" /* 19 */;

const useMemo = noop.useMemo;
noopDefault;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = jsxProd.jsx;
const memoResult = noop.memo((arg0) => {
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [backgroundStyle(closure_1_1[3]).styles.container, backgroundStyle];
    return closure_1_3.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(5783).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;