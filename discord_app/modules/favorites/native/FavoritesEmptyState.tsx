// discord_app/modules/favorites/native/FavoritesEmptyState.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  const items = [callback(AccountAgeTier10LargeBadge.FavoritesSpotIllustration, { width: 192, height: 108 }), ];
  obj = { spacing: null, align: "center", children: null };
  obj[0] = Themes.space.PX_8;
  obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(messagesProxy["wh+Rz1"]);
  const items1 = [callback(Text.Heading, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(messagesProxy["+SuGKb"]);
  items1[1] = callback(Text.Text, obj1);
  obj[2] = items1;
  items[1] = callback2(Stack.Stack, obj);
  obj[1] = items;
  return callback2(View, obj);
};