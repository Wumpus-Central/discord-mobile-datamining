// === Module 18226: GuildRoleSubscriptionTierDesignModal ===

// Module 18226 (GuildRoleSubscriptionTierDesignModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useToken from "useToken" /* 4457 */;
import RoleIconUtils from "RoleIconUtils" /* 7432 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15497 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15508 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18192 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MemberPreviews(role) {
  role = role.role;
  const tmp = closure_12();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const obj5 = { style: tmp.memberPreviews, children: null };
  const token3 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  const obj6 = { style: null, textStyle: { color: token3 }, role };
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  obj6.style = items;
  const items1 = [React7(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj6), ];
  const obj7 = { style: null, textStyle: { color: token2 }, role };
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  obj7.style = items2;
  items1[1] = React7(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj7);
  obj5.children = items1;
  return closure_1_10(View, obj5);
}
function Content() {
  const tmp3 = role(14166)();
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  const obj = require("EditStateContextProvider");
  [tmp7, tmp8] = GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId);
  const tmp6 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId), 2);
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleIcon(editStateId, guildId), 2)[1];
  role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = noop.useMemo(() => {
    let roleIconData = RoleIconUtils.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    const obj5 = { uri: customIconSrc };
    tmp10 = obj5;
  }
  const roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const obj6 = { children: null };
  const items1 = [closure_9(MemberPreviews, { role }), , , , ];
  const obj7 = { style: tmp3.header, children: null };
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const intl = tmp4(1115).intl;
  obj7.children = intl.string(require("util").t.sEr1zr);
  items1[1] = closure_9(role(10072), obj7);
  const obj8 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmpResult = role(10072);
  const intl2 = tmp4(1115).intl;
  obj8.description = intl2.string(require("util").t.Glqj9m);
  obj8.image = tmp10;
  obj8.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj8.previewShape = require("FormImagePicker").PreviewShape.SQUIRCLE;
  obj8.setImage = function setImage(icon) {
    return closure_0({ icon: icon.uri, unicodeEmoji: "y" });
  };
  obj8.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = closure_9(role(18189), obj8);
  const obj9 = { style: tmp3.header, children: null };
  const tmpResult3 = role(18189);
  const intl3 = tmp4(1115).intl;
  obj9.children = intl3.string(require("util").t["W7hH+z"]);
  items1[3] = closure_9(role(10072), obj9);
  items1[4] = closure_9(role(18227), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj6.children = items1;
  return closure_10(closure_11, obj6);
}
const View = fn(17).View;
const constants = fn(15475).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = fn(1074).UPLOAD_SMALL_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG }, memberLight: { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 }, memberDark: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 } };
let closure_12 = createStyles.createStyles(obj2);
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