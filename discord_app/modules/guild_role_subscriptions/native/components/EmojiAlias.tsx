// discord_app/modules/guild_role_subscriptions/native/components/EmojiAlias.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  ({ name, style } = arg0);
  const tmp = callback3();
  const items = [tmp.emojiAlias, style];
  let obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items1 = [callback(Text.Text, obj), callback(Text.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name }), ];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};