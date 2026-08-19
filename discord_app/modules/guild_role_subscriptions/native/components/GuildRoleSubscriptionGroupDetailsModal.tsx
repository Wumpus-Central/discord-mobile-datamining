// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import stylesDefault from "FormStyles.tsx";
import FormSeparatorDefault from "FormSeparator.tsx";
import useRoleSubscriptionSettingsDisabled from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import pickImage from "FormImagePicker.tsx";
import HeaderDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import usePriceTiers from "../RoleTierEditStore.tsx";
import MAX_SUBSCRIPTION_TIERS from "../../GuildRoleSubscriptionsConstants.tsx";
import { UPLOAD_BANNER_SIZE } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = closure_12();
    tmp2 = require("styles")();
    obj = require("useRoleSubscriptionSettingsDisabled");
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj = { children: null };
    obj1 = { style: tmp2.header, children: null };
    tmp4 = require("FormHeader");
    intl = require("getSystemLocale").intl;
    obj1[1] = intl.string(require("getSystemLocale").t["3S8gA7"]);
    items = [, , , , ];
    items[0] = jsx(tmp4, obj1);
    obj2 = { style: tmp.paddedContainer, children: null };
    obj3 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: require("pickImage").PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
    items1 = [, ];
    items1[0] = jsx(require("pickImage").ImagePickerIcon, obj3);
    obj4 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: null };
    intl2 = require("getSystemLocale").intl;
    obj4[3] = intl2.string(require("getSystemLocale").t["0ng4rB"]);
    items1[1] = jsx(require("Text").Text, obj4);
    obj2[1] = items1;
    items[1] = jsxs(View, obj2);
    obj5 = { style: tmp.paddedContainer };
    items[2] = jsx(require("FormSeparator"), obj5);
    obj6 = { style: tmp2.header, children: null };
    tmp5 = require("FormHeader");
    intl3 = require("getSystemLocale").intl;
    obj6[1] = intl3.string(require("getSystemLocale").t["74JctW"]);
    items[3] = jsx(tmp5, obj6);
    obj7 = { style: tmp2.textInput, showTopContainer: false, multiline: true, maxLength: closure_7, numberOfLines: 3, value: description, placeholder: null, onChange: null, disabled: null };
    intl4 = require("getSystemLocale").intl;
    obj7[6] = intl4.string(require("getSystemLocale").t["3YHwoG"]);
    obj7[7] = setDescription;
    obj7[8] = roleSubscriptionSettingsDisabled;
    items[4] = jsx(require("Form").FormInput, obj7);
    obj[0] = items;
    return jsxs(Fragment, obj);
  }
}
noopAll;
({ GuildRoleSubscriptionsTierScenes: closure_6, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: error } = MAX_SUBSCRIPTION_TIERS);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  [tmp2, tmp3] = callback(closure_5.useGroupCoverState(), 2);
  const tmp4 = callback(closure_5.useGroupDescriptionState(), 2);
  const first = tmp4[0];
  let tmp5 = first.length > 0;
  if (tmp5) {
    tmp5 = null != tmp2;
  }
  let obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null };
  const tmp = callback(closure_5.useGroupCoverState(), 2);
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.EPOLQD);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["LeAm+L"]);
  obj[2] = tmp5;
  obj[3] = constants.DETAILS;
  const merged = Object.assign(arg0);
  obj = {};
  const merged1 = Object.assign(arg0);
  obj.cover = tmp2;
  obj.setCover = tmp3;
  obj.description = first;
  obj.setDescription = tmp4[1];
  obj.children = callback2(Content, obj);
  return callback2(HeaderDefault, obj);
};
export { Content };