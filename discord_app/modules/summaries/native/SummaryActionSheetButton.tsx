// discord_app/modules/summaries/native/SummaryActionSheetButton.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = {
  container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 },
  iconBox: null,
  icon: null,
  name: null,
};
createCacheKey = {
  borderRadius: ThemesDefault.radii.round,
  border: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
};
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 12, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { margin: 12, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = callback3();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  obj = { style: items, children: callback(Button.Icon, obj) };
  items = [tmp.iconBox];
  obj = { style: tmp.icon, source: iconSource };
  const items1 = [
    callback(View, obj),
    callback(Text.Text, {
      style: tmp.name,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      children: label,
    }),
  ];
  obj[4] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};
