// === Module 15926: Checkbox/Checkbox ===

// Module 15926 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5712 */;
import _modDef15927 from "module_15927" /* 15927 */;
import _modDef15928 from "module_15928" /* 15928 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15927;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15928;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};