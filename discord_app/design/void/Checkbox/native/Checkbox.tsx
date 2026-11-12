// === Module 16467: Checkbox/Checkbox ===

// Module 16467 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 5957 */;
import _modDef16468 from "module_16468" /* 16468 */;
import _modDef16469 from "module_16469" /* 16469 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16468;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16469;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};