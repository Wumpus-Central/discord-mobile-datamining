// === Module 13629: Checkbox/Checkbox ===

// Module 13629 (Checkbox/Checkbox)
import _modDef13630 from "module_13630" /* 13630 */;
import _modDef13631 from "module_13631" /* 13631 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13630;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13631;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};