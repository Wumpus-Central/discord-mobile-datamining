// discord_app/modules/guild_role_subscriptions/native/components/EmojiAlias.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4638);
let closure_5 = createStyles.createStyles({
  emojiAlias: { alignItems: "center", flexDirection: "row" },
  emojiColon: { width: 4 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  ({ name, style } = arg0);
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.emojiAlias, style];
  obj.style = items;
  const items1 = [
    React3(Text_Text.Text, {
      style: tmp.emojiColon,
      "aria-hidden": true,
      variant: "text-md/medium",
      color: "text-muted",
      children: ":",
    }),
    React3(Text_Text.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name }),
    React3(Text_Text.Text, {
      style: tmp.emojiColon,
      "aria-hidden": true,
      variant: "text-md/medium",
      color: "text-muted",
      children: ":",
    }),
  ];
  obj.children = items1;
  return React4(View, obj);
}
