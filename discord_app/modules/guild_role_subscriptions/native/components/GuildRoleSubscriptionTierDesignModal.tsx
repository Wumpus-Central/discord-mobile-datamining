// === Module 17767: GuildRoleSubscriptionTierDesignModal ===

// Module 17767 (GuildRoleSubscriptionTierDesignModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4262 */;
import guild_boosting_RoleIconUtils from "guild_boosting/RoleIconUtils" /* 7187 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15238 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17733 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MemberPreviews(role) {
  role = role.role;
  const tmp = closure_12();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  let obj1 = useToken;
  const token1 = obj1.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  obj = { style: tmp.memberPreviews, children: null };
  const token3 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  obj = { style: null, textStyle: { color: token3 }, role };
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  obj.style = items;
  const items1 = [React7(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj), ];
  obj1 = { style: null, textStyle: { color: token2 }, role };
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  obj1.style = items2;
  items1[1] = React7(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj1);
  obj.children = items1;
  return closure_1_10(View, obj);
}
function Content() {
  const tmp3 = role(13898)();
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp7, tmp8] = _slicedToArray(obj1.useRoleColor(editStateId, guildId), 2);
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  _require = _slicedToArray(obj2.useRoleIcon(editStateId, guildId), 2)[1];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  role = obj3.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = noop.useMemo(() => {
    let roleIconData = guild_boosting_RoleIconUtils.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    obj = { uri: customIconSrc };
    tmp10 = obj;
  }
  const tmp6 = _slicedToArray(obj1.useRoleColor(editStateId, guildId), 2);
  const roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  obj = { children: null };
  const items1 = [closure_9(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp3.header, children: null };
  let tmpResult = tmp(9816);
  const intl = tmp4(1114).intl;
  obj1.children = intl.string(require("util").t.sEr1zr);
  items1[1] = closure_9(tmpResult, obj1);
  obj2 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  tmpResult = tmp(17730);
  const intl2 = tmp4(1114).intl;
  obj2.description = intl2.string(require("util").t.Glqj9m);
  obj2.image = tmp10;
  obj2.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj2.previewShape = require("FormImagePicker").PreviewShape.SQUIRCLE;
  obj2.setImage = function setImage(icon) {
    return closure_0({ icon: icon.uri, unicodeEmoji: "a" });
  };
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = closure_9(tmpResult, obj2);
  obj3 = { style: tmp3.header, children: null };
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const intl3 = tmp4(1114).intl;
  obj3.children = intl3.string(require("util").t["W7hH+z"]);
  items1[3] = closure_9(role(9816), obj3);
  items1[4] = closure_9(role(17768), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj.children = items1;
  return closure_10(closure_11, obj);
}
const View = fn(17).View;
const constants = fn(15205).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = fn(1074).UPLOAD_SMALL_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: null, memberLight: null, memberDark: null };
createStyles = { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles.member = createStyles;
createStyles.memberLight = { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 };
createStyles.memberDark = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default function GuildRoleSubscriptionTierDesignModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.AbcgTx);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.YAUjGn);
  obj.nextStep = constants.CONFIRMATION;
  const merged = Object.assign(arg0);
  obj.children = React7(Content, {});
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj);
};
export const GuildRoleSubscriptionTierDesignTab = function GuildRoleSubscriptionTierDesignTab() {
  return React7(Content, {});
};