// === Module 14642: ParentalControlledUserSettings ===

// Module 14642 (ParentalControlledUserSettings)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1085 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import wrappers from "wrappers" /* 1228 */;
import UserSettings from "UserSettings" /* 2028 */;
import DMSafetyConstants from "DMSafetyConstants" /* 2030 */;
import SpendingLimitUtils from "SpendingLimitUtils" /* 14644 */;
import ParentalControlledUserSettingsDefinitions_mod from "ParentalControlledUserSettingsDefinitions" /* 14643 */;
import size from "module_2" /* 2 */;

let oneTimePurchaseLimit;

const constants = DMSafetyConstants.ExplicitContentFilterTypes;
const AllFriendSourceFlags = Constants.AllFriendSourceFlags;
let ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const defineParentalControlledSetting = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting;
const explicitContentFromProto = UserSettings.explicitContentFromProto;
let obj = { comparator: shallowEqualDefault };
const explicitContentToProto = UserSettings.explicitContentToProto;
const result = defineParentalControlledSetting("textAndImages", "explicitContentSettings", explicitContentFromProto, explicitContentToProto, obj);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result1 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const defineParentalControlledSetting2 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting;
const goreContentFromProto = UserSettings.goreContentFromProto;
let obj2 = { comparator: shallowEqualDefault };
const goreContentToProto = UserSettings.goreContentToProto;
const result2 = defineParentalControlledSetting2("textAndImages", "goreContentSettings", goreContentFromProto, goreContentToProto, obj2);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result3 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result4 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "defaultGuildsRestricted", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result5 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result6 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = AllFriendSourceFlags;
  }
  return value;
}, (value) => {
  const UInt32Value = wrappers.UInt32Value;
  const obj = { value };
  return UInt32Value.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result7 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "dropsOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const result8 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("privacy", "quests3PDataOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = wrappers.BoolValue;
  const obj = { value };
  return BoolValue.create(obj);
});
ParentalControlledUserSettingsDefinitions = ParentalControlledUserSettingsDefinitions_mod;
const obj3 = { comparator: SpendingLimitUtils.spendingLimitEqual };
const result9 = ParentalControlledUserSettingsDefinitions.defineParentalControlledSetting("safetySettings", "spendingLimitSettings", (oneTimePurchaseLimit) => {
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
}, (arg0) => {
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
}, obj3);
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