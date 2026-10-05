// discord_app/modules/checkpoint/native/components/CheckpointHeaderButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Pressable = react_native.Pressable;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let obj = {
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: CHECKPOINT_PRIMARY,
  },
};
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let children;
      let onPress;
      const obj = react;
      const cResult = obj.c(5);
      ({ accessibilityLabel, children, onPress } = arg0);
      const tmp3 = closure_5();
      if (cResult[0] === accessibilityLabel) {
        if (cResult[1] === children) {
          if (cResult[2] === onPress) {
            let tmp4;
            if (cResult[3] === tmp3.button) {
              tmp4 = cResult[4];
            }
            return tmp4;
          }
        }
      }
      const tmp5 = (
        <Pressable
          style={tmp3.button}
          hitSlop={nativeDefault.space.PX_8}
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
        >
          {children}
        </Pressable>
      );
      cResult[0] = accessibilityLabel;
      cResult[1] = children;
      cResult[2] = onPress;
      cResult[3] = tmp3.button;
      cResult[4] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let accessibilityLabel;
      let children;
      let onPress;
      ({ accessibilityLabel, children, onPress } = arg0);
      return (
        <Pressable
          style={closure_5().button}
          hitSlop={nativeDefault.space.PX_8}
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
        >
          {children}
        </Pressable>
      );
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default tmp2;
