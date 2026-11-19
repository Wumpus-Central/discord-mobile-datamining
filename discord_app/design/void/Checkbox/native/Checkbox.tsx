// === Module 15294: Checkbox/Checkbox ===

// Module 15294 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5479 */;
import _modDef15295 from "module_15295" /* 15295 */;
import _modDef15296 from "module_15296" /* 15296 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15295;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15296;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};