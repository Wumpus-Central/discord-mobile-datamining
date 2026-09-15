// === Module 14178: Checkbox/Checkbox ===

// Module 14178 (Checkbox/Checkbox)
import _modDef14179 from "module_14179" /* 14179 */;
import _modDef14180 from "module_14180" /* 14180 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14179;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14180;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};