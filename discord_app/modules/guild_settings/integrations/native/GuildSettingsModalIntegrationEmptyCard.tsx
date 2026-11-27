// === Module 20005: GuildSettingsModalIntegrationEmptyCard ===

// Module 20005 (GuildSettingsModalIntegrationEmptyCard)
import Text_Text from "Text/Text" /* 5634 */;
import Card from "Card" /* 6145 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_3 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationEmptyCard.tsx");

export default function GuildSettingsModalIntegrationEmptyCard(children) {
  const obj = { children: null };
  const tmp = closure_3();
  obj.children = jsx(Text_Text.Text, { variant: "body-sm/normal", color: "text-muted", style: closure_3().text, children: children.text });
  return jsx(Card.Card, { children: null });
};