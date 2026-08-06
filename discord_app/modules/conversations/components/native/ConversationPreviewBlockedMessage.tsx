// discord_app/modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx
import "noop";
import jsxProd from "jsxProd";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("Stack").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: null, align: "center", children: null };
  obj[1] = Themes.space.PX_8;
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(8509).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(8418).EyeSlashIcon;
  }
  obj = { size: "sm", color: Themes.colors.TEXT_MUTED };
  const items = [closure_3(EyeSlashIcon, obj), ];
  const intl = tmp2(1236).intl;
  const t = tmp2(1236).t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = closure_3(Text.Text, obj);
  obj[3] = items;
  return closure_4(Stack.Stack, obj);
};