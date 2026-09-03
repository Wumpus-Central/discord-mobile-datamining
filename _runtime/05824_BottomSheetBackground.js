// === Module 5824: BottomSheetBackground ===

// Module 5824 (BottomSheetBackground)
import noopDefault from "noop" /* 19 */;
import styles from "styles" /* 5823 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopDefault;
const memoResult = require("noop").memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [styles.styles.background, pointerEvents.style];
  obj[4] = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;