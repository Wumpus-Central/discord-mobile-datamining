// === Module 17746: EmojiAlias ===

// Module 17746 (EmojiAlias)
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  ({ name, style } = arg0);
  const tmp = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp.emojiAlias, style];
  obj.style = items;
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items1 = [React3(Text_Text.Text, obj), React3(Text_Text.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name }), ];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = React3(Text_Text.Text, obj);
  obj.children = items1;
  return React4(View, obj);
};