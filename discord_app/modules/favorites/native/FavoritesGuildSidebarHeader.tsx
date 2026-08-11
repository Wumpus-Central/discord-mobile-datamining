// discord_app/modules/favorites/native/FavoritesGuildSidebarHeader.tsx
import set from "set";
import { View } from "ChatIcon";
import { useHasFavoritesGuildSuggestions as closure_5 } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ChatIcon } from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import { TextIcon } from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import { VoiceNormalIcon } from "../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

let closure_6;
let error;
const require = arg1;
function EmptyBody() {
  const callback = React.useCallback(() => {
    if (obj.getFavoritesAccess().hasAccess) {
      tmp3(tmp2[7])({ source: "favorites_empty_sidebar" });
    } else {
      const tmp3Result = tmp3(tmp2[8]);
      tmp3Result.openLazy(tmp(tmp2[10])(tmp2[9], tmp2.paths), tmp(tmp2[11]).FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
      const tmp4 = tmp(tmp2[10])(tmp2[9], tmp2.paths);
    }
  }, []);
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.format(messagesProxy.Z3Hdr5, { onClick: callback });
  return callback2(Text.Text, obj);
}
function PlaceholderRows() {
  const tmp = createCacheKey();
  let obj = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  obj = { style: tmp.placeholderRow, children: null };
  obj = { size: "sm", color: null };
  obj[1] = Themes.colors.ICON_MUTED;
  const items = [callback2(TextIcon.TextIcon, obj), ];
  const items1 = [, ];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj[1] = items;
  const items2 = [callback3(View, obj), , ];
  const obj1 = { style: tmp.placeholderRow, children: null };
  const obj2 = { size: "sm", color: null };
  obj2[1] = Themes.colors.ICON_MUTED;
  const items3 = [callback2(VoiceNormalIcon.VoiceNormalIcon, obj2), ];
  const items4 = [, ];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  items3[1] = callback2(View, { style: items4 });
  obj1[1] = items3;
  items2[1] = callback3(View, obj1);
  const obj3 = { style: tmp.placeholderRow, children: null };
  const obj4 = { size: "sm", color: null };
  obj4[1] = Themes.colors.ICON_MUTED;
  const items5 = [callback2(ChatIcon.ChatIcon, obj4), ];
  const items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  items5[1] = callback2(View, { style: items6 });
  obj3[1] = items5;
  items2[2] = callback3(View, obj3);
  obj[3] = items2;
  return callback3(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { copy: null, divider: null, placeholderRows: null, placeholderRow: null, placeholderBar: null, placeholderBarShort: null, placeholderBarLong: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj1 = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = { paddingTop: require("Themes").space.PX_8 };
let obj2 = { paddingTop: require("Themes").space.PX_8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
let obj4 = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[5] = { width: require("Themes").space.PX_80 };
const obj5 = { width: require("Themes").space.PX_80 };
createCacheKey[6] = { width: require("Themes").space.PX_128 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { width: require("Themes").space.PX_128 };
const result = require("items").fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader() {
  const tmp = createCacheKey();
  let obj = { spacing: null, children: null };
  obj[0] = Themes.space.PX_8;
  obj = { spacing: null, style: null, children: null };
  obj[0] = Themes.space.PX_8;
  obj[1] = tmp.copy;
  obj = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxy["1n0TGE"]);
  const items = [callback2(Text.Heading, obj), callback2(EmptyBody, {})];
  obj[2] = items;
  const items1 = [callback3(Stack.Stack, obj), callback2(View, { style: tmp.divider }), ];
  let tmp4Result = null;
  if (!tmp2) {
    tmp4Result = callback2(PlaceholderRows, {});
  }
  items1[2] = tmp4Result;
  obj[1] = items1;
  return callback3(Stack.Stack, obj);
};