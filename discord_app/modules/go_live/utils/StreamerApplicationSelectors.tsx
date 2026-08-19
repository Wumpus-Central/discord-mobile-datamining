// === Module 7487: _findPlayingActivity ===

// Module 7487 (_findPlayingActivity)
import shallowEqualDefault from "shallowEqual" /* 643 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7259 */;
import sortActivity from "sortActivity" /* 4559 */;
import { ActivityTypes } from "ME" /* 676 */;

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
      tmp3 = shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("obj132").fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

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
  if (null == _require) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != _require) {
      findActivityResult = closure_1_3.findActivity(_require.ownerId, _findPlayingActivity);
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
  return _require(589).useStateFromStores(items, () => {
    let obj = closure_1_3;
    let tmp2 = null;
    if (null != stream) {
      let findActivityResult = null;
      if (null != stream) {
        findActivityResult = obj.findActivity(stream.ownerId, _findPlayingActivity);
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