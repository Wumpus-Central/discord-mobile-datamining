// === Module 15074: convertNullableArrayToItemAndItemIndex ===

// Module 15074 (convertNullableArrayToItemAndItemIndex)
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";

function convertNullableArrayToItemAndItemIndex(arg0) {
  const items = [];
  const items1 = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null === nextResult) {
      let arr = items1.push(-1);
    } else {
      let tmp3 = nextResult;
      arr = items.push(tmp2);
      let arr1 = items1.push(items.length - 1);
    }
    continue;
  }
  const items2 = [items, items1];
  return items2;
}
function getItemUserId(userId) {
  userId = null;
  if ("userId" in userId) {
    userId = userId.userId;
  }
  return userId;
}
function getItemChannelId(channelId) {
  if ("channelId" in channelId) {
    channelId = channelId.channelId;
  } else if ("voiceState" in channelId) {
    const voiceState = channelId.voiceState;
    let channelId1;
    if (voiceState != null) {
      channelId1 = voiceState.channelId;
    }
    if (channelId1 == null) {
      channelId1 = null;
    }
    channelId = channelId1;
  } else if ("stream" in channelId) {
    const stream = channelId.stream;
    let channelId2;
    if (stream != null) {
      channelId2 = stream.channelId;
    }
    if (channelId2 == null) {
      channelId2 = null;
    }
    channelId = channelId2;
  } else {
    channelId = null;
    if ("stage" in channelId) {
      const stage = channelId.stage;
      let channel_id;
      if (stage != null) {
        channel_id = stage.channel_id;
      }
      if (channel_id == null) {
        channel_id = null;
      }
      channelId = channel_id;
    }
  }
  return channelId;
}
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx");

export const getAffinityProperties = function getAffinityProperties(data) {
  id = id.getId();
  let obj = importDefault(11);
  if (obj.extractTimestamp(id) % 25 === 0) {
    obj = {};
    obj = { destination_channel_ids: null, destination_channel_ids_index: null };
    [obj4[0], obj4[1]] = callback(convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId)), 2);
    const merged = Object.assign(obj);
    const tmp6 = callback(convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId)), 2);
    const obj1 = { highlighted_user_ids: null, highlighted_user_ids_index: null };
    [obj5[0], obj5[1]] = callback(convertNullableArrayToItemAndItemIndex(data.map(getItemUserId)), 2);
    const merged1 = Object.assign(obj1);
    let obj2 = obj;
    const tmp11 = callback(convertNullableArrayToItemAndItemIndex(data.map(getItemUserId)), 2);
  } else {
    obj2 = {};
  }
  return obj2;
};