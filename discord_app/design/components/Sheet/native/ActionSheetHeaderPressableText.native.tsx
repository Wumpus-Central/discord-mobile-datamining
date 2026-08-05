// discord_app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import { PressableBase } from "../../../void/Pressables/native/Pressables.tsx";
import { Text } from "../../Text/native/Text.tsx";

let closure_4 = createCacheKey.createStyles(() => ({ container: { marginTop: 3 } }));
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  let accessibilityLabel;
  let label;
  ({ label, accessibilityLabel } = onPress);
  let str = "text-md/semibold";
  if (useIsMobileVisualRefreshExperimentEnabled("ActionSheetHeaderPressableText")) {
    str = "text-md/medium";
  }
  const obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj[3] = tmp5;
  obj[4] = jsx(Text /* Text */.Text, { variant: str, color: "text-brand", children: label });
  return jsx(PressableBase /* PressableBase */.PressableOpacity, { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
};