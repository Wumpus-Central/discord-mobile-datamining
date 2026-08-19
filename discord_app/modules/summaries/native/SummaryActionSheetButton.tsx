// === Module 10842: SummaryActionSheetButton ===

// Module 10842 (SummaryActionSheetButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 12, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = callback3();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  { style: items, children: callback(Button.Icon, obj) };
  items = [tmp.iconBox];
  obj = { style: tmp.icon, source: iconSource };
  const items1 = [callback(View, obj), callback(Text.Text, { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label })];
  obj[4] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};