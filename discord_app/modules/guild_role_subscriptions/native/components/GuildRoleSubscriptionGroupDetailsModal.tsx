// === Module 17243: Content ===

// Module 17243 (Content)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import Form from "Form" /* 8309 */;
import FormHeaderDefault from "FormHeader" /* 9843 */;
import stylesDefault from "styles" /* 13570 */;
import FormSeparatorDefault from "FormSeparator" /* 14746 */;
import useRoleSubscriptionSettingsDisabled from "useRoleSubscriptionSettingsDisabled" /* 17239 */;
import pickImage from "pickImage" /* 17245 */;
import HeaderDefault from "Header" /* 17248 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "usePriceTiers" /* 17244 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14734 */;
import { UPLOAD_BANNER_SIZE } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
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
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

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