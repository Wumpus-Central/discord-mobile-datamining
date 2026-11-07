// === Module 8647: XNeutralIcon ===

// Module 8647 (XNeutralIcon)
import BaseIconImage from "BaseIconImage" /* 5841 */;
import _mod8648 from "module_8648" /* 8648 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8648, color: str, style: color.style });
}