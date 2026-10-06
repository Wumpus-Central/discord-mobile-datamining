// === Module 4878: InviteCodeUtils ===

// Module 4878 (InviteCodeUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef1478 from "module_1478" /* 1478 */;
import QueryStringUtils from "QueryStringUtils" /* 4879 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function readSnowflake(firstQueryStringValue) {
  let tmp;
  if (typeof firstQueryStringValue === "string") {
    const obj = SnowflakeUtilsDefault;
    if (obj.isProbablyAValidSnowflake(firstQueryStringValue)) {
      tmp = firstQueryStringValue;
    }
  }
  return tmp;
}
function generateInviteKeyFromExtraData(arg0) {
  let baseCode;
  let guildScheduledEventId;
  let targetChannelId;
  let targetMessageId;
  ({ baseCode, guildScheduledEventId, targetChannelId, targetMessageId } = arg0);
  const obj = {};
  if (null != guildScheduledEventId) {
    obj[event] = guildScheduledEventId;
  }
  if (null != targetChannelId) {
    obj[channel] = targetChannelId;
    if (null != targetMessageId) {
      obj[message] = targetMessageId;
    }
  }
  const obj2 = _modDef1478;
  const json = obj2.stringify(obj);
  let combined = baseCode;
  if ("" !== json) {
    const _HermesInternal = HermesInternal;
    combined = "" + baseCode + "?" + json;
  }
  return combined;
}
const event = "event";
const channel = "channel";
const message = "message";
const result = size.fileFinishedImporting("modules/instant_invite/InviteCodeUtils.tsx");

export { readSnowflake };
export const generateInviteKeyFromUrlParams = function generateInviteKeyFromUrlParams(match2, search) {
  let tmp9Result;
  if (null == search) {
    return match2;
  } else {
    let substr = search;
    if ("?" === search.charAt(0)) {
      substr = search.substring(1);
    }
    try {
      const obj = _modDef1478;
      const parsed = obj.parse(substr);
      const obj2 = QueryStringUtils;
      const firstQueryStringValue = obj2.getFirstQueryStringValue(parsed[event]);
      const obj3 = QueryStringUtils;
      const tmp11 = readSnowflake(obj3.getFirstQueryStringValue(parsed[channel]));
      const obj4 = { baseCode: match2, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp11, targetMessageId: tmp9Result };
      tmp9Result = undefined;
      if (null != tmp11) {
        const tmp5Result = QueryStringUtils;
        tmp9Result = readSnowflake(tmp5Result.getFirstQueryStringValue(parsed[message]));
      }
      return generateInviteKeyFromExtraData(obj4);
    } catch (err) {
      return match2;
    }
  }
};
export { generateInviteKeyFromExtraData };
export const parseExtraDataFromInviteKey = function parseExtraDataFromInviteKey(inviteKey) {
  let tmp2;
  let tmp3;
  let tmp5;
  [tmp2, tmp3] = inviteKey.split("?");
  _slicedToArray(inviteKey.split("?"), 2);
  if (null == tmp3) {
    return { baseCode: tmp2 };
  } else {
    const obj4 = _modDef1478;
    const parsed = obj4.parse(tmp3);
    const obj5 = QueryStringUtils;
    const firstQueryStringValue = obj5.getFirstQueryStringValue(parsed[event]);
    const obj6 = QueryStringUtils;
    const firstQueryStringValue1 = obj6.getFirstQueryStringValue(parsed[channel]);
    let tmp4;
    if (typeof firstQueryStringValue1 === "string") {
      const tmp9Result = SnowflakeUtilsDefault;
      if (tmp9Result.isProbablyAValidSnowflake(firstQueryStringValue1)) {
        tmp4 = firstQueryStringValue1;
      }
    }
    const obj = { baseCode: tmp2, guildScheduledEventId: firstQueryStringValue, targetChannelId: tmp4, targetMessageId: tmp5 };
    tmp5 = undefined;
    if (null != tmp4) {
      const tmp12Result = QueryStringUtils;
      const firstQueryStringValue2 = tmp12Result.getFirstQueryStringValue(parsed[message]);
      let tmp8;
      if (typeof firstQueryStringValue2 === "string") {
        const tmp9Result2 = SnowflakeUtilsDefault;
        if (tmp9Result2.isProbablyAValidSnowflake(firstQueryStringValue2)) {
          tmp8 = firstQueryStringValue2;
        }
      }
      tmp5 = tmp8;
    }
    return obj;
  }
};
export const parseInviteCodeFromInviteKey = function parseInviteCodeFromInviteKey(code) {
  return _slicedToArray(code.split("?"), 1)[0];
};
export const getInviteKeySearchSuffix = function getInviteKeySearchSuffix(inviteKeyFromExtraData) {
  const index = inviteKeyFromExtraData.indexOf("?");
  let str = "";
  if (index >= 0) {
    str = inviteKeyFromExtraData.substring(index);
  }
  return str;
};
export const getInviteInstanceId = function getInviteInstanceId(code, id) {
  if (null != id) {
    const _HermesInternal = HermesInternal;
    return "" + id + ":" + _slicedToArray(code.split("?"), 1)[0];
  }
};