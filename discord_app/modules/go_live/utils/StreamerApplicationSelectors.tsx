// === Module 7882: StreamerApplicationSelectors ===

// Module 7882 (StreamerApplicationSelectors)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7883 */;
import PresenceStore from "PresenceStore" /* 5761 */;

const require = globalThis.__r;

require = fn;
function _findPlayingActivity(type) {
  let tmp2 = type.type === ActivityTypes.ActivityTypes.PLAYING;
  if (tmp2) {
    tmp2 = !isEmbeddedActivityDefault(type);
  }
  return tmp2;
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = discord_common_shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export function getStreamerActivityByUserId(id, PresenceStore) {
  return PresenceStore.findActivity(id, _findPlayingActivity);
}
export function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
}
export function getStreamerApplication(decodeStreamKeyResult, PresenceStore) {
  if (null == decodeStreamKeyResult) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != decodeStreamKeyResult) {
      findActivityResult = PresenceStore.findActivity(decodeStreamKeyResult.ownerId, _findPlayingActivity);
    }
    let tmp4 = null;
    if (null != findActivityResult) {
      const obj = { id: null, name: null };
      ({ application_id: obj.id, name: obj.name } = findActivityResult);
      tmp4 = obj;
    }
    return tmp4;
  }
}
export function useGetStreamApplication(stream) {
  _require = stream;
  const items = [PresenceStore];
  const items1 = [stream];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != stream) {
      let findActivityResult = null;
      if (null != stream) {
        findActivityResult = PresenceStore.findActivity(stream.ownerId, _findPlayingActivity);
      }
      let tmp5 = null;
      if (null != findActivityResult) {
        ({ application_id: obj2.id, name: obj2.name } = findActivityResult);
        tmp5 = { id: null, name: null };
        const obj3 = { id: null, name: null };
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1, streamApplicationEqualityCheck);
}