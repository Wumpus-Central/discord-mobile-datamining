// === Module 17786: GuildRoleSubscriptionRolePreview ===

// Module 17786 (GuildRoleSubscriptionRolePreview)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 563 */;
import ThemesDefault from "Themes" /* 576 */;
import int2hslRawAll from "int2hslRaw" /* 1091 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import Text from "Text" /* 4556 */;
import getNicknameDefault from "getNickname" /* 4712 */;
import preloadDefault from "preload" /* 5587 */;
import RoleIconDefault from "RoleIcon" /* 7188 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1371 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, avatar: null, content: null, contextRow: null };
createCacheKey = { flexDirection: "row", padding: 16, borderRadius: ThemesDefault.radii.xs, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 40, height: 40, borderRadius: 20 };
createCacheKey[2] = { marginStart: 16 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export const GuildRoleSubscriptionRolePreview = function GuildRoleSubscriptionRolePreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = getSystemLocale.intl;
    content = intl.string(getSystemLocale.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = callback3();
  let obj = defaultAreStatesEqual;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = getNicknameDefault;
  obj = { style: items1, children: null };
  items1 = [tmp3.container, style];
  const name = obj1.useName(guildId, null, stateFromStores);
  obj = { style: tmp3.avatar, source: { uri: roleImage } };
  const items2 = [callback(preloadDefault, obj), ];
  obj1 = { style: tmp3.content, children: null };
  const obj2 = { style: tmp3.contextRow, children: null };
  const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
  const obj4 = { color: int2hslRawAll.int2hex(roleColor) };
  obj3[2] = obj4;
  obj3[3] = name;
  const items3 = [callback(Text.Text, obj3), callback(Button.Spacer, { size: 4 }), callback(RoleIconDefault, { name: roleName, source: { uri: roleImage }, size: 16 }), callback(Button.Spacer, { size: 8 }), callback(Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" })];
  obj2[1] = items3;
  const items4 = [callback2(View, obj2), callback(Text.Text, { variant: "text-md/normal", color: "text-default", style: textStyle, children: content })];
  obj1[1] = items4;
  items2[1] = callback2(View, obj1);
  obj[1] = items2;
  return callback2(View, obj);
};