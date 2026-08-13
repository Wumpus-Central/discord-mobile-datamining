// discord_app/modules/favorites/native/FavoritesEmptyState.tsx
import noop from "noop";
import { View } from "PlusMediumIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = createCacheKey();
  let obj = useFavoritesAccess;
  const callback = React.useCallback(() => {
    callback2(paths[6])({ source: "favorites_empty_state" });
  }, []);
  obj = { style: tmp.container, children: null };
  const callback1 = React.useCallback(() => {
    const obj = callback2(paths[7]);
    obj.openLazy(callback(paths[9])(paths[8], paths.paths), callback(paths[10]).FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
  }, []);
  const items = [callback(AccountAgeTier10LargeBadge.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  obj = { spacing: null, align: "center", children: null };
  obj[0] = Themes.space.PX_8;
  const obj1 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(messagesProxy["wh+Rz1"]);
  const items1 = [callback(Text.Heading, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.string(messagesProxy["+SuGKb"]);
  items1[1] = callback(Text.Text, obj2);
  obj[2] = items1;
  items[1] = callback2(Stack.Stack, obj);
  if (obj.useFavoritesAccess("favorites_empty_state").hasAccess) {
    const obj3 = { variant: "primary", text: null, icon: null, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj3[1] = intl4.string(tmp9(3047)["6kk0gM"]);
    obj3[2] = tmp8(tmp2(12170).PlusMediumIcon, {});
    obj3[3] = callback;
    let obj4 = obj3;
  } else {
    obj4 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj4[1] = intl3.string(tmp9(3047).yYVbdv);
    obj4[2] = callback1;
  }
  items[2] = callback(Button.Button, obj4);
  obj[1] = items;
  return callback2(View, obj);
};