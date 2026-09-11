// === Module 14137: Checkbox/Checkbox ===

// Module 14137 (Checkbox/Checkbox)
import _modDef14138 from "module_14138" /* 14138 */;
import _modDef14139 from "module_14139" /* 14139 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14138;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14139;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};