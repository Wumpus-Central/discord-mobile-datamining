// === Module 7738: StreamerApplicationSelectors ===

// Module 7738 (StreamerApplicationSelectors)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import PresenceStore from "PresenceStore" /* 4600 */;

const require = fn;
function _findPlayingActivity(type) {
  let tmp = type.type === ActivityTypes.PLAYING;
  if (tmp) {
    tmp = !isEmbeddedActivityDefault(type);
  }
  return tmp;
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
const ActivityTypes = fn(1074).ActivityTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export const getStreamerActivityByUserId = function getStreamerActivityByUserId(id, PresenceStore) {
  return PresenceStore.findActivity(id, _findPlayingActivity);
};
export const getStreamerActivity = function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
};
export const getStreamerApplication = function getStreamerApplication(decodeStreamKeyResult, PresenceStore) {
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
};
export const useGetStreamApplication = function useGetStreamApplication(stream) {
  _require = stream;
  const items = [PresenceStore];
  const items1 = [stream];
  return require("initialize").useStateFromStores(items, () => {
    let obj = PresenceStore;
    let tmp2 = null;
    if (null != stream) {
      let findActivityResult = null;
      if (null != stream) {
        findActivityResult = obj.findActivity(stream.ownerId, _findPlayingActivity);
      }
      let tmp5 = null;
      if (null != findActivityResult) {
        obj = { id: null, name: null };
        ({ application_id: obj2.id, name: obj2.name } = findActivityResult);
        tmp5 = obj;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1, streamApplicationEqualityCheck);
};