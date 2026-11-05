// === Module 16229: Checkbox/Checkbox ===

// Module 16229 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5854 */;
import _modDef16230 from "module_16230" /* 16230 */;
import _modDef16231 from "module_16231" /* 16231 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16230;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16231;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};