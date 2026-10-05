// discord_app/modules/checkpoint/native/components/CheckpointButton.tsx
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointPressable from "CheckpointPressable.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointPressableDefault = CheckpointPressable;

let CHECKPOINT_BUTTON_BORDER;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ CHECKPOINT_PRIMARY: c3, CHECKPOINT_BUTTON_BORDER } = CheckpointConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = {
  justifyContent: "center",
  marginRight: -CheckpointPressable.SHADOW_OFFSET,
  marginBottom: -CheckpointPressable.SHADOW_OFFSET,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BLACK,
  borderWidth: 2,
  borderColor: CHECKPOINT_BUTTON_BORDER,
  height: 48,
};
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Icon;
      let items;
      let label;
      let onPress;
      let tmp4;
      const obj = react;
      const cResult = obj.c(12);
      ({ onPress, Icon, label } = arg0);
      const tmp3 = closure_6();
      if (cResult[0] !== Icon) {
        let tmp6 = null != Icon;
        if (tmp6) {
          const obj2 = { color, size: "sm" };
          tmp6 = React3(Icon, obj2);
        }
        cResult[0] = Icon;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === label) {
        let tmp9;
        if (cResult[3] === tmp3.label) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === label) {
          if (cResult[6] === onPress) {
            if (cResult[7] === tmp3.button) {
              if (cResult[8] === tmp3.container) {
                if (cResult[9] === tmp4) {
                  let tmp13;
                  if (cResult[10] === tmp9) {
                    tmp13 = cResult[11];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
        const obj3 = {
          containerStyle: null,
          style: null,
          onPress,
          accessibilityRole: "button",
          accessibilityLabel: label,
          children: items,
        };
        ({ container: obj4.containerStyle, button: obj4.style } = tmp3);
        items = [tmp4, tmp9];
        const tmp16 = hasOwnProperty(CheckpointPressableDefault, obj3);
        cResult[5] = label;
        cResult[6] = onPress;
        cResult[7] = tmp3.button;
        cResult[8] = tmp3.container;
        cResult[9] = tmp4;
        cResult[10] = tmp9;
        cResult[11] = tmp16;
        tmp13 = tmp16;
      }
      let tmp10 = null != label;
      if (tmp10) {
        const obj7 = { variant: "text-lg/medium", style: tmp3.label, children: label };
        tmp10 = React3(CheckpointTextDefault, obj7);
      }
      cResult[2] = label;
      cResult[3] = tmp3.label;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (onPress) => {
      let Icon;
      let items;
      let label;
      ({ Icon, label } = onPress);
      onPress = onPress.onPress;
      const tmp = closure_6();
      let tmp6 = null != Icon;
      const obj = {
        containerStyle: tmp.container,
        style: tmp.button,
        onPress,
        accessibilityRole: "button",
        accessibilityLabel: label,
        children: items,
      };
      const tmp5 = CheckpointPressableDefault;
      if (tmp6) {
        const obj2 = { color, size: "sm" };
        tmp6 = React3(Icon, obj2);
      }
      items = [tmp6];
      let tmp9 = null != label;
      if (tmp9) {
        const obj3 = { variant: "text-lg/medium", style: tmp.label, children: label };
        tmp9 = React3(CheckpointTextDefault, obj3);
      }
      items[1] = tmp9;
      return hasOwnProperty(tmp5, obj);
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default tmp5;
