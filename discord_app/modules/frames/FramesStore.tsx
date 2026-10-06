// discord_app/modules/frames/FramesStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import ActivityPanelConstants from "../activities/panel/ActivityPanelConstants.tsx";
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import FramesConstants from "FramesConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  FrameIntent: c2,
  FrameLayoutModes: c3,
  getChannelIdForSurface: closure_4,
  getFrameIntentForSurface: hasOwnProperty,
  isLaunched: metroRequire,
  makeFrameId: metroImportDefault,
} = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const NOOP_TRUE = Constants.NOOP_TRUE;
const map = new Map();
let frameId = null;
const Store = get_initializedDefault.Store;
class FramesStoreClass extends Store {
  getFrame(frameId) {
    if (null != frameId) {
      return map.get(frameId);
    }
  }
  getMainFrame() {
    let tmp = null;
    if (null != frameId) {
      let value = map.get(frameId);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getAllFrames() {
    return Array.from(map.values());
  }
  getFrameByIframeId(iframeId) {
    const values = map.values();
    for (const item10009 of values) {
      if (metroRequire(item10009)) {
        if (item10009.data.iframeId === iframeId) {
          obj.return();
          return item10009;
        }
      }
      continue;
    }
  }
  getFrameBySurface(previewAppId, CONJURE_PREVIEW_SURFACE) {
    return map.get(metroImportDefault(previewAppId, CONJURE_PREVIEW_SURFACE));
  }
  getFramesForSurface(arg0) {
    let closure_0 = arg0;
    const arr = Array.from(map.values());
    return arr.filter(
      (applicationId) => metroImportDefault(applicationId.applicationId, closure_0) === applicationId.id,
    );
  }
  getFramesForChannel(id) {
    let closure_0 = id;
    const arr = Array.from(map.values());
    return arr.filter((surface) => React3(surface.surface) === id);
  }
}
const prototype = FramesStoreClass.prototype;
FramesStoreClass.displayName = "FramesStore";
let obj = {
  FRAME_LAUNCH_START: function handleFrameLaunchStart(applicationId) {
    let surface;
    ({ frameId, surface } = applicationId);
    applicationId = applicationId.applicationId;
    const tmp = hasOwnProperty(surface);
    const result = map.set(frameId, { id: frameId, applicationId, intent: tmp, surface, state: "loading", data: null });
  },
  FRAME_LAUNCH: function handleFrameLaunch(arg0) {
    let customId;
    let hostWindowKey;
    let obj3;
    let proxyTicket;
    let referrerId;
    ({ frameId, hostWindowKey } = arg0);
    ({ proxyTicket, customId, referrerId } = arg0);
    const value = map.get(frameId);
    if (null != value) {
      const tmp8 = getURLForApplicationDefault(value.applicationId);
      if (null == tmp8) {
        map.delete(frameId);
        if (frameId === frameId) {
          frameId = null;
        }
      } else {
        const obj2 = { state: "launched", data: obj3 };
        set = map.set;
        const merged = Object.assign(value);
        const _Date = Date;
        obj3 = {
          url: tmp8,
          connectedSince: Date.now(),
          layoutMode: constants2.FOCUSED,
          activityPanelMode: ActivityPanelModes.PANEL,
          proxyTicket,
          proxyTicketRefreshing: false,
          orientationLock: null,
          pipOrientationLock: null,
          prefersPictureInPictureOnNavigateAway: false,
          iframeId: null,
          hostWindowKey,
          customId,
          referrerId,
        };
        if (hostWindowKey == null) {
          hostWindowKey = null;
        }
        const result = set(frameId, obj2);
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
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { layoutMode: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_PANEL_MODE: function handleSetPanelMode(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { activityPanelMode: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let lockState;
    let obj2;
    let pictureInPictureLockState;
    ({ frameId, lockState, pictureInPictureLockState } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroRequire(value);
      if (tmp5) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          const data = value.data;
          obj2 = { orientationLock: lockState, pipOrientationLock: pictureInPictureLockState };
          const merged1 = Object.assign(data);
          if (lockState == null) {
            lockState = null;
          }
          if (undefined === pictureInPictureLockState) {
            pictureInPictureLockState = data.pipOrientationLock;
          }
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY: function handleSetPrefersPictureInPictureOnNavigateAway(
    frameId,
  ) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { prefersPictureInPictureOnNavigateAway: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_SET_PROXY_TICKET_REFRESHING: function handleSetProxyTicketRefreshing(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { proxyTicketRefreshing: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_UPDATE_PROXY_TICKET: function handleUpdateProxyTicket(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { proxyTicket: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_IFRAME_MOUNT: function handleFrameIframeMount(arg0) {
    let iframeId;
    let obj2;
    ({ frameId, iframeId } = arg0);
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroRequire(value);
      if (tmp5) {
        let flag2 = tmp(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          const data = value.data;
          obj2 = {
            iframeId,
            prefersPictureInPictureOnNavigateAway:
              data.iframeId === iframeId && data.prefersPictureInPictureOnNavigateAway,
          };
          const merged1 = Object.assign(data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_IFRAME_UNMOUNT: function handleFrameIframeUnmount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroRequire(value);
      if (tmp5) {
        let flag2 = value.data.iframeId === tmp;
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { iframeId: null, prefersPictureInPictureOnNavigateAway: false };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  FRAME_HOST_WINDOW_MOUNT: function handleFrameHostWindowMount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { hostWindowKey: tmp };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
  FRAME_HOST_WINDOW_UNMOUNT: function handleFrameHostWindowUnmount(frameId) {
    let obj2;
    frameId = frameId.frameId;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp5 = metroRequire(value);
      if (tmp5) {
        let flag2 = value.data.hostWindowKey === tmp;
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { hostWindowKey: null };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      flag = tmp5;
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let obj2;
    let flag = false;
    if (null != frameId) {
      const value = map.get(frameId);
      let tmp6 = metroRequire(value);
      if (tmp6) {
        let flag2 = tmp2(value.data);
        if (flag2) {
          const obj = { data: obj2 };
          set = map.set;
          const merged = Object.assign(value);
          obj2 = { layoutMode: constants2.PIP };
          const merged1 = Object.assign(value.data);
          const result = set(frameId, obj);
          flag2 = true;
        }
        tmp6 = flag2;
      }
      flag = tmp6;
    }
    return flag;
  },
};
const framesStoreClass = new FramesStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/frames/FramesStore.tsx");

export default framesStoreClass;
