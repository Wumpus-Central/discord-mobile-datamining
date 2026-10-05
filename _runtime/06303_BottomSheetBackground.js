// _runtime/06303_BottomSheetBackground.js
import react_native from "00017_react-native.js";
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import react_native2 from "06302_react-native.js";

const memo = react2.memo;
const View = react_native.View;
const jsx = Fragment.jsx;
const memoResult = memo((pointerEvents) => {
  const style = pointerEvents.style;
  const items = [react_native2.styles.background, style];
  return (
    <View
      pointerEvents={pointerEvents.pointerEvents}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel="Bottom Sheet"
      style={items}
    />
  );
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
