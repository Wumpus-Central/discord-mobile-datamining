// discord_app/design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let label;
      let onPress;
      let tmp6;
      const obj = react;
      const cResult = obj.c(7);
      ({ onPress, label, accessibilityLabel } = arg0);
      const tmp4 = closure_3();
      let tmp5 = label;
      if (null != accessibilityLabel) {
        tmp5 = accessibilityLabel;
      }
      if (cResult[0] !== label) {
        const tmp8 = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
        cResult[0] = label;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === onPress) {
        if (cResult[3] === tmp4.container) {
          if (cResult[4] === tmp5) {
            let tmp9;
            if (cResult[5] === tmp6) {
              tmp9 = cResult[6];
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
    }
  : (onPress) => {
      let accessibilityLabel;
      let label;
      ({ label, accessibilityLabel } = onPress);
      onPress = onPress.onPress;
      let tmp5 = label;
      const PressableOpacity = Pressables.PressableOpacity;
      if (null != accessibilityLabel) {
        tmp5 = accessibilityLabel;
      }
      return (
        <PressableOpacity
          style={closure_3().container}
          accessibilityRole="button"
          onPress={onPress}
          accessibilityLabel={tmp5}
        >
          {null}
        </PressableOpacity>
      );
    };
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = tmp2;
