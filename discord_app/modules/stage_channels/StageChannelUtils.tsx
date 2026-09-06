// === Module 8400: StageChannelUtils ===

// Module 8400 (StageChannelUtils)
import _mod12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

require = fn;
const constants = fn(5414).RequestToSpeakPermissionStates;
const Permissions = fn(1074).Permissions;
const RowType = fn(8401).RowType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelUtils.tsx");

export const fillChunk = function fillChunk(arg0, arg1, arg2) {
  let tmp = arg2;
  if (arg2 == null) {
    tmp = arg1;
  }
  closure_0 = tmp;
  return _mod12.chunk(arg0, arg1).reduce((acc, item) => {
    if (closure_0 <= item.length) {
      const items = [];
      items[HermesBuiltin.arraySpread(acc, 0)] = item;
      return items;
    } else {
      const items1 = [];
      const _Array = Array;
      let arraySpreadResult = HermesBuiltin.arraySpread(item, 0);
      const array = new Array(tmp - item.length);
      arraySpreadResult = HermesBuiltin.arraySpread(array.fill(null), arraySpreadResult);
      const items2 = [];
      items2[HermesBuiltin.arraySpread(acc, 0)] = items1;
      return items2;
    }
  }, []);
};
export const summarizeUsernamesParticipating = function summarizeUsernamesParticipating(arg0, arg1, arg2, arg3) {
  let length = arg3;
  const first = arg1[0];
  let obj = dependencyMap;
  const name = NicknameUtilsDefault.getName(arg0, arg2, first);
  if (arg3 == null) {
    length = arg1.length;
  }
  if (1 === length) {
    if (null != first) {
      return name;
    }
  }
  if (null == first) {
    const intl2 = util.intl;
    obj = { count: length };
    intl2.formatToPlainString(util.t.chmM9N, obj);
  } else {
    const intl = util.intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(util.t.GhkJ21, obj);
  }
};
export const summarizeUsernamesParticipatingWithSpeakerNickname = function summarizeUsernamesParticipatingWithSpeakerNickname(arg0, name, arg2) {
  let length = arg2;
  if (arg2 == null) {
    length = arg0.length;
  }
  if (1 === length) {
    if (null != name) {
      return name;
    }
  }
  if (null == name) {
    const intl2 = util.intl;
    let obj = { count: length };
    intl2.formatToPlainString(util.t.chmM9N, obj);
  } else {
    const intl = util.intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(util.t.GhkJ21, obj);
  }
};
export const getRemoveModeratorTooltipHint = function getRemoveModeratorTooltipHint(arg0, arg1) {
  if (RowType.OWNER === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.eTmN5a);
  } else {
    if (RowType.MEMBER !== arg0) {
      if (RowType.ROLE !== arg0) {
        if (RowType.EMPTY_STATE === arg0) {
          return null;
        } else {
          return null;
        }
      }
    }
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (arg1) {
      let stringResult = string(t.Hw3XWx);
    } else {
      stringResult = string(t.YieyPi);
    }
    return stringResult;
  }
};
export const getStageChannelMetadata = function getStageChannelMetadata(channel_id) {
  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel_id.id);
  const obj = { channel_id: channel_id.id, guild_id: channel_id.guild_id, topic: null, media_session_id: null, request_to_speak_state: null, stage_instance_id: null };
  let topic;
  if (stageInstanceByChannel != null) {
    topic = stageInstanceByChannel.topic;
  }
  obj.topic = topic;
  obj.media_session_id = RTCConnectionStore.getMediaSessionId();
  obj.request_to_speak_state = PermissionUtilsAll.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, channel_id) ? constants.EVERYONE : constants.NO_ONE;
  let id;
  if (stageInstanceByChannel != null) {
    id = stageInstanceByChannel.id;
  }
  obj.stage_instance_id = id;
  return obj;
};
export const getParticipantNamesText = function getParticipantNamesText(channel, found) {
  new Set();
  found = found.filter((user) => {
    const id = user.user.id;
    const hasItem = set.has(id);
    let flag = !hasItem;
    if (!hasItem) {
      set.add(id);
      flag = true;
    }
    return flag;
  });
  if (0 === found.length) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.FUVhyC);
  } else if (1 === found.length) {
    const intl2 = util.intl;
    let obj = { a: NicknameUtilsDefault.getName(channel.getGuildId(), channel.id, found[0].user) };
    stringResult = intl2.formatToPlainString(util.t.EQwZlN, obj);
  } else if (2 === found.length) {
    const intl = util.intl;
    obj = { a: NicknameUtilsDefault.getName(channel.getGuildId(), channel.id, found[0].user), b: null };
    obj.b = NicknameUtilsDefault.getName(channel.getGuildId(), channel.id, found[1].user);
    stringResult = intl.formatToPlainString(util.t.zBcKoA, obj);
  } else {
    const intl4 = util.intl;
    obj = { a: NicknameUtilsDefault.getName(channel.getGuildId(), channel.id, found[0].user), b: null, n: null };
    obj.b = NicknameUtilsDefault.getName(channel.getGuildId(), channel.id, found[1].user);
    obj.n = found.length - 2;
    stringResult = intl4.formatToPlainString(util.t["3AqFaG"], obj);
  }
  return stringResult;
};