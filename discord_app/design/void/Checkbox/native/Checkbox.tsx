// === Module 16472: Checkbox/Checkbox ===

// Module 16472 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5957 */;
import _modDef16473 from "module_16473" /* 16473 */;
import _modDef16474 from "module_16474" /* 16474 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16473;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16474;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};