// === Module 19978: GuildRoleSubscriptionTierDesignModal ===

// Module 19978 (GuildRoleSubscriptionTierDesignModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useToken from "useToken" /* 5596 */;
import RoleIconUtils from "RoleIconUtils" /* 7356 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 17215 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MemberPreviews(role) {
  role = role.role;
  const tmp = closure_11();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const obj5 = { children: null };
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
  const tmp3 = role(19943)();
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
  const tmp11 = closure_11();
  const roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const obj6 = { style: null, children: null };
  const items1 = [tmp3.container, tmp11.container];
  obj6.style = items1;
  const items2 = [closure_9(MemberPreviews, { role }), , ];
  const obj7 = { children: null };
  const obj8 = { title: null };
  const intl = tmp4(1113).intl;
  obj8.title = intl.string(require("util").t.sEr1zr);
  const items3 = [closure_9(require("TableRowGroup").TableRowGroupTitle, obj8), ];
  const obj9 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const intl2 = tmp4(1113).intl;
  obj9.description = intl2.string(require("util").t.Glqj9m);
  obj9.image = tmp10;
  obj9.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj9.previewShape = require("FormImagePicker").PreviewShape.SQUIRCLE;
  obj9.setImage = function setImage(icon) {
    return closure_0({ icon: icon.uri, unicodeEmoji: "a" });
  };
  obj9.disabled = roleSubscriptionSettingsDisabled;
  items3[1] = closure_9(role(19944), obj9);
  obj7.children = items3;
  items2[1] = closure_10(View, obj7);
  const obj10 = { title: null, hasIcons: true, children: null };
  const intl3 = tmp4(1113).intl;
  obj10.title = intl3.string(require("util").t["W7hH+z"]);
  obj10.children = closure_9(role(19979), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  items2[2] = closure_9(require("TableRowGroup").TableRowGroup, obj10);
  obj6.children = items2;
  return closure_10(View, obj6);
}
const View = fn(17).View;
const constants = fn(17183).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = fn(1072).UPLOAD_SMALL_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_26 }, member: null, memberLight: null, memberDark: null };
let obj3 = { paddingTop: nativeDefault.space.PX_26 };
obj2.member = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.memberLight = { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 };
obj2.memberDark = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 };
let closure_11 = createStyles.createStyles(obj2);
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
export function GuildRoleSubscriptionTierDesignTab() {
  return React7(Content, {});
}