// === Module 8298: FamilyCenterUtils ===

// Module 8298 (FamilyCenterUtils)
import intl5 from "intl" /* 1126 */;
import _modDef2493 from "module_2493" /* 2493 */;
import _modDef4461 from "module_4461" /* 4461 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7050 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import size from "module_2" /* 2 */;

let map;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f96952 = (link_status) => link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT;
({ ACTION_TO_TEXT: closure_4, FAMILY_CENTER_ERROR_CODE_TO_FAILURE: hasOwnProperty, FamilyCenterFailureCode: metroRequire, TeenActionDisplayType: metroImportDefault, UserLinkStatus: metroImportAll, UserLinkType: c9 } = FamilyCenterConstants);
let c10 = 86400;
let c11 = 172800;
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterUtils.tsx");

export const getEmptyActivityFormatter = function getEmptyActivityFormatter() {
  let intl;
  let intl2;
  const obj = { today: intl.string(_modDef2493.VjIAQQ), yesterday: intl2.string(_modDef2493["2a8xHY"]), days: _modDef2493.Xt6oND };
  intl = intl5.intl;
  intl2 = intl5.intl;
  return obj;
};
export const getActivityWindowTimestampFormatter = function getActivityWindowTimestampFormatter(arg0) {
  let tmp6;
  const obj = { today: null, yesterday: null, days: null };
  const intl = intl5.intl;
  const string = intl.string;
  const tmp4 = _modDef2493;
  const tmp5 = arg0;
  if (tmp5) {
    obj.today = string(tmp4["2AtcIs"]);
    const intl3 = intl5.intl;
    obj.yesterday = intl3.string(_modDef2493.stOECr);
    obj.days = _modDef2493.n8n5Ba;
    tmp6 = obj;
  } else {
    obj.today = string(tmp4.g1ZX6m);
    const intl2 = intl5.intl;
    obj.yesterday = intl2.string(_modDef2493.s3qSVt);
    obj.days = _modDef2493.f1UJiC;
    tmp6 = obj;
  }
  return tmp6;
};
export const formatUserActivityTimestamp = function formatUserActivityTimestamp(time, timestampFormatter, arg2) {
  let yesterday;
  const obj = _modDef4461();
  const diffResult = obj.diff(_modDef4461(time), "s");
  const tmp3 = timestampFormatter();
  const obj2 = _modDef4461(time);
  obj2.format("LL");
  if (diffResult < c10) {
    yesterday = tmp3.today;
  } else if (diffResult < c11) {
    yesterday = tmp3.yesterday;
  } else {
    let num = arg2;
    const intl = intl5.intl;
    const _Math2 = Math;
    const formatToPlainString = intl.formatToPlainString;
    const days = tmp3.days;
    const _Math = Math;
    const rounded = Math.floor(diffResult / tmp5);
    if (arg2 == null) {
      num = 999;
    }
    const obj3 = { days: min(rounded, num) };
    yesterday = formatToPlainString(days, obj3);
  }
  return yesterday;
};
export const formatLinkTimestamp = function formatLinkTimestamp(arg0, SENT_TIMESTAMP_FORMATTER) {
  let yesterday;
  const obj = _modDef4461();
  const diffResult = obj.diff(_modDef4461(arg0), "s");
  const time = SENT_TIMESTAMP_FORMATTER();
  _modDef4461(arg0);
  if (diffResult < 60) {
    yesterday = time.seconds;
  } else if (diffResult < 3600) {
    const intl4 = intl5.intl;
    const _Math3 = Math;
    const formatToPlainString3 = intl4.formatToPlainString;
    const minutes = time.minutes;
    const obj2 = { count: Math.floor(diffResult / 60) };
    yesterday = formatToPlainString3(minutes, obj2);
  } else if (diffResult < c10) {
    const intl3 = intl5.intl;
    const _Math2 = Math;
    const formatToPlainString2 = intl3.formatToPlainString;
    const hours = time.hours;
    const obj3 = { count: Math.floor(diffResult / 3600) };
    yesterday = formatToPlainString2(hours, obj3);
  } else if (diffResult < c11) {
    yesterday = time.yesterday;
  } else if (diffResult < 604800) {
    const intl2 = intl5.intl;
    const _Math = Math;
    const formatToPlainString = intl2.formatToPlainString;
    const days = time.days;
    const obj4 = { count: Math.floor(diffResult / tmp12) };
    yesterday = formatToPlainString(days, obj4);
  } else {
    const intl = intl5.intl;
    const obj5 = { date: tmp4 };
    yesterday = intl.formatToPlainString(time.date, obj5);
  }
  return yesterday;
};
export const isUserAction = function isUserAction(action) {
  return action.display_type === metroImportDefault.USER_ADD || action.display_type === metroImportDefault.USER_INTERACTION || action.display_type === metroImportDefault.USER_CALLED;
};
export const isGuildAction = function isGuildAction(action) {
  return action.display_type === metroImportDefault.GUILD_ADD || action.display_type === tmp.GUILD_INTERACTION;
};
export const isPurchase = function isPurchase(action) {
  return action.display_type === metroImportDefault.PURCHASES;
};
export const isGift = function isGift(action) {
  return action.display_type === metroImportDefault.GIFTS;
};
export const getFailureCodeForAPIError = function getFailureCodeForAPIError(arg0) {
  let GENERIC_ERROR = hasOwnProperty[arg0.code];
  if (GENERIC_ERROR == null) {
    GENERIC_ERROR = metroRequire.GENERIC_ERROR;
  }
  return GENERIC_ERROR;
};
export const getSortedActivityTypeConfigs = function getSortedActivityTypeConfigs() {
  let items;
  map = new Map(React3);
  if (0 === map.size) {
    items = [];
  } else {
    const _Array = Array;
    const arr = Array.from(map.entries());
    items = arr.sort((arg0, arg1) => arg0[1].priority - arg1[1].priority);
  }
  return items;
};
export const getActivityTypeTextConfigs = function getActivityTypeTextConfigs() {
  map = new Map(React3);
  return map;
};
export const formatTotalTime = function formatTotalTime(arg0) {
  let combined;
  const rounded = Math.floor(arg0 / 60);
  const result = arg0 % 60;
  if (rounded > 0) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + rounded + "h " + result + "m";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + result + "m";
  }
  return combined;
};
export const getOrFetchLinkedUsers = function getOrFetchLinkedUsers() {
  if (FamilyCenterStore.getAreLinkedUsersProcessed()) {
    return FamilyCenterStore.getLinkedUsers();
  } else {
    const obj2 = FamilyCenterActionCreatorsDefault;
    const linkedUsers = obj2.fetchLinkedUsers();
  }
};
export const hasActiveParentLinks = function hasActiveParentLinks() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  return values.some(f96952);
};
export const isParentallyControlled = function isParentallyControlled() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  return values.some(f96952);
};
export const getTopUserOrGuildDescription = function getTopUserOrGuildDescription(dms_sent, call_count) {
  let formatToPlainStringResult;
  if (call_count > 0) {
    if (0 === dms_sent) {
      const intl3 = intl5.intl;
      const obj2 = { callCount: call_count };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef2493["L/Cj7S"], obj2);
    }
    return formatToPlainStringResult;
  }
  if (dms_sent > 0) {
    if (0 === call_count) {
      const intl2 = intl5.intl;
      const obj3 = { messageCount: dms_sent };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef2493["6X1F0i"], obj3);
    }
  }
  const intl = intl5.intl;
  const obj = { messageCount: dms_sent, callCount: call_count };
  formatToPlainStringResult = intl.formatToPlainString(_modDef2493.IYqGMG, obj);
};