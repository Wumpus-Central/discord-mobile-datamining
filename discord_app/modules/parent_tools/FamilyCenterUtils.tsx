// === Module 7593: FamilyCenterUtils ===

// Module 7593 (FamilyCenterUtils)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import _modDef4153 from "module_4153" /* 4153 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const FamilyCenterConstants = fn(7538);
({ ACTION_TO_TEXT: closure_4, FAMILY_CENTER_ERROR_CODE_TO_FAILURE: hasOwnProperty, FamilyCenterFailureCode: metroRequire, TeenActionDisplayType: closure_7, UserLinkStatus: closure_8, UserLinkType: closure_9 } = FamilyCenterConstants);
let c10 = 86400;
let c11 = 172800;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterUtils.tsx");

export const getEmptyActivityFormatter = function getEmptyActivityFormatter() {
  const obj = { today: null, yesterday: null, days: null };
  const intl = util.intl;
  obj.today = intl.string(_modDef2396.VjIAQQ);
  const intl2 = util.intl;
  obj.yesterday = intl2.string(_modDef2396["2a8xHY"]);
  obj.days = _modDef2396.Xt6oND;
  return obj;
};
export const getActivityWindowTimestampFormatter = function getActivityWindowTimestampFormatter(arg0) {
  const obj = { today: null, yesterday: null, days: null };
  const intl = util.intl;
  const string = intl.string;
  const tmp4 = _modDef2396;
  if (arg0) {
    obj.today = string(tmp4["2AtcIs"]);
    const intl3 = util.intl;
    obj.yesterday = intl3.string(_modDef2396.stOECr);
    obj.days = _modDef2396.n8n5Ba;
    let tmp5 = obj;
  } else {
    obj.today = string(tmp4.g1ZX6m);
    const intl2 = util.intl;
    obj.yesterday = intl2.string(_modDef2396.s3qSVt);
    obj.days = _modDef2396.f1UJiC;
    tmp5 = obj;
  }
  return tmp5;
};
export const formatUserActivityTimestamp = function formatUserActivityTimestamp(time, timestampFormatter, arg2) {
  let obj = _modDef4153();
  const diffResult = obj.diff(_modDef4153(time), "s");
  const tmp3 = timestampFormatter();
  _modDef4153(time).format("LL");
  if (diffResult < c10) {
    let yesterday = tmp3.today;
  } else if (diffResult < c11) {
    yesterday = tmp3.yesterday;
  } else {
    let num = arg2;
    const intl = util.intl;
    const _Math = Math;
    const rounded = Math.floor(diffResult / tmp5);
    if (arg2 == null) {
      num = 999;
    }
    obj = { days: Math.min(rounded, num) };
    yesterday = intl.formatToPlainString(tmp3.days, obj);
  }
  return yesterday;
};
export const formatLinkTimestamp = function formatLinkTimestamp(arg0, SENT_TIMESTAMP_FORMATTER) {
  let obj = _modDef4153();
  const diffResult = obj.diff(_modDef4153(arg0), "s");
  const time = SENT_TIMESTAMP_FORMATTER();
  _modDef4153(arg0);
  if (diffResult < 60) {
    let yesterday = time.seconds;
  } else if (diffResult < 3600) {
    const intl4 = util.intl;
    obj = { count: null };
    const _Math3 = Math;
    obj.count = Math.floor(diffResult / 60);
    yesterday = intl4.formatToPlainString(time.minutes, obj);
  } else if (diffResult < c10) {
    const intl3 = util.intl;
    obj = { count: null };
    const _Math2 = Math;
    obj.count = Math.floor(diffResult / 3600);
    yesterday = intl3.formatToPlainString(time.hours, obj);
  } else if (diffResult < c11) {
    yesterday = time.yesterday;
  } else if (diffResult < 604800) {
    const intl2 = util.intl;
    const obj1 = { count: null };
    const _Math = Math;
    obj1.count = Math.floor(diffResult / tmp12);
    yesterday = intl2.formatToPlainString(time.days, obj1);
  } else {
    const intl = util.intl;
    const obj2 = { date: tmp4 };
    yesterday = intl.formatToPlainString(time.date, obj2);
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
  const values = Object.values(constants2);
  for (const item10011 of values) {
    if (item10011.toString() === arg0) {
      obj.return();
      return item10011;
    }
  }
};
export const getFailureCodeForAPIError = function getFailureCodeForAPIError(arg0) {
  let GENERIC_ERROR = hasOwnProperty[arg0.code];
  if (GENERIC_ERROR == null) {
    GENERIC_ERROR = constants.GENERIC_ERROR;
  }
  return GENERIC_ERROR;
};
export const getSortedActivityTypeConfigs = function getSortedActivityTypeConfigs() {
  const map = new Map(React4);
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
  return new Map(React4);
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
  if (FamilyCenterStore.getAreLinkedUsersProcessed()) {
    return FamilyCenterStore.getLinkedUsers();
  } else {
    const linkedUsers = FamilyCenterActionCreatorsDefault.fetchLinkedUsers();
  }
};
export const hasActiveParentLinks = function hasActiveParentLinks() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  return values.some((link_status) => {
    let tmp = link_status.link_status === constants.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === constants2.PARENT;
    }
    return tmp;
  });
};
export const isParentallyControlled = function isParentallyControlled() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
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
      const intl3 = util.intl;
      let obj = { callCount: call_count };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef2396["L/Cj7S"], obj);
    }
    return formatToPlainStringResult;
  }
  if (dms_sent > 0) {
    if (0 === call_count) {
      const intl2 = util.intl;
      obj = { messageCount: dms_sent };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef2396["6X1F0i"], obj);
    }
  }
  const intl = util.intl;
  obj = { messageCount: dms_sent, callCount: call_count };
  formatToPlainStringResult = intl.formatToPlainString(_modDef2396.IYqGMG, obj);
};