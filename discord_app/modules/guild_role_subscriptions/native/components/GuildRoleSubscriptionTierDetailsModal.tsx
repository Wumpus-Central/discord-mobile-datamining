// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import stylesDefault from "FormStyles.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import pickImage from "FormImagePicker.tsx";
import HeaderDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import useEditStateContext from "../../edit_state/EditStateContextProvider.tsx";
import FormPriceTierDefault from "FormPriceTier.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import MAX_SUBSCRIPTION_TIERS from "../../GuildRoleSubscriptionsConstants.tsx";
import { UPLOAD_MEDIUM_SIZE } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
function Content() {
  const tmp3 = stylesDefault();
  let obj = useEditStateContext;
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  obj1 = getRoleEmojisAll;
  [tmp7, tmp8] = callback(obj1.useName(editStateId), 2);
  let obj2 = getRoleEmojisAll;
  const tmp6 = callback(obj1.useName(editStateId), 2);
  [tmp10, require] = callback(obj2.useImage(editStateId), 2);
  let obj3 = getRoleEmojisAll;
  const tmp9 = callback(obj2.useImage(editStateId), 2);
  [tmp12, tmp13] = callback(obj3.usePriceTier(editStateId), 2);
  let obj4 = getRoleEmojisAll;
  const tmp11 = callback(obj3.usePriceTier(editStateId), 2);
  let tmp17 = null;
  [tmp15, tmp16] = callback(obj4.useDescription(editStateId), 2);
  if (null != tmp10) {
    obj = { uri: null };
    obj[0] = tmp10;
    tmp17 = obj;
  }
  let tmp4Result = tmp4(14741);
  const subscriptionListing = tmp4Result.useSubscriptionListing(editStateId);
  let published;
  if (subscriptionListing != null) {
    published = subscriptionListing.published;
  }
  let tmp20 = true === published;
  tmp4Result = tmp4(17239);
  const roleSubscriptionSettingsDisabled = tmp4Result.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp3.header, children: null };
  let tmpResult = tmp(9843);
  const intl = tmp4(1236).intl;
  obj[1] = intl.string(getSystemLocale.t["6XpbbR"]);
  const items = [callback2(tmpResult, obj), , , , , , , ];
  obj1 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  tmpResult = tmp(17245);
  const intl2 = tmp4(1236).intl;
  obj1[0] = intl2.string(getSystemLocale.t.pNZfgG);
  obj1[1] = tmp17;
  obj1[2] = UPLOAD_MEDIUM_SIZE;
  obj1[3] = pickImage.PreviewShape.CIRCLE;
  obj1[4] = function setImage(uri) {
    return callback(uri.uri);
  };
  obj1[5] = roleSubscriptionSettingsDisabled;
  items[1] = callback2(tmpResult, obj1);
  obj2 = { style: tmp3.header, children: null };
  const tmp14 = callback(obj4.useDescription(editStateId), 2);
  const tmp22 = closure_11;
  const tmp23 = closure_10;
  const tmp24 = callback2;
  const intl3 = tmp4(1236).intl;
  obj2[1] = intl3.string(getSystemLocale.t.rJ6Oad);
  items[2] = callback2(FormHeaderDefault, obj2);
  obj3 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: closure_7, value: tmp7, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null, disabled: null };
  const intl4 = tmp4(1236).intl;
  obj3[5] = intl4.string(getSystemLocale.t["i4/g+E"]);
  obj3[6] = tmp8;
  obj3[8] = Button.ClearButtonVisibility.WITH_CONTENT;
  obj3[9] = roleSubscriptionSettingsDisabled;
  items[3] = callback2(Form.FormInput, obj3);
  obj4 = { style: tmp3.header, children: null };
  const tmpResult1 = FormHeaderDefault;
  const intl5 = tmp4(1236).intl;
  obj4[1] = intl5.string(getSystemLocale.t["74JctW"]);
  items[4] = callback2(FormHeaderDefault, obj4);
  const obj5 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength: closure_6, numberOfLines: 3, value: tmp15, placeholder: null, onChange: null, disabled: null };
  const intl6 = tmp4(1236).intl;
  obj5[6] = intl6.string(getSystemLocale.t["3YHwoG"]);
  obj5[7] = tmp16;
  obj5[8] = roleSubscriptionSettingsDisabled;
  items[5] = callback2(Form.FormInput, obj5);
  const obj6 = { style: tmp3.header, children: null };
  const tmpResult2 = FormHeaderDefault;
  const intl7 = tmp4(1236).intl;
  obj6[1] = intl7.string(getSystemLocale.t.CrRVAx);
  items[6] = callback2(FormHeaderDefault, obj6);
  const tmpResult3 = FormHeaderDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj7 = { disabled: tmp20, guildId: editStateContext.guildId, price: tmp12, onChange: tmp13 };
  const obj8 = { children: null };
  items[7] = tmp24(FormPriceTierDefault, obj7);
  obj8[0] = items;
  return tmp22(tmp23, obj8);
}
({ GuildRoleSubscriptionsTierScenes: c5, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_6, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: error } = MAX_SUBSCRIPTION_TIERS);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
const memoResult = importAllResult.memo(() => callback2(Content, {}));
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let obj = useEditStateContext;
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = getRoleEmojisAll;
  const obj3 = getRoleEmojisAll;
  const obj4 = getRoleEmojisAll;
  let tmp3 = callback(obj2.useName(editStateId), 1)[0].length > 0;
  if (tmp3) {
    tmp3 = null != callback(obj4.usePriceTier(editStateId), 1)[0];
  }
  if (tmp3) {
    tmp3 = callback(obj5.useDescription(editStateId), 1)[0].length > 0;
  }
  if (tmp3) {
    tmp3 = null != callback(obj3.useImage(editStateId), 1)[0];
  }
  obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null, scrollable: false };
  obj5 = getRoleEmojisAll;
  const intl = tmp(1236).intl;
  obj[0] = intl.string(getSystemLocale.t.o3pHas);
  const intl2 = tmp(1236).intl;
  obj[1] = intl2.string(getSystemLocale.t.oOOME5);
  obj[2] = tmp3;
  obj[3] = constants.CHANNEL_BENEFITS;
  const merged = Object.assign(arg0);
  obj.children = callback2(closure_13, {});
  return callback2(HeaderDefault, obj);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;