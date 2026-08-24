// === Module 10803: LeaveConnectionRoleActionSheet ===

// Module 10803 (LeaveConnectionRoleActionSheet)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4739 */;
import Button from "Button" /* 4750 */;
import Background from "Background" /* 6988 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.vytvJF);
  const items = [callback(Text.Text, obj), , ];
  obj1 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.caJwb5);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.button, children: null };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed, text: null, grow: true };
  const intl3 = getSystemLocale.intl;
  obj3[2] = intl3.string(getSystemLocale.t["+Oi4XF"]);
  obj2[1] = callback(Button.Button, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};