// discord_app/modules/user_settings/family_center/ParentalControlledUserSettings.tsx
import discord_common_shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import Constants from "../../../Constants.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import UserSettings from "../UserSettings.tsx";
import DMSafetyConstants from "../privacy_and_safety/DMSafetyConstants.tsx";
import SpendingLimitUtils from "../../parent_tools/SpendingLimitUtils.tsx";
import ParentalControlledUserSettingsDefinitions from "ParentalControlledUserSettingsDefinitions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = DMSafetyConstants.ExplicitContentFilterTypes;
const AllFriendSourceFlags = Constants.AllFriendSourceFlags;
let obj = { comparator: discord_common_shallowEqualDefault };
const result = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "textAndImages",
  "explicitContentSettings",
  UserSettings.explicitContentFromProto,
  UserSettings.explicitContentToProto,
  obj,
);
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
    return UInt32Value.create({ value });
  },
);
obj = { comparator: discord_common_shallowEqualDefault };
const result2 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting(
  "textAndImages",
  "goreContentSettings",
  UserSettings.goreContentFromProto,
  UserSettings.goreContentToProto,
  obj,
);
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
    return BoolValue.create({ value });
  },
);
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
    return BoolValue.create({ value });
  },
);
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
    return UInt32Value.create({ value });
  },
);
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
    return BoolValue.create({ value });
  },
);
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
    return BoolValue.create({ value });
  },
);
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
      const obj = { amount: null, currency: null };
      const _Number = Number;
      obj.amount = Number(oneTimePurchaseLimit.amount);
      obj.currency = oneTimePurchaseLimit.currency;
      tmp2 = obj;
    }
    return tmp2;
  },
  (arg0) => {
    if (null == arg0) {
      const SpendingLimitSettings2 = preloaded_user_settings.SpendingLimitSettings;
      return SpendingLimitSettings2.create({});
    } else {
      ({ amount, currency } = arg0);
      const SpendingLimitSettings = preloaded_user_settings.SpendingLimitSettings;
      let obj = { oneTimePurchaseLimit: null };
      const SpendingLimit = preloaded_user_settings.SpendingLimit;
      obj = { amount: null, currency: null };
      const _String = String;
      obj.amount = String(amount);
      obj.currency = currency;
      obj.oneTimePurchaseLimit = SpendingLimit.create(obj);
      return SpendingLimitSettings.create(obj);
    }
  },
  { comparator: SpendingLimitUtils.spendingLimitEqual },
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
