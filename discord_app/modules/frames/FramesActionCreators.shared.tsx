// === Module 9509: _launchFrame ===

// Module 9509 (_launchFrame)
import DispatcherDefault from "Dispatcher" /* 573 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import leaveCurrentEmbeddedActivity from "leaveCurrentEmbeddedActivity" /* 9513 */;
import getFramesManagerDefault from "getFramesManager" /* 9567 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FramesStore from "FramesStore" /* 9510 */;

require = fn;
let closure_11 = async function _launchFrame(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ applicationId: closure_129_0, surface: closure_129_1, customId: closure_129_2, referrerId: closure_129_3, analyticsContext: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          let frame;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_5 = closure_130_9(closure_129_0, closure_129_1);
          frame = closure_130_4.getFrame(closure_129_5);
          if (null != frame) {
            if (frame.intent === closure_130_5.MAIN) {
              closure_130_14(closure_129_5);
              let obj2 = { frameId: closure_129_5, layoutMode: closure_130_6.FOCUSED };
              closure_130_15(obj2);
            }
            c6 = 3;
            const obj3 = { value: closure_129_5, done: true };
            return obj3;
          } else {
            if (closure_130_8(closure_129_1) === closure_130_5.MAIN) {
              let obj7 = closure_130_0(closure_130_2[4]);
              const result = obj7.leaveCurrentEmbeddedActivity();
              closure_130_12();
            }
            let obj8 = closure_130_1(closure_130_2[5]);
            const obj4 = { type: "FRAME_LAUNCH_START", applicationId: closure_129_0, frameId: closure_129_5, surface: closure_129_1 };
            obj8.dispatch(obj4);
            c4 = 1;
            let obj10 = closure_130_0(closure_130_2[6]);
            c5 = 4;
            c6 = 1;
            let obj5 = { value: obj10.createProxyTicket(closure_129_0, closure_130_7(closure_129_1)), done: false };
            return obj5;
          }
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_10 = closure_3;
        closure_129_8 = closure_130_1(closure_130_2[7])();
        obj5 = closure_130_0(closure_130_2[8]);
        c5 = 3;
        c6 = 1;
        const obj6 = { value: obj5.getActivityLaunchErrorInfo(closure_129_10, closure_129_0), done: false };
        return obj6;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_9 = value;
          closure_129_8.showLaunchErrorModal(closure_129_9.message);
          obj2 = closure_130_1(closure_130_2[5]);
          obj8 = { type: "FRAME_LAUNCH_FAIL", applicationId: closure_129_0, frameId: closure_129_5, error: closure_129_10 };
          obj2.dispatch(obj8);
          throw closure_129_10;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_129_7 = value;
        obj10 = { type: "FRAME_LAUNCH", applicationId: closure_129_0, frameId: closure_129_5, surface: closure_129_1, proxyTicket: closure_129_7, customId: closure_129_2, referrerId: closure_129_3, analyticsContext: closure_129_4 };
        closure_130_1(closure_130_2[5]).dispatch(obj10);
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_5, done: true };
        return obj;
      }
    } catch (tmp65) {
      closure_3 = tmp65;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp65;
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
  let obj = FramesStore;
  const mainFrame = FramesStore.getMainFrame();
  id = undefined;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  if (id === id) {
    const frame = obj.getFrame(id);
    if (null != frame) {
      let obj1 = DispatcherDefault;
      obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId: id, layoutMode: constants2.FOCUSED };
      obj1.dispatch(obj);
    }
    obj = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: ActivityPanelModes.PANEL };
    DispatcherDefault.dispatch(obj);
    obj1 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: id };
    DispatcherDefault.dispatch(obj1);
  }
}
function promoteFrame(frameId) {
  let obj = FramesStore;
  let tmp = null != FramesStore.getFrame(frameId);
  if (tmp) {
    const mainFrame = obj.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp = id !== frameId;
  }
  if (tmp) {
    const result = leaveCurrentEmbeddedActivity.leaveCurrentEmbeddedActivity();
    let mainFrame1 = obj.getMainFrame();
    if (null == mainFrame1) {
      mainFrame1 = DispatcherDefault;
      obj = { type: "FRAME_PROMOTE", frameId };
      mainFrame1.dispatch(obj);
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
    const obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: frameId.layoutMode };
    obj.dispatch(obj);
  }
}
let closure_16 = async function _refreshProxyTicket(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp6;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          frame = frame.getFrame(closure_0);
          if (null == frame) {
            c6 = 3;
            return { value: false, done: true };
          } else {
            const applicationId = frame.applicationId;
            closure_129_1 = applicationId;
            const obj1 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId: tmp77, refreshing: true };
            DispatcherDefault.dispatch(obj1);
            c4 = 2;
            c5 = 4;
            c6 = 1;
            const obj2 = { value: EmbeddedActivitiesActionCreators.createProxyTicket(applicationId, React5(frame.surface)), done: false };
            return obj2;
          }
          tmp77 = closure_0;
        }
      } else if (1 === tmp9) {
        c4 = 0;
        let obj10 = closure_130_1(closure_130_2[5]);
        let obj3 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
        obj10.dispatch(obj3);
        throw closure_3;
      } else if (2 === tmp9) {
        c4 = 1;
        closure_129_5 = closure_3;
        closure_129_3 = closure_130_1(closure_130_2[7])();
        let obj8 = closure_130_0(closure_130_2[8]);
        c5 = 3;
        c6 = 1;
        const obj4 = { value: obj8.getActivityLaunchErrorInfo(closure_129_5, closure_129_1), done: false };
        return obj4;
      } else if (3 === tmp9) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          let obj5 = closure_130_1(closure_130_2[5]);
          obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
          obj5.dispatch(obj5);
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_4 = value;
          closure_129_3.showLaunchErrorModal(closure_129_4.message);
          c4 = 0;
          obj3 = closure_130_1(closure_130_2[5]);
          const obj7 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
          obj3.dispatch(obj7);
          c6 = 3;
          return { value: false, done: true };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        obj = closure_130_1(closure_130_2[5]);
        obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
        obj.dispatch(obj8);
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_129_2 = value;
        obj10 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId: closure_129_1, frameId: closure_129_0, proxyTicket: closure_129_2 };
        closure_130_1(closure_130_2[5]).dispatch(obj10);
        c4 = 0;
        const obj16 = closure_130_1(closure_130_2[5]);
        const obj11 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: closure_129_1, frameId: closure_129_0, refreshing: false };
        closure_130_1(closure_130_2[5]).dispatch(obj11);
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
};
const FramesConstants = fn(9511);
({ FrameIntent: hasOwnProperty, FrameLayoutModes: metroRequire, getChannelIdForSurface: closure_7, getFrameIntentForSurface: closure_8, makeFrameId: closure_9 } = FramesConstants);
const ActivityPanelModes = fn(9505).ActivityPanelModes;
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
  const obj = { type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId, enabled };
  obj.dispatch(obj);
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  const obj = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    let obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: frame.applicationId, frameId, layoutMode: constants2.FOCUSED };
    obj.dispatch(obj);
  }
  obj = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL };
  DispatcherDefault.dispatch(obj);
};
export const attachFrameIframe = function attachFrameIframe(frameId, iframeId) {
  const obj = { type: "FRAME_IFRAME_MOUNT", frameId, iframeId };
  obj.dispatch(obj);
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  const obj = { type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId };
  obj.dispatch(obj);
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