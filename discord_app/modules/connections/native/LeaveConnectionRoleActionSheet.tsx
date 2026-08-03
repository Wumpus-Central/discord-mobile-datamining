import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.vytvJF);
  const items = [callback(require(4189) /* Text */.Text, obj), , ];
  const obj1 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require(1236) /* getSystemLocale */.t.caJwb5);
  items[1] = callback(require(4189) /* Text */.Text, obj1);
  const obj2 = { style: tmp.button, children: null };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed, text: null, grow: true };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj3[2] = intl3.string(require(1236) /* getSystemLocale */.t["+Oi4XF"]);
  obj2[1] = callback(require(4604) /* Button */.Button, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(require(5247) /* Background */.BottomSheet, obj);
};