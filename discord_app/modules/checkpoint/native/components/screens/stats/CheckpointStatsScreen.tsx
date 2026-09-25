// === Module 15239: CheckpointStatsScreen ===

// Module 15239 (CheckpointStatsScreen)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15234 */;
import CheckpointTextDefault from "CheckpointText" /* 15236 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, name: { textTransform: "uppercase" } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx");

export default function CheckpointStatsScreen(children) {
  const tmp = closure_5();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" }), React3(CheckpointTextDefault, { variant: "display-md", style: tmp.name, adjustsFontSizeToFit: true, lineClamp: 2, children: children.name })];
  obj2.children = items;
  obj.children = React4(View, obj2);
  return React3(CheckpointScreenDefault, obj);
};