// === Module 13797: Checkbox/Checkbox ===

// Module 13797 (Checkbox/Checkbox)
import _modDef13798 from "module_13798" /* 13798 */;
import _modDef13799 from "module_13799" /* 13799 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13798;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13799;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};