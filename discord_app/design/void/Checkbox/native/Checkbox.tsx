// === Module 14112: Checkbox/Checkbox ===

// Module 14112 (Checkbox/Checkbox)
import _modDef14113 from "module_14113" /* 14113 */;
import _modDef14114 from "module_14114" /* 14114 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14113;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14114;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};