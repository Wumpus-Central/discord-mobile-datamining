// === Module 19941: GuildRoleSubscriptionGroupDetailsModal ===

// Module 19941 (GuildRoleSubscriptionGroupDetailsModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import TextArea from "TextArea" /* 7253 */;
import FormSeparatorDefault from "FormSeparator" /* 17195 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19938 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import FormImagePicker from "FormImagePicker" /* 19944 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;

require = fn;
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = closure_11();
    tmp2 = closure_1(closure_2[9])();
    obj = closure_0(closure_2[10]);
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj1 = { style: tmp2.container, children: null };
    obj8 = { children: null };
    obj9 = { title: null };
    intl = closure_0(closure_2[12]).intl;
    obj9.title = intl.string(closure_0(closure_2[12]).t["3S8gA7"]);
    items = [, , ];
    items[0] = jsx(closure_0(closure_2[11]).TableRowGroupTitle, obj9);
    obj10 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: closure_0(closure_2[13]).PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
    items[1] = jsx(closure_0(closure_2[13]).ImagePickerIcon, obj10);
    obj11 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: null };
    intl2 = closure_0(closure_2[12]).intl;
    obj11.children = intl2.string(closure_0(closure_2[12]).t["0ng4rB"]);
    items[2] = jsx(closure_0(closure_2[14]).Text, obj11);
    obj8.children = items;
    items1 = [, , ];
    items1[0] = jsxs(View, obj8);
    items1[1] = jsx(closure_1(closure_2[15]), { withoutMargins: true });
    obj12 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, disabled: null };
    intl3 = closure_0(closure_2[12]).intl;
    obj12.label = intl3.string(closure_0(closure_2[12]).t["74JctW"]);
    obj12.maxLength = closure_7;
    obj12.value = description;
    intl4 = closure_0(closure_2[12]).intl;
    obj12.placeholder = intl4.string(closure_0(closure_2[12]).t["3YHwoG"]);
    obj12.onChange = setDescription;
    obj12.disabled = roleSubscriptionSettingsDisabled;
    items1[2] = jsx(closure_0(closure_2[16]).TextArea, obj12);
    obj1.children = items1;
    return jsxs(View, obj1);
  }
}
const View = fn(17).View;
const GuildRoleSubscriptionsConstants = fn(17183);
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = fn(1072).UPLOAD_BANNER_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: nativeDefault.space.PX_16 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  [tmp2, tmp3] = RoleTierEditStore.useGroupCoverState();
  [first, obj2.setDescription] = RoleTierEditStore.useGroupDescriptionState();
  let tmp5 = first.length > 0;
  if (tmp5) {
    tmp5 = null != tmp2;
  }
  const obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null };
  const tmp = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.EPOLQD);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["LeAm+L"]);
  obj.canProceedToNextStep = tmp5;
  obj.nextStep = constants.DETAILS;
  const merged = Object.assign(arg0);
  const obj2 = {};
  const merged1 = Object.assign(arg0);
  obj2.cover = tmp2;
  obj2.setCover = tmp3;
  obj2.description = first;
  obj.children = React7(Content, obj2);
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj);
};
export { Content };