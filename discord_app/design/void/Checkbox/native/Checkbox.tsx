// === Module 14450: Checkbox/Checkbox ===

// Module 14450 (Checkbox/Checkbox)
import _modDef14451 from "module_14451" /* 14451 */;
import _modDef14452 from "module_14452" /* 14452 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14451;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14452;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};