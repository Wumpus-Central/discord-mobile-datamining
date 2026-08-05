// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, avatar: null, content: null, contextRow: null };
createCacheKey = { flexDirection: "row", padding: 16, borderRadius: require("Themes").radii.xs, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 40, height: 40, borderRadius: 20 };
createCacheKey[2] = { marginStart: 16 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export const GuildRoleSubscriptionRolePreview = function GuildRoleSubscriptionRolePreview(content) {
  let guildId;
  let roleColor;
  let roleName;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = require(1236) /* getSystemLocale */.intl;
    content = intl.string(require(1236) /* getSystemLocale */.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = createCacheKey();
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(4474);
  obj = { style: items1, children: null };
  items1 = [tmp3.container, style];
  const name = obj1.useName(guildId, null, stateFromStores);
  obj = { style: tmp3.avatar, source: { uri: roleImage } };
  const items2 = [callback(importDefault(5236), obj), ];
  obj1 = { style: tmp3.content, children: null };
  const obj2 = { style: tmp3.contextRow, children: null };
  const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
  const obj4 = { color: null };
  obj4[0] = importAll(688).int2hex(roleColor);
  obj3[2] = obj4;
  obj3[3] = name;
  const items3 = [callback(require(4281) /* Text */.Text, obj3), callback(require(1297) /* Button */.Spacer, { size: 4 }), callback(importDefault(5636), { name: roleName, source: { uri: roleImage }, size: 16 }), callback(require(1297) /* Button */.Spacer, { size: 8 }), callback(require(4281) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" })];
  obj2[1] = items3;
  const items4 = [callback2(View, obj2), callback(require(4281) /* Text */.Text, { variant: "text-md/normal", color: "text-default", style: textStyle, children: content })];
  obj1[1] = items4;
  items2[1] = callback2(View, obj1);
  obj[1] = items2;
  return callback2(View, obj);
};