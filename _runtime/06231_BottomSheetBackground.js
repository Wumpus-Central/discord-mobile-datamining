// _runtime/06231_BottomSheetBackground.js
import _mod6230 from "metro/06230__.js";
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
  const items = [_mod6230.styles.background, pointerEvents.style];
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
