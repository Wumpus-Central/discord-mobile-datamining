// _runtime/05821_BottomSheetBackgroundContainer.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";

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
    backgroundComponent = backgroundStyle(5823).BottomSheetBackground;
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
