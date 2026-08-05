// discord_app/modules/connections/native/LeaveConnectionRoleActionSheet.tsx
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
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vytvJF);
  const items = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), , ];
  const obj1 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.caJwb5);
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  const obj2 = { style: tmp.button, children: null };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed, text: null, grow: true };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[2] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["+Oi4XF"]);
  obj2[1] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj3);
  items[2] = callback(View, obj2);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};