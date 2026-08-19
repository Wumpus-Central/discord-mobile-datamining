// === Module 6947: RowCheckmark ===

// Module 6947 (RowCheckmark)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6933 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.BRAND_500;
    tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};