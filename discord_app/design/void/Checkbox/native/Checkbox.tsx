// === Module 15967: Checkbox/Checkbox ===

// Module 15967 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef15968 from "module_15968" /* 15968 */;
import _modDef15969 from "module_15969" /* 15969 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15968;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15969;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};