// === Module 7953: InlineNotice ===

// Module 7953 (InlineNotice)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import HelpMessageDefault from "HelpMessage" /* 7954 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 7955 */;
import NewInlineNotice from "NewInlineNotice" /* 7956 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const InlineNotice = "InlineNotice";
let obj = { critical: fn(7954).HelpMessageTypes.ERROR, warning: fn(7954).HelpMessageTypes.WARNING, info: fn(7954).HelpMessageTypes.INFO, positive: fn(7954).HelpMessageTypes.SUCCESS };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export const InlineNotice = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineNotice(hidden) {
  obj = c;
  const cResult = obj.c(14);
  if (obj2.useDesignSystemsNotificationComponents(InlineNotice)) {
    if (cResult[0] !== hidden) {
      const obj3 = {};
      const merged = Object.assign(hidden);
      const tmp32 = React4(NewInlineNotice.NewInlineNotice, obj3);
      cResult[0] = hidden;
      cResult[1] = tmp32;
      let tmp27 = tmp32;
    } else {
      tmp27 = cResult[1];
    }
    return tmp27;
  } else {
    ({ title, message, messageList, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      if (cResult[2] === message) {
        if (cResult[3] === messageList) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] !== action) {
          let tmp14;
          if (null != action) {
            ({ text: obj4.text, onPress: obj4.onPress, loading: obj4.loading } = action);
            tmp14 = React4(components_Button_Button.Button, { variant: "secondary", size: "sm", text: null, onPress: null, loading: null });
            const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
          }
          cResult[5] = action;
          cResult[6] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === title) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp11) {
            if (cResult[11] === tmp12) {
              if (cResult[12] === tmp16) {
                let tmp22 = cResult[13];
              }
              return tmp22;
            }
          }
          const obj6 = { messageType: tmp11, button: tmp12, children: tmp16 };
          const tmp25 = React4(HelpMessageDefault, obj6);
          cResult[10] = tmp11;
          cResult[11] = tmp12;
          cResult[12] = tmp16;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
        let tmp18 = tmp5;
        if (null != title) {
          const obj7 = { children: null };
          const obj8 = { variant: "text-sm/semibold", children: title };
          let items = [React4(Text_Text.Text, obj8), "\n", tmp5];
          obj7.children = items;
          tmp18 = hasOwnProperty(timestampProducer, obj7);
        }
        cResult[7] = tmp5;
        cResult[8] = title;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      let tmp7 = message;
      if (null != messageList) {
        const obj14 = { children: null };
        const items1 = [
          message,
          messageList.map((item, index) => {
                  obj = { children: null };
                  const items = ["\n\u2022 ", item];
                  obj.children = items;
                  return closure_1_5(React.Fragment, obj, index);
                })
        ];
        obj14.children = items1;
        tmp7 = hasOwnProperty(timestampProducer, obj14);
      }
      cResult[2] = message;
      cResult[3] = messageList;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    }
  }
  obj2 = DesignSystemsNotificationComponentsExperiment;
}) : (function InlineNotice(hidden) {
  obj = DesignSystemsNotificationComponentsExperiment;
  if (obj.useDesignSystemsNotificationComponents(InlineNotice)) {
    const obj2 = {};
    const merged = Object.assign(hidden);
    return React4(NewInlineNotice.NewInlineNotice, obj2);
  } else {
    ({ title, message, messageList, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      let tmp6 = message;
      if (null != messageList) {
        const obj3 = { children: null };
        let items = [
          message,
          messageList.map((item, index) => {
                  obj = { children: null };
                  const items = ["\n\u2022 ", item];
                  obj.children = items;
                  return closure_1_5(React.Fragment, obj, index);
                })
        ];
        obj3.children = items;
        tmp6 = hasOwnProperty(timestampProducer, obj3);
      }
      const obj5 = { messageType: obj[tmp3], button: null, children: null };
      let tmp7Result;
      if (null != action) {
        ({ text: obj4.text, onPress: obj4.onPress, loading: obj4.loading } = action);
        tmp7Result = React4(components_Button_Button.Button, { variant: "secondary", size: "sm", text: null, onPress: null, loading: null });
        const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
      }
      obj5.button = tmp7Result;
      let tmp12 = tmp6;
      if (null != title) {
        const obj7 = { children: null };
        const obj13 = { variant: "text-sm/semibold", children: title };
        const items1 = [React4(Text_Text.Text, obj13), "\n", tmp6];
        obj7.children = items1;
        tmp12 = hasOwnProperty(timestampProducer, obj7);
      }
      obj5.children = tmp12;
      return React4(HelpMessageDefault, obj5);
    }
  }
});