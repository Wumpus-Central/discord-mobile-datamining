// === Module 18176: GuildRoleSubscriptionGroupDetailsModal ===

// Module 18176 (GuildRoleSubscriptionGroupDetailsModal)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import Form from "Form" /* 8870 */;
import FormHeaderDefault from "FormHeader" /* 10071 */;
import FormStylesDefault from "FormStyles" /* 14160 */;
import FormSeparatorDefault from "FormSeparator" /* 15481 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 18172 */;
import FormImagePicker from "FormImagePicker" /* 18178 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18181 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18177 */;

require = fn;
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = closure_12();
    tmp2 = closure_1(closure_2[8])();
    obj = closure_0(closure_2[9]);
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj1 = { children: null };
    obj10 = { style: tmp2.header, children: null };
    tmp4 = closure_1(closure_2[10]);
    intl = closure_0(closure_2[11]).intl;
    obj10.children = intl.string(closure_0(closure_2[11]).t["3S8gA7"]);
    items = [, , , , ];
    items[0] = jsx(tmp4, obj10);
    obj11 = { style: tmp.paddedContainer, children: null };
    obj12 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: closure_0(closure_2[12]).PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
    items1 = [, ];
    items1[0] = jsx(closure_0(closure_2[12]).ImagePickerIcon, obj12);
    obj13 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: null };
    intl2 = closure_0(closure_2[11]).intl;
    obj13.children = intl2.string(closure_0(closure_2[11]).t["0ng4rB"]);
    items1[1] = jsx(closure_0(closure_2[13]).Text, obj13);
    obj11.children = items1;
    items[1] = jsxs(View, obj11);
    obj14 = { style: tmp.paddedContainer };
    items[2] = jsx(closure_1(closure_2[14]), obj14);
    obj15 = { style: tmp2.header, children: null };
    tmp5 = closure_1(closure_2[10]);
    intl3 = closure_0(closure_2[11]).intl;
    obj15.children = intl3.string(closure_0(closure_2[11]).t["74JctW"]);
    items[3] = jsx(tmp5, obj15);
    obj16 = { style: tmp2.textInput, showTopContainer: false, multiline: true, maxLength: closure_7, numberOfLines: 3, value: description, placeholder: null, onChange: null, disabled: null };
    intl4 = closure_0(closure_2[11]).intl;
    obj16.placeholder = intl4.string(closure_0(closure_2[11]).t["3YHwoG"]);
    obj16.onChange = setDescription;
    obj16.disabled = roleSubscriptionSettingsDisabled;
    items[4] = jsx(closure_0(closure_2[15]).FormInput, obj16);
    obj1.children = items;
    return jsxs(Fragment, obj1);
  }
}
const View = fn(17).View;
const GuildRoleSubscriptionsConstants = fn(15469);
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = fn(1074).UPLOAD_BANNER_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4756);
let closure_12 = createStyles.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
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