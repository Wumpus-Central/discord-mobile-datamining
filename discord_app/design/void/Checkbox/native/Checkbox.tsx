// === Module 16625: Checkbox/Checkbox ===

// Module 16625 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 6014 */;
import _modDef16626 from "module_16626" /* 16626 */;
import _modDef16627 from "module_16627" /* 16627 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16626;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16627;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};