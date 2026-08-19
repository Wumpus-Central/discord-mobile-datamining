// === Module 7000: BottomSheetBackgroundContainer ===

// Module 7000 (BottomSheetBackgroundContainer)
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
    const items = [backgroundStyle(dependencyMap[3]).styles.container, backgroundStyle];
    return StyleSheet.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(7002).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;