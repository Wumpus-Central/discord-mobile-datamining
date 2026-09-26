// discord_app/modules/connections/native/LeaveConnectionRoleActionSheet.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4836);
let closure_5 = createStyles.createStyles({
  container: { padding: 12 },
  marginTop: { marginTop: 8 },
  button: { marginTop: 8, marginBottom: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = closure_5();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.vytvJF);
  const items = [React3(Text_Text.Text, obj3), ,];
  const obj4 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.caJwb5);
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { style: tmp.button, children: null };
  const obj6 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed, text: null, grow: true };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["+Oi4XF"]);
  obj5.children = React3(components_Button_Button.Button, obj6);
  items[2] = React3(View, obj5);
  obj2.children = items;
  obj.children = React4(View, obj2);
  return React3(Sheet_BottomSheet.BottomSheet, obj);
}
