// === Module 6554: getSafetyToastTypeContent ===

// Module 6554 (getSafetyToastTypeContent)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2435 */;
import messagesProxyDefault2 from "messagesProxy" /* 2853 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { SafetyToastType } from "SafetyToastType" /* 5430 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, closure_0, c1) {
  user = user.getUser(closure_0);
  channel = channel.getChannel(c1);
  let obj = getNicknameDefault;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let name = obj.getName(guild_id, id, user);
  if (name == null) {
    name = nameFromUserDefault.getGlobalName(user);
    const tmp3Result = nameFromUserDefault;
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    return intl18.formatToPlainString(getSystemLocale.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    return intl17.formatToPlainString(getSystemLocale.t.THExKa, obj);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = getSystemLocale.intl;
    obj1 = { username: null };
    obj1[0] = name;
    return intl16.formatToPlainString(getSystemLocale.t.XXPrIs, obj1);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = getSystemLocale.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    return intl15.formatToPlainString(getSystemLocale.t.uExcGX, obj2);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = getSystemLocale.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    return intl14.formatToPlainString(getSystemLocale.t.X4NtYb, obj3);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = getSystemLocale.intl;
    const obj4 = { username: null };
    obj4[0] = name;
    return intl13.formatToPlainString(getSystemLocale.t.tRaBfY, obj4);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = getSystemLocale.intl;
    const obj5 = { username: null };
    obj5[0] = name;
    return intl12.formatToPlainString(getSystemLocale.t.FOptFU, obj5);
  } else if (SafetyToastType.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.c6kn6F);
  } else if (SafetyToastType.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(messagesProxyDefault2["9F2y52"]);
  } else if (SafetyToastType.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(messagesProxyDefault2["40UKek"]);
  } else if (SafetyToastType.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(messagesProxyDefault2.XBGt7g);
  } else if (SafetyToastType.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(messagesProxyDefault.iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["susqq/"]);
  } else if (SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(messagesProxyDefault2.vVwFCK);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+c5xtT"]);
  }
};