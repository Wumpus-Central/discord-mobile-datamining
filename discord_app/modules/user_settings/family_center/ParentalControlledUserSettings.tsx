// discord_app/modules/user_settings/family_center/ParentalControlledUserSettings.tsx
import { ExplicitContentFilterTypes as closure_2 } from "items";
import { AllFriendSourceFlags } from "ME";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import { create } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { defineProperty } from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";

let obj = { comparator: null };
obj[0] = require("shallowEqual");
const result = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "explicitContentSettings", require("explicitContentFromProto").explicitContentFromProto, require("explicitContentFromProto").explicitContentToProto, obj);
const result1 = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (value != null) {
    NON_FRIENDS = value.value;
  }
  if (NON_FRIENDS == null) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
obj = { comparator: null };
obj[0] = require("shallowEqual");
const result2 = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "goreContentSettings", require("explicitContentFromProto").goreContentFromProto, require("explicitContentFromProto").goreContentToProto, obj);
const result3 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const result4 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultGuildsRestricted", (arg0) => {
  let flag = arg0;
  if (arg0 == null) {
    flag = false;
  }
  return flag;
}, (arg0) => arg0);
const result5 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const result6 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = AllFriendSourceFlags;
  }
  return value;
}, (value) => {
  const UInt32Value = defineProperty.UInt32Value;
  return UInt32Value.create({ value });
});
const result7 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "dropsOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const result8 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "quests3PDataOptedOut", (value) => {
  let flag;
  if (value != null) {
    flag = value.value;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}, (value) => {
  const BoolValue = defineProperty.BoolValue;
  return BoolValue.create({ value });
});
const result9 = defineParentalControlledSetting.defineParentalControlledSetting("safetySettings", "spendingLimitSettings", (oneTimePurchaseLimit) => {
  oneTimePurchaseLimit = undefined;
  if (oneTimePurchaseLimit != null) {
    oneTimePurchaseLimit = oneTimePurchaseLimit.oneTimePurchaseLimit;
  }
  let tmp2 = null;
  if (null != oneTimePurchaseLimit) {
    const obj = { amount: null, currency: null };
    const _Number = Number;
    obj[0] = Number(oneTimePurchaseLimit.amount);
    obj[1] = oneTimePurchaseLimit.currency;
    tmp2 = obj;
  }
  return tmp2;
}, (arg0) => {
  let amount;
  let currency;
  if (null == arg0) {
    const SpendingLimitSettings2 = create.SpendingLimitSettings;
    return SpendingLimitSettings2.create({});
  } else {
    ({ amount, currency } = arg0);
    const SpendingLimitSettings = create.SpendingLimitSettings;
    let obj = { oneTimePurchaseLimit: null };
    const SpendingLimit = create.SpendingLimit;
    obj = { amount: null, currency: null };
    const _String = String;
    obj[0] = String(amount);
    obj[1] = currency;
    obj[0] = SpendingLimit.create(obj);
    return SpendingLimitSettings.create(obj);
  }
}, { comparator: require("spendingLimitEqual").spendingLimitEqual });
const obj1 = { comparator: require("spendingLimitEqual").spendingLimitEqual };
const result10 = require("defineParentalControlledSetting").fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettings.tsx");

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