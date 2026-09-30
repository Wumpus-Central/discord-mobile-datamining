// === Module 13824: Checkbox/Checkbox ===

// Module 13824 (Checkbox/Checkbox)
import _modDef13825 from "module_13825" /* 13825 */;
import _modDef13826 from "module_13826" /* 13826 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13825;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13826;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};