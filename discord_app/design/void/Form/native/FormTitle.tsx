// discord_app/design/void/Form/native/FormTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let PlatformUtils = fn(1115);
let num = 58;
if (PlatformUtils.isAndroid()) {
  num = 48;
}
PlatformUtils = fn(1115);
let num2 = 48;
if (PlatformUtils.isAndroid()) {
  num2 = 56;
}
const createStyles = fn(4560);
PlatformUtils = {
  titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 },
  horizontalPadding: { paddingHorizontal: 16 },
  thinTitle: { paddingTop: 26 },
  titleText: null,
  error: null,
};
PlatformUtils = { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_SUBTLE };
PlatformUtils.titleText = PlatformUtils;
PlatformUtils = { color: nativeDefault.unsafe_rawColors.RED_400 };
PlatformUtils.error = PlatformUtils;
let closure_5 = createStyles.createStyles(PlatformUtils);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

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
  const tmp = closure_5();
  const items = [tmp.titleWrapper, , ,];
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
  const items1 = [tmp.titleText, textStyle];
  if (flag2) {
    flag2 = tmp.error;
  }
  obj = { style: items1, numberOfLines, accessibilityRole: "header", children: null };
  items1[2] = flag2;
  let formatted = title;
  if (uppercaseTitle) {
    formatted = title.toUpperCase();
  }
  obj.children = formatted;
  const items2 = [React3(native.LegacyText, obj), icon];
  obj.children = items2;
  return React4(React2, obj);
}
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;
