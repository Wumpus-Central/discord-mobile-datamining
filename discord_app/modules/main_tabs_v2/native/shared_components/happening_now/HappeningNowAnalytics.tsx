// === Module 16059: HappeningNowAnalytics ===

// Module 16059 (HappeningNowAnalytics)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

function convertNullableArrayToItemAndItemIndex(arg0) {
  const items = [];
  const items1 = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null === nextResult) {
      let arr = items1.push(-1);
    } else {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx");

export const getAffinityProperties = function getAffinityProperties(data) {
  const id = AuthenticationStore.getId();
  let obj = SnowflakeUtilsDefault;
  if (obj.extractTimestamp(id) % 25 === 0) {
    obj = {};
    obj = { destination_channel_ids: null, destination_channel_ids_index: null };
    [obj4.destination_channel_ids, obj4.destination_channel_ids_index] = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId)), 2);
    const merged = Object.assign(obj);
    const tmp6 = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId)), 2);
    const obj1 = { highlighted_user_ids: null, highlighted_user_ids_index: null };
    [obj5.highlighted_user_ids, obj5.highlighted_user_ids_index] = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemUserId)), 2);
    const merged1 = Object.assign(obj1);
    let obj2 = obj;
    const tmp11 = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemUserId)), 2);
  } else {
    obj2 = {};
  }
  return obj2;
};