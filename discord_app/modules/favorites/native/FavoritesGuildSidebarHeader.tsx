// === Module 15541: EmptyBody ===

// Module 15541 (EmptyBody)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import ChatIcon from "ChatIcon" /* 6867 */;
import TextIcon from "TextIcon" /* 6876 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 6896 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useHasFavoritesGuildSuggestions as closure_5 } from "items" /* 15464 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
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
  obj[2] = intl.format(messagesProxyDefault.Z3Hdr5, { onClick: callback });
  return callback2(Text.Text, obj);
}
function PlaceholderRows() {
  const tmp = callback4();
  let obj = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  obj = { style: tmp.placeholderRow, children: null };
  obj = { size: "sm", color: ThemesDefault.colors.ICON_MUTED };
  const items = [callback2(TextIcon.TextIcon, obj), ];
  const items1 = [, ];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj[1] = items;
  const items2 = [callback3(View, obj), , ];
  obj1 = { style: tmp.placeholderRow, children: null };
  const items3 = [callback2(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: ThemesDefault.colors.ICON_MUTED }), ];
  const items4 = [, ];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  items3[1] = callback2(View, { style: items4 });
  obj1[1] = items3;
  items2[1] = callback3(View, obj1);
  const obj3 = { style: tmp.placeholderRow, children: null };
  const obj2 = { size: "sm", color: ThemesDefault.colors.ICON_MUTED };
  const items5 = [callback2(ChatIcon.ChatIcon, { size: "sm", color: ThemesDefault.colors.ICON_MUTED }), ];
  const items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  items5[1] = callback2(View, { style: items6 });
  obj3[1] = items5;
  items2[2] = callback3(View, obj3);
  obj[3] = items2;
  return callback3(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { copy: null, divider: null, placeholderRows: null, placeholderRow: null, placeholderBar: null, placeholderBarShort: null, placeholderBarLong: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, marginTop: ThemesDefault.space.PX_12, marginHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj1 = { height: 1, marginTop: ThemesDefault.space.PX_12, marginHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_8 };
let obj2 = { paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { height: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
const obj4 = { height: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[5] = { width: ThemesDefault.space.PX_80 };
const obj5 = { width: ThemesDefault.space.PX_80 };
createCacheKey[6] = { width: ThemesDefault.space.PX_128 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj6 = { width: ThemesDefault.space.PX_128 };
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader() {
  const tmp = callback4();
  const tmp2 = callback();
  let obj = { spacing: ThemesDefault.space.PX_8, children: null };
  let tmp7 = null;
  if (tmp2) {
    obj = { style: null };
    obj[0] = tmp.divider;
    tmp7 = callback2(View, obj);
  }
  const items = [tmp7, , ];
  obj = { spacing: tmp6(712).space.PX_8, style: tmp.copy, children: null };
  obj1 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(1236).intl;
  obj1[2] = intl.string(messagesProxyDefault["1n0TGE"]);
  const items1 = [callback2(Text.Heading, obj1), callback2(EmptyBody, {})];
  obj[2] = items1;
  items[1] = closure_7(Stack.Stack, obj);
  let tmp3Result = null;
  if (!tmp2) {
    const obj2 = { children: null };
    const obj3 = { style: null };
    obj3[0] = tmp.divider;
    const items2 = [tmp10(View, obj3), tmp10(PlaceholderRows, {})];
    obj2[0] = items2;
    tmp3Result = tmp3(closure_8, obj2);
  }
  items[2] = tmp3Result;
  obj[1] = items;
  return closure_7(Stack.Stack, obj);
};