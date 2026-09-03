// === Module 7494: _findPlayingActivity ===

// Module 7494 (_findPlayingActivity)
import shallowEqualDefault from "shallowEqual" /* 640 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7495 */;
import closure_3 from "sortActivity" /* 4569 */;
import { ActivityTypes } from "ME" /* 673 */;

const require = arg1;
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
      tmp3 = shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export const getStreamerActivityByUserId = function getStreamerActivityByUserId(id, closure_1_10) {
  return closure_1_10.findActivity(id, _findPlayingActivity);
};
export const getStreamerActivity = function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
};
export const getStreamerApplication = function getStreamerApplication(closure_0, closure_1_3) {
  if (null == closure_0) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != closure_0) {
      findActivityResult = closure_1_3.findActivity(closure_0.ownerId, _findPlayingActivity);
    }
    let tmp4 = null;
    if (null != findActivityResult) {
      const obj = { id: null, name: null };
      ({ application_id: obj[0], name: obj[1] } = findActivityResult);
      tmp4 = obj;
    }
    return tmp4;
  }
};
export const useGetStreamApplication = function useGetStreamApplication(stream) {
  const _require = stream;
  const items = [closure_3];
  const items1 = [stream];
  return _require(586).useStateFromStores(items, () => {
    let obj = closure_1_3;
    let tmp2 = null;
    if (null != closure_0) {
      let findActivityResult = null;
      if (null != tmp) {
        findActivityResult = obj.findActivity(tmp.ownerId, closure_1_5);
      }
      let tmp5 = null;
      if (null != findActivityResult) {
        obj = { id: null, name: null };
        ({ application_id: obj2[0], name: obj2[1] } = findActivityResult);
        tmp5 = obj;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1, streamApplicationEqualityCheck);
};