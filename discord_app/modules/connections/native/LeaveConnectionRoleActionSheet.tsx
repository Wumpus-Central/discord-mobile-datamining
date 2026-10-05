// === Module 11189: LeaveConnectionRoleActionSheet ===

// Module 11189 (LeaveConnectionRoleActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, onLeaveRolePressed;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onLeaveRolePressed) => {
  let first;
  let intl;
  let items;
  let obj6;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  onLeaveRolePressed = onLeaveRolePressed.onLeaveRolePressed;
  const tmp4 = closure_5();
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.vytvJF) };
    const Text = Text_Text.Text;
    intl = intl4.intl;
    const tmp7 = _false(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const marginTop = tmp4.marginTop;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult = intl2.string(intl4.t.caJwb5);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.marginTop) {
    const obj3 = { style: marginTop, variant: "text-md/normal", color: "text-default", children: tmp8 };
    const tmp12 = _false(Text_Text.Text, obj3);
    cResult[2] = tmp4.marginTop;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  const button = tmp4.button;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult1 = intl3.string(intl4.t["+Oi4XF"]);
    cResult[4] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== onLeaveRolePressed) {
    const obj4 = { variant: "destructive", onPress: onLeaveRolePressed, text: tmp13, grow: true };
    const tmp17 = _false(components_Button_Button.Button, obj4);
    cResult[5] = onLeaveRolePressed;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.button) {
    let tmp18;
    if (cResult[8] === tmp15) {
      tmp18 = cResult[9];
    }
    if (cResult[10] === tmp4.container) {
      if (cResult[11] === tmp10) {
        let tmp20;
        if (cResult[12] === tmp18) {
          tmp20 = cResult[13];
        }
        return tmp20;
      }
    }
    const obj5 = { children: React3(View, obj6) };
    obj6 = { style: container, children: items };
    items = [first, tmp10, tmp18];
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    const tmp24 = _false(BottomSheet, obj5);
    cResult[10] = tmp4.container;
    cResult[11] = tmp10;
    cResult[12] = tmp18;
    cResult[13] = tmp24;
    tmp20 = tmp24;
  }
  const tmp19 = _false(View, { style: button, children: tmp15 });
  cResult[7] = tmp4.button;
  cResult[8] = tmp15;
  cResult[9] = tmp19;
  tmp18 = tmp19;
}) : ((onLeaveRolePressed) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj6;
  onLeaveRolePressed = onLeaveRolePressed.onLeaveRolePressed;
  const tmp = closure_5();
  const obj = { children: React3(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.vytvJF) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [_false(Text, obj3), , ];
  const obj4 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: intl2.string(intl4.t.caJwb5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = _false(Text2, obj4);
  const obj5 = { style: tmp.button, children: _false(Button, obj6) };
  obj6 = { variant: "destructive", onPress: onLeaveRolePressed, text: intl3.string(intl4.t["+Oi4XF"]), grow: true };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = _false(View, obj5);
  return _false(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default tmp4;