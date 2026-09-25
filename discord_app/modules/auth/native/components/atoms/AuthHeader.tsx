// === Module 6388: AuthHeader ===

// Module 6388 (AuthHeader)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5831 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { header: null };
const obj3 = {};
const merged = Object.assign(TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj2.header = obj3;
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, accessibilityRole: "header", children };
  const items = [closure_3().header, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, accessibilityRole: "header", children });
};