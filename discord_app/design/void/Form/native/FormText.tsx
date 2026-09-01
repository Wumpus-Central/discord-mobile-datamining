// === Module 8376: FormTextColors ===

// Module 8376 (FormTextColors)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import result2 from "result" /* 5384 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = createCacheKey.createStyles((arg0) => {
  let obj = { primary: null, text: null };
  obj = { color: result2.DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
  obj[0] = obj;
  let num = 16;
  if ("small" === arg0) {
    num = 12;
  }
  obj = { fontSize: num, lineHeight: null };
  let num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  obj[1] = num2;
  obj[1] = obj;
  return obj;
});
let obj = { BRAND: null, RED: null, GREEN: null, YELLOW: null, LINK: null, WHITE: null };
obj = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
obj[0] = obj;
createCacheKey = { color: ThemesDefault.unsafe_rawColors.RED_400 };
obj[1] = createCacheKey;
obj[2] = { color: ThemesDefault.unsafe_rawColors.GREEN_360 };
const obj2 = { color: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[3] = { color: ThemesDefault.unsafe_rawColors.YELLOW_300 };
const obj3 = { color: ThemesDefault.unsafe_rawColors.YELLOW_300 };
obj[4] = { color: ThemesDefault.unsafe_rawColors.BLUE_345 };
const obj4 = { color: ThemesDefault.unsafe_rawColors.BLUE_345 };
obj[5] = { color: ThemesDefault.unsafe_rawColors.WHITE };
const obj5 = { color: ThemesDefault.unsafe_rawColors.WHITE };
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  const tmp = callback(str);
  const obj = { ref, style: null, children: null };
  const items = [tmp.text, , ];
  if (primary == null) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = size.style;
  obj[1] = items;
  obj[2] = size.children;
  return jsx(Button.LegacyText, { ref, style: null, children: null });
});
const result = require("set").fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default forwardRefResult;
export const FormTextColors = obj;