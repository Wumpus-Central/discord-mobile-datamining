// discord_app/modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import EyeSlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import DenyIcon from "../../../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: ThemesDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = DenyIcon.DenyIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  obj = { size: "sm", color: ThemesDefault.colors.TEXT_MUTED };
  const items = [callback(EyeSlashIcon, obj), ];
  const intl = getSystemLocale.intl;
  const t = getSystemLocale.t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = callback(Text.Text, obj);
  obj[3] = items;
  return callback2(Stack.Stack, obj);
};