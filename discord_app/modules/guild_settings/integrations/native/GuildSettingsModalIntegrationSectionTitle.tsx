// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSectionTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5043);
const obj2 = { title: { marginBottom: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSectionTitle.tsx",
);

export default function GuildSettingsModalIntegrationSectionTitle(arg0) {
  ({ icon, title } = arg0);
  const obj = {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_8,
    style: closure_5().title,
    children: null,
  };
  const tmp = closure_5();
  items = [
    React3(icon, { size: "md", color: nativeDefault.colors.TEXT_DEFAULT }),
    React3(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "text-default",
      accessibilityRole: "header",
      children: title,
    }),
  ];
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
}
