// discord_app/design/components/Sheet/native/ActionSheetIconHeader.native.tsx
import Text_Text from "../../Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 },
  titles: { justifyContent: "center", flex: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = function ActionSheetIconHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  const items = [React3(View, { children: icon })];
  obj = { style: tmp.titles, children: null };
  const items1 = [
    React3(Text_Text.Text, {
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      lineClamp: 2,
      children: title,
    }),
  ];
  let tmp4Result = null;
  if (null != subtitle) {
    obj = { variant: "text-xs/medium", color: "text-default", children: subtitle };
    tmp4Result = React3(Text_Text.Text, obj);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  items[1] = React4(View, obj);
  obj.children = items;
  return React4(View, obj);
};
