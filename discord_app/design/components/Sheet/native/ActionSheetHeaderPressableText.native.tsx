// === Module 9191: ActionSheetHeaderPressableText ===

// Module 9191 (ActionSheetHeaderPressableText)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4440 */;
import PressableBase from "PressableBase" /* 5015 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles(() => ({ container: { marginTop: 3 } }));
const result = set.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  let str = "text-md/semibold";
  if (useIsMobileVisualRefreshExperimentEnabledDefault("ActionSheetHeaderPressableText")) {
    str = "text-md/medium";
  }
  const obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj[3] = tmp5;
  obj[4] = jsx(Text.Text, { variant: str, color: "text-brand", children: label });
  return jsx(PressableBase.PressableOpacity, { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
};