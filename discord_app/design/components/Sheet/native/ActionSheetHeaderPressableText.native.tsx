// === Module 9010: ActionSheetHeaderPressableText ===

// Module 9010 (ActionSheetHeaderPressableText)
import jsxProd from "jsxProd" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import Pressables from "Pressables" /* 6980 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  const obj = { style: closure_3().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp5;
  obj.children = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
  return jsx(Pressables.PressableOpacity, { style: closure_3().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
}