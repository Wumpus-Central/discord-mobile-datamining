// === Module 14086: Checkbox/Checkbox ===

// Module 14086 (Checkbox/Checkbox)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = tmp3(14087);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(14088);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};