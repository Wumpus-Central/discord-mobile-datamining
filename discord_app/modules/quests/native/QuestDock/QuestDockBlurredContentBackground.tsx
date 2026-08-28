// === Module 14695: ? ===

// Module 14695
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(blurTheme) {
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ animatedStyle, animatedLayout } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const items = [str];
  const items1 = [str];
  const android_fallbackColor = importAllResult.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const tintColor = importAllResult.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const style = [StyleSheet.absoluteFillObject, animatedStyle];
  return jsx(str(4882), { nativeID: "quest-dock-blurred-background", tintColor, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor, style, layout });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;