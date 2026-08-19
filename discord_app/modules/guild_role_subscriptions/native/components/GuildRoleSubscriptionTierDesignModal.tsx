// === Module 16988: MemberPreviews ===

// Module 16988 (MemberPreviews)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import map from "map" /* 4097 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14573 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 14584 */;
import HeaderDefault from "Header" /* 16954 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import { UPLOAD_SMALL_SIZE } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function MemberPreviews(role) {
  role = role.role;
  const tmp = callback4();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW, ThemesDefault.themes.DARK);
  const token1 = map.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOW, ThemesDefault.themes.LIGHT);
  const token2 = map.useToken(ThemesDefault.colors.TEXT_DEFAULT, ThemesDefault.themes.DARK);
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
  const tmp3 = role(13358)();
  let obj = _require(16962);
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
    let roleIconData = callback(dependencyMap[13]).getRoleIconData(role);
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
  const roleSubscriptionSettingsDisabled = _require(16945).useRoleSubscriptionSettingsDisabled();
  obj = { children: null };
  const items1 = [callback2(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp3.header, children: null };
  let tmpResult = tmp(8913);
  const intl = tmp4(1236).intl;
  obj1[1] = intl.string(_require(1236).t.sEr1zr);
  items1[1] = callback2(tmpResult, obj1);
  obj2 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  tmpResult = tmp(16951);
  const intl2 = tmp4(1236).intl;
  obj2[0] = intl2.string(_require(1236).t.Glqj9m);
  obj2[1] = tmp10;
  obj2[2] = UPLOAD_SMALL_SIZE;
  obj2[3] = _require(16951).PreviewShape.SQUIRCLE;
  obj2[5] = function setImage(icon) {
    return callback({ icon: icon.uri, unicodeEmoji: "a" });
  };
  obj2[6] = roleSubscriptionSettingsDisabled;
  items1[2] = callback2(tmpResult, obj2);
  obj3 = { style: tmp3.header, children: null };
  const tmp4Result = _require(16945);
  const intl3 = tmp4(1236).intl;
  obj3[1] = intl3.string(_require(1236).t["W7hH+z"]);
  items1[3] = callback2(role(8913), obj3);
  items1[4] = callback2(role(16989), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj[0] = items1;
  return callback3(closure_11, obj);
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
const createCacheKey = { padding: 16, borderRadius: ThemesDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 };
createCacheKey[3] = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

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