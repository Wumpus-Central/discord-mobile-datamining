// discord_app/modules/checkpoint/native/components/CheckpointHeaderButton.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Pressable = _mod17.Pressable;
const jsx = jsxProd.jsx;
let closure_5 = createStyles.createStyles({
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: CheckpointConstants.CHECKPOINT_PRIMARY,
  },
});
let obj = {
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: CheckpointConstants.CHECKPOINT_PRIMARY,
  },
};
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointHeaderButton(arg0) {
      const cResult = c.c(5);
      ({ accessibilityLabel, children, onPress } = arg0);
      const tmp3 = closure_5();
      if (cResult[0] === accessibilityLabel) {
        if (cResult[1] === children) {
          if (cResult[2] === onPress) {
            if (cResult[3] === tmp3.button) {
              let tmp4 = cResult[4];
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
      const obj2 = {
        style: tmp3.button,
        hitSlop: nativeDefault.space.PX_8,
        onPress,
        accessibilityRole: "button",
        accessibilityLabel,
        children,
      };
    }
  : function CheckpointHeaderButton(arg0) {
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
