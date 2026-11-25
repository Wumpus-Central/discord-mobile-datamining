// === Module 15524: Checkbox/Checkbox ===

// Module 15524 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5699 */;
import _modDef15525 from "module_15525" /* 15525 */;
import _modDef15526 from "module_15526" /* 15526 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15525;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15526;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};