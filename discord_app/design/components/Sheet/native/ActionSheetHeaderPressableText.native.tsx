// === Module 9701: ActionSheetHeaderPressableText ===

// Module 9701 (ActionSheetHeaderPressableText)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5076 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const jsx = jsxProd.jsx;
let closure_3 = createCacheKey.createStyles(() => ({ container: { marginTop: 3 } }));
const result = set.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  const obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj[3] = tmp5;
  obj[4] = jsx(Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
  return jsx(PressableBase.PressableOpacity, { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
};