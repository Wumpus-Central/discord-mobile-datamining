// === Module 7011: BottomSheetBackground ===

// Module 7011 (BottomSheetBackground)
import _mod7010 from "module_7010" /* 7010 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const memoResult = fn(19).memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [_mod7010.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={pointerEvents.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;