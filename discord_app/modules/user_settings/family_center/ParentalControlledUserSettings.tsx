// discord_app/modules/user_settings/family_center/ParentalControlledUserSettings.tsx
import shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import Constants from "../../../Constants.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import UserSettings from "../UserSettings.tsx";
import DMSafetyConstants from "../privacy_and_safety/DMSafetyConstants.tsx";
import SpendingLimitUtils from "../../parent_tools/SpendingLimitUtils.tsx";
import ParentalControlledUserSettingsDefinitions_mod from "ParentalControlledUserSettingsDefinitions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let oneTimePurchaseLimit;

const constants = DMSafetyConstants.ExplicitContentFilterTypes;
const AllFriendSourceFlags = Constants.AllFriendSourceFlags;
let ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const defineParentalControlledSetting = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting;
const explicitContentFromProto = UserSettings.explicitContentFromProto;
let obj = { comparator: shallowEqualDefault };
const explicitContentToProto = UserSettings.explicitContentToProto;
const result = defineParentalControlledSetting(
  "textAndImages",
  "explicitContentSettings",
  explicitContentFromProto,
  explicitContentToProto,
  obj,
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result1 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "textAndImages",
  "explicitContentFilter",
  (value) => {
    let NON_FRIENDS;
    if (value != null) {
      NON_FRIENDS = value.value;
    }
    if (NON_FRIENDS == null) {
      NON_FRIENDS = constants.NON_FRIENDS;
    }
    return NON_FRIENDS;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    const obj = { value };
    return UInt32Value.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const defineParentalControlledSetting2 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting;
const goreContentFromProto = UserSettings.goreContentFromProto;
let obj2 = { comparator: shallowEqualDefault };
const goreContentToProto = UserSettings.goreContentToProto;
const result2 = defineParentalControlledSetting2(
  "textAndImages",
  "goreContentSettings",
  goreContentFromProto,
  goreContentToProto,
  obj2,
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result3 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "defaultMessageRequestRestricted",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    return BoolValue.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result4 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "defaultGuildsRestricted",
  (arg0) => {
    let flag = arg0;
    if (arg0 == null) {
      flag = false;
    }
    return flag;
  },
  (arg0) => arg0,
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result5 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "defaultGuildsRestrictedV2",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    return value;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    return BoolValue.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result6 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "friendSourceFlags",
  (value) => {
    value = undefined;
    if (value != null) {
      value = value.value;
    }
    if (value == null) {
      value = AllFriendSourceFlags;
    }
    return value;
  },
  (value) => {
    const UInt32Value = wrappers.UInt32Value;
    const obj = { value };
    return UInt32Value.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result7 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "dropsOptedOut",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    return BoolValue.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result8 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "privacy",
  "quests3PDataOptedOut",
  (value) => {
    let flag;
    if (value != null) {
      flag = value.value;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  (value) => {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    return BoolValue.create(obj);
  },
);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const obj3 = { comparator: SpendingLimitUtils.spendingLimitEqual };
const result9 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "safetySettings",
  "spendingLimitSettings",
  (oneTimePurchaseLimit) => {
    oneTimePurchaseLimit = undefined;
    if (oneTimePurchaseLimit != null) {
      oneTimePurchaseLimit = oneTimePurchaseLimit.oneTimePurchaseLimit;
    }
    let tmp2 = null;
    if (null != oneTimePurchaseLimit) {
      const _Number = Number;
      tmp2 = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
      const obj = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
    }
    return tmp2;
  },
  (arg0) => {
    let amount;
    let create2;
    let currency;
    let obj2;
    if (null == arg0) {
      const SpendingLimitSettings2 = preloaded_user_settings.SpendingLimitSettings;
      return SpendingLimitSettings2.create({});
    } else {
      ({ amount, currency } = arg0);
      const SpendingLimitSettings = preloaded_user_settings.SpendingLimitSettings;
      const create = SpendingLimitSettings.create;
      const obj = { oneTimePurchaseLimit: create2(obj2) };
      const SpendingLimit = preloaded_user_settings.SpendingLimit;
      const _String = String;
      create2 = SpendingLimit.create;
      obj2 = { amount: String(amount), currency };
      return create(obj);
    }
  },
  obj3,
);
const result10 = size.fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettings.tsx");

export const ParentalControlledExplicitContent = result;
export const ParentalControlledLegacyExplicitContent = result1;
export const ParentalControlledGoreContent = result2;
export const ParentalControlledDefaultMessageRequestRestricted = result3;
export const ParentalControlledDefaultGuildsRestricted = result4;
export const ParentalControlledDefaultGuildsRestrictedV2 = result5;
export const ParentalControlledFriendSourceFlags = result6;
export const ParentalControlledDropsOptedOut = result7;
export const ParentalControlledQuests3PDataOptedOut = result8;
export const ParentalControlledSpendingLimit = result9;
