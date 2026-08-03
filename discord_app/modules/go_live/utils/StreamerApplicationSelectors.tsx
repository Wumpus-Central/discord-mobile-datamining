import sortActivity from "sortActivity";
import { ActivityTypes } from "ME";

const require = arg1;
function _findPlayingActivity(type) {
  let tmp = type.type === ActivityTypes.PLAYING;
  if (tmp) {
    tmp = !importDefault(6028)(type);
  }
  return tmp;
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = importDefault(643)(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("isEmbeddedActivity").fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export const getStreamerActivityByUserId = function getStreamerActivityByUserId(id, id2) {
  return id2.findActivity(id, _findPlayingActivity);
};
export const getStreamerActivity = function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
};
export const getStreamerApplication = function getStreamerApplication(closure_0, closure_22) {
  if (null == closure_0) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != closure_0) {
      findActivityResult = closure_22.findActivity(closure_0.ownerId, _findPlayingActivity);
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
  const items = [sortActivity];
  const items1 = [stream];
  return _require(589).useStateFromStores(items, () => {
    let obj = outer1_3;
    let tmp2 = null;
    if (null != closure_0) {
      let findActivityResult = null;
      if (null != tmp) {
        findActivityResult = obj.findActivity(tmp.ownerId, outer1_5);
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