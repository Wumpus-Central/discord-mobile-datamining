// === Module 14349: Checkbox/Checkbox ===

// Module 14349 (Checkbox/Checkbox)
import _modDef14350 from "module_14350" /* 14350 */;
import _modDef14351 from "module_14351" /* 14351 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14350;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14351;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};