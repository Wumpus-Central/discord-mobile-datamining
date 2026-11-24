// === Module 15402: Checkbox/Checkbox ===

// Module 15402 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5604 */;
import _modDef15403 from "module_15403" /* 15403 */;
import _modDef15404 from "module_15404" /* 15404 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15403;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15404;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};