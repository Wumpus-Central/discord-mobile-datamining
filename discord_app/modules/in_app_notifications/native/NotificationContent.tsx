// === Module 12517: NotificationContent ===

// Module 12517 (NotificationContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MessageNotificationHeader from "MessageNotificationHeader" /* 12518 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessageNotificationHeaderDefault = MessageNotificationHeader;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { flex: 1 }, iconContainer: obj2, contentContainer: obj3, headerContainer: { flex: 1 }, labelContainer: { flexDirection: "row", alignItems: "center" } };
obj2 = { marginRight: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let items;
  let items1;
  let items2;
  let rightAccessory;
  const obj = react2;
  const cResult = obj.c(21);
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === icon) {
    let tmp5;
    let tmp10;
    if (cResult[1] === tmp4.iconContainer) {
      tmp5 = cResult[2];
    }
    let tmp9 = null;
    if (null != accessoryLabelNode) {
      tmp9 = accessoryLabelNode;
    }
    if (cResult[3] !== header) {
      let tmp15;
      if ("message" === header.type) {
        const obj2 = {};
        const tmp18 = MessageNotificationHeaderDefault;
        const merged = Object.assign(header);
        tmp15 = React3(tmp18, obj2);
      } else {
        const obj3 = {};
        const SimpleNotificationHeader = MessageNotificationHeader.SimpleNotificationHeader;
        const merged1 = Object.assign(header);
        tmp15 = React3(SimpleNotificationHeader, obj3);
      }
      cResult[3] = header;
      cResult[4] = tmp15;
      tmp10 = tmp15;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.headerContainer) {
      let tmp22;
      if (cResult[6] === tmp10) {
        tmp22 = cResult[7];
      }
      if (cResult[8] === tmp4.labelContainer) {
        if (cResult[9] === tmp9) {
          let tmp26;
          if (cResult[10] === tmp22) {
            tmp26 = cResult[11];
          }
          if (cResult[12] === children) {
            if (cResult[13] === tmp4.body) {
              let tmp30;
              if (cResult[14] === tmp26) {
                tmp30 = cResult[15];
              }
              if (cResult[16] === rightAccessory) {
                if (cResult[17] === tmp4.contentContainer) {
                  if (cResult[18] === tmp5) {
                    let tmp34;
                    if (cResult[19] === tmp30) {
                      tmp34 = cResult[20];
                    }
                    return tmp34;
                  }
                }
              }
              const obj4 = { style: tmp4.contentContainer, children: items };
              items = [tmp5, tmp30, rightAccessory];
              const tmp37 = hasOwnProperty(View, obj4);
              cResult[16] = rightAccessory;
              cResult[17] = tmp4.contentContainer;
              cResult[18] = tmp5;
              cResult[19] = tmp30;
              cResult[20] = tmp37;
              tmp34 = tmp37;
            }
          }
          const obj5 = { style: tmp4.body, children: items1 };
          items1 = [tmp26, children];
          const tmp33 = hasOwnProperty(View, obj5);
          cResult[12] = children;
          cResult[13] = tmp4.body;
          cResult[14] = tmp26;
          cResult[15] = tmp33;
          tmp30 = tmp33;
        }
      }
      const obj6 = { style: tmp4.labelContainer, children: items2 };
      items2 = [tmp9, tmp22];
      const tmp29 = hasOwnProperty(View, obj6);
      cResult[8] = tmp4.labelContainer;
      cResult[9] = tmp9;
      cResult[10] = tmp22;
      cResult[11] = tmp29;
      tmp26 = tmp29;
    }
    const obj7 = { style: tmp4.headerContainer, children: tmp10 };
    const tmp25 = React3(View, obj7);
    cResult[5] = tmp4.headerContainer;
    cResult[6] = tmp10;
    cResult[7] = tmp25;
    tmp22 = tmp25;
  }
  let tmp6 = null;
  if (null != icon) {
    const obj8 = { style: tmp4.iconContainer, children: icon };
    tmp6 = React3(View, obj8);
  }
  cResult[0] = icon;
  cResult[1] = tmp4.iconContainer;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let items;
  let items1;
  let items2;
  let rightAccessory;
  let tmp7Result;
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = closure_6();
  let tmp4 = null;
  const obj = { style: tmp.contentContainer, children: items };
  if (null != icon) {
    const obj2 = { style: tmp.iconContainer, children: icon };
    tmp4 = React3(View, obj2);
  }
  items = [tmp4, , ];
  let tmp6 = null;
  const obj3 = { style: tmp.body, children: items2 };
  const obj4 = { style: tmp.labelContainer, children: items1 };
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  items1 = [tmp6, ];
  const obj5 = { style: tmp.headerContainer, children: tmp7Result };
  if ("message" === header.type) {
    const obj6 = {};
    const tmp16 = MessageNotificationHeaderDefault;
    const merged = Object.assign(header);
    tmp7Result = React3(tmp16, obj6);
  } else {
    const obj7 = {};
    const SimpleNotificationHeader = MessageNotificationHeader.SimpleNotificationHeader;
    const merged1 = Object.assign(header);
    tmp7Result = React3(SimpleNotificationHeader, obj7);
  }
  items1[1] = React3(View, obj5);
  items2 = [hasOwnProperty(View, obj4), children];
  items[1] = hasOwnProperty(View, obj3);
  items[2] = rightAccessory;
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default tmp5;