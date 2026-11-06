// === Module 16226: Checkbox/Checkbox ===

// Module 16226 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5872 */;
import _modDef16227 from "module_16227" /* 16227 */;
import _modDef16228 from "module_16228" /* 16228 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16227;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16228;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};