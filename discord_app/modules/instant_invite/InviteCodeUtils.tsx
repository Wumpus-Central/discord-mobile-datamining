// discord_app/modules/instant_invite/InviteCodeUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef1473 from "../../../_runtime/metro/01473__.js";
import QueryStringUtils from "../../utils/QueryStringUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
function readSnowflake(firstQueryStringValue) {
  let tmp;
  if (typeof firstQueryStringValue === "string") {
    if (obj.isProbablyAValidSnowflake(firstQueryStringValue)) {
      tmp = firstQueryStringValue;
    }
    obj = SnowflakeUtilsDefault;
  }
  return tmp;
}
function generateInviteKeyFromExtraData(arg0) {
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
  const json = _modDef1473.stringify(obj);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/InviteCodeUtils.tsx");

export { readSnowflake };
export const generateInviteKeyFromUrlParams = function generateInviteKeyFromUrlParams(match2, search) {
  if (null == search) {
    return match2;
  } else {
    let substr = search;
    if ("?" === search.charAt(0)) {
      substr = search.substring(1);
    }
    try {
      const parsed = _modDef1473.parse(substr);
      const firstQueryStringValue = QueryStringUtils.getFirstQueryStringValue(parsed[event]);
      const tmp12 = readSnowflake(QueryStringUtils.getFirstQueryStringValue(parsed[channel]));
      const obj4 = {
        baseCode: match2,
        guildScheduledEventId: firstQueryStringValue,
        targetChannelId: tmp12,
        targetMessageId: null,
      };
      let tmp10Result;
      if (null != tmp12) {
        tmp10Result = readSnowflake(QueryStringUtils.getFirstQueryStringValue(parsed[message]));
        const tmp6Result = QueryStringUtils;
      }
      obj4.targetMessageId = tmp10Result;
      return generateInviteKeyFromExtraData(obj4);
    } catch (err) {
      return tmp;
    }
  }
};
export { generateInviteKeyFromExtraData };
export const parseExtraDataFromInviteKey = function parseExtraDataFromInviteKey(inviteKey) {
  [tmp2, tmp3] = inviteKey.split("?");
  if (null == tmp3) {
    const obj2 = { baseCode: tmp2 };
    return obj2;
  } else {
    const parsed = _modDef1473.parse(tmp3);
    const firstQueryStringValue = QueryStringUtils.getFirstQueryStringValue(parsed[event]);
    const firstQueryStringValue1 = QueryStringUtils.getFirstQueryStringValue(parsed[channel]);
    let tmp4;
    if (typeof firstQueryStringValue1 === "string") {
      if (tmp9Result.isProbablyAValidSnowflake(firstQueryStringValue1)) {
        tmp4 = firstQueryStringValue1;
      }
      tmp9Result = SnowflakeUtilsDefault;
    }
    const obj = {
      baseCode: tmp2,
      guildScheduledEventId: firstQueryStringValue,
      targetChannelId: tmp4,
      targetMessageId: null,
    };
    let tmp5;
    if (null != tmp4) {
      const firstQueryStringValue2 = QueryStringUtils.getFirstQueryStringValue(parsed[message]);
      let tmp8;
      if (typeof firstQueryStringValue2 === "string") {
        if (tmp9Result2.isProbablyAValidSnowflake(firstQueryStringValue2)) {
          tmp8 = firstQueryStringValue2;
        }
        tmp9Result2 = SnowflakeUtilsDefault;
      }
      tmp5 = tmp8;
      const tmp12Result = QueryStringUtils;
    }
    obj.targetMessageId = tmp5;
    return obj;
  }
  const tmp = _slicedToArray(inviteKey.split("?"), 2);
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
