// === Module 5690: map ===

// Module 5690 (map)
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { Store } from "initialize";

let c4 = null;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
class FramesStoreClass extends Store {
}
const prototype = FramesStoreClass.prototype;
prototype["getConnectedFrame"] = function getConnectedFrame() {
  return c4;
};
prototype["getFrameLayoutMode"] = function getFrameLayoutMode() {
  let layoutMode;
  if (_null != null) {
    layoutMode = _null.layoutMode;
  }
  return layoutMode;
};
prototype["getActivityPanelMode"] = function getActivityPanelMode() {
  let activityPanelMode;
  if (_null != null) {
    activityPanelMode = _null.activityPanelMode;
  }
  if (activityPanelMode == null) {
    activityPanelMode = ActivityPanelModes.DISCONNECTED;
  }
  return activityPanelMode;
};
prototype["isFrameActive"] = function isFrameActive() {
  return null != c4;
};
prototype["isLaunchingFrame"] = function isLaunchingFrame(applicationId) {
  if (null != applicationId) {
    let flag = map.get(applicationId);
    if (flag == null) {
      flag = false;
    }
    let tmp2 = flag;
  } else {
    tmp2 = map.size > 0;
  }
  return tmp2;
};
prototype["isProxyTicketRefreshing"] = function isProxyTicketRefreshing(arg0) {
  return map1.has(arg0);
};
prototype["getOrientationLockStateForApp"] = function getOrientationLockStateForApp(arg0) {
  return map2.get(arg0);
};
prototype["getPipOrientationLockStateForApp"] = function getPipOrientationLockStateForApp(arg0) {
  let orientationLockStateForApp = map3.get(arg0);
  if (orientationLockStateForApp == null) {
    const self = this;
    orientationLockStateForApp = this.getOrientationLockStateForApp(arg0);
  }
  return orientationLockStateForApp;
};
FramesStoreClass.displayName = "FramesStore";
const framesStoreClass = new FramesStoreClass(require("dispatcher"), {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    const result = map.set(applicationId.applicationId, true);
  },
  FRAME_LAUNCH: function handleFrameLaunch(applicationId) {
    let channelId;
    let proxyTicket;
    applicationId = applicationId.applicationId;
    ({ proxyTicket, channelId } = applicationId);
    const tmp = importDefault(5693)(applicationId);
    if (null != tmp) {
      map.delete(applicationId);
      const obj = { applicationId: null, url: null, connectedSince: null, layoutMode: null, activityPanelMode: null, proxyTicket: null, channelId: null };
      obj[0] = applicationId;
      obj[1] = tmp;
      const _Date = Date;
      obj[2] = Date.now();
      obj[3] = FrameLayoutModes.FOCUSED;
      obj[4] = ActivityPanelModes.PANEL;
      obj[5] = proxyTicket;
      obj[6] = channelId;
    } else {
      map.delete(applicationId);
    }
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(applicationId) {
    map.delete(applicationId.applicationId);
  },
  FRAME_STOP: function handleFrameStop(applicationId) {
    applicationId = undefined;
    if (_null != null) {
      applicationId = _null.applicationId;
    }
    if (applicationId === applicationId.applicationId) {
      _null = null;
    }
  },
  FRAME_UPDATE_LAYOUT_MODE: function handleFrameUpdateLayoutMode(arg0) {
    let applicationId;
    let layoutMode;
    applicationId = undefined;
    ({ applicationId, layoutMode } = arg0);
    if (obj != null) {
      applicationId = obj.applicationId;
    }
    if (applicationId === applicationId) {
      obj = {};
      const merged = Object.assign(obj);
      obj.layoutMode = layoutMode;
    }
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(arg0) {
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      obj.activityPanelMode = tmp;
    }
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let applicationId;
    let lockState;
    let pictureInPictureLockState;
    ({ applicationId, lockState, pictureInPictureLockState } = arg0);
    if (null == lockState) {
      map2.delete(applicationId);
    } else {
      const result = map2.set(applicationId, lockState);
    }
    if (null === pictureInPictureLockState) {
      map3.delete(applicationId);
    } else if (undefined !== pictureInPictureLockState) {
      const result1 = map3.set(applicationId, pictureInPictureLockState);
    }
  },
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId.refreshing) {
      const result = obj.set(applicationId, true);
    } else {
      obj.delete(applicationId);
    }
  },
  FRAME_UPDATE_PROXY_TICKET: function handleUpdateProxyTicket(arg0) {
    let applicationId;
    let proxyTicket;
    applicationId = undefined;
    ({ applicationId, proxyTicket } = arg0);
    if (obj != null) {
      applicationId = obj.applicationId;
    }
    if (applicationId === applicationId) {
      obj = {};
      const merged = Object.assign(obj);
      obj.proxyTicket = proxyTicket;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != obj;
    if (tmp) {
      let flag = obj.layoutMode !== FrameLayoutModes.PIP;
      if (flag) {
        obj = {};
        const merged = Object.assign(obj);
        obj.layoutMode = tmp3.PIP;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
});
let result = require("getURLForApplication").fileFinishedImporting("modules/frames/FramesStore.tsx");

export default framesStoreClass;