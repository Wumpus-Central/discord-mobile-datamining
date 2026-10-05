// discord_app/modules/safety_flows/native/SafetyFlowTaskScreen.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import ModalScreen2 from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent2 from "../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalActionButton from "../../../design/components/Modal/native/ModalActionButton.native.tsx";
import ModalFooter2 from "../../../design/components/Modal/native/ModalFooter.native.tsx";
import LogOutDisclaimerDefault from "LogOutDisclaimer.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ header: { textAlign: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ImageComponent;
      let action;
      let children;
      let footer;
      let items;
      let items2;
      let items3;
      let onAction;
      let submitting;
      let subtitle;
      let subtitleColor;
      let title;
      let withLogout;
      const obj = react2;
      const cResult = obj.c(23);
      ({ ImageComponent, title, subtitle, subtitleColor, action, onAction, footer, children, submitting, withLogout } =
        arg0);
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
        let tmp8;
        if (cResult[1] === title) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === tmp6.header) {
          if (cResult[4] === subtitle) {
            let tmp10;
            if (cResult[5] === str) {
              tmp10 = cResult[6];
            }
            if (cResult[7] === (null != ImageComponent && ImageComponent)) {
              if (cResult[8] === tmp8) {
                let tmp13;
                if (cResult[9] === tmp10) {
                  tmp13 = cResult[10];
                }
                if (cResult[11] === children) {
                  let tmp16;
                  if (cResult[12] === tmp13) {
                    tmp16 = cResult[13];
                  }
                  if (cResult[14] === tmp4) {
                    if (cResult[15] === footer) {
                      if (cResult[16] === onAction) {
                        if (cResult[17] === submitting) {
                          let tmp19;
                          if (cResult[18] === (undefined === withLogout || withLogout)) {
                            tmp19 = cResult[19];
                          }
                          if (cResult[20] === tmp16) {
                            let tmp26;
                            if (cResult[21] === tmp19) {
                              tmp26 = cResult[22];
                            }
                            return tmp26;
                          }
                          const obj2 = { children: items };
                          items = [tmp16, tmp19];
                          const tmp28 = React3(ModalScreen2.ModalScreen, obj2);
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
                    const ModalFooter = ModalFooter2.ModalFooter;
                    if (undefined === withLogout || withLogout) {
                      tmp23 = _false(LogOutDisclaimerDefault, {});
                    }
                    const items1 = [tmp23];
                    let tmp24 = null != tmp4;
                    if (tmp24) {
                      const obj3 = { variant: "primary", text: tmp4, onPress: onAction, loading: submitting };
                      tmp24 = _false(ModalActionButton.ModalActionButton, obj3);
                    }
                    const obj4 = { children: items1 };
                    items1[1] = tmp24;
                    tmp29Result = React3(ModalFooter, obj4);
                  }
                  cResult[14] = tmp4;
                  cResult[15] = footer;
                  cResult[16] = onAction;
                  cResult[17] = submitting;
                  cResult[18] = undefined === withLogout || withLogout;
                  cResult[19] = tmp29Result;
                  tmp19 = tmp29Result;
                }
                const obj5 = { children: items2 };
                items2 = [tmp13, children];
                const tmp18 = React3(ModalContent2.ModalContent, obj5);
                cResult[11] = children;
                cResult[12] = tmp13;
                cResult[13] = tmp18;
                tmp16 = tmp18;
              }
            }
            const obj6 = { align: "center", justify: "center", spacing: 8, children: items3 };
            items3 = [null != ImageComponent && ImageComponent, tmp8, tmp10];
            const tmp15 = React3(Stack_Stack.Stack, obj6);
            cResult[7] = null != ImageComponent && ImageComponent;
            cResult[8] = tmp8;
            cResult[9] = tmp10;
            cResult[10] = tmp15;
            tmp13 = tmp15;
          }
        }
        let tmp11 = null != subtitle;
        if (tmp11) {
          const obj7 = { variant: "text-md/medium", color: str, style: tmp6.header, children: subtitle };
          tmp11 = _false(Text_Text.Text, obj7);
        }
        cResult[3] = tmp6.header;
        cResult[4] = subtitle;
        cResult[5] = str;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
      const obj8 = {
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp6.header,
        children: title,
      };
      const tmp9 = _false(Text_Text.Text, obj8);
      cResult[0] = tmp6.header;
      cResult[1] = title;
      cResult[2] = tmp9;
      tmp8 = tmp9;
    }
  : (title) => {
      let ImageComponent;
      let children;
      let footer;
      let items1;
      let onAction;
      let submitting;
      let subtitle;
      let subtitleColor;
      let withLogout;
      ({ ImageComponent, subtitle, subtitleColor } = title);
      title = title.title;
      if (subtitleColor === undefined) {
        subtitleColor = "text-strong";
      }
      let action = title.action;
      if (action === undefined) {
        action = null;
      }
      ({ footer, withLogout, onAction, children, submitting } = title);
      if (withLogout === undefined) {
        withLogout = true;
      }
      const tmp2 = closure_5();
      const ModalScreen = ModalScreen2.ModalScreen;
      const ModalContent = ModalContent2.ModalContent;
      let tmp6 = null != ImageComponent;
      const Stack = Stack_Stack.Stack;
      if (tmp6) {
        tmp6 = ImageComponent;
      }
      const items = [tmp6, ,];
      const obj = {
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp2.header,
        children: title,
      };
      items[1] = _false(Text_Text.Text, obj);
      let tmp7Result = null != subtitle;
      if (tmp7Result) {
        const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
        tmp7Result = _false(Text_Text.Text, obj2);
      }
      const obj3 = { children: items1 };
      items[2] = tmp7Result;
      items1 = [React3(Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
      const children1 = [React3(ModalContent, obj3)];
      if (undefined === footer) {
        const ModalFooter = ModalFooter2.ModalFooter;
        if (withLogout) {
          withLogout = _false(LogOutDisclaimerDefault, {});
        }
        const items3 = [withLogout];
        let tmp7Result2 = null != action;
        if (tmp7Result2) {
          const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
          tmp7Result2 = _false(ModalActionButton.ModalActionButton, obj4);
        }
        const obj5 = { children: items3 };
        items3[1] = tmp7Result2;
        footer = React3(ModalFooter, obj5);
      }
      children1[1] = footer;
      return React3(ModalScreen, { children: children1 });
    };
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default tmp4;
