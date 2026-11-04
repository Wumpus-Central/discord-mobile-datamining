// === Module 16203: Checkbox/Checkbox ===

// Module 16203 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5851 */;
import _modDef16204 from "module_16204" /* 16204 */;
import _modDef16205 from "module_16205" /* 16205 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16204;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16205;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};