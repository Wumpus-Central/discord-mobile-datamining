// === Module 15554: CheckpointHeaderButton ===

// Module 15554 (CheckpointHeaderButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointConstants from "CheckpointConstants" /* 5115 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let obj = { button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY } };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const tmp5 = <Pressable style={tmp3.button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
  cResult[0] = accessibilityLabel;
  cResult[1] = children;
  cResult[2] = onPress;
  cResult[3] = tmp3.button;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let accessibilityLabel;
  let children;
  let onPress;
  ({ accessibilityLabel, children, onPress } = arg0);
  return <Pressable style={closure_5().button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default tmp2;