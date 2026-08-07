// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getNickname } from "../../../../../utils/NicknameUtils.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, avatar: null, content: null, contextRow: null };
createCacheKey = { flexDirection: "row", padding: 16, borderRadius: require("Themes").radii.xs, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 40, height: 40, borderRadius: 20 };
createCacheKey[2] = { marginStart: 16 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  let guildId;
  let role;
  let style;
  let textStyle;
  content = content.content;
  if (content === undefined) {
    const intl = getSystemLocale.intl;
    content = intl.string(getSystemLocale.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = createCacheKey();
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  getNickname;
  if (null == role) {
    return null;
  } else {
    let tmp6Result = tmp6(1416);
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      tmp6Result = tmp6(1416);
      avatarURL = tmp6Result.getDefaultAvatarURL(undefined, undefined);
    }
    const source = tmp6Result.makeSource(avatarURL);
    const roleIconData = tmp4(5693).getRoleIconData(role, 16);
    obj = { style: null, children: null };
    const items1 = [tmp3.container, style];
    obj[0] = items1;
    obj = { style: null, source: null };
    obj[0] = tmp3.avatar;
    obj[1] = source;
    const items2 = [callback(tmp6(5267), obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp3.content;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.contextRow;
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
    const obj4 = { color: null };
    const tmp4Result = tmp4(5693);
    obj4[0] = importAll(688).int2hex(role.color);
    obj3[2] = obj4;
    obj3[3] = tmp8;
    const items3 = [callback(tmp4(4298).Text, obj3), , , ];
    let tmp12Result = null;
    if (null != roleIconData) {
      const items4 = [tmp14(tmp4(1297).Spacer, { size: 4 }), ];
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
      items4[1] = tmp14(tmp6(5694), obj5);
      obj7[0] = items4;
      tmp12Result = tmp12(closure_7, obj7);
      const tmp17 = closure_7;
      const tmp6Result1 = tmp6(5694);
    }
    items3[1] = tmp12Result;
    items3[2] = callback(tmp4(1297).Spacer, { size: 8 });
    items3[3] = callback(tmp4(4298).Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    obj2[1] = items3;
    const items5 = [closure_8(View, obj2), ];
    const obj8 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj8[2] = textStyle;
    obj8[3] = content;
    items5[1] = callback(tmp4(4298).Text, obj8);
    obj1[1] = items5;
    items2[1] = closure_8(View, obj1);
    obj[1] = items2;
    return closure_8(View, obj);
  }
};