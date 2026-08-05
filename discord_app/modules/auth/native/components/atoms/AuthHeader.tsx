// discord_app/modules/auth/native/components/atoms/AuthHeader.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

const require = arg1;
createCacheKey = { header: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  style = [createCacheKey().header, ];
  style[1] = style;
  return jsx(require("../../../../../design/void/native.tsx") /* Button */.LegacyText, { style, accessibilityRole: "header", children });
};