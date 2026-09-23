// === Module 14441: Checkbox/Checkbox ===

// Module 14441 (Checkbox/Checkbox)
import _modDef14442 from "module_14442" /* 14442 */;
import _modDef14443 from "module_14443" /* 14443 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14442;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14443;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};