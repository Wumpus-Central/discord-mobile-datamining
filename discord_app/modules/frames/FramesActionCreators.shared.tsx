// discord_app/modules/frames/FramesActionCreators.shared.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ActivityPanelConstants from "../activities/panel/ActivityPanelConstants.tsx";
import leaveCurrentEmbeddedActivity from "../activities/utils/leaveCurrentEmbeddedActivity.tsx";
import EmbeddedActivitiesActionCreators from "../activities/EmbeddedActivitiesActionCreators.tsx";
import getFramesManagerDefault from "utils/getFramesManager.native.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import FramesStore from "FramesStore.tsx";
import FramesConstants from "FramesConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let dispatchResult1;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _launchFrame() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let hostWindowKey;
    let obj11;
    let obj6;
    let value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (applicationId === 1) {
        throw value;
      } else if (applicationId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let analyticsContext;
      try {
        let surface;
        let customId;
        let referrerId;
        let intent;
        let proxyTicket;
        let closure_9;
        let message;
        c6 = 2;
        if (0 === hostWindowKey) {
          if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            applicationId = undefined;
            surface = undefined;
            customId = undefined;
            referrerId = undefined;
            analyticsContext = undefined;
            ({
              applicationId: c0,
              surface: c1,
              customId: c2,
              referrerId: c3,
              analyticsContext: c4,
              hostWindowKey: c5,
            } = closure_0);
            value = undefined;
            intent = undefined;
            proxyTicket = undefined;
            closure_9 = undefined;
            message = undefined;
            hostWindowKey = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === hostWindowKey) {
          if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            value = closure_130_9(applicationId, surface);
            intent = closure_130_4.getFrame(value);
            if (null != intent) {
              if (intent.intent === closure_130_5.MAIN) {
                closure_130_14(value);
                const obj7 = { frameId: value, layoutMode: closure_130_6.FOCUSED };
                closure_130_15(obj7);
              }
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              if (closure_130_8(surface) === closure_130_5.MAIN) {
                const obj8 = closure_130_0(closure_130_2[4]);
                const result = obj8.leaveCurrentEmbeddedActivity();
                closure_130_12();
              }
              const obj12 = { type: "FRAME_LAUNCH_START", applicationId, frameId: value, surface };
              const obj9 = closure_130_1(closure_130_2[5]);
              obj9.dispatch(obj12);
              analyticsContext = 1;
              hostWindowKey = 4;
              c6 = 1;
              const obj13 = { value: obj11.createProxyTicket(applicationId, closure_130_7(surface)), done: false };
              obj11 = closure_130_0(closure_130_2[6]);
              return obj13;
            }
          }
        } else {
          let error;
          if (2 === hostWindowKey) {
            analyticsContext = 0;
            error = closure_3;
            closure_9 = closure_130_1(closure_130_2[7])();
            hostWindowKey = 3;
            c6 = 1;
            const obj14 = { value: obj6.getActivityLaunchErrorInfo(error, applicationId), done: false };
            obj6 = closure_130_0(closure_130_2[8]);
            return obj14;
          } else if (3 === hostWindowKey) {
            if (applicationId === 1) {
              c6 = 3;
              throw value;
            } else if (applicationId === 2) {
              c6 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              message = value;
              closure_9.showLaunchErrorModal(message.message);
              const obj16 = { type: "FRAME_LAUNCH_FAIL", applicationId, frameId: value, error, analyticsContext };
              const obj3 = closure_130_1(closure_130_2[5]);
              obj3.dispatch(obj16);
              throw error;
            }
          } else if (applicationId === 1) {
            c6 = 3;
            throw value;
          } else if (applicationId === 2) {
            analyticsContext = 0;
            c6 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            proxyTicket = value;
            const obj19 = {
              type: "FRAME_LAUNCH",
              applicationId,
              frameId: value,
              surface,
              proxyTicket,
              customId,
              referrerId,
              analyticsContext,
              hostWindowKey,
            };
            const obj18 = closure_130_1(closure_130_2[5]);
            obj18.dispatch(obj19);
            analyticsContext = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp63) {
        closure_3 = tmp63;
        if (0 === analyticsContext) {
          c6 = 3;
          throw tmp63;
        } else {
          hostWindowKey = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function clearMainFrameSlot() {
  const mainFrame = FramesStore.getMainFrame();
  if (null != mainFrame) {
    if (mainFrame.intent === hasOwnProperty.MAIN) {
      obj = getFramesManagerDefault();
      obj.leaveFrame(mainFrame.id);
    } else {
      demoteMainFrame(mainFrame.id);
    }
  }
}
function demoteMainFrame(id) {
  const mainFrame = FramesStore.getMainFrame();
  id = undefined;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  if (id === id) {
    const FOCUSED = metroRequire.FOCUSED;
    const frame = FramesStore.getFrame(id);
    if (null != frame) {
      const obj3 = {
        type: "FRAME_UPDATE_LAYOUT_MODE",
        applicationId: frame.applicationId,
        frameId: id,
        layoutMode: FOCUSED,
      };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
    const PANEL = ActivityPanelModes.PANEL;
    const obj5 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PANEL };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
    const obj7 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: id };
    const obj6 = DispatcherDefault;
    obj6.dispatch(obj7);
  }
}
function promoteFrame(frameId) {
  let tmp = null != FramesStore.getFrame(frameId);
  if (tmp) {
    const mainFrame = FramesStore.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp = id !== frameId;
  }
  if (tmp) {
    const obj2 = leaveCurrentEmbeddedActivity;
    const result = obj2.leaveCurrentEmbeddedActivity();
    const mainFrame1 = FramesStore.getMainFrame();
    if (null != mainFrame1) {
      if (mainFrame1.intent === hasOwnProperty.MAIN) {
        const obj3 = getFramesManagerDefault();
        obj3.leaveFrame(mainFrame1.id);
      } else {
        demoteMainFrame(mainFrame1.id);
      }
    }
    const obj5 = { type: "FRAME_PROMOTE", frameId };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const layoutMode = frameId.layoutMode;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
obj = function _refreshProxyTicket() {
  obj = _asyncToGenerator(async (frameId) => {
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj22;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp49;
        let c4;
        try {
          let applicationId;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              applicationId = undefined;
              proxyTicket = undefined;
              tmp49 = undefined;
              message = undefined;
              frame = frame.getFrame(frameId);
              if (null == frame) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                applicationId = frame.applicationId;
                const surface = frame.surface;
                const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: true };
                const obj20 = DispatcherDefault;
                obj20.dispatch(obj5);
                c4 = 2;
                c5 = 4;
                c6 = 1;
                const obj7 = { value: obj22.createProxyTicket(applicationId, closure_2_7(surface)), done: false };
                obj22 = EmbeddedActivitiesActionCreators;
                return obj7;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj11 = closure_130_1(closure_130_2[5]);
            dispatchResult1 = obj11.dispatch(obj8);
            throw tmp49;
          } else if (2 === c5) {
            c4 = 1;
            let closure_5 = tmp49;
            tmp49 = closure_130_1(closure_130_2[7])();
            const obj9 = closure_130_0(closure_130_2[8]);
            dispatchResult1 = obj9.getActivityLaunchErrorInfo(closure_5, applicationId);
            c5 = 3;
            c6 = 1;
            return { value: dispatchResult1, done: false };
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj6 = closure_130_1(closure_130_2[5]);
              obj6.dispatch(obj12);
              c6 = 3;
              return { value, done: true };
            } else {
              message = value;
              tmp49.showLaunchErrorModal(message.message);
              c4 = 0;
              const obj14 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
              const obj4 = closure_130_1(closure_130_2[5]);
              obj4.dispatch(obj14);
              c6 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const obj15 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            obj = closure_130_1(closure_130_2[5]);
            obj.dispatch(obj15);
            c6 = 3;
            return { value, done: true };
          } else {
            proxyTicket = value;
            const obj19 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId, frameId, proxyTicket };
            const obj16 = closure_130_1(closure_130_2[5]);
            obj16.dispatch(obj19);
            c4 = 0;
            const obj21 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: false };
            const obj18 = closure_130_1(closure_130_2[5]);
            obj18.dispatch(obj21);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp49) {
          if (0 === c4) {
            c6 = 3;
            throw tmp49;
          } else if (1 === tmp51) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({
  FrameIntent: hasOwnProperty,
  FrameLayoutModes: metroRequire,
  getChannelIdForSurface: metroImportDefault,
  getFrameIntentForSurface: metroImportAll,
  makeFrameId: c9,
} = FramesConstants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let result = size.fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame() {
  return obj(...arguments);
};
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export const setFramePrefersPictureInPictureOnNavigateAway = function setFramePrefersPictureInPictureOnNavigateAway(
  frameId,
  enabled,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId, enabled };
  obj.dispatch(obj2);
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj2);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const FOCUSED = metroRequire.FOCUSED;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: FOCUSED };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
  const PANEL = ActivityPanelModes.PANEL;
  const obj3 = DispatcherDefault;
  const obj4 = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: PANEL };
  obj3.dispatch(obj4);
};
export const attachFrameIframe = function attachFrameIframe(id, first1) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_MOUNT", frameId: id, iframeId: first1 };
  obj.dispatch(obj2);
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId };
  obj.dispatch(obj2);
};
export const attachFrameHostWindow = function attachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_MOUNT", frameId, windowKey };
  obj.dispatch(obj2);
};
export const detachFrameHostWindow = function detachFrameHostWindow(frameId, windowKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "FRAME_HOST_WINDOW_UNMOUNT", frameId, windowKey };
  obj.dispatch(obj2);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  return obj(...arguments);
};
