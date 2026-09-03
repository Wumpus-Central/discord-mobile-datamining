// discord_app/modules/frames/FramesActionCreators.shared.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import leaveCurrentEmbeddedActivity from "../activities/utils/leaveCurrentEmbeddedActivity.tsx";
import getFramesManagerDefault from "utils/getFramesManager.native.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "FramesStore.tsx";
import FrameLayoutModes from "FramesConstants.tsx";
import { ActivityPanelModes } from "../activities/panel/ActivityPanelConstants.tsx";

require = arg1;
function _launchFrame() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function* (arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === frame2) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              ({ applicationId: c0, surface: c1, customId: c2, referrerId: c3 } = callback);
              let frame;
              frame2 = undefined;
              constants = undefined;
              let lib;
              let lib2;
              frame2 = 1;
              constants = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              frame = callback3(callback, callback2);
              frame2 = frame.getFrame(frame);
              if (null != frame2) {
                if (frame2.intent === frame2.MAIN) {
                  callback5(frame);
                  let obj2 = { frameId: null, layoutMode: null };
                  obj2[0] = frame;
                  obj2[1] = constants.FOCUSED;
                  callback6(obj2);
                }
                constants = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = frame;
                return obj3;
              } else {
                if (lib2(callback2) === frame2.MAIN) {
                  let obj7 = callback(9485);
                  const result = obj7.leaveCurrentEmbeddedActivity();
                  callback4();
                }
                let obj8 = callback2(706);
                const obj4 = { type: "FRAME_LAUNCH_START", applicationId: null, frameId: null, surface: null };
                obj4[1] = callback;
                obj4[2] = frame;
                obj4[3] = callback2;
                obj8.dispatch(obj4);
                frame = 1;
                let obj10 = callback(9486);
                frame2 = 4;
                constants = 1;
                let obj5 = { value: null, done: false };
                obj5[0] = obj10.createProxyTicket(callback, lib(callback2));
                return obj5;
              }
            }
          } else if (2 === tmp7) {
            frame = 0;
            callback3 = c3;
            lib = callback2(9469)();
            obj5 = callback(9512);
            frame2 = 3;
            constants = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = obj5.getActivityLaunchErrorInfo(callback3, callback);
            return obj6;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              lib2 = arg1;
              lib.showLaunchErrorModal(lib2.message);
              obj2 = callback2(706);
              obj8 = { type: "FRAME_LAUNCH_FAIL", applicationId: null, frameId: null, error: null };
              obj8[1] = callback;
              obj8[2] = frame;
              obj8[3] = callback3;
              obj2.dispatch(obj8);
              throw callback3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            frame = 0;
            constants = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            constants = arg1;
            obj10 = {
              type: "FRAME_LAUNCH",
              applicationId: null,
              frameId: null,
              surface: null,
              proxyTicket: null,
              customId: null,
              referrerId: null,
            };
            obj10[1] = callback;
            obj10[2] = frame;
            obj10[3] = callback2;
            obj10[4] = constants;
            obj10[5] = dependencyMap;
            obj10[6] = c3;
            callback2(706).dispatch(obj10);
            frame = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = frame;
            return obj;
          }
        } catch (tmp66) {
          c3 = tmp66;
          if (tmp4 === frame) {
            constants = tmp2;
            throw tmp66;
          } else {
            frame2 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function clearMainFrameSlot() {
  const mainFrame = store.getMainFrame();
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
  let obj = store;
  const mainFrame = store.getMainFrame();
  id = undefined;
  if (mainFrame != null) {
    id = mainFrame.id;
  }
  if (id === id) {
    const frame = obj.getFrame(id);
    if (null != frame) {
      obj1 = dispatcherDefault;
      obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: null, frameId: null, layoutMode: null };
      obj[1] = frame.applicationId;
      obj[2] = id;
      obj[3] = constants2.FOCUSED;
      obj1.dispatch(obj);
    }
    obj = { type: "FRAME_SET_PANEL_MODE", frameId: null, activityPanelMode: null };
    obj[1] = id;
    obj[2] = ActivityPanelModes.PANEL;
    dispatcherDefault.dispatch(obj);
    const obj4 = dispatcherDefault;
    obj1 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: null };
    obj1[1] = id;
    dispatcherDefault.dispatch(obj1);
    const obj6 = dispatcherDefault;
  }
}
function promoteFrame(frameId) {
  let obj = store;
  let tmp = null != store.getFrame(frameId);
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
      mainFrame1 = dispatcherDefault;
      obj = { type: "FRAME_PROMOTE", frameId: null };
      obj[1] = frameId;
      mainFrame1.dispatch(obj);
    } else if (mainFrame1.intent !== constants.MAIN) {
      demoteMainFrame(mainFrame1.id);
    }
    const obj2 = leaveCurrentEmbeddedActivity;
    getFramesManagerDefault().leaveFrame(mainFrame1.id);
    const obj4 = getFramesManagerDefault();
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const frame = store.getFrame(frameId);
  if (null != frame) {
    let obj = dispatcherDefault;
    obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: null, frameId: null, layoutMode: null };
    obj[1] = frame.applicationId;
    obj[2] = frameId;
    obj[3] = frameId.layoutMode;
    obj.dispatch(obj);
  }
}
function _refreshProxyTicket() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp4;
              let applicationId = tmp6;
              applicationId = undefined;
              dependencyMap = undefined;
              closure_3 = undefined;
              let frame;
              frame = frame.getFrame(callback);
              if (null == frame) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                applicationId = frame.applicationId;
                obj1 = {
                  type: "FRAME_SET_PROXY_TICKET_REFRESHING",
                  applicationId: null,
                  frameId: null,
                  refreshing: true,
                };
                obj1[1] = applicationId;
                obj1[2] = tmp78;
                closure_1_1(closure_1_2[5]).dispatch(obj1);
                frame = 2;
                const obj20 = closure_1_1(closure_1_2[5]);
                c5 = 4;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(closure_1_2[6]).createProxyTicket(applicationId, closure_1_7(frame.surface));
                return obj2;
              }
              tmp78 = callback;
            }
          } else if (1 === tmp9) {
            frame = 0;
            let obj10 = applicationId(706);
            let obj3 = {
              type: "FRAME_SET_PROXY_TICKET_REFRESHING",
              applicationId: null,
              frameId: null,
              refreshing: false,
            };
            obj3[1] = applicationId;
            obj3[2] = callback;
            obj10.dispatch(obj3);
            throw closure_3;
          } else if (2 === tmp9) {
            frame = 1;
            c5 = closure_3;
            closure_3 = applicationId(9469)();
            let obj8 = callback(9512);
            c5 = 3;
            c6 = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = obj8.getActivityLaunchErrorInfo(c5, applicationId);
            return obj4;
          } else if (3 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              frame = 0;
              let obj5 = applicationId(706);
              obj5 = {
                type: "FRAME_SET_PROXY_TICKET_REFRESHING",
                applicationId: null,
                frameId: null,
                refreshing: false,
              };
              obj5[1] = applicationId;
              obj5[2] = callback;
              obj5.dispatch(obj5);
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              frame = arg1;
              closure_3.showLaunchErrorModal(frame.message);
              frame = 0;
              obj3 = applicationId(706);
              const obj7 = {
                type: "FRAME_SET_PROXY_TICKET_REFRESHING",
                applicationId: null,
                frameId: null,
                refreshing: false,
              };
              obj7[1] = applicationId;
              obj7[2] = callback;
              obj3.dispatch(obj7);
              c6 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            frame = 0;
            obj = applicationId(706);
            obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: false };
            obj8[1] = applicationId;
            obj8[2] = callback;
            obj.dispatch(obj8);
            c6 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            dependencyMap = arg1;
            obj10 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId: null, frameId: null, proxyTicket: null };
            obj10[1] = applicationId;
            obj10[2] = callback;
            obj10[3] = dependencyMap;
            applicationId(706).dispatch(obj10);
            frame = 0;
            const obj16 = applicationId(706);
            const obj11 = {
              type: "FRAME_SET_PROXY_TICKET_REFRESHING",
              applicationId: null,
              frameId: null,
              refreshing: false,
            };
            obj11[1] = applicationId;
            obj11[2] = callback;
            applicationId(706).dispatch(obj11);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp54) {
          closure_3 = tmp54;
          if (tmp5 === frame) {
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
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({
  FrameIntent: c5,
  FrameLayoutModes: closure_6,
  getChannelIdForSurface: error,
  getFrameIntentForSurface: closure_8,
  makeFrameId: c9,
} = FrameLayoutModes);
let result = require("set").fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame(closure_0) {
  const self = this;
  const apply = _launchFrame.apply;
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
export const setFramePrefersPictureInPictureOnNavigateAway = function setFramePrefersPictureInPictureOnNavigateAway(
  frameId,
  enabled,
) {
  let obj = dispatcherDefault;
  obj = { type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId, enabled };
  obj.dispatch(obj);
};
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  let obj = dispatcherDefault;
  obj = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const frame = store.getFrame(frameId);
  if (null != frame) {
    let obj = dispatcherDefault;
    obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: null, frameId: null, layoutMode: null };
    obj[1] = frame.applicationId;
    obj[2] = frameId;
    obj[3] = constants2.FOCUSED;
    obj.dispatch(obj);
  }
  obj = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL };
  dispatcherDefault.dispatch(obj);
};
export const attachFrameIframe = function attachFrameIframe(frameId, iframeId) {
  let obj = dispatcherDefault;
  obj = { type: "FRAME_IFRAME_MOUNT", frameId, iframeId };
  obj.dispatch(obj);
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  let obj = dispatcherDefault;
  obj = { type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId };
  obj.dispatch(obj);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  const self = this;
  const apply = _refreshProxyTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
