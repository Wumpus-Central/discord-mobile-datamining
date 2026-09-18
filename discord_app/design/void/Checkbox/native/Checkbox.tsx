// === Module 14294: Checkbox/Checkbox ===

// Module 14294 (Checkbox/Checkbox)
import _modDef14295 from "module_14295" /* 14295 */;
import _modDef14296 from "module_14296" /* 14296 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14295;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14296;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};