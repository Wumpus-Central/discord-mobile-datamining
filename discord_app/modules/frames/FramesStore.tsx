// discord_app/modules/frames/FramesStore.tsx
import FrameLayoutModes from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { NOOP_TRUE } from "sum";
import { Store } from "initialize";
import { getURLForApplication } from "../activities/getURLForApplication.tsx";

let c3;
let c4;
let c5;
let closure_6;
let obj1;
({ FrameIntent: obj1, FrameLayoutModes: c3, getFrameIntentForSurface: c4, isLaunched: c5, makeFrameId: closure_6 } = FrameLayoutModes);
const map = new Map();
let c10 = null;
class FramesStoreClass extends Store {
}
const prototype = FramesStoreClass.prototype;
prototype["getFrame"] = function getFrame(closure_0) {
  if (null != closure_0) {
    return map.get(closure_0);
  }
};
prototype["getMainFrame"] = function getMainFrame() {
  let tmp = null;
  if (null != c10) {
    let value = map.get(c10);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getAllFrames"] = function getAllFrames() {
  return Array.from(map.values());
};
prototype["getFrameByIframeId"] = function getFrameByIframeId(iframeId) {
  const values = map.values();
  for (const item10009 of values) {
    let tmp3 = callback2;
    let tmp2 = item10009;
    if (callback2(item10009)) {
      let tmp4 = item10009;
      if (tmp2.data.iframeId === arg0) {
        let tmp5 = obj;
        obj.return();
        return item10009;
      }
    }
    continue;
  }
};
prototype["getFrameBySurface"] = function getFrameBySurface(arg0, arg1) {
  return map.get(callback3(arg0, arg1));
};
FramesStoreClass.displayName = "FramesStore";
const framesStoreClass = new FramesStoreClass(require("dispatcher"), {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    let frameId;
    let surface;
    ({ frameId, surface } = applicationId);
    const tmp = callback(surface);
    const result = map.set(frameId, { id: frameId, applicationId: applicationId.applicationId, intent: tmp, surface, state: "loading", data: null });
  },
  FRAME_LAUNCH: function handleFrameLaunch(frameId) {
    frameId = frameId.frameId;
    let obj = map;
    const value = map.get(frameId);
    if (null != value) {
      const tmp14 = getURLForApplication(value.applicationId);
      if (null == tmp14) {
        obj.delete(frameId);
        if (c10 === frameId) {
          c10 = null;
        }
      } else {
        obj = {};
        const merged = Object.assign(value);
        obj.state = "launched";
        obj = { url: null, connectedSince: null, layoutMode: null, activityPanelMode: null, proxyTicket: null, proxyTicketRefreshing: false, orientationLock: null, pipOrientationLock: null, iframeId: null };
        obj[0] = tmp14;
        const _Date = Date;
        obj[1] = Date.now();
        obj[2] = constants2.FOCUSED;
        obj[3] = ActivityPanelModes.PANEL;
        obj[4] = frameId.proxyTicket;
        obj.data = obj;
        const result = obj.set(frameId, obj);
      }
    }
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    if (c10 === frameId) {
      c10 = null;
    }
  },
  FRAME_STOP: function handleFrameStop(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    if (c10 === frameId) {
      c10 = null;
    }
  },
  FRAME_CLEAR_MAIN_SLOT: function handleFrameClearMainSlot(frameId) {
    if (c10 !== frameId.frameId) {
      return false;
    } else {
      c10 = null;
    }
  },
  FRAME_PROMOTE: function handleFramePromote(frameId) {
    frameId = frameId.frameId;
    if (null == map.get(frameId)) {
      return false;
    }
  },
  FRAME_UPDATE_LAYOUT_MODE: function handleFrameUpdateLayoutMode(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.layoutMode = tmp;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.activityPanelMode = tmp;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let frameId;
    let lockState;
    let pictureInPictureLockState;
    ({ frameId, lockState, pictureInPictureLockState } = arg0);
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp4 = callback2(value);
      if (tmp4) {
        let flag2 = tmp(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          const data = value.data;
          obj = {};
          const merged1 = Object.assign(data);
          if (lockState == null) {
            lockState = null;
          }
          obj.orientationLock = lockState;
          if (undefined === pictureInPictureLockState) {
            pictureInPictureLockState = data.pipOrientationLock;
          }
          obj.pipOrientationLock = pictureInPictureLockState;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.proxyTicketRefreshing = tmp;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_UPDATE_PROXY_TICKET: function handleUpdateProxyTicket(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.proxyTicket = tmp;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.iframeId = tmp;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_IFRAME_UNMOUNT: function handleFrameIframeUnmount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      const value = map.get(frameId);
      let tmp4 = callback2(value);
      if (tmp4) {
        let flag2 = value.data.iframeId === tmp;
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.iframeId = null;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let flag = false;
    if (null != c10) {
      let obj = map;
      const value = map.get(tmp);
      let tmp5 = callback2(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.layoutMode = constants2.PIP;
          obj.data = obj;
          const result = obj.set(tmp, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  }
});
let result = require("sum").fileFinishedImporting("modules/frames/FramesStore.tsx");

export default framesStoreClass;