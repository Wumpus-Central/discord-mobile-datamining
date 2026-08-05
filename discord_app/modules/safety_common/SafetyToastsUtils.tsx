// discord_app/modules/safety_common/SafetyToastsUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
const result = require("SafetyToastType").fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, closure_0, c1) {
  user = user.getUser(closure_0);
  channel = channel.getChannel(c1);
  let obj = require("../../utils/NicknameUtils.tsx");
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
    name = tmp3(4124).getGlobalName(user);
    const tmp3Result = tmp3(4124);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { username: null };
    obj[0] = name;
    return intl14.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["+joqrP"], obj);
  } else if (tmp8.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { username: null };
    obj[0] = name;
    return intl13.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.THExKa, obj);
  } else if (tmp8.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj1 = { username: null };
    obj1[0] = name;
    return intl12.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.XXPrIs, obj1);
  } else if (tmp8.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl11 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    return intl11.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.uExcGX, obj2);
  } else if (tmp8.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl10 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    return intl10.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.X4NtYb, obj3);
  } else if (tmp8.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl9 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj4 = { username: null };
    obj4[0] = name;
    return intl9.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.tRaBfY, obj4);
  } else if (tmp8.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl8 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj5 = { username: null };
    obj5[0] = name;
    return intl8.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.FOptFU, obj5);
  } else if (tmp8.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl7 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl7.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.c6kn6F);
  } else if (tmp8.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl6 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl6.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["7nKAXx"]);
  } else if (tmp8.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl5 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl5.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.zBpoc7);
  } else if (tmp8.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl4.string(tmp3(2385).iBypeZ);
  } else if (tmp8.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.TcFR5k);
  } else if (tmp8.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["susqq/"]);
  } else {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["+c5xtT"]);
  }
};