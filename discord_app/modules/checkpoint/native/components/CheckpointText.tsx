// === Module 15814: CheckpointText ===

// Module 15814 (CheckpointText)
import jsxProd from "jsxProd" /* 21 */;
import Text_Text from "Text/Text" /* 4636 */;
import CheckpointConstants from "CheckpointConstants" /* 4866 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let closure_3 = { color: CheckpointConstants.CHECKPOINT_PRIMARY };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default function CheckpointText(arg0) {
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_3, style];
  obj.style = items;
  obj.children = children;
  return jsx(Text_Text.Text, {});
};