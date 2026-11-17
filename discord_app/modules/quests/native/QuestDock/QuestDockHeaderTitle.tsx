// discord_app/modules/quests/native/QuestDock/QuestDockHeaderTitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5310);
let closure_3 = createStyles.createStyles({ title: { lineHeight: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderTitle.tsx");

export default function QuestDockHeaderTitle(arg0) {
  ({ children, accessible } = arg0);
  const tmp = closure_3();
  return jsx(Text_Text.Text, {
    variant: "body-sm/medium",
    color: "text-strong",
    lineClamp: 2,
    accessible,
    style: closure_3().title,
    children,
  });
}
