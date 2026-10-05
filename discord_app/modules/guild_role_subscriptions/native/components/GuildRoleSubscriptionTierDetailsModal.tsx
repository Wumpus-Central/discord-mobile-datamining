// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import FormHeaderDefault from "../../../guild_member_verification/native/components/form_fields/FormHeader.tsx";
import FormStylesDefault from "FormStyles.tsx";
import GuildRoleSubscriptionsHooks from "../../GuildRoleSubscriptionsHooks.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import FormImagePicker from "FormImagePicker.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import EditStateContextProvider from "../../edit_state/EditStateContextProvider.tsx";
import FormPriceTierDefault from "FormPriceTier.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildRoleSubscriptionsConstants from "../../GuildRoleSubscriptionsConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const FormImagePickerDefault = FormImagePicker;
let _require;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({
  GuildRoleSubscriptionsTierScenes: hasOwnProperty,
  MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire,
  MAX_SUBSCRIPTION_TIER_NAME_LENGTH: metroImportDefault,
} = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let editStateId;
      let guildId;
      let tmp10;
      let tmp13;
      let tmp17;
      let tmp22;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(47);
      const tmp5 = FormStylesDefault();
      const obj2 = EditStateContextProvider;
      const editStateContext = obj2.useEditStateContext();
      ({ guildId, editStateId } = editStateContext);
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [r10026, r10027] = obj3.useName(editStateId);
      _slicedToArray(obj3.useName(editStateId), 2);
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [tmp9, tmp10] = obj4.useImage(editStateId);
      _require = tmp10;
      _slicedToArray(obj4.useImage(editStateId), 2);
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [r10040, r10041] = obj5.usePriceTier(editStateId);
      _slicedToArray(obj5.usePriceTier(editStateId), 2);
      const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [r10047, r10048] = obj6.useDescription(editStateId);
      _slicedToArray(obj6.useDescription(editStateId), 2);
      if (cResult[0] !== tmp9) {
        let tmp14 = null;
        if (null != tmp9) {
          tmp14 = { uri: tmp9 };
          const obj7 = { uri: tmp9 };
        }
        cResult[0] = tmp9;
        cResult[1] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[1];
      }
      const tmpResult = GuildRoleSubscriptionsHooks;
      const subscriptionListing = tmpResult.useSubscriptionListing(editStateId);
      if (subscriptionListing != null) {
        const published = subscriptionListing.published;
      }
      const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
      const roleSubscriptionSettingsDisabled = tmpResult2.useRoleSubscriptionSettingsDisabled();
      const header = tmp5.header;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl8.intl;
        const stringResult = intl.string(intl8.t["6XpbbR"]);
        cResult[2] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[2];
      }
      if (cResult[3] !== tmp5.header) {
        const obj8 = { style: header, children: tmp17 };
        cResult[3] = tmp5.header;
        cResult[4] = React4(FormHeaderDefault, obj8);
        const tmp21 = React4(FormHeaderDefault, obj8);
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl8.intl;
        const stringResult1 = intl2.string(intl8.t.pNZfgG);
        cResult[5] = stringResult1;
        tmp22 = stringResult1;
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
      const obj9 = {
        description: tmp22,
        image: tmp13,
        imageUploadSize: UPLOAD_MEDIUM_SIZE,
        previewShape: FormImagePicker.PreviewShape.CIRCLE,
        setImage: B,
        disabled: roleSubscriptionSettingsDisabled,
      };
      const tmp4Result = FormImagePickerDefault;
      cResult[8] = tmp13;
      cResult[9] = roleSubscriptionSettingsDisabled;
      cResult[10] = B;
      cResult[11] = React4(tmp4Result, obj9);
      React4(tmp4Result, obj9);
    }
  : () => {
      let closure_129_0;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp7;
      let tmp8;
      const tmp3 = FormStylesDefault();
      let obj = EditStateContextProvider;
      const editStateContext = obj.useEditStateContext();
      const editStateId = editStateContext.editStateId;
      const guildId = editStateContext.guildId;
      let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [tmp7, tmp8] = obj2.useName(editStateId);
      _slicedToArray(obj2.useName(editStateId), 2);
      let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [tmp10, closure_129_0] = _slicedToArray(obj3.useImage(editStateId), 2);
      const tmp9 = _slicedToArray(obj3.useImage(editStateId), 2);
      let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      [tmp12, tmp13] = _slicedToArray(obj4.usePriceTier(editStateId), 2);
      const tmp11 = _slicedToArray(obj4.usePriceTier(editStateId), 2);
      let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      let tmp17 = null;
      [tmp15, tmp16] = obj5.useDescription(editStateId);
      _slicedToArray(obj5.useDescription(editStateId), 2);
      if (null != tmp10) {
        tmp17 = { uri: tmp10 };
        const obj6 = { uri: tmp10 };
      }
      const tmp4Result = GuildRoleSubscriptionsHooks;
      const subscriptionListing = tmp4Result.useSubscriptionListing(editStateId);
      let published;
      if (subscriptionListing != null) {
        published = subscriptionListing.published;
      }
      let tmp20 = true === published;
      const tmp4Result2 = RoleSubscriptionSettingsDisabledContext;
      const roleSubscriptionSettingsDisabled = tmp4Result2.useRoleSubscriptionSettingsDisabled();
      const obj7 = { style: tmp3.header, children: intl.string(intl8.t["6XpbbR"]) };
      const tmpResult = FormHeaderDefault;
      intl = intl8.intl;
      const items = [React4(tmpResult, obj7), , , , , , ,];
      const obj8 = {
        description: intl2.string(intl8.t.pNZfgG),
        image: tmp17,
        imageUploadSize: UPLOAD_MEDIUM_SIZE,
        previewShape: FormImagePicker.PreviewShape.CIRCLE,
        setImage(uri) {
          return closure_1_0(uri.uri);
        },
        disabled: roleSubscriptionSettingsDisabled,
      };
      const tmpResult6 = FormImagePickerDefault;
      intl2 = intl8.intl;
      items[1] = React4(tmpResult6, obj8);
      const obj9 = { style: tmp3.header, children: intl3.string(intl8.t.rJ6Oad) };
      const tmpResult7 = FormHeaderDefault;
      intl3 = intl8.intl;
      items[2] = React4(tmpResult7, obj9);
      const obj10 = {
        style: tmp3.textInput,
        showTopContainer: false,
        multiline: false,
        maxLength: metroImportDefault,
        value: tmp7,
        placeholder: intl4.string(intl8.t["i4/g+E"]),
        onChange: tmp8,
        autoFocus: true,
        clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
        disabled: roleSubscriptionSettingsDisabled,
      };
      const FormInput = Form.FormInput;
      intl4 = intl8.intl;
      items[3] = React4(FormInput, obj10);
      const obj11 = { style: tmp3.header, children: intl5.string(intl8.t["74JctW"]) };
      const tmpResult8 = FormHeaderDefault;
      intl5 = intl8.intl;
      items[4] = React4(tmpResult8, obj11);
      const obj12 = {
        style: tmp3.textInput,
        showTopContainer: false,
        multiline: true,
        maxLength: metroRequire,
        numberOfLines: 3,
        value: tmp15,
        placeholder: intl6.string(intl8.t["3YHwoG"]),
        onChange: tmp16,
        disabled: roleSubscriptionSettingsDisabled,
      };
      const FormInput2 = Form.FormInput;
      intl6 = intl8.intl;
      items[5] = React4(FormInput2, obj12);
      const obj13 = { style: tmp3.header, children: intl7.string(intl8.t.CrRVAx) };
      const tmpResult9 = FormHeaderDefault;
      intl7 = intl8.intl;
      items[6] = React4(tmpResult9, obj13);
      const tmpResult10 = FormPriceTierDefault;
      if (!tmp20) {
        tmp20 = roleSubscriptionSettingsDisabled;
      }
      const obj14 = { disabled: tmp20, guildId, price: tmp12, onChange: tmp13 };
      const obj15 = { children: items };
      items[7] = React4(tmpResult10, obj14);
      return unpackModuleId(authStore, obj15);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        const obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp5 = React4(closure_12, {});
          cResult[0] = tmp5;
          first = tmp5;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => React4(closure_12, {}),
);
const map1 = memoResult;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp10;
      let tmp13;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(6);
      const obj2 = EditStateContextProvider;
      const editStateId = obj2.useEditStateContext().editStateId;
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj3.useName(editStateId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj4.useImage(editStateId), 1)[0];
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj5.usePriceTier(editStateId), 1)[0];
      let tmp6 = first.length > 0;
      const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first3 = _slicedToArray(obj6.useDescription(editStateId), 1)[0];
      if (tmp6) {
        tmp6 = null != first2;
      }
      if (tmp6) {
        tmp6 = first3.length > 0;
      }
      if (tmp6) {
        tmp6 = null != first1;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl8.intl;
        const stringResult = intl.string(intl8.t.o3pHas);
        const intl2 = intl8.intl;
        const stringResult1 = intl2.string(intl8.t.oOOME5);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp10 = stringResult1;
        tmp9 = stringResult;
      } else {
        [tmp9, tmp10] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = React4(map1, {});
        cResult[2] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        let tmp17;
        if (cResult[4] === arg0) {
          tmp17 = cResult[5];
        }
        return tmp17;
      }
      const obj7 = {
        title: tmp9,
        description: tmp10,
        canProceedToNextStep: tmp6,
        nextStep: hasOwnProperty.CHANNEL_BENEFITS,
        children: tmp13,
      };
      const tmp18 = GuildRoleSubscriptionTierEditStepDefault;
      const merged = Object.assign(arg0);
      const tmp20 = React4(tmp18, obj7);
      cResult[3] = tmp6;
      cResult[4] = arg0;
      cResult[5] = tmp20;
      tmp17 = tmp20;
    }
  : (arg0) => {
      let intl;
      let intl2;
      const obj = EditStateContextProvider;
      const editStateId = obj.useEditStateContext().editStateId;
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj2.useName(editStateId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj3.useImage(editStateId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj4.usePriceTier(editStateId), 1)[0];
      let tmp5 = first.length > 0;
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first3 = _slicedToArray(obj5.useDescription(editStateId), 1)[0];
      if (tmp5) {
        tmp5 = null != first2;
      }
      if (tmp5) {
        tmp5 = first3.length > 0;
      }
      if (tmp5) {
        tmp5 = null != first1;
      }
      const obj6 = {
        title: intl.string(intl8.t.o3pHas),
        description: intl2.string(intl8.t.oOOME5),
        canProceedToNextStep: tmp5,
        nextStep: hasOwnProperty.CHANNEL_BENEFITS,
        children: React4(map1, {}),
      };
      const tmp8 = GuildRoleSubscriptionTierEditStepDefault;
      intl = intl8.intl;
      intl2 = intl8.intl;
      const merged = Object.assign(arg0);
      return React4(tmp8, obj6);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx",
);

export default tmp6;
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
