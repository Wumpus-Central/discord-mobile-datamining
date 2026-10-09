// discord_app/modules/connections/native/LeaveConnectionRoleActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({
  container: { padding: 12 },
  marginTop: { marginTop: 8 },
  button: { marginTop: 8, marginBottom: 16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
      const cResult = c.c(14);
      onLeaveRolePressed = onLeaveRolePressed.onLeaveRolePressed;
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.vytvJF);
        const tmp7 = React3(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.caJwb5);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.marginTop) {
        const obj3 = { style: tmp4.marginTop, variant: "text-md/normal", color: "text-default", children: tmp8 };
        const tmp12 = React3(Text_Text.Text, obj3);
        cResult[2] = tmp4.marginTop;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t["+Oi4XF"]);
        cResult[4] = stringResult1;
        let tmp13 = stringResult1;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== onLeaveRolePressed) {
        const obj4 = { variant: "destructive", onPress: onLeaveRolePressed, text: tmp13, grow: true };
        const tmp17 = React3(components_Button_Button.Button, obj4);
        cResult[5] = onLeaveRolePressed;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.button) {
        if (cResult[8] === tmp15) {
          let tmp18 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp18) {
              let tmp20 = cResult[13];
            }
            return tmp20;
          }
        }
        const obj5 = { children: null };
        const obj6 = { style: tmp4.container, children: null };
        const items = [first, tmp10, tmp18];
        obj6.children = items;
        obj5.children = React4(View, obj6);
        const tmp24 = React3(Sheet_BottomSheet.BottomSheet, obj5);
        cResult[10] = tmp4.container;
        cResult[11] = tmp10;
        cResult[12] = tmp18;
        cResult[13] = tmp24;
        tmp20 = tmp24;
      }
      const tmp19 = React3(View, { style: tmp4.button, children: tmp15 });
      cResult[7] = tmp4.button;
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      tmp18 = tmp19;
    }
  : function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
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
    };
