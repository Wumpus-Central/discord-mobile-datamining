// _runtime/metro/06301__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import react_native2 from "../06302_react-native.js";
import react_mod from "../00019_react.js";

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
    backgroundComponent = backgroundStyle(6303).BottomSheetBackground;
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
