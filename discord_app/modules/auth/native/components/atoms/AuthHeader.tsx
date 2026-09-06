// === Module 6974: AuthHeader ===

// Module 6974 (AuthHeader)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { header: null };
createStyles = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createStyles.textAlign = "center";
createStyles.header = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, accessibilityRole: "header", children };
  const items = [closure_3().header, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, accessibilityRole: "header", children });
};