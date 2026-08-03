// === Module 14269: ? ===

// Module 14269
import importAllResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const memoResult = importAllResult.memo(function QuestDockBlurredContentBackground(blurTheme) {
  let animatedLayout;
  let animatedStyle;
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ animatedStyle, animatedLayout } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const items = [str];
  const items1 = [str];
  const android_fallbackColor = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const blurTintRgba = importAllResult.useMemo(() => {
    let str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const style = [StyleSheet.absoluteFillObject, animatedStyle];
  return jsx(str(4655), { nativeID: "quest-dock-blurred-background", blurTintRgba, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor, style, layout });
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;