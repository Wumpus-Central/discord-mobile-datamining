// === Module 14089: Checkbox/Checkbox ===

// Module 14089 (Checkbox/Checkbox)
import _modDef14090 from "module_14090" /* 14090 */;
import _modDef14091 from "module_14091" /* 14091 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14090;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14091;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};