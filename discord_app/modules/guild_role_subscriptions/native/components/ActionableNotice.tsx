// === Module 18017: ActionableNotice ===

// Module 18017 (ActionableNotice)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" }, message: { marginEnd: 27, flex: 3 }, actionButton: { flexGrow: 0, alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ style, message, ctaMessage, onClick, submitting, disabled } = arg0);
  const tmp5 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp5.container) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === message) {
      if (cResult[4] === tmp5.message) {
        let tmp7 = cResult[5];
      }
      if (!submitting) {
        submitting = tmp4;
      }
      if (cResult[6] === ctaMessage) {
        if (cResult[7] === onClick) {
          if (cResult[8] === submitting) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === tmp5.actionButton) {
            if (cResult[11] === tmp10) {
              let tmp13 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp13) {
                  let tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
            const obj2 = { style: tmp6, children: null };
            const items = [tmp7, tmp13];
            obj2.children = items;
            const tmp20 = React4(View, obj2);
            cResult[13] = tmp6;
            cResult[14] = tmp7;
            cResult[15] = tmp13;
            cResult[16] = tmp20;
            tmp17 = tmp20;
          }
          const obj3 = { style: tmp5.actionButton, children: tmp10 };
          const tmp16 = React3(View, obj3);
          cResult[10] = tmp5.actionButton;
          cResult[11] = tmp10;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj4 = { size: "sm", onPress: onClick, disabled: submitting, text: ctaMessage };
      const tmp12 = React3(components_Button_Button.Button, obj4);
      cResult[6] = ctaMessage;
      cResult[7] = onClick;
      cResult[8] = submitting;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const obj5 = { style: tmp5.message, variant: "text-sm/medium", color: "text-default", children: message };
    const tmp9 = React3(Text_Text.Text, obj5);
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
  tmp4 = undefined !== disabled && disabled;
}) : ((arg0) => {
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [style, tmp.container];
  obj.style = items;
  const items1 = [React3(Text_Text.Text, { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message }), ];
  const obj3 = { style: tmp.actionButton, children: null };
  const obj4 = { size: "sm", onPress: onClick, disabled: null, text: null };
  if (!submitting) {
    submitting = disabled;
  }
  obj4.disabled = submitting;
  obj4.text = ctaMessage;
  obj3.children = React3(components_Button_Button.Button, obj4);
  items1[1] = React3(View, obj3);
  obj.children = items1;
  return React4(View, obj);
});