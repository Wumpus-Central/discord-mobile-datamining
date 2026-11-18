// === Module 15308: Checkbox/Checkbox ===

// Module 15308 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5510 */;
import _modDef15309 from "module_15309" /* 15309 */;
import _modDef15310 from "module_15310" /* 15310 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15309;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15310;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};