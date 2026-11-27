// === Module 15582: Checkbox/Checkbox ===

// Module 15582 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5730 */;
import _modDef15583 from "module_15583" /* 15583 */;
import _modDef15584 from "module_15584" /* 15584 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15583;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15584;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};