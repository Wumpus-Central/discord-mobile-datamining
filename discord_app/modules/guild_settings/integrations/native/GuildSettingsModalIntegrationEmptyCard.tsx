// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationEmptyCard.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_3 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationEmptyCard.tsx",
);

export default function GuildSettingsModalIntegrationEmptyCard(children) {
  const obj = { children: null };
  const tmp = closure_3();
  obj.children = jsx(Text_Text.Text, {
    variant: "body-sm/normal",
    color: "text-muted",
    style: closure_3().text,
    children: children.text,
  });
  return jsx(Card.Card, { children: null });
}
