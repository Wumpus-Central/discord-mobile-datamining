// === Module 14584: GuildRoleSubscriptionMemberPreview ===

// Module 14584 (GuildRoleSubscriptionMemberPreview)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import int2hslRawAll from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import Text from "Text" /* 4734 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import preloadDefault from "preload" /* 5449 */;
import getRoleIconData from "getRoleIconData" /* 7164 */;
import RoleIconDefault from "RoleIcon" /* 7165 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexDirection: "row", padding: 16, borderRadius: ThemesDefault.radii.xs, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 40, height: 40, borderRadius: 20 };
createCacheKey[2] = { marginStart: 16 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = getSystemLocale.intl;
    content = intl.string(getSystemLocale.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = callback2();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  getNicknameDefault;
  if (null == role) {
    return null;
  } else {
    let tmp6Result = getAvatarURLDefault;
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      tmp6Result = getAvatarURLDefault;
      avatarURL = tmp6Result.getDefaultAvatarURL(undefined, undefined);
    }
    const source = tmp6Result.makeSource(avatarURL);
    const roleIconData = getRoleIconData.getRoleIconData(role, 16);
    obj = { style: null, children: null };
    const items1 = [tmp3.container, style];
    obj[0] = items1;
    obj = { style: null, source: null };
    obj[0] = tmp3.avatar;
    obj[1] = source;
    const items2 = [callback(preloadDefault, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp3.content;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.contextRow;
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
    const obj4 = { color: null };
    const tmp4Result = getRoleIconData;
    obj4[0] = int2hslRawAll.int2hex(role.color);
    obj3[2] = obj4;
    obj3[3] = tmp8;
    const items3 = [callback(Text.Text, obj3), , , ];
    let tmp12Result = null;
    if (null != roleIconData) {
      const items4 = [callback(Button.Spacer, { size: 4 }), ];
      const obj5 = { name: null, source: null, unicodeEmoji: null, size: 16 };
      obj5[0] = role.name;
      let tmp19;
      if (null != roleIconData.customIconSrc) {
        const obj6 = { uri: null };
        obj6[0] = roleIconData.customIconSrc;
        tmp19 = obj6;
      }
      const obj7 = { children: null };
      obj5[1] = tmp19;
      obj5[2] = roleIconData.unicodeEmoji;
      items4[1] = callback(RoleIconDefault, obj5);
      obj7[0] = items4;
      tmp12Result = callback(closure_7, obj7);
      const tmp6Result1 = RoleIconDefault;
    }
    items3[1] = tmp12Result;
    items3[2] = callback(Button.Spacer, { size: 8 });
    items3[3] = callback(Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    obj2[1] = items3;
    const items5 = [callback(View, obj2), ];
    const obj8 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj8[2] = textStyle;
    obj8[3] = content;
    items5[1] = callback(Text.Text, obj8);
    obj1[1] = items5;
    items2[1] = callback(View, obj1);
    obj[1] = items2;
    return callback(View, obj);
  }
};