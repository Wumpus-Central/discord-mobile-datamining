// === Module 6760: FramesStore ===

// Module 6760 (FramesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1098 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5595 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5609 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6762 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6763 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import size from "module_2" /* 2 */;

function findFrameByIframeId(iframeId) {
  const values = map.values();
  for (const item10009 of values) {
    if (React5(item10009)) {
      if (item10009.data.iframeId === arg0) {
        obj.return();
        return item10009;
      }
    }
    continue;
  }
}
({ asLaunched: c3, FrameIntent: closure_4, FrameLayoutModes: hasOwnProperty, getFrameIntentForSurface: metroRequire, isLaunched: closure_7, makeFrameId: closure_8 } = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const NOOP_TRUE = Constants.NOOP_TRUE;
const map = new Map();
let closure_12 = { audible: false };
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
prototype["isFramePooled"] = function isFramePooled(frameId) {
  value = map.get(frameId);
  let tmp2 = React5(value);
  if (tmp2) {
    tmp2 = "unpooled" !== value.data.poolVisibility;
  }
  return tmp2;
};
prototype["isFrameVisible"] = function isFrameVisible(frameId) {
  value = map.get(frameId);
  const tmp2 = React5(value);
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = "hidden" !== value.data.poolVisibility;
  }
  return tmp3;
};
prototype["getFrameByIframeId"] = function getFrameByIframeId(iframeId) {
  return findFrameByIframeId(iframeId);
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
prototype["getFrameByEmbeddedContext"] = function getFrameByEmbeddedContext(context, iframeId) {
  if (context.source.type === EmbeddedAppTypes.EmbeddedContextSourceType.FRAME) {
    const tmp3 = React3(map.get(context.source.frameId));
    if (null != tmp3) {
      if (tmp3.data.iframeId === iframeId) {
        return tmp3;
      }
    }
  }
};
prototype["getFrameBySurface"] = function getFrameBySurface(arg0, arg1) {
  return map.get(closure_1_8(arg0, arg1));
};
prototype["getFramesForSurface"] = function getFramesForSurface(frameSurfaceForChannel) {
  closure_0 = frameSurfaceForChannel;
  return Array.from(map.values()).filter((applicationId) => closure_2_8(applicationId.applicationId, closure_0) === applicationId.id);
};
prototype["getFramesForChannel"] = function getFramesForChannel(id) {
  closure_0 = id;
  return Array.from(map.values()).filter((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface) === closure_0);
};
FramesStoreClass.displayName = "FramesStore";
const framesStoreClass = new FramesStoreClass(DispatcherDefault, {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(arg0) {
    ({ frameId, surface, hostWindowKey } = arg0);
    ({ applicationId, launch, launchRequestId } = arg0);
    const obj = { id: frameId, applicationId, intent: timestampProducer(surface), surface, state: "loading", data: null, hostWindowKey: null, launch: null, launchRequestId: null };
    if (hostWindowKey == null) {
      hostWindowKey = null;
    }
    obj.hostWindowKey = hostWindowKey;
    obj.launch = launch;
    obj.launchRequestId = launchRequestId;
    const result = map.set(frameId, obj);
    const tmp = timestampProducer(surface);
  },
  FRAME_LAUNCH: function handleFrameLaunch(arg0) {
    ({ frameId, hostWindowKey, launchRequestId } = arg0);
    ({ proxyTicket, launch } = arg0);
    value = map.get(frameId);
    if (null != value) {
      if (!tmp2) {
        const tmp5 = getURLForApplicationDefault(value.applicationId);
        if (null == tmp5) {
          map.delete(frameId);
          if (frameId === frameId) {
            frameId = null;
          }
        } else {
          const obj3 = { id: null, applicationId: null, intent: null, surface: null, launchRequestId: null, state: "launched", data: null };
          ({ id: obj2.id, applicationId: obj2.applicationId, intent: obj2.intent, surface: obj2.surface, launchRequestId: obj2.launchRequestId } = value);
          const obj5 = { url: tmp5, connectedSince: null, layoutMode: null, activityPanelMode: null, proxyTicket: null, proxyTicketRefreshing: false, orientationLock: null, pipOrientationLock: null, runsInBackground: false, poolVisibility: "unpooled", muted: false, userMuted: false };
          const _Date = Date;
          obj5.connectedSince = Date.now();
          obj5.layoutMode = constants2.FOCUSED;
          obj5.activityPanelMode = ActivityPanelModes.PANEL;
          obj5.proxyTicket = proxyTicket;
          const merged = Object.assign(closure_12);
          obj5.iframeId = null;
          if (hostWindowKey == null) {
            hostWindowKey = null;
          }
          obj5.hostWindowKey = hostWindowKey;
          obj5.launch = launch;
          obj3.data = obj5;
          const result = map.set(frameId, obj3);
        }
      }
      tmp2 = null != launchRequestId && value.launchRequestId !== launchRequestId;
    }
    return false;
  },
  FRAME_LAUNCH_FAIL: function handleFrameLaunchFail(arg0) {
    ({ frameId, launchRequestId } = arg0);
    value = map.get(frameId);
    if (null != value) {
      if (tmp2) {
        return false;
      }
      tmp2 = null != launchRequestId && value.launchRequestId !== launchRequestId;
    }
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.layoutMode = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.activityPanelMode = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp4 = React5(value);
      if (tmp4) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const data = value.data;
          const obj3 = {};
          const merged1 = Object.assign(data);
          if (lockState == null) {
            lockState = null;
          }
          obj3.orientationLock = lockState;
          if (undefined === pictureInPictureLockState) {
            pictureInPictureLockState = data.pipOrientationLock;
          }
          obj3.pipOrientationLock = pictureInPictureLockState;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  FRAME_SET_RUNS_IN_BACKGROUND: function handleSetRunsInBackground(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.runsInBackground = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.proxyTicketRefreshing = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.proxyTicket = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_POOL_VISIBILITY_UPDATE: function handleFramePoolVisibilityUpdate(arg0) {
    ({ frameId, poolVisibility } = arg0);
    let flag = false;
    if (null != frameId) {
      value = map.get(frameId);
      let tmp4 = React5(value);
      if (tmp4) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const data = value.data;
          const obj3 = {};
          const merged1 = Object.assign(data);
          obj3.poolVisibility = poolVisibility;
          obj3.muted = "hidden" === poolVisibility || data.userMuted;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
          flag2 = true;
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  FRAME_SET_USER_MUTED: function handleSetUserMuted(arg0) {
    ({ frameId, muted } = arg0);
    let flag = false;
    if (null != frameId) {
      value = map.get(frameId);
      let tmp3 = React5(value);
      if (tmp3) {
        let flag2 = value.data.userMuted !== muted;
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const data = value.data;
          const obj3 = {};
          const merged1 = Object.assign(data);
          obj3.userMuted = muted;
          obj3.muted = "hidden" === data.poolVisibility || muted;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
          flag2 = true;
        }
        tmp3 = flag2;
      }
      flag = tmp3;
    }
    return flag;
  },
  EMBEDDED_APP_SHIM_STATE_UPDATE: function handleEmbeddedAppShimStateUpdate(iframeId) {
    const tmp = findFrameByIframeId(iframeId.iframeId);
    let tmp2 = null != tmp;
    if (tmp2) {
      const id = tmp.id;
      let flag = false;
      if (null != id) {
        value = map.get(id);
        let tmp6 = React5(value);
        if (tmp6) {
          let flag2 = tmp3(value.data);
          if (flag2) {
            const obj2 = {};
            const merged = Object.assign(value);
            const obj3 = {};
            const merged1 = Object.assign(value.data);
            obj3.audible = iframeId.state.audible;
            obj2.data = obj3;
            const result = map.set(id, obj2);
            flag2 = true;
          }
          tmp6 = flag2;
        }
        flag = tmp6;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  EMBEDDED_APP_SHIM_DISCONNECT: function handleEmbeddedAppShimDisconnect(iframeId) {
    const tmp = findFrameByIframeId(iframeId.iframeId);
    let tmp2 = null != tmp;
    if (tmp2) {
      const id = tmp.id;
      let flag = false;
      if (null != id) {
        value = map.get(id);
        let tmp6 = React5(value);
        if (tmp6) {
          let flag2 = tmp3(value.data);
          if (flag2) {
            const obj2 = {};
            const merged = Object.assign(value);
            const obj3 = {};
            const merged1 = Object.assign(value.data);
            const merged2 = Object.assign(closure_12);
            obj2.data = obj3;
            const result = map.set(id, obj2);
            flag2 = true;
          }
          tmp6 = flag2;
        }
        flag = tmp6;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(arg0) {
    ({ frameId, iframeId } = arg0);
    let flag = false;
    if (null != frameId) {
      value = map.get(frameId);
      let tmp3 = React5(value);
      if (tmp3) {
        let flag2 = value.data.iframeId !== iframeId;
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.iframeId = iframeId;
          obj3.runsInBackground = false;
          const merged2 = Object.assign(closure_12);
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
          flag2 = true;
        }
        tmp3 = flag2;
      }
      flag = tmp3;
    }
    return flag;
  },
  FRAME_IFRAME_UNMOUNT: function handleFrameIframeUnmount(frameId) {
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      value = map.get(frameId);
      let tmp4 = React5(value);
      if (tmp4) {
        let flag2 = value.data.iframeId === tmp;
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.iframeId = null;
          obj3.runsInBackground = false;
          const merged2 = Object.assign(closure_12);
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.hostWindowKey = tmp;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp4 = React5(value);
      if (tmp4) {
        let flag2 = value.data.hostWindowKey === tmp;
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.hostWindowKey = null;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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
      value = map.get(frameId);
      let tmp5 = React5(value);
      if (tmp5) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj2 = {};
          const merged = Object.assign(value);
          const obj3 = {};
          const merged1 = Object.assign(value.data);
          obj3.layoutMode = constants2.PIP;
          obj2.data = obj3;
          const result = map.set(frameId, obj2);
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