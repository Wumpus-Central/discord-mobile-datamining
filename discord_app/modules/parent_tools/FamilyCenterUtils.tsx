import { t } from "../../../_runtime/03867_t.js";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { messagesProxy } from "FamilyCenter.messages.js";
import { maybeFetchCollectiblesForInvoices } from "FamilyCenterActionCreators.tsx";
// discord_app/modules/parent_tools/FamilyCenterUtils.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import items from "items";

let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ ACTION_TO_TEXT: c4, FAMILY_CENTER_ERROR_CODE_TO_FAILURE: c5, FamilyCenterFailureCode: closure_6, TeenActionDisplayType: error, UserLinkStatus: metroImportAll, UserLinkType: c9 } = items);
let c10 = 86400;
let c11 = 172800;
let result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/FamilyCenterUtils.tsx");

export const getEmptyActivityFormatter = function getEmptyActivityFormatter() {
  const obj = { today: null, yesterday: null, days: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(messagesProxy.VjIAQQ);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(messagesProxy["2a8xHY"]);
  obj[2] = messagesProxy.Xt6oND;
  return obj;
};
export const getActivityWindowTimestampFormatter = function getActivityWindowTimestampFormatter(arg0) {
  const obj = { today: null, yesterday: null, days: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const string = intl.string;
  const tmp4 = messagesProxy;
  if (arg0) {
    obj[0] = string(tmp4["2AtcIs"]);
    const intl3 = tmp(1236).intl;
    obj[1] = intl3.string(tmp3(2285).stOECr);
    obj[2] = tmp3(2285).n8n5Ba;
    let tmp5 = obj;
  } else {
    obj[0] = string(tmp4.g1ZX6m);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp3(2285).s3qSVt);
    obj[2] = tmp3(2285).f1UJiC;
    tmp5 = obj;
  }
  return tmp5;
};
export const formatUserActivityTimestamp = function formatUserActivityTimestamp(time, timestampFormatter, arg2) {
  let obj = t();
  const diffResult = obj.diff(t(time), "s");
  const tmp3 = timestampFormatter();
  t(time).format("LL");
  if (diffResult < c10) {
    let yesterday = tmp3.today;
  } else if (diffResult < c11) {
    yesterday = tmp3.yesterday;
  } else {
    let num = arg2;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const _Math = Math;
    const rounded = Math.floor(diffResult / tmp5);
    if (arg2 == null) {
      num = 999;
    }
    obj = { days: null };
    obj[0] = Math.min(rounded, num);
    yesterday = intl.formatToPlainString(tmp3.days, obj);
  }
  return yesterday;
};
export const formatLinkTimestamp = function formatLinkTimestamp(arg0, SENT_TIMESTAMP_FORMATTER) {
  let obj = t();
  const diffResult = obj.diff(t(arg0), "s");
  const tmp3 = SENT_TIMESTAMP_FORMATTER();
  t(arg0);
  if (diffResult < 60) {
    let yesterday = tmp3.seconds;
  } else if (diffResult < 3600) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    obj = { count: null };
    const _Math3 = Math;
    obj[0] = Math.floor(diffResult / 60);
    yesterday = intl4.formatToPlainString(tmp3.minutes, obj);
  } else if (diffResult < c10) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj = { count: null };
    const _Math2 = Math;
    obj[0] = Math.floor(diffResult / 3600);
    yesterday = intl3.formatToPlainString(tmp3.hours, obj);
  } else if (diffResult < c11) {
    yesterday = tmp3.yesterday;
  } else if (diffResult < 604800) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const obj1 = { count: null };
    const _Math = Math;
    obj1[0] = Math.floor(diffResult / tmp13);
    yesterday = intl2.formatToPlainString(tmp3.days, obj1);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const obj2 = { date: null };
    obj2[0] = tmp5;
    yesterday = intl.formatToPlainString(tmp3.date, obj2);
  }
  return yesterday;
};
export const isUserAction = function isUserAction(action) {
  return action.display_type === constants2.USER_ADD || action.display_type === constants2.USER_INTERACTION || action.display_type === constants2.USER_CALLED;
};
export const isGuildAction = function isGuildAction(action) {
  return action.display_type === constants2.GUILD_ADD || action.display_type === tmp.GUILD_INTERACTION;
};
export const isPurchase = function isPurchase(action) {
  return action.display_type === constants2.PURCHASES;
};
export const isGift = function isGift(action) {
  return action.display_type === constants2.GIFTS;
};
export const displayTypeFromString = function displayTypeFromString(arg0) {
  const values = Object.values(closure_7);
  for (const item10011 of values) {
    let tmp2 = item10011;
    if (item10011.toString() === arg0) {
      let tmp3 = obj;
      obj.return();
      return item10011;
    }
  }
};
export const getFailureCodeForAPIError = function getFailureCodeForAPIError(arg0) {
  let GENERIC_ERROR = table[arg0.code];
  if (GENERIC_ERROR == null) {
    GENERIC_ERROR = constants.GENERIC_ERROR;
  }
  return GENERIC_ERROR;
};
export const getSortedActivityTypeConfigs = function getSortedActivityTypeConfigs() {
  const map = new Map(closure_4);
  if (0 === map.size) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(map.entries()).sort((arg0, arg1) => arg0[1].priority - arg1[1].priority);
    const arr = Array.from(map.entries());
  }
  return items;
};
export const getActivityTypeTextConfigs = function getActivityTypeTextConfigs() {
  return new Map(closure_4);
};
export const formatTotalTime = function formatTotalTime(arg0) {
  const rounded = Math.floor(arg0 / 60);
  const result = arg0 % 60;
  if (rounded > 0) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + rounded + "h " + result + "m";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + result + "m";
  }
  return combined;
};
export const getOrFetchLinkedUsers = function getOrFetchLinkedUsers() {
  if (authStore.getAreLinkedUsersProcessed()) {
    return obj.getLinkedUsers();
  } else {
    const linkedUsers = maybeFetchCollectiblesForInvoices.fetchLinkedUsers();
  }
  obj = authStore;
};
export const hasActiveParentLinks = function hasActiveParentLinks() {
  const values = Object.values(authStore.getLinkedUsers());
  return values.some((link_status) => {
    let tmp = link_status.link_status === constants.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === constants2.PARENT;
    }
    return tmp;
  });
};
export const isParentallyControlled = function isParentallyControlled() {
  const values = Object.values(authStore.getLinkedUsers());
  return values.some((link_status) => {
    let tmp = link_status.link_status === constants.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === constants2.PARENT;
    }
    return tmp;
  });
};
export const getTopUserOrGuildDescription = function getTopUserOrGuildDescription(dms_sent, call_count) {
  if (call_count > 0) {
    if (0 === dms_sent) {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      let obj = { callCount: null };
      obj[0] = call_count;
      let formatToPlainStringResult = intl3.formatToPlainString(messagesProxy["L/Cj7S"], obj);
    }
    return formatToPlainStringResult;
  }
  if (dms_sent > 0) {
    if (0 === call_count) {
      const intl2 = getSystemLocale /* getSystemLocale */.intl;
      obj = { messageCount: null };
      obj[0] = dms_sent;
      formatToPlainStringResult = intl2.formatToPlainString(messagesProxy["6X1F0i"], obj);
    }
  }
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = { messageCount: dms_sent, callCount: call_count };
  formatToPlainStringResult = intl.formatToPlainString(messagesProxy.IYqGMG, obj);
};