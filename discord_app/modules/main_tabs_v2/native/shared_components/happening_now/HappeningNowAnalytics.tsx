// === Module 16156: HappeningNowAnalytics ===

// Module 16156 (HappeningNowAnalytics)
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
      let arr2 = items.push(tmp2);
      let arr3 = items1.push(items.length - 1);
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
  if (obj.extractTimestamp(id) % 25 === 0) {
    const obj2 = {};
    const obj3 = { destination_channel_ids: null, destination_channel_ids_index: null };
    [obj4.destination_channel_ids, obj4.destination_channel_ids_index] = convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId));
    const merged = Object.assign(obj3);
    const tmp6 = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemChannelId)), 2);
    const obj9 = { highlighted_user_ids: null, highlighted_user_ids_index: null };
    [obj5.highlighted_user_ids, obj5.highlighted_user_ids_index] = convertNullableArrayToItemAndItemIndex(data.map(getItemUserId));
    const merged1 = Object.assign(obj9);
    let obj10 = obj2;
    const tmp11 = _slicedToArray(convertNullableArrayToItemAndItemIndex(data.map(getItemUserId)), 2);
  } else {
    obj10 = {};
  }
  return obj10;
};