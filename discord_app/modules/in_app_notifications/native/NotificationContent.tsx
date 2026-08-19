// discord_app/modules/in_app_notifications/native/NotificationContent.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LocationText from "MessageNotificationHeader.tsx";
import LocationTextDefault from "MessageNotificationHeader.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: ThemesDefault.space.PX_12, flexDirection: "row" };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  ({ icon, accessoryLabelNode, header } = arg0);
  ({ children, rightAccessory } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.contentContainer, children: null };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = tmp.iconContainer;
    obj[1] = icon;
    tmp4 = callback(View, obj);
  }
  const items = [tmp4, , ];
  obj = { style: tmp.body, children: null };
  obj1 = { style: tmp.labelContainer, children: null };
  let tmp6 = null;
  if (null != accessoryLabelNode) {
    tmp6 = accessoryLabelNode;
  }
  const items1 = [tmp6, ];
  const obj2 = { style: tmp.headerContainer, children: null };
  if ("message" === header.type) {
    const obj3 = {};
    const merged = Object.assign(header);
    let tmp7Result = callback(LocationTextDefault, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(header);
    tmp7Result = callback(LocationText.SimpleNotificationHeader, obj4);
  }
  obj2[1] = tmp7Result;
  items1[1] = callback(View, obj2);
  obj1[1] = items1;
  const items2 = [callback(View, obj1), children];
  obj[1] = items2;
  items[1] = callback(View, obj);
  items[2] = rightAccessory;
  obj[1] = items;
  return callback(View, obj);
};