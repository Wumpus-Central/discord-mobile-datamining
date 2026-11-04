// === Module 16216: Checkbox/Checkbox ===

// Module 16216 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5851 */;
import _modDef16217 from "module_16217" /* 16217 */;
import _modDef16218 from "module_16218" /* 16218 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16217;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16218;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};