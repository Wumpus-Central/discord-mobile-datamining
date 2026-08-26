// === Module 17207: ActionableNotice ===

// Module 17207 (ActionableNotice)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4440 */;
import Button from "Button" /* 4879 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" }, message: { marginEnd: 27, flex: 3 }, actionButton: { flexGrow: 0, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
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
  obj1 = { size: "sm", onPress: onClick, disabled: null, text: null };
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