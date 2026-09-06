// discord_app/modules/go_live/utils/StreamKeyUtils.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const StreamTypes = fn(4602).StreamTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/StreamKeyUtils.tsx");

export const isStreamKey = function isStreamKey(id) {
  let tmp = null != id;
  if (tmp) {
    tmp = id.startsWith(StreamTypes.GUILD) || id.startsWith(StreamTypes.CALL);
    const tmp3 = id.startsWith(StreamTypes.GUILD) || id.startsWith(StreamTypes.CALL);
  }
  return tmp;
};
export const decodeStreamKey = function decodeStreamKey(streamKey) {
  const parts = streamKey.split(":");
  const first = parts[0];
  if (StreamTypes.GUILD === first) {
    let obj = { streamType: null, guildId: null, channelId: null, ownerId: null };
    [obj2.streamType, obj2.guildId, obj2.channelId, obj2.ownerId] = _slicedToArray(parts, 4);
    return obj;
  } else if (tmp3.CALL === first) {
    obj = { streamType: null, channelId: null, ownerId: null };
    [obj.streamType, obj.channelId, obj.ownerId] = _slicedToArray(parts, 3);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown stream type " + first);
    throw error;
  }
};
export const encodeStreamKey = function encodeStreamKey(currentUserActiveStream) {
  ({ streamType, channelId, ownerId } = currentUserActiveStream);
  if (StreamTypes.GUILD === streamType) {
    const items = [streamType, tmp, channelId, ownerId];
    return items.join(":");
  } else if (tmp2.CALL === streamType) {
    const items1 = [streamType, channelId, ownerId];
    return items1.join(":");
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown stream type " + streamType);
    throw error;
  }
};
