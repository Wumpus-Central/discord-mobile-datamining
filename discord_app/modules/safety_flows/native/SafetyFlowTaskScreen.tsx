// discord_app/modules/safety_flows/native/SafetyFlowTaskScreen.tsx
import noopAll from "noop" /* 19 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import ModalScreen from "ModalScreen" /* 5440 */;
import ModalContent from "ModalContent" /* 5445 */;
import LogOutDisclaimerDefault from "LogOutDisclaimer" /* 17091 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

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
  const tmp2 = callback2();
  let tmp6 = null != ImageComponent;
  if (tmp6) {
    tmp6 = ImageComponent;
  }
  const items = [tmp6, , ];
  let obj = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp2.header, children: action.title };
  items[1] = callback(Text.Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    obj = { variant: "text-md/medium", color: null, style: null, children: null };
    obj[1] = subtitleColor;
    obj[2] = tmp2.header;
    obj[3] = subtitle;
    tmp7Result = tmp7(tmp4(4734).Text, obj);
  }
  obj = { children: null };
  items[2] = tmp7Result;
  const items1 = [closure_4(Stack.Stack, { align: "center", justify: "center", spacing: 8, children: items }), children];
  obj[0] = items1;
  children = [closure_4(ModalContent.ModalContent, obj), ];
  if (undefined === footer) {
    if (withLogout) {
      withLogout = tmp7(LogOutDisclaimerDefault, {});
    }
    const items3 = [withLogout, ];
    tmp7Result = null != action;
    if (tmp7Result) {
      obj1 = { variant: "primary", text: null, onPress: null, loading: null };
      obj1[1] = action;
      obj1[2] = onAction;
      obj1[3] = submitting;
      tmp7Result = tmp7(tmp4(11964).ModalActionButton, obj1);
    }
    const obj2 = { children: null };
    items3[1] = tmp7Result;
    obj2[0] = items3;
    footer = tmp3(tmp4(11114).ModalFooter, obj2);
  }
  children[1] = footer;
  return closure_4(ModalScreen.ModalScreen, { children });
};