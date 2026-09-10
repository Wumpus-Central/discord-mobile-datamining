// === Module 14161: Checkbox/Checkbox ===

// Module 14161 (Checkbox/Checkbox)
import _modDef14162 from "module_14162" /* 14162 */;
import _modDef14163 from "module_14163" /* 14163 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14162;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14163;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};