// === Module 17769: GuildRoleSubscriptionTierDetailsModal ===

// Module 17769 (GuildRoleSubscriptionTierDetailsModal)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Form from "Form" /* 8593 */;
import FormHeaderDefault from "FormHeader" /* 9816 */;
import FormStylesDefault from "FormStyles" /* 13898 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import FormImagePicker from "FormImagePicker" /* 17730 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17733 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17741 */;
import FormPriceTierDefault from "FormPriceTier" /* 17770 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Content() {
  const tmp3 = FormStylesDefault();
  let obj = EditStateContextProvider;
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp7, tmp8] = _slicedToArray(obj1.useName(editStateId), 2);
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp6 = _slicedToArray(obj1.useName(editStateId), 2);
  [tmp10, require] = _slicedToArray(obj2.useImage(editStateId), 2);
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp9 = _slicedToArray(obj2.useImage(editStateId), 2);
  [tmp12, tmp13] = _slicedToArray(obj3.usePriceTier(editStateId), 2);
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp11 = _slicedToArray(obj3.usePriceTier(editStateId), 2);
  let tmp17 = null;
  [tmp15, tmp16] = _slicedToArray(obj4.useDescription(editStateId), 2);
  if (null != tmp10) {
    obj = { uri: tmp10 };
    tmp17 = obj;
  }
  let tmp4Result = tmp4(15212);
  const subscriptionListing = tmp4Result.useSubscriptionListing(editStateId);
  let published;
  if (subscriptionListing != null) {
    published = subscriptionListing.published;
  }
  let tmp20 = true === published;
  tmp4Result = tmp4(17724);
  const roleSubscriptionSettingsDisabled = tmp4Result.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp3.header, children: null };
  let tmpResult = tmp(9816);
  const intl = tmp4(1114).intl;
  obj.children = intl.string(util.t["6XpbbR"]);
  const items = [React7(tmpResult, obj), , , , , , , ];
  obj1 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  tmpResult = tmp(17730);
  const intl2 = tmp4(1114).intl;
  obj1.description = intl2.string(util.t.pNZfgG);
  obj1.image = tmp17;
  obj1.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj1.previewShape = FormImagePicker.PreviewShape.CIRCLE;
  obj1.setImage = function setImage(uri) {
    return require(uri.uri);
  };
  obj1.disabled = roleSubscriptionSettingsDisabled;
  items[1] = React7(tmpResult, obj1);
  obj2 = { style: tmp3.header, children: null };
  const tmp14 = _slicedToArray(obj4.useDescription(editStateId), 2);
  const tmp22 = closure_1_11;
  const tmp23 = closure_1_10;
  const tmp24 = React7;
  const intl3 = tmp4(1114).intl;
  obj2.children = intl3.string(util.t.rJ6Oad);
  items[2] = React7(FormHeaderDefault, obj2);
  obj3 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: maxLength2, value: tmp7, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null, disabled: null };
  const intl4 = tmp4(1114).intl;
  obj3.placeholder = intl4.string(util.t["i4/g+E"]);
  obj3.onChange = tmp8;
  obj3.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  obj3.disabled = roleSubscriptionSettingsDisabled;
  items[3] = React7(Form.FormInput, obj3);
  obj4 = { style: tmp3.header, children: null };
  const tmpResult1 = FormHeaderDefault;
  const intl5 = tmp4(1114).intl;
  obj4.children = intl5.string(util.t["74JctW"]);
  items[4] = React7(FormHeaderDefault, obj4);
  const obj5 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: tmp15, placeholder: null, onChange: null, disabled: null };
  const intl6 = tmp4(1114).intl;
  obj5.placeholder = intl6.string(util.t["3YHwoG"]);
  obj5.onChange = tmp16;
  obj5.disabled = roleSubscriptionSettingsDisabled;
  items[5] = React7(Form.FormInput, obj5);
  const obj6 = { style: tmp3.header, children: null };
  const tmpResult2 = FormHeaderDefault;
  const intl7 = tmp4(1114).intl;
  obj6.children = intl7.string(util.t.CrRVAx);
  items[6] = React7(FormHeaderDefault, obj6);
  const tmpResult3 = FormHeaderDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj7 = { disabled: tmp20, guildId: editStateContext.guildId, price: tmp12, onChange: tmp13 };
  const obj8 = { children: null };
  items[7] = tmp24(FormPriceTierDefault, obj7);
  obj8.children = items;
  return tmp22(tmp23, obj8);
}
const GuildRoleSubscriptionsConstants = fn(15205);
({ GuildRoleSubscriptionsTierScenes: hasOwnProperty, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const memoResult = noop.memo(() => React7(Content, {}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let obj = EditStateContextProvider;
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let tmp3 = _slicedToArray(obj2.useName(editStateId), 1)[0].length > 0;
  if (tmp3) {
    tmp3 = null != _slicedToArray(obj4.usePriceTier(editStateId), 1)[0];
  }
  if (tmp3) {
    tmp3 = _slicedToArray(obj5.useDescription(editStateId), 1)[0].length > 0;
  }
  if (tmp3) {
    tmp3 = null != _slicedToArray(obj3.useImage(editStateId), 1)[0];
  }
  obj = { title: null, description: null, canProceedToNextStep: null, nextStep: null, scrollable: false };
  obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const intl = tmp(1114).intl;
  obj.title = intl.string(util.t.o3pHas);
  const intl2 = tmp(1114).intl;
  obj.description = intl2.string(util.t.oOOME5);
  obj.canProceedToNextStep = tmp3;
  obj.nextStep = constants.CHANNEL_BENEFITS;
  const merged = Object.assign(arg0);
  obj.children = React7(memoResult, {});
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;