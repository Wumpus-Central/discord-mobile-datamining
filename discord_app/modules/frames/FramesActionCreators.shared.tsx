// === Module 9639: _launchFrame ===

// Module 9639 (_launchFrame)
import DispatcherDefault from "Dispatcher" /* 573 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9634 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 9643 */;
import getFramesManagerDefault from "getFramesManager" /* 9697 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FramesStore from "FramesStore" /* 9640 */;

require = fn;
let closure_11 = async function _launchFrame(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ applicationId: closure_129_0, surface: closure_129_1, customId: closure_129_2, referrerId: closure_129_3, analyticsContext: closure_129_4, hostWindowKey: closure_129_5 } = closure_0);
          closure_129_6 = undefined;
          let frame;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_6 = closure_130_9(closure_129_0, closure_129_1);
          frame = closure_130_4.getFrame(closure_129_6);
          if (null != frame) {
            if (frame.intent === closure_130_5.MAIN) {
              closure_130_14(closure_129_6);
              const obj7 = { frameId: closure_129_6, layoutMode: closure_130_6.FOCUSED };
              closure_130_15(obj7);
            }
            c6 = 3;
            const obj10 = { value: closure_129_6, done: true };
            return obj10;
          } else {
            if (closure_130_8(closure_129_1) === closure_130_5.MAIN) {
              const result = closure_130_0(closure_130_2[4]).leaveCurrentEmbeddedActivity();
              closure_130_12();
              const obj8 = closure_130_0(closure_130_2[4]);
            }
            const obj12 = { type: "FRAME_LAUNCH_START", applicationId: closure_129_0, frameId: closure_129_6, surface: closure_129_1 };
            closure_130_1(closure_130_2[5]).dispatch(obj12);
            c4 = 1;
            const obj9 = closure_130_1(closure_130_2[5]);
            c5 = 4;
            c6 = 1;
            const obj13 = { value: closure_130_0(closure_130_2[6]).createProxyTicket(closure_129_0, closure_130_7(closure_129_1)), done: false };
            return obj13;
          }
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_11 = closure_3;
        closure_129_9 = closure_130_1(closure_130_2[7])();
        c5 = 3;
        c6 = 1;
        const obj14 = { value: closure_130_0(closure_130_2[8]).getActivityLaunchErrorInfo(closure_129_11, closure_129_0), done: false };
        return obj14;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_129_10 = value;
          closure_129_9.showLaunchErrorModal(closure_129_10.message);
          const obj16 = { type: "FRAME_LAUNCH_FAIL", applicationId: closure_129_0, frameId: closure_129_6, error: closure_129_11, analyticsContext: closure_129_4 };
          closure_130_1(closure_130_2[5]).dispatch(obj16);
          throw closure_129_11;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_129_8 = value;
        const obj19 = { type: "FRAME_LAUNCH", applicationId: closure_129_0, frameId: closure_129_6, surface: closure_129_1, proxyTicket: closure_129_8, customId: closure_129_2, referrerId: closure_129_3, analyticsContext: closure_129_4, hostWindowKey: closure_129_5 };
        closure_130_1(closure_130_2[5]).dispatch(obj19);
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_6, done: true };
        return obj;
      }
    } catch (tmp66) {
      closure_3 = tmp66;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp66;
      } else {
        c5 = tmp;
      }
    }
  }
};
function clearMainFrameSlot() {
  const mainFrame = FramesStore.getMainFrame();
  if (null != mainFrame) {
    if (mainFrame.intent === constants.MAIN) {
      getFramesManagerDefault().leaveFrame(mainFrame.id);
      const obj = getFramesManagerDefault();
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
    const frame = FramesStore.getFrame(id);
    if (null != frame) {
      const obj3 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId: id, layoutMode: constants2.FOCUSED };
      DispatcherDefault.dispatch(obj3);
    }
    const obj5 = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: ActivityPanelModes.PANEL };
    DispatcherDefault.dispatch(obj5);
    const obj7 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: id };
    DispatcherDefault.dispatch(obj7);
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
    const result = leaveCurrentEmbeddedActivity.leaveCurrentEmbeddedActivity();
    let mainFrame1 = FramesStore.getMainFrame();
    if (null == mainFrame1) {
      mainFrame1 = DispatcherDefault;
      const obj3 = { type: "FRAME_PROMOTE", frameId };
      mainFrame1.dispatch(obj3);
    } else if (mainFrame1.intent !== constants.MAIN) {
      demoteMainFrame(mainFrame1.id);
    }
    getFramesManagerDefault().leaveFrame(mainFrame1.id);
    const obj4 = getFramesManagerDefault();
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: frameId.layoutMode };
    DispatcherDefault.dispatch(obj2);
  }
}
let closure_16 = async function _refreshProxyTicket() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp6;
            closure_129_0 = frameId;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            frame = frame.getFrame(frameId);
            if (null == frame) {
              c6 = 3;
              return { value: false, done: true };
            } else {
              const applicationId = frame.applicationId;
              closure_129_1 = applicationId;
              const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId, refreshing: true };
              DispatcherDefault.dispatch(obj5);
              c4 = 2;
              c5 = 4;
              c6 = 1;
              const obj7 = { value: EmbeddedActivitiesActionCreators.createProxyTicket(applicationId, closure_2_7(frame.surface)), done: false };
              return obj7;
            }
          }
        } else if (1 === tmp9) {
          c4 = 0;
          const obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
          closure_130_1(closure_130_2[5]).dispatch(obj8);
          throw closure_3;
        } else if (2 === tmp9) {
          c4 = 1;
          closure_129_5 = closure_3;
          closure_129_3 = closure_130_1(closure_130_2[7])();
          c5 = 3;
          c6 = 1;
          const obj10 = { value: closure_130_0(closure_130_2[8]).getActivityLaunchErrorInfo(closure_129_5, closure_129_1), done: false };
          return obj10;
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
            closure_130_1(closure_130_2[5]).dispatch(obj12);
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_129_4 = value;
            closure_129_3.showLaunchErrorModal(closure_129_4.message);
            c4 = 0;
            const obj14 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
            closure_130_1(closure_130_2[5]).dispatch(obj14);
            c6 = 3;
            return { value: false, done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          const obj15 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
          closure_130_1(closure_130_2[5]).dispatch(obj15);
          c6 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          closure_129_2 = value;
          const obj19 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId: closure_129_1, frameId: closure_129_0, proxyTicket: closure_129_2 };
          closure_130_1(closure_130_2[5]).dispatch(obj19);
          c4 = 0;
          const obj16 = closure_130_1(closure_130_2[5]);
          const obj21 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
          closure_130_1(closure_130_2[5]).dispatch(obj21);
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp54) {
        closure_3 = tmp54;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp54;
        } else if (tmp2 === tmp56) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const FramesConstants = fn(9641);
({ FrameIntent: hasOwnProperty, FrameLayoutModes: metroRequire, getChannelIdForSurface: closure_7, getFrameIntentForSurface: closure_8, makeFrameId: closure_9 } = FramesConstants);
const ActivityPanelModes = fn(9635).ActivityPanelModes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export const setFramePrefersPictureInPictureOnNavigateAway = function setFramePrefersPictureInPictureOnNavigateAway(frameId, enabled) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId, enabled });
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP });
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: constants2.FOCUSED };
    DispatcherDefault.dispatch(obj2);
  }
  DispatcherDefault.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL });
  const obj4 = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL };
};
export const attachFrameIframe = function attachFrameIframe(frameId, iframeId) {
  DispatcherDefault.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId, iframeId });
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  DispatcherDefault.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId });
};
export const attachFrameHostWindow = function attachFrameHostWindow(frameId, windowKey) {
  DispatcherDefault.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId, windowKey });
};
export const detachFrameHostWindow = function detachFrameHostWindow(frameId, windowKey) {
  DispatcherDefault.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId, windowKey });
};
export const refreshProxyTicket = function refreshProxyTicket() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};