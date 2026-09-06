// === Module 6974: AuthHeader ===

// Module 6974 (AuthHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "createTextStyle" /* 5524 */;

require = arg1;
noopAll;
createCacheKey = { header: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  style = [callback().header, ];
  style[1] = style;
  return jsx(Button.LegacyText, { style, accessibilityRole: "header", children });
};