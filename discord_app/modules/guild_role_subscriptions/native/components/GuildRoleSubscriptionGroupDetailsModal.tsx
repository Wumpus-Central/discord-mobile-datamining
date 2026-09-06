// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import FormStylesDefault from "FormStyles.tsx";
import FormSeparatorDefault from "FormSeparator.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import FormImagePicker from "FormImagePicker.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = closure_12();
    tmp2 = closure_1(closure_2[8])();
    obj = closure_0(closure_2[9]);
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj = { children: null };
    obj1 = { style: tmp2.header, children: null };
    tmp4 = closure_1(closure_2[10]);
    intl = closure_0(closure_2[11]).intl;
    obj1.children = intl.string(closure_0(closure_2[11]).t["3S8gA7"]);
    items = [, , , ,];
    items[0] = jsx(tmp4, obj1);
    obj2 = { style: tmp.paddedContainer, children: null };
    obj3 = {
      style: tmp.coverPhoto,
      image: cover,
      imageUploadSize: UPLOAD_BANNER_SIZE.width,
      previewShape: closure_0(closure_2[12]).PreviewShape.SQUIRCLE,
      setImage: setCover,
      disabled: roleSubscriptionSettingsDisabled,
      standalone: true,
      size: 114,
    };
    items1 = [,];
    items1[0] = jsx(closure_0(closure_2[12]).ImagePickerIcon, obj3);
    obj4 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: null };
    intl2 = closure_0(closure_2[11]).intl;
    obj4.children = intl2.string(closure_0(closure_2[11]).t["0ng4rB"]);
    items1[1] = jsx(closure_0(closure_2[13]).Text, obj4);
    obj2.children = items1;
    items[1] = jsxs(View, obj2);
    obj5 = { style: tmp.paddedContainer };
    items[2] = jsx(closure_1(closure_2[14]), obj5);
    obj6 = { style: tmp2.header, children: null };
    tmp5 = closure_1(closure_2[10]);
    intl3 = closure_0(closure_2[11]).intl;
    obj6.children = intl3.string(closure_0(closure_2[11]).t["74JctW"]);
    items[3] = jsx(tmp5, obj6);
    obj7 = {
      style: tmp2.textInput,
      showTopContainer: false,
      multiline: true,
      maxLength: closure_7,
      numberOfLines: 3,
      value: description,
      placeholder: null,
      onChange: null,
      disabled: null,
    };
    intl4 = closure_0(closure_2[11]).intl;
    obj7.placeholder = intl4.string(closure_0(closure_2[11]).t["3YHwoG"]);
    obj7.onChange = setDescription;
    obj7.disabled = roleSubscriptionSettingsDisabled;
    items[4] = jsx(closure_0(closure_2[15]).FormInput, obj7);
    obj.children = items;
    return jsxs(Fragment, obj);
  }
}
const View = fn(17).View;
const GuildRoleSubscriptionsConstants = fn(15205);
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } =
  GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = fn(1074).UPLOAD_BANNER_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({
  coverPhoto: { height: 114, width: "100%" },
  coverDescription: { marginTop: 16 },
  paddedContainer: { paddingHorizontal: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx",
);

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  [tmp2, tmp3] = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  const tmp4 = _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 2);
  const first = tmp4[0];
  let tmp5 = first.length > 0;
  if (tmp5) {
    tmp5 = null != tmp2;
  }
  let obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null };
  const tmp = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.EPOLQD);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["LeAm+L"]);
  obj.canProceedToNextStep = tmp5;
  obj.nextStep = constants.DETAILS;
  const merged = Object.assign(arg0);
  obj = {};
  const merged1 = Object.assign(arg0);
  obj.cover = tmp2;
  obj.setCover = tmp3;
  obj.description = first;
  obj.setDescription = tmp4[1];
  obj.children = React7(Content, obj);
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj);
}
export { Content };
