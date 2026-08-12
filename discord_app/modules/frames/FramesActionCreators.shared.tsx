// discord_app/modules/frames/FramesActionCreators.shared.tsx
import dispatcher from "dispatcher";
import map from "map";
import FrameLayoutModes from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { dispatcher } from "../../Dispatcher.tsx";
import { leaveCurrentEmbeddedActivity } from "../activities/utils/leaveCurrentEmbeddedActivity.tsx";
import { getFramesManager } from "utils/getFramesManager.native.tsx";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _launchFrame() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      if (c6 === 2) {
        c6 = 3;
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
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              ({ applicationId: c0, surface: c1 } = callback);
              dependencyMap = undefined;
              let intent;
              let frame;
              c5 = undefined;
              c6 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              dependencyMap = callback5(callback, callback2);
              intent = frame.getFrame(dependencyMap);
              if (null != intent) {
                if (intent.intent === c5.MAIN) {
                  const obj2 = { frameId: null, layoutMode: null };
                  obj2[0] = dependencyMap;
                  obj2[1] = c6.FOCUSED;
                  callback7(obj2);
                }
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = dependencyMap;
                return obj3;
              } else {
                if (callback4(callback2) === c5.MAIN) {
                  let obj9 = callback(10657);
                  const result = obj9.leaveCurrentEmbeddedActivity();
                  callback6();
                }
                let obj10 = callback2(709);
                let obj4 = { type: "FRAME_LAUNCH_START", applicationId: null, frameId: null, surface: null };
                obj4[1] = callback;
                obj4[2] = dependencyMap;
                obj4[3] = callback2;
                obj10.dispatch(obj4);
                frame = 1;
                c5 = 4;
                c6 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = callback(10672).createProxyTicket(callback, callback3(callback2));
                return obj5;
              }
            }
          } else if (2 === tmp7) {
            frame = 0;
            callback3 = intent;
            c5 = callback2(10658)();
            let obj7 = callback(10670);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = obj7.getActivityLaunchErrorInfo(callback3, callback);
            return obj6;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              c6 = arg1;
              c5.showLaunchErrorModal(c6.message);
              obj4 = callback2(709);
              const obj8 = { type: "FRAME_LAUNCH_FAIL", applicationId: null, frameId: null, error: null };
              obj8[1] = callback;
              obj8[2] = dependencyMap;
              obj8[3] = callback3;
              obj4.dispatch(obj8);
              throw callback3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            frame = 0;
            c6 = 3;
            obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            frame = arg1;
            obj = callback2(709);
            obj10 = { type: "FRAME_LAUNCH", applicationId: null, frameId: null, surface: null, proxyTicket: null };
            obj10[1] = callback;
            obj10[2] = dependencyMap;
            obj10[3] = callback2;
            obj10[4] = frame;
            obj.dispatch(obj10);
            frame = 0;
            c6 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = dependencyMap;
            return obj11;
          }
        } catch (tmp72) {
          intent = tmp72;
          if (tmp4 === frame) {
            c6 = tmp2;
            throw tmp72;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _launchFrame = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function clearMainFrameSlot() {
  let obj = store;
  const mainFrame = store.getMainFrame();
  if (null != mainFrame) {
    if (mainFrame.intent === constants.MAIN) {
      getFramesManager().leaveFrame(mainFrame.id);
      const obj8 = getFramesManager();
    } else {
      const id = mainFrame.id;
      const frame = obj.getFrame(id);
      if (null != frame) {
        let obj1 = dispatcher;
        obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: null, frameId: null, layoutMode: null };
        obj[1] = frame.applicationId;
        obj[2] = id;
        obj[3] = constants2.FOCUSED;
        obj1.dispatch(obj);
      }
      obj = { type: "FRAME_SET_PANEL_MODE", frameId: null, activityPanelMode: null };
      obj[1] = id;
      obj[2] = ActivityPanelModes.PANEL;
      dispatcher.dispatch(obj);
      const obj4 = dispatcher;
      obj1 = { type: "FRAME_CLEAR_MAIN_SLOT", frameId: null };
      obj1[1] = mainFrame.id;
      dispatcher.dispatch(obj1);
      const obj6 = dispatcher;
    }
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const frame = store.getFrame(frameId);
  if (null != frame) {
    let obj = dispatcher;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
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
              let dependencyMap = tmp4;
              let applicationId = tmp6;
              applicationId = undefined;
              dependencyMap = undefined;
              let dispatcher;
              let frame;
              frame = frame.getFrame(callback);
              if (null == frame) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                applicationId = frame.applicationId;
                const obj1 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: true };
                obj1[1] = applicationId;
                obj1[2] = tmp78;
                outer1_1(outer1_2[5]).dispatch(obj1);
                frame = 2;
                const obj20 = outer1_1(outer1_2[5]);
                c5 = 4;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback(outer1_2[6]).createProxyTicket(applicationId, outer1_7(frame.surface));
                return obj2;
              }
              tmp78 = callback;
            }
          } else if (1 === tmp9) {
            frame = 0;
            let obj10 = applicationId(709);
            let obj3 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: false };
            obj3[1] = applicationId;
            obj3[2] = callback;
            obj10.dispatch(obj3);
            throw dispatcher;
          } else if (2 === tmp9) {
            frame = 1;
            c5 = dispatcher;
            dispatcher = applicationId(10658)();
            let obj8 = callback(10670);
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
              let obj5 = applicationId(709);
              obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: false };
              obj5[1] = applicationId;
              obj5[2] = callback;
              obj5.dispatch(obj5);
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              frame = arg1;
              dispatcher.showLaunchErrorModal(frame.message);
              frame = 0;
              obj3 = applicationId(709);
              const obj7 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: false };
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
            obj = applicationId(709);
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
            applicationId(709).dispatch(obj10);
            frame = 0;
            const obj16 = applicationId(709);
            const obj11 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, frameId: null, refreshing: false };
            obj11[1] = applicationId;
            obj11[2] = callback;
            applicationId(709).dispatch(obj11);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp54) {
          dispatcher = tmp54;
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
  const _refreshProxyTicket = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ FrameIntent: c5, FrameLayoutModes: closure_6, getChannelIdForSurface: error, getFrameIntentForSurface: metroImportAll, makeFrameId: c9 } = FrameLayoutModes);
let result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

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
export const promoteFrame = function promoteFrame(closure_0) {
  let obj = store;
  let tmp = null != store.getFrame(closure_0);
  if (tmp) {
    const mainFrame = obj.getMainFrame();
    let id;
    if (mainFrame != null) {
      id = mainFrame.id;
    }
    tmp = id !== closure_0;
  }
  if (tmp) {
    const result = leaveCurrentEmbeddedActivity.leaveCurrentEmbeddedActivity();
    clearMainFrameSlot();
    const obj2 = leaveCurrentEmbeddedActivity;
    obj = { type: "FRAME_PROMOTE", frameId: null };
    obj[1] = closure_0;
    dispatcher.dispatch(obj);
    const obj3 = dispatcher;
  }
};
export { updateFrameLayoutMode };
export const updateFramePanelMode = function updateFramePanelMode(id, PIP) {
  let obj = dispatcher;
  obj = { type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP };
  obj.dispatch(obj);
};
export const resetFrameLayoutModes = function resetFrameLayoutModes(frameId) {
  const frame = store.getFrame(frameId);
  if (null != frame) {
    let obj = dispatcher;
    obj = { type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: null, frameId: null, layoutMode: null };
    obj[1] = frame.applicationId;
    obj[2] = frameId;
    obj[3] = constants2.FOCUSED;
    obj.dispatch(obj);
  }
  obj = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL };
  dispatcher.dispatch(obj);
};
export const attachFrameIframe = function attachFrameIframe(frameId, iframeId) {
  let obj = dispatcher;
  obj = { type: "FRAME_IFRAME_MOUNT", frameId, iframeId };
  obj.dispatch(obj);
};
export const detachFrameIframe = function detachFrameIframe(frameId, iframeId) {
  let obj = dispatcher;
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