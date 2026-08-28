// === Module 10194: NotificationContent ===

// Module 10194 (NotificationContent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import LocationText from "LocationText" /* 10195 */;
import LocationTextDefault from "LocationText" /* 10195 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { body: { flex: 1 }, iconContainer: null, contentContainer: null, headerContainer: null, labelContainer: null };
createCacheKey = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: ThemesDefault.space.PX_12, flexDirection: "row" };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: ThemesDefault.space.PX_12, flexDirection: "row" };
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

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
    tmp4 = callback(tmp3, obj);
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
    let tmp7Result = tmp7(LocationTextDefault, obj3);
    const tmp16 = LocationTextDefault;
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