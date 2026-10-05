// discord_app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({
  container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" },
  message: { marginEnd: 27, flex: 3 },
  actionButton: { flexGrow: 0, alignSelf: "center" },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ctaMessage;
      let disabled;
      let items;
      let message;
      let onClick;
      let style;
      let submitting;
      const obj = react2;
      const cResult = obj.c(17);
      ({ style, message, ctaMessage, onClick, submitting, disabled } = arg0);
      const tmp4 = undefined !== disabled && disabled;
      const tmp5 = closure_5();
      if (cResult[0] === style) {
        let tmp6;
        if (cResult[1] === tmp5.container) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === message) {
          let tmp7;
          if (cResult[4] === tmp5.message) {
            tmp7 = cResult[5];
          }
          if (!submitting) {
            submitting = tmp4;
          }
          if (cResult[6] === ctaMessage) {
            if (cResult[7] === onClick) {
              let tmp10;
              if (cResult[8] === submitting) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === tmp5.actionButton) {
                let tmp13;
                if (cResult[11] === tmp10) {
                  tmp13 = cResult[12];
                }
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp7) {
                    let tmp17;
                    if (cResult[15] === tmp13) {
                      tmp17 = cResult[16];
                    }
                    return tmp17;
                  }
                }
                const obj2 = { style: tmp6, children: items };
                items = [tmp7, tmp13];
                const tmp20 = React3(View, obj2);
                cResult[13] = tmp6;
                cResult[14] = tmp7;
                cResult[15] = tmp13;
                cResult[16] = tmp20;
                tmp17 = tmp20;
              }
              const obj3 = { style: tmp5.actionButton, children: tmp10 };
              const tmp16 = _false(View, obj3);
              cResult[10] = tmp5.actionButton;
              cResult[11] = tmp10;
              cResult[12] = tmp16;
              tmp13 = tmp16;
            }
          }
          const obj4 = { size: "sm", onPress: onClick, disabled: submitting, text: ctaMessage };
          const tmp12 = _false(components_Button_Button.Button, obj4);
          cResult[6] = ctaMessage;
          cResult[7] = onClick;
          cResult[8] = submitting;
          cResult[9] = tmp12;
          tmp10 = tmp12;
        }
        const obj5 = { style: tmp5.message, variant: "text-sm/medium", color: "text-default", children: message };
        const tmp9 = _false(Text_Text.Text, obj5);
        cResult[3] = message;
        cResult[4] = tmp5.message;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const items1 = [style, tmp5.container];
      cResult[0] = style;
      cResult[1] = tmp5.container;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : (arg0) => {
      let Button;
      let ctaMessage;
      let disabled;
      let items;
      let items1;
      let message;
      let obj4;
      let onClick;
      let style;
      let submitting;
      ({ submitting, disabled } = arg0);
      ({ style, message, ctaMessage, onClick } = arg0);
      if (disabled === undefined) {
        disabled = false;
      }
      const tmp = closure_5();
      const obj = { style: items, children: items1 };
      items = [style, tmp.container];
      items1 = [,];
      const obj2 = { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message };
      items1[0] = _false(Text_Text.Text, obj2);
      const obj3 = { style: tmp.actionButton, children: _false(Button, obj4) };
      obj4 = { size: "sm", onPress: onClick, disabled: submitting, text: ctaMessage };
      Button = components_Button_Button.Button;
      if (!submitting) {
        submitting = disabled;
      }
      items1[1] = _false(View, obj3);
      return React3(View, obj);
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default tmp4;
