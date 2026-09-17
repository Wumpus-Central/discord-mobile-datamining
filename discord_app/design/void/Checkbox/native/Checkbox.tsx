// === Module 14199: Checkbox/Checkbox ===

// Module 14199 (Checkbox/Checkbox)
import _modDef14200 from "module_14200" /* 14200 */;
import _modDef14201 from "module_14201" /* 14201 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14200;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14201;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};