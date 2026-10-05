// discord_app/stores/views/ActivityLauncherStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LocalActivityStore from "../LocalActivityStore.tsx";
import SelfPresenceStore from "../SelfPresenceStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
function handleActivityStateChanged(COMPLETE, JOIN, type) {
  let applicationId;
  let remotePartyId;
  const f106482 = () => {
    obj = activityType(dependencyMap[4]);
    const obj2 = { type: "ACTIVITY_LAUNCH_FAIL", applicationId, activityType };
    return obj.dispatch(obj2);
  };
  ({ applicationId, remotePartyId } = type);
  if (COMPLETE === constants.COMPLETE) {
    if (obj[applicationId] != null) {
      delete obj[applicationId][tmp];
    }
    if (null != closure_8[applicationId]) {
      const obj7 = closure_8[applicationId];
      obj7.stop();
      delete closure_8[applicationId];
    }
  } else {
    obj = obj[applicationId];
    if (obj == null) {
      obj = {};
    }
    let obj2 = { state: COMPLETE, remotePartyId };
    obj[JOIN] = obj2;
    obj[applicationId] = obj;
    if (COMPLETE === constants.FAILED) {
      let closure_1 = JOIN;
      if (null != closure_8[applicationId]) {
        const obj5 = closure_8[applicationId];
        obj5.stop();
      }
      const self3 = this;
      const self4 = this;
      const timeout = new applicationId(2046).Timeout();
      timeout.start(c9, f106482);
      closure_8[applicationId] = timeout;
    } else if (COMPLETE === constants.LOADING) {
      let num = 15000;
      if (null == remotePartyId) {
        num = c9;
      }
      closure_1 = JOIN;
      if (null != closure_8[applicationId]) {
        const obj3 = closure_8[applicationId];
        obj3.stop();
      }
      const self = this;
      const self2 = this;
      const timeout1 = new applicationId(2046).Timeout();
      timeout1.start(num, f106482);
      closure_8[applicationId] = timeout1;
    }
  }
}
function handleActivityComplete(type) {
  const tmp =
    ("ACTIVITY_JOIN" !== type.type || null == type.parentApplicationId) &&
    handleActivityStateChanged(hasOwnProperty.COMPLETE, metroRequire.JOIN, type);
  return tmp;
}
function handleActivityUpdate() {
  const entries = Object.entries(obj);
  const mapped = entries.map((item) => {
    let remotePartyId;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    obj = { applicationId: tmp, remotePartyId };
    remotePartyId = undefined;
    if (tmp2[constants.JOIN] != null) {
      remotePartyId = tmp3.remotePartyId;
    }
    return obj;
  });
  const found = mapped.filter((remotePartyId) => null != remotePartyId.remotePartyId);
  let c0 = false;
  const item = found.forEach((item) => {
    let applicationId;
    let remotePartyId;
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
      handleActivityStateChanged(hasOwnProperty.COMPLETE, metroRequire.JOIN, obj);
      c0 = true;
    }
  });
  return c0;
}
({ ActivityActionStates: hasOwnProperty, ActivityActionTypes: metroRequire } = Constants);
let obj = {};
let closure_8 = {};
let c9 = 120000;
const Store = get_initializedDefault.Store;
class ActivityLauncherStore extends Store {
  initialize() {
    const items = [LocalActivityStore, SelfPresenceStore];
    this.syncWith(items, handleActivityUpdate);
  }
  getState(arg0, arg1) {
    let state;
    if (obj[arg0] != null) {
      if (obj[arg0][arg1] != null) {
        state = tmp4.state;
      }
    }
    return state;
  }
  getStates() {
    return obj;
  }
}
const prototype = ActivityLauncherStore.prototype;
ActivityLauncherStore.displayName = "ActivityLauncherStore";
obj = {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(activityLauncherStates) {
    obj = {};
    const merged = Object.assign(activityLauncherStates.activityLauncherStates);
  },
  ACTIVITY_JOIN_LOADING(type) {
    return handleActivityStateChanged(hasOwnProperty.LOADING, metroRequire.JOIN, type);
  },
  ACTIVITY_JOIN_FAILED(type) {
    return handleActivityStateChanged(hasOwnProperty.FAILED, metroRequire.JOIN, type);
  },
  ACTIVITY_JOIN: handleActivityComplete,
  EMBEDDED_ACTIVITY_CLOSE: handleActivityComplete,
  ACTIVITY_LAUNCH_FAIL: function handleActivityLaunchFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      delete obj[arg0.applicationId][tmp];
    }
  },
};
const activityLauncherStore = new ActivityLauncherStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/views/ActivityLauncherStore.tsx");

export default activityLauncherStore;
