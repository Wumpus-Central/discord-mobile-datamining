// === Module 16114: Checkbox/Checkbox ===

// Module 16114 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5837 */;
import _modDef16115 from "module_16115" /* 16115 */;
import _modDef16116 from "module_16116" /* 16116 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16115;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16116;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};