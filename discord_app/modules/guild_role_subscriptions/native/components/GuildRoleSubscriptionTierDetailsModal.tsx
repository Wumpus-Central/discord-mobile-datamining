// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx
import _slicedToArray from "_slicedToArray";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import importAllResult from "noop";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { FormHeader } from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import { useEditStateContext } from "../../edit_state/EditStateContextProvider.tsx";
import { pickImage } from "FormImagePicker.tsx";
import { FormPriceTier } from "FormPriceTier.tsx";
import { styles } from "FormStyles.tsx";
import { Header } from "GuildRoleSubscriptionTierEditStep.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function Content() {
  let require;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp8;
  const tmp3 = styles();
  let obj = useEditStateContext /* useEditStateContext */;
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  let obj1 = importAll(14363);
  [tmp7, tmp8] = callback(obj1.useName(editStateId), 2);
  let obj2 = importAll(14363);
  const tmp6 = callback(obj1.useName(editStateId), 2);
  [tmp10, require] = callback(obj2.useImage(editStateId), 2);
  let obj3 = importAll(14363);
  const tmp9 = callback(obj2.useImage(editStateId), 2);
  [tmp12, tmp13] = callback(obj3.usePriceTier(editStateId), 2);
  let obj4 = importAll(14363);
  const tmp11 = callback(obj3.usePriceTier(editStateId), 2);
  let tmp17 = null;
  [tmp15, tmp16] = callback(obj4.useDescription(editStateId), 2);
  if (null != tmp10) {
    obj = { uri: null };
    obj[0] = tmp10;
    tmp17 = obj;
  }
  let tmp4Result = tmp4(14348);
  const subscriptionListing = tmp4Result.useSubscriptionListing(editStateId);
  let published;
  if (subscriptionListing != null) {
    published = subscriptionListing.published;
  }
  let tmp20 = true === published;
  tmp4Result = tmp4(16684);
  const roleSubscriptionSettingsDisabled = tmp4Result.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp3.header, children: null };
  let tmpResult = tmp(8982);
  const intl = tmp4(1236).intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["6XpbbR"]);
  const items = [callback2(tmpResult, obj), , , , , , , ];
  obj1 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  tmpResult = tmp(16690);
  const intl2 = tmp4(1236).intl;
  obj1[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.pNZfgG);
  obj1[1] = tmp17;
  obj1[2] = UPLOAD_MEDIUM_SIZE;
  obj1[3] = pickImage /* pickImage */.PreviewShape.CIRCLE;
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
  obj2[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.rJ6Oad);
  items[2] = callback2(FormHeader, obj2);
  obj3 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: closure_7, value: tmp7, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null, disabled: null };
  const intl4 = tmp4(1236).intl;
  obj3[5] = intl4.string(getSystemLocale /* getSystemLocale */.t["i4/g+E"]);
  obj3[6] = tmp8;
  obj3[8] = Button /* Button */.ClearButtonVisibility.WITH_CONTENT;
  obj3[9] = roleSubscriptionSettingsDisabled;
  items[3] = callback2(Form /* Form */.FormInput, obj3);
  obj4 = { style: tmp3.header, children: null };
  const tmpResult1 = FormHeader;
  const intl5 = tmp4(1236).intl;
  obj4[1] = intl5.string(getSystemLocale /* getSystemLocale */.t["74JctW"]);
  items[4] = callback2(FormHeader, obj4);
  const obj5 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength: closure_6, numberOfLines: 3, value: tmp15, placeholder: null, onChange: null, disabled: null };
  const intl6 = tmp4(1236).intl;
  obj5[6] = intl6.string(getSystemLocale /* getSystemLocale */.t["3YHwoG"]);
  obj5[7] = tmp16;
  obj5[8] = roleSubscriptionSettingsDisabled;
  items[5] = callback2(Form /* Form */.FormInput, obj5);
  const obj6 = { style: tmp3.header, children: null };
  const tmpResult2 = FormHeader;
  const intl7 = tmp4(1236).intl;
  obj6[1] = intl7.string(getSystemLocale /* getSystemLocale */.t.CrRVAx);
  items[6] = callback2(FormHeader, obj6);
  const tmpResult3 = FormHeader;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj7 = { disabled: tmp20, guildId: editStateContext.guildId, price: null, onChange: null };
  const obj8 = { children: null };
  obj7[2] = tmp12;
  obj7[3] = tmp13;
  items[7] = tmp24(FormPriceTier, obj7);
  obj8[0] = items;
  return tmp22(tmp23, obj8);
}
({ GuildRoleSubscriptionsTierScenes: c5, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_6, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: error } = MAX_SUBSCRIPTION_TIERS);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
const memoResult = require("noop").memo(() => callback2(Content, {}));
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let obj = useEditStateContext /* useEditStateContext */;
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = importAll(14363);
  const obj3 = importAll(14363);
  const obj4 = importAll(14363);
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
  obj5 = importAll(14363);
  const intl = tmp(1236).intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.o3pHas);
  const intl2 = tmp(1236).intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.oOOME5);
  obj[2] = tmp3;
  obj[3] = constants.CHANNEL_BENEFITS;
  const merged = Object.assign(arg0);
  obj.children = callback2(closure_13, {});
  return callback2(Header, obj);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;