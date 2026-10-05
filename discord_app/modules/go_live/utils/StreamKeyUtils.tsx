// discord_app/modules/go_live/utils/StreamKeyUtils.tsx
import Constants from "../Constants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const StreamTypes = Constants.StreamTypes;
const result = size.fileFinishedImporting("modules/go_live/utils/StreamKeyUtils.tsx");

export const isStreamKey = function isStreamKey(id) {
  let tmp = null != id;
  if (tmp) {
    tmp = id.startsWith(StreamTypes.GUILD) || id.startsWith(StreamTypes.CALL);
    id.startsWith(StreamTypes.GUILD) || id.startsWith(StreamTypes.CALL);
  }
  return tmp;
};
export const decodeStreamKey = function decodeStreamKey(streamKey) {
  const parts = streamKey.split(":");
  const first = parts[0];
  if (StreamTypes.GUILD === first) {
    const obj3 = { streamType: null, guildId: null, channelId: null, ownerId: null };
    [obj2.streamType, obj2.guildId, obj2.channelId, obj2.ownerId] = parts;
    _slicedToArray(parts, 4);
    return obj3;
  } else if (tmp3.CALL === first) {
    const obj = { streamType: null, channelId: null, ownerId: null };
    [obj.streamType, obj.channelId, obj.ownerId] = parts;
    _slicedToArray(parts, 3);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown stream type " + first);
    throw error;
  }
};
export const encodeStreamKey = function encodeStreamKey(currentUserActiveStream) {
  let channelId;
  let ownerId;
  let streamType;
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
    const self = this;
    const self2 = this;
    const error = new Error("Unknown stream type " + streamType);
    throw error;
  }
};
