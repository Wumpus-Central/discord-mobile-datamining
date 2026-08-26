// discord_app/modules/instant_invite/InviteCodeUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import parseDefault from "../../../_runtime/01484_parse.js";
import getFirstQueryStringValue from "../../utils/QueryStringUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";

require = arg1;
function readSnowflake(firstQueryStringValue) {
  let tmp;
  if (typeof firstQueryStringValue === "string") {
    if (obj.isProbablyAValidSnowflake(firstQueryStringValue)) {
      tmp = firstQueryStringValue;
    }
    obj = DISCORD_EPOCHDefault;
  }
  return tmp;
}
function generateInviteKeyFromExtraData(closure_1) {
  ({ baseCode, guildScheduledEventId, targetChannelId, targetMessageId } = closure_1);
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
  const json = parseDefault.stringify(obj);
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
const result = require("set").fileFinishedImporting("modules/instant_invite/InviteCodeUtils.tsx");

export { readSnowflake };
export const generateInviteKeyFromUrlParams = function generateInviteKeyFromUrlParams(inviteHostRemainingPath, search) {
  if (null == search) {
    return inviteHostRemainingPath;
  } else {
    let substr = search;
    if ("?" === search.charAt(0)) {
      substr = search.substring(1);
    }
    try {
      let obj = parseDefault;
      const parsed = obj.parse(substr);
      const firstQueryStringValue = getFirstQueryStringValue.getFirstQueryStringValue(parsed[event]);
      const obj2 = getFirstQueryStringValue;
      const tmp10 = readSnowflake;
      const tmp6 = require;
      const tmp12 = readSnowflake(getFirstQueryStringValue.getFirstQueryStringValue(parsed[channel]));
      obj = { baseCode: null, guildScheduledEventId: null, targetChannelId: null, targetMessageId: null };
      obj[0] = inviteHostRemainingPath;
      obj[1] = firstQueryStringValue;
      obj[2] = tmp12;
      let tmp10Result;
      if (null != tmp12) {
        tmp10Result = tmp10(tmp6(4430).getFirstQueryStringValue(parsed[message]));
        const tmp6Result = tmp6(4430);
      }
      obj[3] = tmp10Result;
      return generateInviteKeyFromExtraData(obj);
    } catch (err) {
      return tmp;
    }
  }
};
export { generateInviteKeyFromExtraData };
export const parseExtraDataFromInviteKey = function parseExtraDataFromInviteKey(inviteKey) {
  [tmp2, tmp3] = callback(inviteKey.split("?"), 2);
  if (null == tmp3) {
    let obj = { baseCode: null };
    obj[0] = tmp2;
    return obj;
  } else {
    const parsed = parseDefault.parse(tmp3);
    const obj4 = parseDefault;
    const tmp12 = require;
    const firstQueryStringValue = getFirstQueryStringValue.getFirstQueryStringValue(parsed[event]);
    const obj5 = getFirstQueryStringValue;
    const firstQueryStringValue1 = getFirstQueryStringValue.getFirstQueryStringValue(parsed[channel]);
    let tmp4;
    if (typeof firstQueryStringValue1 === "string") {
      let tmp9Result = tmp9(11);
      if (tmp9Result.isProbablyAValidSnowflake(firstQueryStringValue1)) {
        tmp4 = firstQueryStringValue1;
      }
    }
    obj = { baseCode: null, guildScheduledEventId: null, targetChannelId: null, targetMessageId: null };
    obj[0] = tmp2;
    obj[1] = firstQueryStringValue;
    obj[2] = tmp4;
    let tmp5;
    if (null != tmp4) {
      const firstQueryStringValue2 = tmp12(4430).getFirstQueryStringValue(parsed[message]);
      let tmp8;
      if (typeof firstQueryStringValue2 === "string") {
        tmp9Result = tmp9(11);
        if (tmp9Result.isProbablyAValidSnowflake(firstQueryStringValue2)) {
          tmp8 = firstQueryStringValue2;
        }
      }
      tmp5 = tmp8;
      const tmp12Result = tmp12(4430);
    }
    obj[3] = tmp5;
    return obj;
  }
  const tmp = callback(inviteKey.split("?"), 2);
};
export const parseInviteCodeFromInviteKey = function parseInviteCodeFromInviteKey(code) {
  return callback(code.split("?"), 1)[0];
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
    return "" + id + ":" + callback(code.split("?"), 1)[0];
  }
};