// === Module 15161: QuestDockBlurredContentBackground ===

// Module 15161 (QuestDockBlurredContentBackground)
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 4964 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default noop.memo(function QuestDockBlurredContentBackground(blurTheme) {
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ animatedStyle, animatedLayout } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const items = [str];
  const items1 = [str];
  const memo = noop.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const memo1 = noop.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const obj = { nativeID: "quest-dock-blurred-background", tintColor: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo, style: null, layout: animatedLayout };
  const items2 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj.style = items2;
  return jsx(VisualEffectViewAnimatedDefault, { nativeID: "quest-dock-blurred-background", tintColor: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo, style: null, layout: animatedLayout });
});