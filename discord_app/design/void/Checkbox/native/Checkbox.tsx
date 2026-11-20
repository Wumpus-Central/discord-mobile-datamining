// === Module 15258: Checkbox/Checkbox ===

// Module 15258 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5481 */;
import _modDef15259 from "module_15259" /* 15259 */;
import _modDef15260 from "module_15260" /* 15260 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15259;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15260;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};