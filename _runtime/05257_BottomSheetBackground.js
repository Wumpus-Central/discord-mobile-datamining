// _runtime/05257_BottomSheetBackground.js
import _mod5256 from "metro/05256__.js";
import noop from "metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const memoResult = fn(19).memo((pointerEvents) => {
  const obj = {
    pointerEvents: pointerEvents.pointerEvents,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: "Bottom Sheet",
    style: null,
  };
  items = [_mod5256.styles.background, pointerEvents.style];
  obj.style = items;
  return (
    <View
      pointerEvents={pointerEvents.pointerEvents}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel="Bottom Sheet"
      style={null}
    />
  );
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
