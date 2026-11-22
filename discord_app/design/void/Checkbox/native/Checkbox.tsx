// === Module 15379: Checkbox/Checkbox ===

// Module 15379 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5600 */;
import _modDef15380 from "module_15380" /* 15380 */;
import _modDef15381 from "module_15381" /* 15381 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15380;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15381;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};