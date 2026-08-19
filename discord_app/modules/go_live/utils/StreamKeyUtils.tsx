// discord_app/modules/go_live/utils/StreamKeyUtils.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { StreamTypes } from "../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/go_live/utils/StreamKeyUtils.tsx");

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
    [obj2[0], obj2[1], obj2[2], obj2[3]] = callback(parts, 4);
    return obj;
  } else if (tmp3.CALL === first) {
    obj = { streamType: null, channelId: null, ownerId: null };
    [obj[0], obj[1], obj[2]] = callback(parts, 3);
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown stream type " + first);
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
    error = new Error("Unknown stream type " + streamType);
    throw error;
  }
};