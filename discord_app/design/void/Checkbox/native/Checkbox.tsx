// === Module 16590: Checkbox/Checkbox ===

// Module 16590 (Checkbox/Checkbox)
import FastImageDefault from "FastImage" /* 6020 */;
import _modDef16591 from "module_16591" /* 16591 */;
import _modDef16592 from "module_16592" /* 16592 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16591;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16592;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
};