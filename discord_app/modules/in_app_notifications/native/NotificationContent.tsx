// === Module 10411: NotificationContent ===

// Module 10411 (NotificationContent)
import nativeDefault from "native" /* 576 */;
import MessageNotificationHeader from "MessageNotificationHeader" /* 10412 */;
import noop from "module_19" /* 19 */;

const MessageNotificationHeaderDefault = MessageNotificationHeader;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { body: { flex: 1 }, iconContainer: { marginRight: nativeDefault.space.PX_8 }, contentContainer: null, headerContainer: null, labelContainer: null };
let obj3 = { marginRight: nativeDefault.space.PX_8 };
obj2.contentContainer = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
obj2.headerContainer = { flex: 1 };
obj2.labelContainer = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
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
};