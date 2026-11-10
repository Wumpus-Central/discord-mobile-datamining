// === Module 16311: Checkbox/Checkbox ===

// Module 16311 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5844 */;
import _modDef16312 from "module_16312" /* 16312 */;
import _modDef16313 from "module_16313" /* 16313 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16312;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16313;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};