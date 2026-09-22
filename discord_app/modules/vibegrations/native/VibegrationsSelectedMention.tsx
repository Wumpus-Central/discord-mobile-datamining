// discord_app/modules/vibegrations/native/VibegrationsSelectedMention.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj2 = {
  chip: {
    color: nativeDefault.colors.MENTION_FOREGROUND,
    backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
    borderRadius: 3,
    paddingHorizontal: 2,
  },
};
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectedMention.tsx");

export default function VibegrationsSelectedMention(arg0) {
  ({ label, variant } = arg0);
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, children: label });
}
