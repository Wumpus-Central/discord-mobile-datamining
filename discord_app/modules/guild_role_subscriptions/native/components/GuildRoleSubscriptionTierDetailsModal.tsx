// === Module 18297: GuildRoleSubscriptionTierDetailsModal ===

// Module 18297 (GuildRoleSubscriptionTierDetailsModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Form from "Form" /* 8555 */;
import FormHeaderDefault from "FormHeader" /* 8654 */;
import FormStylesDefault from "FormStyles" /* 13950 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15307 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15322 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 18254 */;
import FormImagePicker from "FormImagePicker" /* 18260 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18261 */;
import EditStateContextProvider from "EditStateContextProvider" /* 18277 */;
import FormPriceTierDefault from "FormPriceTier" /* 18298 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const FormImagePickerDefault = FormImagePicker;

require = fn;
const GuildRoleSubscriptionsConstants = fn(15300);
({ GuildRoleSubscriptionsTierScenes: hasOwnProperty, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_7 } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content() {
  const cResult = c.c(47);
  const tmp5 = FormStylesDefault();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [r10026, r10027] = GuildRoleSubscriptionListingEditStateUtilsAll.useName(editStateId);
  const tmp7 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(editStateId), 2);
  [tmp9, tmp10] = GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId);
  const require = tmp10;
  const tmp8 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId), 2);
  [r10040, r10041] = GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId);
  const tmp11 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId), 2);
  [r10047, r10048] = GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(editStateId);
  if (cResult[0] !== tmp9) {
    let tmp14 = null;
    if (null != tmp9) {
      const obj7 = { uri: tmp9 };
      tmp14 = obj7;
    }
    cResult[0] = tmp9;
    cResult[1] = tmp14;
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[1];
  }
  const tmp12 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(editStateId), 2);
  const subscriptionListing = GuildRoleSubscriptionsHooks.useSubscriptionListing(editStateId);
  if (subscriptionListing != null) {
    const published = subscriptionListing.published;
  }
  const tmpResult = GuildRoleSubscriptionsHooks;
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["6XpbbR"]);
    cResult[2] = stringResult;
    let tmp17 = stringResult;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] !== tmp5.header) {
    const obj8 = { style: tmp5.header, children: tmp17 };
    const tmp21 = options(FormHeaderDefault, obj8);
    cResult[3] = tmp5.header;
    cResult[4] = tmp21;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.pNZfgG);
    cResult[5] = stringResult1;
    let tmp22 = stringResult1;
  } else {
    tmp22 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
    cResult[6] = tmp10;
    cResult[7] = B;
  } else {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
  }
  if (cResult[8] === tmp13) {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
  }
  const obj9 = { description: tmp22, image: tmp13, imageUploadSize: UPLOAD_MEDIUM_SIZE, previewShape: null, setImage: null, disabled: null };
  const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
  obj9.previewShape = FormImagePicker.PreviewShape.CIRCLE;
  obj9.setImage = B;
  obj9.disabled = roleSubscriptionSettingsDisabled;
  const tmp4Result = FormImagePickerDefault;
  cResult[8] = tmp13;
  cResult[9] = roleSubscriptionSettingsDisabled;
  cResult[10] = B;
  cResult[11] = options(FormImagePickerDefault, obj9);
  const tmp26 = options(FormImagePickerDefault, obj9);
}) : (function Content() {
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
  const items = [options(FormHeaderDefault, obj7), , , , , , , ];
  const obj8 = { description: null, image: null, imageUploadSize: null, previewShape: null, setImage: null, disabled: null };
  const tmpResult = FormHeaderDefault;
  const intl2 = util.intl;
  obj8.description = intl2.string(util.t.pNZfgG);
  obj8.image = tmp17;
  obj8.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj8.previewShape = FormImagePicker.PreviewShape.CIRCLE;
  obj8.setImage = function setImage(uri) {
    return _require(uri.uri);
  };
  obj8.disabled = roleSubscriptionSettingsDisabled;
  items[1] = options(FormImagePickerDefault, obj8);
  const obj9 = { style: tmp3.header, children: null };
  const tmpResult6 = FormImagePickerDefault;
  const intl3 = util.intl;
  obj9.children = intl3.string(util.t.rJ6Oad);
  items[2] = options(FormHeaderDefault, obj9);
  const obj10 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: maxLength2, value: tmp7, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null, disabled: null };
  const intl4 = util.intl;
  obj10.placeholder = intl4.string(util.t["i4/g+E"]);
  obj10.onChange = tmp8;
  obj10.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  obj10.disabled = roleSubscriptionSettingsDisabled;
  items[3] = options(Form.FormInput, obj10);
  const obj11 = { style: tmp3.header, children: null };
  const tmpResult7 = FormHeaderDefault;
  const intl5 = util.intl;
  obj11.children = intl5.string(util.t["74JctW"]);
  items[4] = options(FormHeaderDefault, obj11);
  const obj12 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength, numberOfLines: 3, value: tmp15, placeholder: null, onChange: null, disabled: null };
  const intl6 = util.intl;
  obj12.placeholder = intl6.string(util.t["3YHwoG"]);
  obj12.onChange = tmp16;
  obj12.disabled = roleSubscriptionSettingsDisabled;
  items[5] = options(Form.FormInput, obj12);
  const obj13 = { style: tmp3.header, children: null };
  const tmpResult8 = FormHeaderDefault;
  const intl7 = util.intl;
  obj13.children = intl7.string(util.t.CrRVAx);
  items[6] = options(FormHeaderDefault, obj13);
  const tmpResult9 = FormHeaderDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj14 = { disabled: tmp20, guildId: editStateContext.guildId, price: tmp12, onChange: tmp13 };
  const obj15 = { children: null };
  items[7] = options(FormPriceTierDefault, obj14);
  obj15.children = items;
  return closure_1_11(collapsed, obj15);
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDetailsTab() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = options(closure_12, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GuildRoleSubscriptionTierDetailsTab() {
  return options(closure_12, {});
}));
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDetailsModal(arg0) {
  const cResult = c.c(6);
  const editStateId = EditStateContextProvider.useEditStateContext().editStateId;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let tmp4 = _slicedToArray(obj3.useName(editStateId), 1)[0].length > 0;
  if (tmp4) {
    tmp4 = null != _slicedToArray(obj5.usePriceTier(editStateId), 1)[0];
  }
  if (tmp4) {
    tmp4 = _slicedToArray(obj6.useDescription(editStateId), 1)[0].length > 0;
  }
  if (tmp4) {
    tmp4 = null != _slicedToArray(obj4.useImage(editStateId), 1)[0];
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.o3pHas);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.oOOME5);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp7 = stringResult;
    tmp8 = stringResult1;
  } else {
    [tmp7, tmp8] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = options(memoResult, {});
    cResult[2] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === arg0) {
      let tmp15 = cResult[5];
    }
    return tmp15;
  }
  const obj7 = { title: tmp7, description: tmp8, canProceedToNextStep: tmp4, nextStep: constants.CHANNEL_BENEFITS };
  obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const merged = Object.assign(arg0);
  obj7.children = tmp11;
  const tmp18 = options(GuildRoleSubscriptionTierEditStepDefault, obj7);
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = tmp18;
  tmp15 = tmp18;
}) : (function GuildRoleSubscriptionTierDetailsModal(arg0) {
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
  obj6.children = options(memoResult, {});
  return options(GuildRoleSubscriptionTierEditStepDefault, obj6);
});
export const GuildRoleSubscriptionTierDetailsTab = memoResult;