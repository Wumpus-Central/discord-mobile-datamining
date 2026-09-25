// === Module 15250: CheckpointHeaderButton ===

// Module 15250 (CheckpointHeaderButton)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5054 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const Pressable = _mod17.Pressable;
const jsx = jsxProd.jsx;
let closure_4 = createStyles.createStyles({ button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CheckpointConstants.CHECKPOINT_PRIMARY } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default function CheckpointHeaderButton(arg0) {
  ({ accessibilityLabel, children, onPress } = arg0);
  return <Pressable style={closure_4().button} hitSlop={nativeDefault.space.PX_8} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>{children}</Pressable>;
};