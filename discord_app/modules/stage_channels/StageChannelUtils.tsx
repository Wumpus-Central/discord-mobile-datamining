// === Module 8109: StageChannelUtils ===

// Module 8109 (StageChannelUtils)
import _mod12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5578 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8110 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import size from "module_2" /* 2 */;

let set;

const constants = StageChannelsConstants.RequestToSpeakPermissionStates;
const Permissions = Constants.Permissions;
const RowType = ChannelPermissionsConstants.RowType;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelUtils.tsx");

export const fillChunk = function fillChunk(arg0, arg1, arg2) {
  let tmp = arg2;
  const obj = _mod12;
  const chunkResult = obj.chunk(arg0, arg1);
  if (arg2 == null) {
    tmp = arg1;
  }
  let closure_0 = tmp;
  return chunkResult.reduce(function(acc, item) {
    if (closure_0 <= item.length) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, acc, 0)] = item;
      return items;
    } else {
      const items1 = [];
      const _Array = Array;
      const self = this;
      const self2 = this;
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, item, 0);
      const array = new Array(tmp2 - item.length);
      HermesBuiltin.arraySpread(items1, array.fill(null), arraySpreadResult);
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items2, acc, 0)] = items1;
      return items2;
    }
  }, []);
};
export const summarizeUsernamesParticipating = function summarizeUsernamesParticipating(arg0, arg1, arg2, arg3) {
  let tmp4;
  let length = arg3;
  const first = arg1[0];
  const obj = NicknameUtilsDefault;
  const name = obj.getName(arg0, arg2, first);
  if (arg3 == null) {
    length = arg1.length;
  }
  if (1 !== length) {
    let formatToPlainStringResult;
    if (null == first) {
      const intl2 = intl5.intl;
      const obj2 = { count: length };
      formatToPlainStringResult = intl2.formatToPlainString(intl5.t.chmM9N, obj2);
    } else {
      const intl = intl5.intl;
      const obj3 = { name, count: length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(intl5.t.GhkJ21, obj3);
    }
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = name;
  }
  return tmp4;
};
export const summarizeUsernamesParticipatingWithSpeakerNickname = function summarizeUsernamesParticipatingWithSpeakerNickname(arg0, name, arg2) {
  let tmp2;
  let length = arg2;
  if (arg2 == null) {
    length = arg0.length;
  }
  if (1 !== length) {
    let formatToPlainStringResult;
    if (null == name) {
      const intl2 = intl5.intl;
      const obj2 = { count: length };
      formatToPlainStringResult = intl2.formatToPlainString(intl5.t.chmM9N, obj2);
    } else {
      const intl = intl5.intl;
      const obj = { name, count: length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(intl5.t.GhkJ21, obj);
    }
    tmp2 = formatToPlainStringResult;
  } else {
    tmp2 = name;
  }
  return tmp2;
};
export const getRemoveModeratorTooltipHint = function getRemoveModeratorTooltipHint(arg0, arg1) {
  if (RowType.OWNER === arg0) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.eTmN5a);
  } else {
    let stringResult;
    if (RowType.MEMBER !== arg0) {
      if (RowType.ROLE !== arg0) {
        if (RowType.EMPTY_STATE === arg0) {
          return null;
        } else {
          return null;
        }
      }
    }
    const intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    if (arg1) {
      stringResult = string(t.Hw3XWx);
    } else {
      stringResult = string(t.YieyPi);
    }
    return stringResult;
  }
};
export const getStageChannelMetadata = function getStageChannelMetadata(channel_id) {
  let id;
  let obj2;
  let topic;
  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel_id.id);
  const obj = { channel_id: channel_id.id, guild_id: channel_id.guild_id, topic, media_session_id: RTCConnectionStore.getMediaSessionId(), request_to_speak_state: obj2.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, channel_id) ? constants.EVERYONE : constants.NO_ONE, stage_instance_id: id };
  topic = undefined;
  if (stageInstanceByChannel != null) {
    topic = stageInstanceByChannel.topic;
  }
  id = undefined;
  obj2 = PermissionUtilsAll;
  if (stageInstanceByChannel != null) {
    id = stageInstanceByChannel.id;
  }
  return obj;
};
export const getParticipantNamesText = function getParticipantNamesText(channel, found) {
  let first;
  let first1;
  let first2;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let stringResult;
  let tmp20;
  let tmp6;
  set = new Set();
  found = found.filter((user) => {
    const id = user.user.id;
    const hasItem = set.has(id);
    let flag = !hasItem;
    if (flag) {
      set.add(id);
      flag = true;
    }
    return flag;
  });
  if (0 === found.length) {
    const intl3 = intl5.intl;
    stringResult = intl3.string(intl5.t.FUVhyC);
  } else if (1 === found.length) {
    const intl2 = intl5.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj4 = { a: obj5.getName(channel.getGuildId(), channel.id, first.user) };
    const EQwZlN = intl5.t.EQwZlN;
    first = found[0];
    obj5 = NicknameUtilsDefault;
    stringResult = formatToPlainString2(EQwZlN, obj4);
  } else if (2 === found.length) {
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { a: obj2.getName(channel.getGuildId(), channel.id, first1.user), b: obj3.getName(channel.getGuildId(), channel.id, tmp6.user) };
    const zBcKoA = intl5.t.zBcKoA;
    first1 = found[0];
    obj2 = NicknameUtilsDefault;
    tmp6 = found[1];
    obj3 = NicknameUtilsDefault;
    stringResult = formatToPlainString(zBcKoA, obj);
  } else {
    const intl4 = intl5.intl;
    const formatToPlainString3 = intl4.formatToPlainString;
    const obj6 = { a: obj7.getName(channel.getGuildId(), channel.id, first2.user), b: obj8.getName(channel.getGuildId(), channel.id, tmp20.user), n: found.length - 2 };
    const v3AqFaG = intl5.t["3AqFaG"];
    first2 = found[0];
    obj7 = NicknameUtilsDefault;
    tmp20 = found[1];
    obj8 = NicknameUtilsDefault;
    stringResult = formatToPlainString3(v3AqFaG, obj6);
  }
  return stringResult;
};