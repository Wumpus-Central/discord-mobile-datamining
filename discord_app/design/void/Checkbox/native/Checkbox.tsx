// === Module 16284: Checkbox/Checkbox ===

// Module 16284 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef16285 from "module_16285" /* 16285 */;
import _modDef16286 from "module_16286" /* 16286 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16285;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16286;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};