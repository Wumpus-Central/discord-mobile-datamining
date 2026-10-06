// === Module 7241: StreamerApplicationSelectors ===

// Module 7241 (StreamerApplicationSelectors)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import Constants from "Constants" /* 1085 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7242 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function _findPlayingActivity(type) {
  const tmp = type.type === ActivityTypes.PLAYING && !isEmbeddedActivityDefault(type);
  return tmp;
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
    const tmp3 = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
  }
  return tmp;
}
const ActivityTypes = Constants.ActivityTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let ownerId;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
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
          const obj3 = { id: null, name: null };
          ({ application_id: obj2.id, name: obj2.name } = findActivityResult);
          tmp5 = obj3;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7, streamApplicationEqualityCheck);
}) : ((arg0) => {
  let ownerId;
  _require = arg0;
  const items = [PresenceStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != ownerId) {
      let findActivityResult = null;
      if (null != ownerId) {
        findActivityResult = PresenceStore.findActivity(ownerId.ownerId, _findPlayingActivity);
      }
      let tmp5 = null;
      if (null != findActivityResult) {
        const obj3 = { id: null, name: null };
        ({ application_id: obj2.id, name: obj2.name } = findActivityResult);
        tmp5 = obj3;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1, streamApplicationEqualityCheck);
});
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
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export { getStreamerActivityByUserId };
export { getStreamerActivity };
export { getStreamerApplication };
export const useGetStreamApplication = tmp2;