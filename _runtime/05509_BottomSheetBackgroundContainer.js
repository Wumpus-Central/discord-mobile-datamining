// _runtime/05509_BottomSheetBackgroundContainer.js
import noop from "noop";
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const useMemo = noop.useMemo;
const memoResult = noop.memo((arg0) => {
  let animatedIndex;
  let animatedPosition;
  let backgroundComponent;
  let backgroundStyle;
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [backgroundStyle(outer1_1[3]).styles.container, backgroundStyle];
    return outer1_3.flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(5511).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;