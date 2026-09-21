// === Module 18228: GuildRoleSubscriptionTierDetailsModal ===

// Module 18228 (GuildRoleSubscriptionTierDetailsModal)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Form from "Form" /* 8871 */;
import FormHeaderDefault from "FormHeader" /* 10072 */;
import FormStylesDefault from "FormStyles" /* 14166 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15482 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15497 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 18183 */;
import FormImagePicker from "FormImagePicker" /* 18189 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18192 */;
import EditStateContextProvider from "EditStateContextProvider" /* 18200 */;
import FormPriceTierDefault from "FormPriceTier" /* 18229 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const FormImagePickerDefault = FormImagePicker;

require = fn;
function Content() {
  const tmp3 = FormStylesDefault();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  [tmp7, tmp8] = GuildRoleSubscriptionListingEditStateUtilsAll.useName(editStateId);
  const tmp6 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(editStateId), 2);
  [tmp10, require] = GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId);
  const tmp9 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId), 2);
  [tmp12, tmp13] = GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId);
  const tmp11 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId), 2);
  let tmp17 = null;
  [tmp15, tmp16] = GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(editStateId);
  if (null != tmp10) {
    const obj6 = { uri: tmp10 };
    tmp17 = obj6;
  }
  const tmp14 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(editStateId), 2);
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateId);
  let published;
  if (subscriptionListing != null) {
    published = subscriptionListing.published;
  }
  let tmp20 = true === published;
  const tmp4Result = GuildRoleSubscriptionsHooks;
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  const obj7 = { style: tmp3.header, children: null };
  const tmp4Result2 = RoleSubscriptionSettingsDisabledContext;
  const intl = util.intl;
  obj7.children = intl.string(util.t["6XpbbR"]);
  const items = [React7(FormHeaderDefault, obj7), , , , , , , ];
  const obj8 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  const tmpResult = FormHeaderDefault;
  const intl2 = util.intl;
  obj8.description = intl2.string(util.t.pNZfgG);
  obj8.image = tmp17;
  obj8.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj8.previewShape = FormImagePicker.PreviewShape.CIRCLE;
  obj8.setImage = function setImage(uri) {
    return require(uri.uri);
  };
  obj8.disabled = roleSubscriptionSettingsDisabled;
  items[1] = React7(FormImagePickerDefault, obj8);
  const obj9 = { style: tmp3.header, children: null };
  const tmpResult6 = FormImagePickerDefault;
  const intl3 = util.intl;
  obj9.children = intl3.string(util.t.rJ6Oad);
  items[2] = React7(FormHeaderDefault, obj9);
  const obj10 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: maxLength2, value: tmp7, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null, disabled: null };
  const intl4 = util.intl;
  obj10.placeholder = intl4.string(util.t["i4/g+E"]);
  obj10.onChange = tmp8;
  obj10.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  obj10.disabled = roleSubscriptionSettingsDisabled;
  items[3] = React7(Form.FormInput, obj10);
  const obj11 = { style: tmp3.header, children: null };
  const tmpResult7 = FormHeaderDefault;
  const intl5 = util.intl;
  obj11.children = intl5.string(util.t["74JctW"]);
  items[4] = React7(FormHeaderDefault, obj11);
  const obj12 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: tmp15, placeholder: null, onChange: null, disabled: null };
  const intl6 = util.intl;
  obj12.placeholder = intl6.string(util.t["3YHwoG"]);
  obj12.onChange = tmp16;
  obj12.disabled = roleSubscriptionSettingsDisabled;
  items[5] = React7(Form.FormInput, obj12);
  const obj13 = { style: tmp3.header, children: null };
  const tmpResult8 = FormHeaderDefault;
  const intl7 = util.intl;
  obj13.children = intl7.string(util.t.CrRVAx);
  items[6] = React7(FormHeaderDefault, obj13);
  const tmpResult9 = FormHeaderDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj14 = { disabled: tmp20, guildId: editStateContext.guildId, price: tmp12, onChange: tmp13 };
  const obj15 = { children: null };
  items[7] = React7(FormPriceTierDefault, obj14);
  obj15.children = items;
  return closure_1_11(closure_1_10, obj15);
}
const GuildRoleSubscriptionsConstants = fn(15475);
({ GuildRoleSubscriptionsTierScenes: hasOwnProperty, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const memoResult = noop.memo(() => React7(Content, {}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  const editStateId = EditStateContextProvider.useEditStateContext().editStateId;
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
  const obj6 = { title: null, description: null, canProceedToNextStep: null, nextStep: null };
  obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const intl = util.intl;
  obj6.title = intl.string(util.t.o3pHas);
  const intl2 = util.intl;
  obj6.description = intl2.string(util.t.oOOME5);
  obj6.canProceedToNextStep = tmp3;
  obj6.nextStep = constants.CHANNEL_BENEFITS;
  const merged = Object.assign(arg0);
  obj6.children = React7(memoResult, {});
  return React7(GuildRoleSubscriptionTierEditStepDefault, obj6);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;