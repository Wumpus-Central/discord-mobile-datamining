// === Module 14355: Checkbox/Checkbox ===

// Module 14355 (Checkbox/Checkbox)
import _modDef14356 from "module_14356" /* 14356 */;
import _modDef14357 from "module_14357" /* 14357 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14356;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14357;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};