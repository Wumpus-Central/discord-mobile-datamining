// === Module 14162: CheckpointUnavailableScreen ===

// Module 14162 (CheckpointUnavailableScreen)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14163 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { container: { flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_64 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointUnavailableScreen.tsx");

export default function CheckpointUnavailableScreen(children) {
  const obj = { children: null };
  const obj2 = { style: closure_4().container, children: null };
  const tmp = closure_4();
  obj2.children = jsx(CheckpointTextDefault, { isStepHeading: true, variant: "heading-lg/medium", children: children.message });
  obj.children = <View style={closure_4().container}>{null}</View>;
  return jsx(CheckpointScreenDefault, { children: null });
};