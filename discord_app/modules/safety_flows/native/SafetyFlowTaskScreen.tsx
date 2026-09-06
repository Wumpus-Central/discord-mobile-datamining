// === Module 17876: SafetyFlowTaskScreen ===

// Module 17876 (SafetyFlowTaskScreen)
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import ModalScreen from "ModalScreen" /* 8421 */;
import ModalContent from "ModalContent" /* 8422 */;
import ModalActionButton from "ModalActionButton" /* 10996 */;
import ModalFooter from "ModalFooter" /* 11926 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17874 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default function SafetyFlowTaskScreen(action) {
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
  const items = [tmp6, , ];
  let obj = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title };
  items[1] = React3(Text_Text.Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    obj = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp7Result = React3(Text_Text.Text, obj);
  }
  obj = { children: null };
  items[2] = tmp7Result;
  const items1 = [React4(Stack_Stack.Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  obj.children = items1;
  children = [React4(ModalContent.ModalContent, obj), ];
  if (undefined === footer) {
    if (withLogout) {
      withLogout = React3(LogOutDisclaimerDefault, {});
    }
    const items3 = [withLogout, ];
    tmp7Result = null != action;
    if (tmp7Result) {
      const obj1 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp7Result = React3(ModalActionButton.ModalActionButton, obj1);
    }
    const obj2 = { children: null };
    items3[1] = tmp7Result;
    obj2.children = items3;
    footer = React4(ModalFooter.ModalFooter, obj2);
  }
  children[1] = footer;
  return React4(ModalScreen.ModalScreen, { children });
};