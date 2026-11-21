// === Module 15381: Checkbox/Checkbox ===

// Module 15381 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5600 */;
import _modDef15382 from "module_15382" /* 15382 */;
import _modDef15383 from "module_15383" /* 15383 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15382;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15383;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};