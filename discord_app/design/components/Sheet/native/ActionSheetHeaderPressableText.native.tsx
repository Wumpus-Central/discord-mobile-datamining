// discord_app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActionSheetHeaderPressableText(arg0) {
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
      const tmp10 = jsx(Pressables.PressableOpacity, {
        style: tmp4.container,
        accessibilityRole: "button",
        onPress,
        accessibilityLabel: tmp5,
        children: tmp6,
      });
      cResult[2] = onPress;
      cResult[3] = tmp4.container;
      cResult[4] = tmp5;
      cResult[5] = tmp6;
      cResult[6] = tmp10;
      tmp9 = tmp10;
      const obj3 = {
        style: tmp4.container,
        accessibilityRole: "button",
        onPress,
        accessibilityLabel: tmp5,
        children: tmp6,
      };
    }
  : function ActionSheetHeaderPressableText(onPress) {
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
