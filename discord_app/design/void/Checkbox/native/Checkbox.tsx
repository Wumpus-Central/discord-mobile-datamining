// === Module 14191: Checkbox/Checkbox ===

// Module 14191 (Checkbox/Checkbox)
import _modDef14192 from "module_14192" /* 14192 */;
import _modDef14193 from "module_14193" /* 14193 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14192;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14193;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};