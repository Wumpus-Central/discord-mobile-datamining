// === Module 15971: Checkbox/Checkbox ===

// Module 15971 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef15972 from "module_15972" /* 15972 */;
import _modDef15973 from "module_15973" /* 15973 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15972;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15973;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};