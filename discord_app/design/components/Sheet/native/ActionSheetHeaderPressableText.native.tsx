// === Module 8546: ActionSheetHeaderPressableText ===

// Module 8546 (ActionSheetHeaderPressableText)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetHeaderPressableText(arg0) {
  const cResult = c.c(7);
  ({ onPress, label, accessibilityLabel } = arg0);
  const tmp4 = closure_3();
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-md/medium", color: "text-brand", children: label };
    const tmp8 = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
    cResult[0] = label;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === onPress) {
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp6) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = jsx(Pressables.PressableOpacity, { style: tmp4.container, accessibilityRole: "button", onPress, accessibilityLabel: tmp5, children: tmp6 });
  cResult[2] = onPress;
  cResult[3] = tmp4.container;
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const obj3 = { style: tmp4.container, accessibilityRole: "button", onPress, accessibilityLabel: tmp5, children: tmp6 };
}) : (function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  const obj = { style: closure_3().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp5;
  obj.children = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
  return jsx(Pressables.PressableOpacity, { style: closure_3().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
});