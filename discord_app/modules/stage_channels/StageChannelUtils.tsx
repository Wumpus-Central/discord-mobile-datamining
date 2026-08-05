// discord_app/modules/stage_channels/StageChannelUtils.tsx
import createRTCConnection from "createRTCConnection";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import { RequestToSpeakPermissionStates as closure_6 } from "MAX_STAGE_TOPIC_LENGTH";
import { Permissions } from "ME";
import { RowType } from "RowType";

let require = arg1;
const result = require("MAX_STAGE_TOPIC_LENGTH").fileFinishedImporting("modules/stage_channels/StageChannelUtils.tsx");

export const fillChunk = function fillChunk(arg0, arg1, arg2) {
  let tmp = arg2;
  const obj = require("../../../_runtime/00012_apply.js") /* apply */;
  if (arg2 == null) {
    tmp = arg1;
  }
  require = tmp;
  return require("../../../_runtime/00012_apply.js") /* apply */.chunk(arg0, arg1).reduce((arg0, arg1) => {
    if (closure_0 <= arg1.length) {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = arg1;
      return items;
    } else {
      const items1 = [];
      const _Array = Array;
      let arraySpreadResult = HermesBuiltin.arraySpread(arg1, 0);
      const array = new Array(tmp - arg1.length);
      arraySpreadResult = HermesBuiltin.arraySpread(array.fill(null), arraySpreadResult);
      const items2 = [];
      items2[HermesBuiltin.arraySpread(arg0, 0)] = items1;
      return items2;
    }
  }, []);
};
export const summarizeUsernamesParticipating = function summarizeUsernamesParticipating(arg0, arg1, arg2, arg3) {
  let length = arg3;
  const first = arg1[0];
  let obj = dependencyMap;
  const name = require("../../utils/NicknameUtils.tsx").getName(arg0, arg2, first);
  if (arg3 == null) {
    length = arg1.length;
  }
  if (1 === length) {
    if (null != first) {
      return name;
    }
  }
  if (null == first) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { count: null };
    obj[0] = length;
    intl2.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.chmM9N, obj);
  } else {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { name: null, count: null };
    obj[0] = name;
    obj[1] = length - 1;
    intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.GhkJ21, obj);
  }
};
export const summarizeUsernamesParticipatingWithSpeakerNickname = function summarizeUsernamesParticipatingWithSpeakerNickname(arg0, arg1, arg2) {
  let length = arg2;
  if (arg2 == null) {
    length = arg0.length;
  }
  if (1 === length) {
    if (null != arg1) {
      return arg1;
    }
  }
  if (null == arg1) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { count: null };
    obj[0] = length;
    intl2.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.chmM9N, obj);
  } else {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { name: null, count: null };
    obj[0] = arg1;
    obj[1] = length - 1;
    intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.GhkJ21, obj);
  }
};
export const getRemoveModeratorTooltipHint = function getRemoveModeratorTooltipHint(arg0, arg1) {
  if (RowType.OWNER === arg0) {
    const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.icuNBM);
  } else if (tmp.ADMINISTRATOR === arg0) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.eTmN5a);
  } else {
    if (tmp.MEMBER !== arg0) {
      if (tmp.ROLE !== arg0) {
        if (tmp.EMPTY_STATE === arg0) {
          return null;
        } else {
          return null;
        }
      }
    }
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require("../../intl/index.native.tsx") /* getSystemLocale */.t;
    if (arg1) {
      let stringResult = string(t.Hw3XWx);
    } else {
      stringResult = string(t.YieyPi);
    }
    return stringResult;
  }
};
export const getStageChannelMetadata = function getStageChannelMetadata(channel_id) {
  stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel_id.id);
  const obj = { channel_id: channel_id.id, guild_id: channel_id.guild_id, topic: null, media_session_id: null, request_to_speak_state: null, stage_instance_id: null };
  let topic;
  if (stageInstanceByChannel != null) {
    topic = stageInstanceByChannel.topic;
  }
  obj[2] = topic;
  obj[3] = mediaSessionId.getMediaSessionId();
  obj[4] = importAll(3918).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, channel_id) ? closure_6.EVERYONE : closure_6.NO_ONE;
  let id;
  if (stageInstanceByChannel != null) {
    id = stageInstanceByChannel.id;
  }
  obj[5] = id;
  return obj;
};
export const getParticipantNamesText = function getParticipantNamesText(channel, found) {
  const set = new Set();
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
    const intl3 = set(1236).intl;
    let stringResult = intl3.string(set(1236).t.FUVhyC);
  } else if (1 === found.length) {
    const intl2 = set(1236).intl;
    let obj = { a: null };
    obj[0] = require("../../utils/NicknameUtils.tsx").getName(channel.getGuildId(), channel.id, found[0].user);
    stringResult = intl2.formatToPlainString(set(1236).t.EQwZlN, obj);
    const obj5 = require("../../utils/NicknameUtils.tsx");
  } else if (2 === found.length) {
    const intl = set(1236).intl;
    obj = { a: null, b: null };
    obj[0] = require("../../utils/NicknameUtils.tsx").getName(channel.getGuildId(), channel.id, found[0].user);
    const obj2 = require("../../utils/NicknameUtils.tsx");
    obj[1] = require("../../utils/NicknameUtils.tsx").getName(channel.getGuildId(), channel.id, found[1].user);
    stringResult = intl.formatToPlainString(set(1236).t.zBcKoA, obj);
    const obj3 = require("../../utils/NicknameUtils.tsx");
  } else {
    const intl4 = set(1236).intl;
    obj = { a: null, b: null, n: null };
    obj[0] = require("../../utils/NicknameUtils.tsx").getName(channel.getGuildId(), channel.id, found[0].user);
    const obj7 = require("../../utils/NicknameUtils.tsx");
    obj[1] = require("../../utils/NicknameUtils.tsx").getName(channel.getGuildId(), channel.id, found[1].user);
    obj[2] = found.length - 2;
    stringResult = intl4.formatToPlainString(set(1236).t["3AqFaG"], obj);
    const obj8 = require("../../utils/NicknameUtils.tsx");
  }
  return stringResult;
};