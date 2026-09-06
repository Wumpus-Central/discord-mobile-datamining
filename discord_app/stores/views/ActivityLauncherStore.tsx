// discord_app/stores/views/ActivityLauncherStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LocalActivityStore from "../LocalActivityStore.tsx";
import SelfPresenceStore from "../SelfPresenceStore.tsx";

const require = fn;
function handleActivityStateChanged(COMPLETE, JOIN, type) {
  ({ applicationId, remotePartyId } = type);
  if (COMPLETE === constants.COMPLETE) {
    if (obj[applicationId] != null) {
      delete tmp3[tmp4];
    }
    if (null != dependencyMap[applicationId]) {
      dependencyMap[applicationId].stop();
      delete tmp[tmp2];
    }
  } else {
    obj = obj[applicationId];
    if (obj == null) {
      obj = {};
    }
    obj = { state: COMPLETE, remotePartyId };
    obj[JOIN] = obj;
    obj[applicationId] = obj;
    if (COMPLETE === constants.FAILED) {
      closure_129_0 = applicationId;
      closure_129_1 = JOIN;
      if (null != dependencyMap[applicationId]) {
        dependencyMap[applicationId].stop();
      }
      const timeout = new applicationId(4447).Timeout();
      timeout.start(c9, () => {
        obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId, activityType };
        return obj.dispatch(obj);
      });
      dependencyMap[applicationId] = timeout;
    } else if (COMPLETE === constants.LOADING) {
      let num = 15000;
      if (null == remotePartyId) {
        num = c9;
      }
      const activityType = JOIN;
      if (null != dependencyMap[applicationId]) {
        dependencyMap[applicationId].stop();
      }
      const timeout1 = new applicationId(4447).Timeout();
      timeout1.start(num, () => {
        obj = { type: "ACTIVITY_LAUNCH_FAIL", applicationId, activityType };
        return obj.dispatch(obj);
      });
      dependencyMap[applicationId] = timeout1;
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
  const entries = Object.entries(obj);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    obj = { applicationId: tmp, remotePartyId: null };
    let remotePartyId;
    if (tmp2[constants.JOIN] != null) {
      remotePartyId = tmp3.remotePartyId;
    }
    obj.remotePartyId = remotePartyId;
    return obj;
  });
  const found = mapped.filter((remotePartyId) => null != remotePartyId.remotePartyId);
  c0 = false;
  const item = found.forEach((item) => {
    ({ applicationId, remotePartyId } = item);
    const applicationActivity = LocalActivityStore.getApplicationActivity(applicationId);
    const applicationActivity1 = SelfPresenceStore.getApplicationActivity(applicationId);
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
      obj = { applicationId, remotePartyId };
      handleActivityStateChanged(constants.COMPLETE, constants2.JOIN, obj);
      c0 = true;
    }
  });
  return c0;
}
const Constants = fn(1074);
({ ActivityActionStates: hasOwnProperty, ActivityActionTypes: metroRequire } = Constants);
let obj = {};
const dependencyMap = {};
let c9 = 120000;
const Store = initializeDefault.Store;
class ActivityLauncherStore extends Store {}
const prototype = ActivityLauncherStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [LocalActivityStore, SelfPresenceStore];
  this.syncWith(items, handleActivityUpdate);
};
prototype["getState"] = function getState(arg0, arg1) {
  let state;
  if (obj[arg0] != null) {
    if (tmp[arg1] != null) {
      state = tmp4.state;
    }
  }
  return state;
};
prototype["getStates"] = function getStates() {
  return obj;
};
ActivityLauncherStore.displayName = "ActivityLauncherStore";
obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    obj = {};
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
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
};
const activityLauncherStore = new ActivityLauncherStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/views/ActivityLauncherStore.tsx");

export default activityLauncherStore;
