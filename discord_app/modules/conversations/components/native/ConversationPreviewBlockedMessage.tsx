// discord_app/modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import EyeSlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import DenyIcon from "../../../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx",
);

export default function ConversationPreviewBlockedMessage(reason) {
  let obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = DenyIcon.DenyIcon;
  } else {
    EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
  }
  obj = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  const items = [React3(EyeSlashIcon, obj)];
  const intl = util.intl;
  const t = util.t;
  obj = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp6 ? t["WPe+xL"] : t.uxrh1O) };
  items[1] = React3(Text_Text.Text, obj);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
}
