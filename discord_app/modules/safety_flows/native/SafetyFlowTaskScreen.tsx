// === Module 18636: SafetyFlowTaskScreen ===

// Module 18636 (SafetyFlowTaskScreen)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import ModalScreen from "ModalScreen" /* 7514 */;
import ModalContent from "ModalContent" /* 7515 */;
import ModalFooter from "ModalFooter" /* 11539 */;
import ModalActionButton from "ModalActionButton" /* 11592 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 18634 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ header: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyFlowTaskScreen(arg0) {
  const cResult = c.c(23);
  ({ ImageComponent, title, subtitle, subtitleColor, action, onAction, footer, children, submitting, withLogout } = arg0);
  let str = "text-strong";
  if (undefined !== subtitleColor) {
    str = subtitleColor;
  }
  let tmp4 = null;
  if (undefined !== action) {
    tmp4 = action;
  }
  const tmp6 = closure_5();
  if (cResult[0] === tmp6.header) {
    if (cResult[1] === title) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === tmp6.header) {
      if (cResult[4] === subtitle) {
        if (cResult[5] === str) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp10) {
              let tmp13 = cResult[10];
            }
            if (cResult[11] === children) {
              if (cResult[12] === tmp13) {
                let tmp16 = cResult[13];
              }
              if (cResult[14] === tmp4) {
                if (cResult[15] === footer) {
                  if (cResult[16] === onAction) {
                    if (cResult[17] === submitting) {
                      if (cResult[18] === tmp5) {
                        let tmp19 = cResult[19];
                      }
                      if (cResult[20] === tmp16) {
                        if (cResult[21] === tmp19) {
                          let tmp26 = cResult[22];
                        }
                        return tmp26;
                      }
                      const obj2 = { children: null };
                      const items = [tmp16, tmp19];
                      obj2.children = items;
                      const tmp28 = React4(ModalScreen.ModalScreen, obj2);
                      cResult[20] = tmp16;
                      cResult[21] = tmp19;
                      cResult[22] = tmp28;
                      tmp26 = tmp28;
                    }
                  }
                }
              }
              let tmp29Result = footer;
              if (undefined === footer) {
                let tmp23 = tmp5;
                if (tmp5) {
                  tmp23 = React3(LogOutDisclaimerDefault, {});
                }
                const items1 = [tmp23, ];
                let tmp24 = null != tmp4;
                if (tmp24) {
                  const obj3 = { variant: "primary", text: tmp4, onPress: onAction, loading: submitting };
                  tmp24 = React3(ModalActionButton.ModalActionButton, obj3);
                }
                const obj4 = { children: null };
                items1[1] = tmp24;
                obj4.children = items1;
                tmp29Result = React4(ModalFooter.ModalFooter, obj4);
              }
              cResult[14] = tmp4;
              cResult[15] = footer;
              cResult[16] = onAction;
              cResult[17] = submitting;
              cResult[18] = tmp5;
              cResult[19] = tmp29Result;
              tmp19 = tmp29Result;
            }
            const obj5 = { children: null };
            const items2 = [tmp13, children];
            obj5.children = items2;
            const tmp18 = React4(ModalContent.ModalContent, obj5);
            cResult[11] = children;
            cResult[12] = tmp13;
            cResult[13] = tmp18;
            tmp16 = tmp18;
          }
        }
        const obj6 = { align: "center", justify: "center", spacing: 8, children: null };
        const items3 = [tmp7, tmp8, tmp10];
        obj6.children = items3;
        const tmp15 = React4(Stack_Stack.Stack, obj6);
        cResult[7] = tmp7;
        cResult[8] = tmp8;
        cResult[9] = tmp10;
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
    }
    let tmp11 = null != subtitle;
    if (tmp11) {
      const obj7 = { variant: "text-md/medium", color: str, style: tmp6.header, children: subtitle };
      tmp11 = React3(Text_Text.Text, obj7);
    }
    cResult[3] = tmp6.header;
    cResult[4] = subtitle;
    cResult[5] = str;
    cResult[6] = tmp11;
    tmp10 = tmp11;
  }
  const tmp9 = React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp6.header, children: title });
  cResult[0] = tmp6.header;
  cResult[1] = title;
  cResult[2] = tmp9;
  tmp8 = tmp9;
  const obj8 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp6.header, children: title };
}) : (function SafetyFlowTaskScreen(action) {
  ({ ImageComponent, subtitle, subtitleColor } = action);
  if (subtitleColor === undefined) {
    subtitleColor = "text-strong";
  }
  action = action.action;
  if (action === undefined) {
    action = null;
  }
  ({ footer, withLogout, onAction, children, submitting } = action);
  if (withLogout === undefined) {
    withLogout = true;
  }
  const tmp2 = closure_5();
  let tmp6 = null != ImageComponent;
  if (tmp6) {
    tmp6 = ImageComponent;
  }
  const items = [tmp6, React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title }), ];
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp7Result = React3(Text_Text.Text, obj2);
  }
  const obj3 = { children: null };
  items[2] = tmp7Result;
  const items1 = [React4(Stack_Stack.Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  obj3.children = items1;
  const children1 = [React4(ModalContent.ModalContent, obj3), ];
  if (undefined === footer) {
    if (withLogout) {
      withLogout = React3(LogOutDisclaimerDefault, {});
    }
    const items3 = [withLogout, ];
    let tmp7Result2 = null != action;
    if (tmp7Result2) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp7Result2 = React3(ModalActionButton.ModalActionButton, obj4);
    }
    const obj5 = { children: null };
    items3[1] = tmp7Result2;
    obj5.children = items3;
    footer = React4(ModalFooter.ModalFooter, obj5);
  }
  children1[1] = footer;
  return React4(ModalScreen.ModalScreen, { children: children1 });
});