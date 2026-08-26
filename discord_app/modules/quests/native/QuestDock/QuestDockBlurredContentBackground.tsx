// discord_app/modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
  return jsx(str(4868), { nativeID: "quest-dock-blurred-background", tintColor, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor, style, layout });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;