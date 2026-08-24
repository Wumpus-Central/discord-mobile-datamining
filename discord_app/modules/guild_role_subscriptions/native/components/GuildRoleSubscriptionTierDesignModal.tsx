// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionMemberPreview from "listing_elements/GuildRoleSubscriptionMemberPreview.tsx";
import HeaderDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "../../GuildRoleSubscriptionsConstants.tsx";
import { UPLOAD_SMALL_SIZE } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useEditStateContext } from "../../edit_state/EditStateContextProvider.tsx";
import { useRoleSubscriptionSettingsDisabled } from "../../RoleSubscriptionSettingsDisabledContext.tsx";

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
  const tmp3 = role(13416)();
  let obj = useEditStateContext;
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
  const roleSubscriptionSettingsDisabled = require("../../RoleSubscriptionSettingsDisabledContext.tsx").useRoleSubscriptionSettingsDisabled();
  obj = { children: null };
  const items1 = [callback2(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp3.header, children: null };
  let tmpResult = tmp(8950);
  const intl = tmp4(1236).intl;
  obj1[1] = intl.string(require("../../../../intl/index.native.tsx").t.sEr1zr);
  items1[1] = callback2(tmpResult, obj1);
  obj2 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  tmpResult = tmp(17044);
  const intl2 = tmp4(1236).intl;
  obj2[0] = intl2.string(require("../../../../intl/index.native.tsx").t.Glqj9m);
  obj2[1] = tmp10;
  obj2[2] = UPLOAD_SMALL_SIZE;
  obj2[3] = require("FormImagePicker.tsx").PreviewShape.SQUIRCLE;
  obj2[5] = function setImage(icon) {
    return callback({ icon: icon.uri, unicodeEmoji: "r" });
  };
  obj2[6] = roleSubscriptionSettingsDisabled;
  items1[2] = callback2(tmpResult, obj2);
  obj3 = { style: tmp3.header, children: null };
  const tmp4Result = useRoleSubscriptionSettingsDisabled;
  const intl3 = tmp4(1236).intl;
  obj3[1] = intl3.string(require("../../../../intl/index.native.tsx").t["W7hH+z"]);
  items1[3] = callback2(role(8950), obj3);
  items1[4] = callback2(role(17082), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
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