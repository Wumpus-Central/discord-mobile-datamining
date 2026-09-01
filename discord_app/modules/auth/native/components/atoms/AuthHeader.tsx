// discord_app/modules/auth/native/components/atoms/AuthHeader.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { header: null };
createCacheKey = {};
const merged = Object.assign(
  importDefaultResult(require("ME").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
createCacheKey.textAlign = "center";
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  style = [callback().header];
  style[1] = style;
  return jsx(Button.LegacyText, { style, accessibilityRole: "header", children });
}
