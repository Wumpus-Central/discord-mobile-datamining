// === Module 15291: ConnectionFineIcon ===

// Module 15291 (ConnectionFineIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = importDefault(712).colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(15292) /* registerAsset */;
  obj[1] = ICON_FEEDBACK_POSITIVE;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3896) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};