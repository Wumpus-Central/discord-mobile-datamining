// === Module 8574: FormText ===

// Module 8574 (FormText)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import LegacyTokens from "LegacyTokens" /* 5976 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_3 = createStyles.createStyles((arg0) => {
  const obj = { primary: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, text: null };
  let num = 16;
  if ("small" === arg0) {
    num = 12;
  }
  const obj3 = { fontSize: num, lineHeight: null };
  let num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  obj3.lineHeight = num2;
  obj.text = obj3;
  return obj;
});
let obj2 = { BRAND: { color: nativeDefault.unsafe_rawColors.BRAND_500 }, RED: null, GREEN: null, YELLOW: null, LINK: null, WHITE: null };
let obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj2.RED = { color: nativeDefault.unsafe_rawColors.RED_400 };
const obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.GREEN = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
const obj5 = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.YELLOW = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
const obj6 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj2.LINK = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
const obj7 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj2.WHITE = { color: nativeDefault.unsafe_rawColors.WHITE };
const ReactCompilerGating = fn(558);
const obj8 = { color: nativeDefault.unsafe_rawColors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormText(arg0) {
  const cResult = c.c(8);
  ({ children, size, color, style, ref } = arg0);
  let str = "medium";
  if (undefined !== size) {
    str = size;
  }
  const tmp4Result = closure_3(str);
  if (color == null) {
    color = tmp4Result.primary;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4Result.text) {
      if (cResult[2] === color) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === ref) {
          if (cResult[6] === tmp6) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
      const obj2 = { ref, style: tmp6, children };
      const tmp9 = jsx(native.LegacyText, { ref, style: tmp6, children });
      cResult[4] = children;
      cResult[5] = ref;
      cResult[6] = tmp6;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
  }
  const items = [tmp4Result.text, color, style];
  cResult[0] = style;
  cResult[1] = tmp4Result.text;
  cResult[2] = color;
  cResult[3] = items;
  tmp6 = items;
}) : (function FormText(size) {
  let str = size.size;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  ({ style, ref } = size);
  const tmp = closure_3(str);
  const obj = { ref, style: null, children: null };
  const items = [tmp.text, , ];
  if (primary == null) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = style;
  obj.style = items;
  obj.children = size.children;
  return jsx(native.LegacyText, { ref, style: null, children: null });
});
export const FormTextColors = obj2;