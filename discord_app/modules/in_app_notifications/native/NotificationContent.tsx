// discord_app/modules/in_app_notifications/native/NotificationContent.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { LocationText } from "MessageNotificationHeader.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { body: { flex: 1 }, iconContainer: null, contentContainer: null, headerContainer: null, labelContainer: null };
createCacheKey = { marginRight: require("Themes").space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: require("Themes").space.PX_12, flexDirection: "row" };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: require("Themes").space.PX_12, flexDirection: "row" };
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  let accessoryLabelNode;
  let children;
  let header;
  let icon;
  let rightAccessory;
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.contentContainer, children: null };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = tmp.iconContainer;
    obj[1] = icon;
    tmp4 = callback(tmp3, obj);
  }
  const items = [tmp4, , ];
  obj = { style: tmp.body, children: null };
  const obj1 = { style: tmp.labelContainer, children: null };
  let tmp6 = null;
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  const items1 = [tmp6, ];
  const obj2 = { style: tmp.headerContainer, children: null };
  if ("message" === header.type) {
    const obj3 = {};
    const merged = Object.assign(header);
    let tmp7Result = tmp7(LocationText, obj3);
    const tmp16 = LocationText;
  } else {
    const obj4 = {};
    const merged1 = Object.assign(header);
    tmp7Result = tmp7(LocationText.SimpleNotificationHeader, obj4);
  }
  obj2[1] = tmp7Result;
  items1[1] = callback(View, obj2);
  obj1[1] = items1;
  const items2 = [closure_5(View, obj1), children];
  obj[1] = items2;
  items[1] = closure_5(View, obj);
  items[2] = rightAccessory;
  obj[1] = items;
  return closure_5(View, obj);
};