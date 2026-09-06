// discord_app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  const obj = {
    style: closure_3().container,
    accessibilityRole: "button",
    onPress: onPress.onPress,
    accessibilityLabel: null,
    children: null,
  };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp5;
  obj.children = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
  return jsx(Pressables.PressableOpacity, {
    style: closure_3().container,
    accessibilityRole: "button",
    onPress: onPress.onPress,
    accessibilityLabel: null,
    children: null,
  });
};
