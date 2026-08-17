// discord_app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import Text from "../../Text/native/Text.tsx";
import PressableBase from "../../../void/Pressables/native/Pressables.tsx";
import createCacheKey from "../../Styles/native/createStyles.tsx";

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