// discord_app/modules/summaries/native/SummaryActionSheetButton.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: null, icon: null, name: null };
createCacheKey = { borderRadius: require("Themes").radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 12, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { margin: 12, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  let iconSource;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  obj = { style: items, children: null };
  items = [tmp.iconBox];
  obj = { style: tmp.icon, source: iconSource };
  obj[1] = callback(Button.Icon, obj);
  const items1 = [callback(View, obj), callback(Text.Text, { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label })];
  obj[4] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};