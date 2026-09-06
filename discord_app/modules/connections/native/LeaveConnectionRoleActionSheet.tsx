// === Module 11572: LeaveConnectionRoleActionSheet ===

// Module 11572 (LeaveConnectionRoleActionSheet)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = closure_5();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.vytvJF);
  const items = [React3(Text_Text.Text, obj), , ];
  const obj1 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.caJwb5);
  items[1] = React3(Text_Text.Text, obj1);
  const obj2 = { style: tmp.button, children: null };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed, text: null, grow: true };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["+Oi4XF"]);
  obj2.children = React3(components_Button_Button.Button, obj3);
  items[2] = React3(View, obj2);
  obj.children = items;
  obj.children = React4(View, obj);
  return React3(Sheet_BottomSheet.BottomSheet, obj);
};