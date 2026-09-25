// === Module 13611: Checkbox/Checkbox ===

// Module 13611 (Checkbox/Checkbox)
import _modDef13612 from "module_13612" /* 13612 */;
import _modDef13613 from "module_13613" /* 13613 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13612;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13613;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};