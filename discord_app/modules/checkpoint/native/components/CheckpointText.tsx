// discord_app/modules/checkpoint/native/components/CheckpointText.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
