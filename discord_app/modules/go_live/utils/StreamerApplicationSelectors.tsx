// === Module 7425: StreamerApplicationSelectors ===

// Module 7425 (StreamerApplicationSelectors)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7426 */;
import PresenceStore from "PresenceStore" /* 5107 */;

const require = globalThis.__r;

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
const ActivityTypes = fn(1085).ActivityTypes;
const ReactCompilerGating = fn(558);
function getStreamerActivityByUserId(id, PresenceStore) {
  return PresenceStore.findActivity(id, _findPlayingActivity);
}
function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
}
function getStreamerApplication(stream, PresenceStore) {
  if (null == stream) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != stream) {
      findActivityResult = PresenceStore.findActivity(stream.ownerId, _findPlayingActivity);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export { getStreamerActivityByUserId };
export { getStreamerActivity };
export { getStreamerApplication };
export const useGetStreamApplication = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetStreamApplication(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp2 = null;
      if (null != ownerId) {
        let findActivityResult = null;
        if (null != ownerId) {
          findActivityResult = PresenceStore.findActivity(ownerId.ownerId, _findPlayingActivity);
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7, streamApplicationEqualityCheck);
}) : (function useGetStreamApplication(arg0) {
  _require = arg0;
  const items = [PresenceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != ownerId) {
      let findActivityResult = null;
      if (null != ownerId) {
        findActivityResult = PresenceStore.findActivity(ownerId.ownerId, _findPlayingActivity);
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
});