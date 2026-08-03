import updateActivities from "updateActivities";
import filterPlayingActivities from "filterPlayingActivities";
import ME from "ME";
import { Store } from "initialize";

let c5;
let closure_6;
const require = arg1;
function handleActivityStateChanged(COMPLETE, JOIN, type) {
  let applicationId;
  let remotePartyId;
  ({ applicationId, remotePartyId } = type);
  if (COMPLETE === constants.COMPLETE) {
    if (dependencyMap[applicationId] != null) {
      delete tmp3[tmp4];
    }
    if (null != dependencyMap2[applicationId]) {
      dependencyMap2[applicationId].stop();
      delete tmp[tmp2];
      const obj7 = dependencyMap2[applicationId];
    }
  } else {
    let obj = dependencyMap[applicationId];
    if (obj == null) {
      obj = {};
    }
    obj = { state: null, remotePartyId: null };
    obj[0] = COMPLETE;
    obj[1] = remotePartyId;
    obj[JOIN] = obj;
    dependencyMap[applicationId] = obj;
    if (COMPLETE === tmp5.FAILED) {
      let closure_1 = JOIN;
      if (null != dependencyMap2[applicationId]) {
        tmp16[applicationId].stop();
        const obj5 = tmp16[applicationId];
      }
      const timeout = new applicationId(4140).Timeout();
      timeout.start(c9, () => {
        let obj = JOIN(outer1_2[4]);
        obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId, activityType: JOIN };
        return obj.dispatch(obj);
      });
      dependencyMap2[applicationId] = timeout;
      const tmp15 = c9;
    } else if (COMPLETE === tmp5.LOADING) {
      let num = 15000;
      if (null == remotePartyId) {
        num = c9;
      }
      closure_1 = JOIN;
      if (null != dependencyMap2[applicationId]) {
        tmp7[applicationId].stop();
        const obj3 = tmp7[applicationId];
      }
      const timeout1 = new applicationId(4140).Timeout();
      timeout1.start(num, () => {
        let obj = JOIN(outer1_2[4]);
        obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId, activityType: JOIN };
        return obj.dispatch(obj);
      });
      dependencyMap2[applicationId] = timeout1;
    }
  }
}
function handleActivityComplete(type) {
  let tmp = "ACTIVITY_JOIN" !== type.type;
  if (!tmp) {
    tmp = null == type.parentApplicationId;
  }
  if (tmp) {
    tmp = handleActivityStateChanged(constants.COMPLETE, constants2.JOIN, type);
  }
  return tmp;
}
function handleActivityUpdate() {
  const entries = Object.entries(closure_7);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { applicationId: tmp, remotePartyId: null };
    let remotePartyId;
    if (tmp2[constants.JOIN] != null) {
      remotePartyId = tmp3.remotePartyId;
    }
    obj[1] = remotePartyId;
    return obj;
  });
  const found = mapped.filter((remotePartyId) => null != remotePartyId.remotePartyId);
  let c0 = false;
  const item = found.forEach((arg0) => {
    let applicationId;
    let remotePartyId;
    ({ applicationId, remotePartyId } = arg0);
    const applicationActivity = outer1_3.getApplicationActivity(applicationId);
    const applicationActivity1 = outer1_4.getApplicationActivity(applicationId);
    let id;
    if (applicationActivity != null) {
      const party = applicationActivity.party;
      if (party != null) {
        id = party.id;
      }
    }
    let tmp4 = id !== remotePartyId;
    if (tmp4) {
      let id1;
      if (applicationActivity1 != null) {
        const party2 = applicationActivity1.party;
        if (party2 != null) {
          id1 = party2.id;
        }
      }
      tmp4 = id1 !== remotePartyId;
    }
    if (!tmp4) {
      const obj = { applicationId: null, remotePartyId: null };
      obj[0] = applicationId;
      obj[1] = remotePartyId;
      outer1_10(outer1_5.COMPLETE, outer1_6.JOIN, obj);
      let c0 = true;
    }
  });
  return c0;
}
({ ActivityActionStates: c5, ActivityActionTypes: closure_6 } = ME);
let closure_7 = {};
let closure_8 = {};
let c9 = 120000;
class ActivityLauncherStore extends Store {
}
const prototype = ActivityLauncherStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [updateActivities, filterPlayingActivities];
  this.syncWith(items, handleActivityUpdate);
};
prototype["getState"] = function getState(arg0, arg1) {
  let state;
  if (dependencyMap[arg0] != null) {
    if (tmp[arg1] != null) {
      state = tmp4.state;
    }
  }
  return state;
};
prototype["getStates"] = function getStates() {
  return closure_7;
};
ActivityLauncherStore.displayName = "ActivityLauncherStore";
const activityLauncherStore = new ActivityLauncherStore(require("dispatcher"), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    const obj = {};
    const merged = Object.assign(activityLauncherStates.activityLauncherStates);
  },
  ACTIVITY_JOIN_LOADING(type) {
    return handleActivityStateChanged(constants.LOADING, constants2.JOIN, type);
  },
  ACTIVITY_JOIN_FAILED(type) {
    return handleActivityStateChanged(constants.FAILED, constants2.JOIN, type);
  },
  ACTIVITY_JOIN: handleActivityComplete,
  EMBEDDED_ACTIVITY_CLOSE: handleActivityComplete,
  ACTIVITY_LAUNCH_FAIL: function handleActivityLaunchFail(arg0) {
    if (null == dependencyMap[arg0.applicationId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
const result = require("ME").fileFinishedImporting("stores/views/ActivityLauncherStore.tsx");

export default activityLauncherStore;