// === Module 5619: RowCheckmark ===

// Module 5619 (RowCheckmark)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 5588 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default function RowCheckmark(selected) {
  let tmp = null;
  if (selected.selected) {
    const obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.BRAND_500;
    tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: null });
  }
  return tmp;
};