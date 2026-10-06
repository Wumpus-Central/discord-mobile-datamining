// === Module 6308: ? ===

// Module 6308
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 6309 */;
import react_mod from "react" /* 19 */;

let react = react_mod;
const useMemo = react.useMemo;
const memo = react.memo;
react = react_mod;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memoResult = memo((arg0) => {
  let animatedIndex;
  let animatedPosition;
  let backgroundComponent;
  let backgroundStyle;
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const flatten = StyleSheet.flatten;
    const items = [react_native2.styles.container, backgroundStyle];
    return flatten(items);
  }, items);
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(6310).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;