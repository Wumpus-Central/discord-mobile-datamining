// discord_app/modules/in_app_notifications/native/NotificationContent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import MessageNotificationHeader from "MessageNotificationHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const MessageNotificationHeaderDefault = MessageNotificationHeader;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  body: { flex: 1 },
  iconContainer: null,
  contentContainer: null,
  headerContainer: null,
  labelContainer: null,
};
createStyles = { marginRight: nativeDefault.space.PX_8 };
createStyles.iconContainer = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_12, flexDirection: "row" };
createStyles.headerContainer = { flex: 1 };
createStyles.labelContainer = { flexDirection: "row", alignItems: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = closure_6();
  let obj = { style: tmp.contentContainer, children: null };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: tmp.iconContainer, children: icon };
    tmp4 = React4(tmp3, obj);
  }
  const items = [tmp4, ,];
  obj = { style: tmp.body, children: null };
  const obj1 = { style: tmp.labelContainer, children: null };
  let tmp6 = null;
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  const items1 = [tmp6];
  const obj2 = { style: tmp.headerContainer, children: null };
  if ("message" === header.type) {
    const obj3 = {};
    const merged = Object.assign(header);
    let tmp7Result = tmp7(MessageNotificationHeaderDefault, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(header);
    tmp7Result = tmp7(MessageNotificationHeader.SimpleNotificationHeader, obj4);
  }
  obj2.children = tmp7Result;
  items1[1] = React4(View, obj2);
  obj1.children = items1;
  const items2 = [hasOwnProperty(View, obj1), children];
  obj.children = items2;
  items[1] = hasOwnProperty(View, obj);
  items[2] = rightAccessory;
  obj.children = items;
  return hasOwnProperty(View, obj);
}
