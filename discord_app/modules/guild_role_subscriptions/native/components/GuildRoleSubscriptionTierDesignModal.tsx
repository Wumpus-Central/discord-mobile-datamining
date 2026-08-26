// === Module 17198: MemberPreviews ===

// Module 17198 (MemberPreviews)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4165 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14744 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 14755 */;
import HeaderDefault from "Header" /* 17164 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "MAX_SUBSCRIPTION_TIERS" /* 14722 */;
import { UPLOAD_SMALL_SIZE } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function MemberPreviews(role) {
  role = role.role;
  const tmp = callback4();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW, ThemesDefault.themes.DARK);
  const token1 = map.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW, ThemesDefault.themes.LIGHT);
  const obj2 = map;
  const token2 = map.useToken(ThemesDefault.colors.TEXT_DEFAULT, ThemesDefault.themes.DARK);
  const obj3 = map;
  obj = { style: tmp.memberPreviews, children: null };
  const token3 = map.useToken(ThemesDefault.colors.TEXT_DEFAULT, ThemesDefault.themes.LIGHT);
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  const items1 = [callback2(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { style: items, textStyle: { color: token3 }, role }), ];
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  items1[1] = callback2(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, { style: items2, textStyle: { color: token2 }, role });
  obj[1] = items1;
  return callback3(View, obj);
}
function Content() {
  const tmp3 = role(13524)();
  let obj = _require(17172);
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  obj1 = getRoleEmojisAll;
  [tmp7, tmp8] = callback(obj1.useRoleColor(editStateId, guildId), 2);
  let obj2 = getRoleEmojisAll;
  _require = callback(obj2.useRoleIcon(editStateId, guildId), 2)[1];
  let obj3 = getRoleEmojisAll;
  role = obj3.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = React.useMemo(() => {
    let roleIconData = callback(closure_1_3[13]).getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    obj = { uri: null };
    obj[0] = customIconSrc;
    tmp10 = obj;
  }
  const tmp6 = callback(obj1.useRoleColor(editStateId, guildId), 2);
  const roleSubscriptionSettingsDisabled = _require(17155).useRoleSubscriptionSettingsDisabled();
  obj = { children: null };
  const items1 = [callback2(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp3.header, children: null };
  let tmpResult = tmp(9275);
  const intl = tmp4(1236).intl;
  obj1[1] = intl.string(_require(1236).t.sEr1zr);
  items1[1] = callback2(tmpResult, obj1);
  obj2 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  tmpResult = tmp(17161);
  const intl2 = tmp4(1236).intl;
  obj2[0] = intl2.string(_require(1236).t.Glqj9m);
  obj2[1] = tmp10;
  obj2[2] = UPLOAD_SMALL_SIZE;
  obj2[3] = _require(17161).PreviewShape.SQUIRCLE;
  obj2[5] = function setImage(icon) {
    return callback({ icon: icon.uri, unicodeEmoji: "a" });
  };
  obj2[6] = roleSubscriptionSettingsDisabled;
  items1[2] = callback2(tmpResult, obj2);
  obj3 = { style: tmp3.header, children: null };
  const tmp4Result = _require(17155);
  const intl3 = tmp4(1236).intl;
  obj3[1] = intl3.string(_require(1236).t["W7hH+z"]);
  items1[3] = callback2(role(9275), obj3);
  items1[4] = callback2(role(17199), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj[0] = items1;
  return callback3(closure_11, obj);
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: null, memberLight: null, memberDark: null };
createCacheKey = { padding: 16, borderRadius: ThemesDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 };
createCacheKey[3] = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default function GuildRoleSubscriptionTierDesignModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.AbcgTx);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.YAUjGn);
  obj[3] = constants.CONFIRMATION;
  const merged = Object.assign(arg0);
  obj.children = callback2(Content, {});
  return callback2(HeaderDefault, obj);
};
export const GuildRoleSubscriptionTierDesignTab = function GuildRoleSubscriptionTierDesignTab() {
  return callback2(Content, {});
};