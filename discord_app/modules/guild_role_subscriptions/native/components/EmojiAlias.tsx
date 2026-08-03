import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  let name;
  let style;
  ({ name, style } = arg0);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.emojiAlias, style];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items1 = [callback(require(4251) /* Text */.Text, obj), callback(require(4251) /* Text */.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name }), ];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = callback(require(4251) /* Text */.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};