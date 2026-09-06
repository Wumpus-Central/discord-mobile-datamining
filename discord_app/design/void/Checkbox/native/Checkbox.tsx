// === Module 14086: Checkbox/Checkbox ===

// Module 14086 (Checkbox/Checkbox)
import _modDef14087 from "module_14087" /* 14087 */;
import _modDef14088 from "module_14088" /* 14088 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14087;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14088;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};