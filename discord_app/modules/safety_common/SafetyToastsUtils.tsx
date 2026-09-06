// discord_app/modules/safety_common/SafetyToastsUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import { SafetyToastType } from "Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

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
    name = tmp3(4404).getGlobalName(user);
    const tmp3Result = tmp3(4404);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    return intl18.formatToPlainString(getSystemLocale.t["+joqrP"], obj);
  } else if (tmp8.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = name;
    return intl17.formatToPlainString(getSystemLocale.t.THExKa, obj);
  } else if (tmp8.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = getSystemLocale.intl;
    obj1 = { username: null };
    obj1[0] = name;
    return intl16.formatToPlainString(getSystemLocale.t.XXPrIs, obj1);
  } else if (tmp8.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = getSystemLocale.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    return intl15.formatToPlainString(getSystemLocale.t.uExcGX, obj2);
  } else if (tmp8.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = getSystemLocale.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    return intl14.formatToPlainString(getSystemLocale.t.X4NtYb, obj3);
  } else if (tmp8.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = getSystemLocale.intl;
    const obj4 = { username: null };
    obj4[0] = name;
    return intl13.formatToPlainString(getSystemLocale.t.tRaBfY, obj4);
  } else if (tmp8.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = getSystemLocale.intl;
    const obj5 = { username: null };
    obj5[0] = name;
    return intl12.formatToPlainString(getSystemLocale.t.FOptFU, obj5);
  } else if (tmp8.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.c6kn6F);
  } else if (tmp8.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(tmp3(2946)["9F2y52"]);
  } else if (tmp8.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(tmp3(2946)["40UKek"]);
  } else if (tmp8.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(tmp3(2946).XBGt7g);
  } else if (tmp8.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["7nKAXx"]);
  } else if (tmp8.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.zBpoc7);
  } else if (tmp8.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(tmp3(2528).iBypeZ);
  } else if (tmp8.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.TcFR5k);
  } else if (tmp8.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["susqq/"]);
  } else if (tmp8.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(tmp3(2946).vVwFCK);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+c5xtT"]);
  }
};
