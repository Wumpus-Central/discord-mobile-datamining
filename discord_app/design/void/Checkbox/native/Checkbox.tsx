// === Module 15575: Checkbox/Checkbox ===

// Module 15575 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5730 */;
import _modDef15576 from "module_15576" /* 15576 */;
import _modDef15577 from "module_15577" /* 15577 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15576;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15577;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};