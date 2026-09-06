// === Module 8606: FormText ===

// Module 8606 (FormText)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import LegacyTokens from "LegacyTokens" /* 5441 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_3 = createStyles.createStyles((arg0) => {
  let obj = { primary: null, text: null };
  obj = { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
  obj.primary = obj;
  let num = 16;
  if ("small" === arg0) {
    num = 12;
  }
  obj = { fontSize: num, lineHeight: null };
  let num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  obj.lineHeight = num2;
  obj.text = obj;
  return obj;
});
let obj = { BRAND: null, RED: null, GREEN: null, YELLOW: null, LINK: null, WHITE: null };
obj = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj.BRAND = obj;
createStyles = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj.RED = createStyles;
obj.GREEN = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
const obj2 = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.YELLOW = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
const obj3 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj.LINK = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
const obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj.WHITE = { color: nativeDefault.unsafe_rawColors.WHITE };
const obj5 = { color: nativeDefault.unsafe_rawColors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default noop.forwardRef((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  const tmp = closure_3(str);
  const obj = { ref, style: null, children: null };
  const items = [tmp.text, , ];
  if (primary == null) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = size.style;
  obj.style = items;
  obj.children = size.children;
  return jsx(native.LegacyText, { ref, style: null, children: null });
});
export const FormTextColors = obj;