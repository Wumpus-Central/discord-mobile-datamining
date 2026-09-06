// === Module 8405: SafetyToastsUtils ===

// Module 8405 (SafetyToastsUtils)
import util from "util" /* 1114 */;
import _modDef2528 from "module_2528" /* 2528 */;
import _modDef2946 from "module_2946" /* 2946 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SafetyToastType = fn(8399).SafetyToastType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, id, channelId) {
  const user = UserStore.getUser(id);
  const channel = ChannelStore.getChannel(channelId);
  let obj = NicknameUtilsDefault;
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  let name = obj.getName(guild_id, id, user);
  if (name == null) {
    name = UserUtilsDefault.getGlobalName(user);
    const tmp3Result = UserUtilsDefault;
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = util.intl;
    obj = { username: name };
    return intl18.formatToPlainString(util.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = util.intl;
    obj = { username: name };
    return intl17.formatToPlainString(util.t.THExKa, obj);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = util.intl;
    const obj1 = { username: name };
    return intl16.formatToPlainString(util.t.XXPrIs, obj1);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = util.intl;
    const obj2 = { username: name };
    return intl15.formatToPlainString(util.t.uExcGX, obj2);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = util.intl;
    const obj3 = { username: name };
    return intl14.formatToPlainString(util.t.X4NtYb, obj3);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = util.intl;
    const obj4 = { username: name };
    return intl13.formatToPlainString(util.t.tRaBfY, obj4);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = util.intl;
    const obj5 = { username: name };
    return intl12.formatToPlainString(util.t.FOptFU, obj5);
  } else if (SafetyToastType.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl11 = util.intl;
    return intl11.string(util.t.c6kn6F);
  } else if (SafetyToastType.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl10 = util.intl;
    return intl10.string(_modDef2946["9F2y52"]);
  } else if (SafetyToastType.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl9 = util.intl;
    return intl9.string(_modDef2946["40UKek"]);
  } else if (SafetyToastType.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl8 = util.intl;
    return intl8.string(_modDef2946.XBGt7g);
  } else if (SafetyToastType.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl7 = util.intl;
    return intl7.string(util.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl6 = util.intl;
    return intl6.string(util.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = util.intl;
    return intl5.string(_modDef2528.iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = util.intl;
    return intl4.string(util.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = util.intl;
    return intl3.string(util.t["susqq/"]);
  } else if (SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl2 = util.intl;
    return intl2.string(_modDef2946.vVwFCK);
  } else {
    const intl = util.intl;
    return intl.string(util.t["+c5xtT"]);
  }
};