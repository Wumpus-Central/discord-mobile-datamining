// === Module 6303: BottomSheetBackground ===

// Module 6303 (BottomSheetBackground)
import _mod6302 from "module_6302" /* 6302 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const memoResult = fn(19).memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [_mod6302.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={pointerEvents.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;