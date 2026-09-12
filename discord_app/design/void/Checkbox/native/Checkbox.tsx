// === Module 14172: Checkbox/Checkbox ===

// Module 14172 (Checkbox/Checkbox)
import _modDef14173 from "module_14173" /* 14173 */;
import _modDef14174 from "module_14174" /* 14174 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14173;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14174;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};