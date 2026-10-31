// === Module 19980: GuildRoleSubscriptionTierDetailsModal ===

// Module 19980 (GuildRoleSubscriptionTierDetailsModal)
import util from "util" /* 1113 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import TextInput from "TextInput" /* 7082 */;
import TextArea from "TextArea" /* 7253 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 17190 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19938 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import FormImagePicker from "FormImagePicker" /* 19944 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import EditStateContextProvider from "EditStateContextProvider" /* 19953 */;
import FormPriceTierDefault from "FormPriceTier" /* 19981 */;
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
  const obj7 = { style: tmp3.container, children: null };
  const obj8 = { children: null };
  const obj9 = { title: null };
  const intl = util.intl;
  obj9.title = intl.string(util.t["6XpbbR"]);
  const items = [closure_1_10(TableRowGroup.TableRowGroupTitle, obj9), ];
  const obj10 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  const tmp4Result2 = RoleSubscriptionSettingsDisabledContext;
  const intl2 = util.intl;
  obj10.description = intl2.string(util.t.pNZfgG);
  obj10.image = tmp17;
  obj10.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj10.previewShape = FormImagePicker.PreviewShape.CIRCLE;
  obj10.setImage = function setImage(uri) {
    return require(uri.uri);
  };
  obj10.disabled = roleSubscriptionSettingsDisabled;
  items[1] = closure_1_10(FormImagePickerDefault, obj10);
  obj8.children = items;
  const items1 = [closure_1_11(View, obj8), , , ];
  const obj11 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, returnKeyType: "done", clearable: true, disabled: null };
  const intl3 = util.intl;
  obj11.label = intl3.string(util.t.rJ6Oad);
  obj11.maxLength = maxLength2;
  obj11.value = tmp7;
  const intl4 = util.intl;
  obj11.placeholder = intl4.string(util.t["i4/g+E"]);
  obj11.onChange = tmp8;
  obj11.disabled = roleSubscriptionSettingsDisabled;
  items1[1] = closure_1_10(TextInput.TextInput, obj11);
  const obj12 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, disabled: null };
  const intl5 = util.intl;
  obj12.label = intl5.string(util.t["74JctW"]);
  obj12.maxLength = maxLength;
  obj12.value = tmp15;
  const intl6 = util.intl;
  obj12.placeholder = intl6.string(util.t["3YHwoG"]);
  obj12.onChange = tmp16;
  obj12.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = closure_1_10(TextArea.TextArea, obj12);
  const obj13 = { title: null, hasIcons: false, children: null };
  const intl7 = util.intl;
  obj13.title = intl7.string(util.t.CrRVAx);
  const tmpResult = FormImagePickerDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj14 = { disabled: tmp20, guildId: editStateContext.guildId, price: tmp12, onChange: tmp13 };
  obj13.children = closure_1_10(FormPriceTierDefault, obj14);
  items1[3] = closure_1_10(TableRowGroup.TableRowGroup, obj13);
  obj7.children = items1;
  return closure_1_11(View, obj7);
}
const View = fn(17).View;
const GuildRoleSubscriptionsConstants = fn(17183);
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_8 } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = fn(1072).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const memoResult = noop.memo(function GuildRoleSubscriptionTierDetailsTab() {
  return closure_1_10(Content, {});
});
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
  obj6.children = closure_1_10(memoResult, {});
  return closure_1_10(GuildRoleSubscriptionTierEditStepDefault, obj6);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;