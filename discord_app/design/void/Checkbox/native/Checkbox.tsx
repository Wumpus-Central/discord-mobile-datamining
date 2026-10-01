// === Module 13832: Checkbox/Checkbox ===

// Module 13832 (Checkbox/Checkbox)
import _modDef13833 from "module_13833" /* 13833 */;
import _modDef13834 from "module_13834" /* 13834 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13833;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13834;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};