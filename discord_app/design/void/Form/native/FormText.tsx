// discord_app/design/void/Form/native/FormText.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import LegacyTokens from "../../../migrations/native/LegacyTokens.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
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
let obj = {
  BRAND: { color: nativeDefault.unsafe_rawColors.BRAND_500 },
  RED: null,
  GREEN: null,
  YELLOW: null,
  LINK: null,
  WHITE: null,
};
let obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj.RED = { color: nativeDefault.unsafe_rawColors.RED_400 };
const obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj.GREEN = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
const obj5 = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.YELLOW = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
const obj6 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj.LINK = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
const obj7 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj.WHITE = { color: nativeDefault.unsafe_rawColors.WHITE };
const obj8 = { color: nativeDefault.unsafe_rawColors.WHITE };
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
  const items = [tmp.text, ,];
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
