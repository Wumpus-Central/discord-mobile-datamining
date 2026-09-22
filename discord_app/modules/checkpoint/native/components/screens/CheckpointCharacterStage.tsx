// === Module 15983: CheckpointCharacterStage ===

// Module 15983 (CheckpointCharacterStage)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4753 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(children) {
  const obj = { style: closure_5().container, children: null };
  const items = [React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: children.stage })];
  obj.children = items;
  return React4(View, obj);
};