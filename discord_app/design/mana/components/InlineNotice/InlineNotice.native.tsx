// === Module 7567: InlineNotice ===

// Module 7567 (InlineNotice)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import HelpMessageDefault from "HelpMessage" /* 7568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 7569 */;
import NewInlineNotice from "NewInlineNotice" /* 7570 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const InlineNotice = "InlineNotice";
let obj = { critical: fn(7568).HelpMessageTypes.ERROR, warning: fn(7568).HelpMessageTypes.WARNING, info: fn(7568).HelpMessageTypes.INFO, positive: fn(7568).HelpMessageTypes.SUCCESS };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export const InlineNotice = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineNotice(hidden) {
  obj = c;
  const cResult = obj.c(11);
  if (obj2.useDesignSystemsNotificationComponents(InlineNotice)) {
    if (cResult[0] !== hidden) {
      const obj4 = {};
      const merged = Object.assign(hidden);
      const tmp25 = React3(NewInlineNotice.NewInlineNotice, obj4);
      cResult[0] = hidden;
      cResult[1] = tmp25;
      let tmp20 = tmp25;
    } else {
      tmp20 = cResult[1];
    }
    return tmp20;
  } else {
    ({ title, message, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      if (cResult[2] !== action) {
        let tmp7;
        if (null != action) {
          ({ text: obj3.text, onClick: obj3.onPress } = action);
          tmp7 = React3(components_Button_Button.Button, { variant: "secondary", size: "sm", text: null, onPress: null });
          const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
        }
        cResult[2] = action;
        cResult[3] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === message) {
        if (cResult[5] === title) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp27) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp9) {
              let tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj6 = { messageType: tmp27, button: tmp5, children: tmp9 };
        const tmp18 = React3(HelpMessageDefault, obj6);
        cResult[7] = tmp27;
        cResult[8] = tmp5;
        cResult[9] = tmp9;
        cResult[10] = tmp18;
        tmp15 = tmp18;
      }
      let tmp11 = message;
      if (null != title) {
        const obj7 = { children: null };
        const obj12 = { variant: "text-sm/semibold", children: title };
        const items = [React3(Text_Text.Text, obj12), "\n", message];
        obj7.children = items;
        tmp11 = hasOwnProperty(React4, obj7);
      }
      cResult[4] = message;
      cResult[5] = title;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  obj2 = DesignSystemsNotificationComponentsExperiment;
}) : (function InlineNotice(hidden) {
  obj = DesignSystemsNotificationComponentsExperiment;
  if (obj.useDesignSystemsNotificationComponents(InlineNotice)) {
    const obj3 = {};
    const merged = Object.assign(hidden);
    return React3(NewInlineNotice.NewInlineNotice, obj3);
  } else {
    ({ title, message, action } = hidden);
    let tmp14Result2 = null;
    if (true !== hidden.hidden) {
      const obj4 = { messageType: obj[tmp3], button: null, children: null };
      let tmp14Result;
      if (null != action) {
        ({ text: obj2.text, onClick: obj2.onPress } = action);
        tmp14Result = React3(components_Button_Button.Button, { variant: "secondary", size: "sm", text: null, onPress: null });
        const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
      }
      obj4.button = tmp14Result;
      let tmp7 = message;
      if (null != title) {
        const obj6 = { children: null };
        const obj11 = { variant: "text-sm/semibold", children: title };
        const items = [React3(Text_Text.Text, obj11), "\n", message];
        obj6.children = items;
        tmp7 = hasOwnProperty(React4, obj6);
      }
      obj4.children = tmp7;
      tmp14Result2 = React3(HelpMessageDefault, obj4);
    }
    return tmp14Result2;
  }
});