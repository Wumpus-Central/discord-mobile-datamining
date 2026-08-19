// discord_app/design/void/Form/native/FormTitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../../utils/PlatformUtils.tsx";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ View: obj1, Platform } = get_ActivityIndicator);
({ jsx: c3, jsxs: c4 } = jsxProd);
let num = 58;
if (obj132.isAndroid()) {
  num = 48;
}
let num2 = 48;
if (obj132.isAndroid()) {
  num2 = 56;
}
obj132 = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: ThemesDefault.colors.TEXT_SUBTLE };
obj132[3] = obj132;
obj132 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
obj132[4] = obj132;
let closure_5 = createCacheKey.createStyles(obj132);
const result = obj132.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default function FormTitle(thinTitle) {
  ({ title, uppercaseTitle } = thinTitle);
  ({ icon, numberOfLines } = thinTitle);
  if (uppercaseTitle === undefined) {
    uppercaseTitle = true;
  }
  let flag = thinTitle.thinTitle;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = thinTitle.error;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = thinTitle.inset;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ viewStyle, textStyle } = thinTitle);
  const tmp = callback();
  const items = [tmp.titleWrapper, , , ];
  if (flag) {
    flag = tmp.thinTitle;
  }
  items[1] = flag;
  let horizontalPadding = !flag3;
  if (!flag3) {
    horizontalPadding = tmp.horizontalPadding;
  }
  let obj = { style: items, children: null };
  items[2] = horizontalPadding;
  items[3] = viewStyle;
  const items1 = [tmp.titleText, textStyle, ];
  if (flag2) {
    flag2 = tmp.error;
  }
  obj = { style: items1, numberOfLines, accessibilityRole: "header", children: null };
  items1[2] = flag2;
  let formatted = title;
  if (uppercaseTitle) {
    formatted = title.toUpperCase();
  }
  obj[3] = formatted;
  const items2 = [callback(Button.LegacyText, obj), icon];
  obj[1] = items2;
  return callback2(closure_2, obj);
};
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;