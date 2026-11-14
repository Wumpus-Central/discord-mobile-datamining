// === Module 14269: CheckpointUnavailableScreen ===

// Module 14269 (CheckpointUnavailableScreen)
import nativeDefault from "native" /* 575 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { container: { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_64 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointUnavailableScreen.tsx");

export default function CheckpointUnavailableScreen(children) {
  const obj = { children: null };
  const tmp = closure_4();
  const obj2 = { style: closure_4().container, children: children.children };
  obj.children = <View style={closure_4().container}>{children.children}</View>;
  return jsx(CheckpointScreenDefault, { children: null });
};