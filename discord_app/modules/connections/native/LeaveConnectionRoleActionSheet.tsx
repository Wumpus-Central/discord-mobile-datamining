// discord_app/modules/connections/native/LeaveConnectionRoleActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const result = require("obj132").fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = callback3();
  const obj = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
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