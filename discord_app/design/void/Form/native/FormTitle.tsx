// discord_app/design/void/Form/native/FormTitle.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import set from "set";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "ME";
import { Button } from "../../native.tsx";

let Platform;
let c3;
let c4;
let obj1;
const require = arg1;
({ View: obj1, Platform } = get_ActivityIndicator);
({ jsx: c3, jsxs: c4 } = jsxProd);
let num = 58;
if (set.isAndroid()) {
  num = 48;
}
let num2 = 48;
if (set.isAndroid()) {
  num2 = 56;
}
set = { titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }, horizontalPadding: { paddingHorizontal: 16 }, thinTitle: { paddingTop: 26 }, titleText: null, error: null };
set = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("Themes").colors.TEXT_SUBTLE };
set[3] = set;
set = { color: require("Themes").unsafe_rawColors.RED_400 };
set[4] = set;
set = createCacheKey.createStyles(set);
const result = set.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default function FormTitle(thinTitle) {
  let icon;
  let numberOfLines;
  let textStyle;
  let title;
  let uppercaseTitle;
  let viewStyle;
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
  const tmp = set();
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
  const items2 = [closure_3(Button.LegacyText, obj), icon];
  obj[1] = items2;
  return closure_4(closure_2, obj);
};
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;