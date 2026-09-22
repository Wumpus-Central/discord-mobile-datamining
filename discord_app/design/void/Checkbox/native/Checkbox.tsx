// === Module 14361: Checkbox/Checkbox ===

// Module 14361 (Checkbox/Checkbox)
import _modDef14362 from "module_14362" /* 14362 */;
import _modDef14363 from "module_14363" /* 14363 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14362;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14363;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};