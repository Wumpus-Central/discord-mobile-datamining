// === Module 6655: AuthHeader ===

// Module 6655 (AuthHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5906 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { header: null };
const obj3 = {};
const merged = Object.assign(TextStyles(fn(1085).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj2.header = obj3;
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AuthHeader(arg0) {
  const cResult = c.c(6);
  ({ children, style } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.header) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { style: tmp5, accessibilityRole: "header", children };
    const tmp8 = jsx(native.LegacyText, { style: tmp5, accessibilityRole: "header", children });
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.header, style];
  cResult[0] = style;
  cResult[1] = tmp4.header;
  cResult[2] = items;
  tmp5 = items;
}) : (function AuthHeader(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, accessibilityRole: "header", children };
  const items = [closure_3().header, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, accessibilityRole: "header", children });
});