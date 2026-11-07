// === Module 16274: Checkbox/Checkbox ===

// Module 16274 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef16275 from "module_16275" /* 16275 */;
import _modDef16276 from "module_16276" /* 16276 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16275;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16276;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};