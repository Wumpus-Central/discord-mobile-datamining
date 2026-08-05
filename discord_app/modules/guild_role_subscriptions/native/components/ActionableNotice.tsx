// discord_app/modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" }, message: { marginEnd: 27, flex: 3 }, actionButton: { flexGrow: 0, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
  let ctaMessage;
  let disabled;
  let message;
  let onClick;
  let style;
  let submitting;
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [style, tmp.container];
  obj = { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message };
  const items1 = [callback(Text.Text, obj), ];
  obj = { style: tmp.actionButton, children: null };
  const obj1 = { size: "sm", onPress: onClick, disabled: null, text: null };
  if (!submitting) {
    submitting = disabled;
  }
  obj1[2] = submitting;
  obj1[3] = ctaMessage;
  obj[1] = callback(Button.Button, obj1);
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return closure_4(View, obj);
};