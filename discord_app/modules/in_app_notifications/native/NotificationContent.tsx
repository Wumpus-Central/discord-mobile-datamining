// === Module 12628: NotificationContent ===

// Module 12628 (NotificationContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MessageNotificationHeader from "MessageNotificationHeader" /* 12629 */;
import noop from "module_19" /* 19 */;

const MessageNotificationHeaderDefault = MessageNotificationHeader;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { body: { flex: 1 }, iconContainer: { marginRight: nativeDefault.space.PX_8 }, contentContainer: null, headerContainer: null, labelContainer: null };
let obj3 = { marginRight: nativeDefault.space.PX_8 };
obj2.contentContainer = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
obj2.headerContainer = { flex: 1 };
obj2.labelContainer = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationContent(arg0) {
  let obj = dependencyMap;
  const cResult = c.c(21);
  ({ icon, children, accessoryLabelNode, rightAccessory, header } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === icon) {
    if (cResult[1] === tmp3.iconContainer) {
      let tmp4 = cResult[2];
    }
    let tmp8 = null;
    if (null != accessoryLabelNode) {
      tmp8 = accessoryLabelNode;
    }
    if (cResult[3] !== header) {
      if ("message" === header.type) {
        obj = {};
        const merged = Object.assign(header);
        let tmp14 = React4(MessageNotificationHeaderDefault, obj);
      } else {
        const obj3 = {};
        const merged1 = Object.assign(header);
        tmp14 = React4(MessageNotificationHeader.SimpleNotificationHeader, obj3);
      }
      cResult[3] = header;
      cResult[4] = tmp14;
    } else {
      if (cResult[5] === tmp3.headerContainer) {
        if (cResult[6] === tmp9) {
          let tmp22 = cResult[7];
        }
        if (cResult[8] === tmp3.labelContainer) {
          if (cResult[9] === tmp8) {
            if (cResult[10] === tmp22) {
              let tmp26 = cResult[11];
            }
            if (cResult[12] === children) {
              if (cResult[13] === tmp3.body) {
                if (cResult[14] === tmp26) {
                  let tmp30 = cResult[15];
                }
                if (cResult[16] === rightAccessory) {
                  if (cResult[17] === tmp3.contentContainer) {
                    if (cResult[18] === tmp4) {
                      if (cResult[19] === tmp30) {
                        let tmp34 = cResult[20];
                      }
                      return tmp34;
                    }
                  }
                }
                const obj4 = { style: tmp3.contentContainer, children: null };
                const items = [tmp4, tmp30, rightAccessory];
                obj4.children = items;
                const tmp37 = hasOwnProperty(View, obj4);
                cResult[16] = rightAccessory;
                cResult[17] = tmp3.contentContainer;
                cResult[18] = tmp4;
                cResult[19] = tmp30;
                cResult[20] = tmp37;
                tmp34 = tmp37;
              }
            }
            const obj5 = { style: tmp3.body, children: null };
            const items1 = [tmp26, children];
            obj5.children = items1;
            const tmp33 = hasOwnProperty(View, obj5);
            cResult[12] = children;
            cResult[13] = tmp3.body;
            cResult[14] = tmp26;
            cResult[15] = tmp33;
            tmp30 = tmp33;
          }
        }
        const obj6 = { style: tmp3.labelContainer, children: null };
        const items2 = [tmp8, tmp22];
        obj6.children = items2;
        const tmp29 = hasOwnProperty(View, obj6);
        cResult[8] = tmp3.labelContainer;
        cResult[9] = tmp8;
        cResult[10] = tmp22;
        cResult[11] = tmp29;
        tmp26 = tmp29;
      }
      const obj7 = { style: tmp3.headerContainer, children: cResult[4] };
      const tmp25 = React4(View, obj7);
      cResult[5] = tmp3.headerContainer;
      cResult[6] = cResult[4];
      cResult[7] = tmp25;
      tmp22 = tmp25;
    }
  }
  let tmp5 = null;
  if (null != icon) {
    const obj8 = { style: tmp3.iconContainer, children: icon };
    tmp5 = React4(View, obj8);
  }
  cResult[0] = icon;
  cResult[1] = tmp3.iconContainer;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function NotificationContent(arg0) {
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.contentContainer, children: null };
  let tmp4 = null;
  if (null != icon) {
    const obj2 = { style: tmp.iconContainer, children: icon };
    tmp4 = React4(View, obj2);
  }
  const items = [tmp4, , ];
  const obj3 = { style: tmp.body, children: null };
  const obj4 = { style: tmp.labelContainer, children: null };
  let tmp6 = null;
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  const items1 = [tmp6, ];
  const obj5 = { style: tmp.headerContainer, children: null };
  if ("message" === header.type) {
    const obj6 = {};
    const merged = Object.assign(header);
    let tmp7Result = React4(MessageNotificationHeaderDefault, obj6);
  } else {
    const obj7 = {};
    const merged1 = Object.assign(header);
    tmp7Result = React4(MessageNotificationHeader.SimpleNotificationHeader, obj7);
  }
  obj5.children = tmp7Result;
  items1[1] = React4(View, obj5);
  obj4.children = items1;
  const items2 = [hasOwnProperty(View, obj4), children];
  obj3.children = items2;
  items[1] = hasOwnProperty(View, obj3);
  items[2] = rightAccessory;
  obj.children = items;
  return hasOwnProperty(View, obj);
});