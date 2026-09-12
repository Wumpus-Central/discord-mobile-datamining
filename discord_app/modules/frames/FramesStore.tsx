// === Module 9640: FramesStore ===

// Module 9640 (FramesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1085 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9635 */;
import getURLForApplicationDefault from "getURLForApplication" /* 9642 */;
import FramesConstants from "FramesConstants" /* 9641 */;
import size from "module_2" /* 2 */;

({ FrameIntent: c2, FrameLayoutModes: c3, getChannelIdForSurface: closure_4, getFrameIntentForSurface: hasOwnProperty, isLaunched: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const NOOP_TRUE = Constants.NOOP_TRUE;
const map = new Map();
let frameId = null;
const Store = initializeDefault.Store;
class FramesStoreClass extends Store {
}
const prototype = FramesStoreClass.prototype;
prototype["getFrame"] = function getFrame(frameId) {
  if (null != frameId) {
    return map.get(frameId);
  }
};
prototype["getMainFrame"] = function getMainFrame() {
  let tmp = null;
  if (null != frameId) {
    value = map.get(frameId);
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
    if (timestampProducer(item10009)) {
      if (item10009.data.iframeId === arg0) {
        obj.return();
        return item10009;
      }
    }
    continue;
  }
};
prototype["getFrameBySurface"] = function getFrameBySurface(arg0, arg1) {
  return map.get(React5(arg0, arg1));
};
prototype["getFramesForSurface"] = function getFramesForSurface(arg0) {
  closure_0 = arg0;
  return Array.from(map.values()).filter((applicationId) => React5(applicationId.applicationId, closure_0) === applicationId.id);
};
prototype["getFramesForChannel"] = function getFramesForChannel(id) {
  closure_0 = id;
  return Array.from(map.values()).filter((surface) => React4(surface.surface) === closure_0);
};
FramesStoreClass.displayName = "FramesStore";
const framesStoreClass = new FramesStoreClass(DispatcherDefault, {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    ({ frameId, surface } = applicationId);
    const tmp = hasOwnProperty(surface);
    const result = map.set(frameId, { id: frameId, applicationId: applicationId.applicationId, intent: tmp, surface, state: "loading", data: null });
  },
  FRAME_LAUNCH: function handleFrameLaunch(arg0) {
    ({ frameId, hostWindowKey } = arg0);
    let obj = map;
    ({ proxyTicket, customId, referrerId } = arg0);
    value = map.get(frameId);
    if (null != value) {
      const tmp8 = getURLForApplicationDefault(value.applicationId);
      if (null == tmp8) {
        obj.delete(frameId);
        if (frameId === frameId) {
          frameId = null;
        }
      } else {
        obj = {};
        const merged = Object.assign(value);
        obj.state = "launched";
        obj = { url: tmp8, connectedSince: null, layoutMode: null, activityPanelMode: null, proxyTicket: null, proxyTicketRefreshing: false, orientationLock: null, pipOrientationLock: null, prefersPictureInPictureOnNavigateAway: false, iframeId: null, hostWindowKey: null, customId: null, referrerId: null };
        const _Date = Date;
        obj.connectedSince = Date.now();
        obj.layoutMode = constants2.FOCUSED;
        obj.activityPanelMode = ActivityPanelModes.PANEL;
        obj.proxyTicket = proxyTicket;
        if (hostWindowKey == null) {
          hostWindowKey = null;
        }
        obj.hostWindowKey = hostWindowKey;
        obj.customId = customId;
        obj.referrerId = referrerId;
        obj.data = obj;
        const result = obj.set(frameId, obj);
      }
    }
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    if (frameId === frameId) {
      frameId = null;
    }
  },
  FRAME_STOP: function handleFrameStop(frameId) {
    frameId = frameId.frameId;
    map.delete(frameId);
    if (frameId === frameId) {
      frameId = null;
    }
  },
  FRAME_CLEAR_MAIN_SLOT: function handleFrameClearMainSlot(frameId) {
    if (frameId !== frameId.frameId) {
      return false;
    } else {
      frameId = null;
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
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
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
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
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
    ({ frameId, lockState, pictureInPictureLockState } = arg0);
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp4 = timestampProducer(value);
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
  FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY: function handleSetPrefersPictureInPictureOnNavigateAway(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.prefersPictureInPictureOnNavigateAway = tmp;
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
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
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
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
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
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(arg0) {
    ({ frameId, iframeId } = arg0);
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp4 = timestampProducer(value);
      if (tmp4) {
        let flag2 = tmp(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          const data = value.data;
          obj = {};
          const merged1 = Object.assign(data);
          obj.iframeId = iframeId;
          obj.prefersPictureInPictureOnNavigateAway = data.iframeId === iframeId && data.prefersPictureInPictureOnNavigateAway;
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
  FRAME_IFRAME_UNMOUNT: function handleFrameIframeUnmount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp4 = timestampProducer(value);
      if (tmp4) {
        let flag2 = value.data.iframeId === tmp;
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.iframeId = null;
          obj.prefersPictureInPictureOnNavigateAway = false;
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
  FRAME_HOST_WINDOW_MOUNT: function handleFrameHostWindowMount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.hostWindowKey = tmp;
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
  FRAME_HOST_WINDOW_UNMOUNT: function handleFrameHostWindowUnmount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp4 = timestampProducer(value);
      if (tmp4) {
        let flag2 = value.data.hostWindowKey === tmp;
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.hostWindowKey = null;
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
    if (null != frameId) {
      let obj = map;
      value = map.get(frameId);
      let tmp5 = timestampProducer(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          obj = {};
          const merged = Object.assign(value);
          obj = {};
          const merged1 = Object.assign(value.data);
          obj.layoutMode = constants2.PIP;
          obj.data = obj;
          const result = obj.set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  }
});
let result = size.fileFinishedImporting("modules/frames/FramesStore.tsx");

export default framesStoreClass;