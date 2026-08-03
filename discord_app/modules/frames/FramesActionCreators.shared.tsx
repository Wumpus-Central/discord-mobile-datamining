// === Module 5700: _launchFrame ===

// Module 5700 (_launchFrame)
import leaveCurrentFrame from "leaveCurrentFrame";
import map from "map";

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
              ({ applicationId: c0, channelId: c1 } = callback);
              dependencyMap = undefined;
              let leaveCurrentFrame;
              let message;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "FRAME_LAUNCH_START", applicationId: null };
              obj2[1] = callback;
              callback2(709).dispatch(obj2);
              message = 1;
              const obj15 = callback2(709);
              c5 = 4;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(5701).createProxyTicket(callback, callback2);
              return obj3;
            }
          } else if (2 === tmp7) {
            message = 0;
            c5 = leaveCurrentFrame;
            leaveCurrentFrame = callback2(10622)();
            let obj4 = callback(10652);
            c5 = 3;
            c6 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = obj4.getActivityLaunchErrorInfo(c5, callback);
            return obj4;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              message = arg1;
              leaveCurrentFrame.showLaunchErrorModal(message.message);
              obj1 = callback2(709);
              const obj6 = { type: "FRAME_LAUNCH_FAIL", applicationId: null, error: null };
              obj6[1] = callback;
              obj6[2] = c5;
              obj1.dispatch(obj6);
              throw c5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            message = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = arg1;
            const result = callback(12631).leaveCurrentEmbeddedActivity();
            const obj11 = callback(12631);
            callback(10631).leaveCurrentFrame();
            const obj12 = callback(10631);
            const obj7 = { type: "FRAME_LAUNCH", applicationId: null, proxyTicket: null, channelId: null };
            obj7[1] = callback;
            obj7[2] = dependencyMap;
            obj7[3] = callback2;
            callback2(709).dispatch(obj7);
            message = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp30) {
          leaveCurrentFrame = tmp30;
          if (tmp4 === message) {
            c6 = tmp2;
            throw tmp30;
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
function _refreshProxyTicket() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          if (0 === message) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channelId = tmp4;
              let lib = tmp8;
              let applicationId;
              applicationId = applicationId.applicationId;
              lib = undefined;
              channelId = undefined;
              let leaveCurrentFrame;
              let c4;
              message = undefined;
              message = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: true };
              obj2[1] = applicationId;
              lib(channelId[2]).dispatch(obj2);
              c4 = 2;
              lib = c4.getConnectedFrame();
              applicationId = undefined;
              if (lib != null) {
                applicationId = lib.applicationId;
              }
              channelId = undefined;
              if (applicationId === applicationId) {
                channelId = lib.channelId;
              }
              let obj12 = applicationId(channelId[3]);
              message = 5;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = obj12.createProxyTicket(applicationId, channelId);
              return obj3;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            let obj10 = lib(channelId[2]);
            const obj4 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            obj4[1] = applicationId;
            obj10.dispatch(obj4);
            throw leaveCurrentFrame;
          } else if (3 === tmp8) {
            c4 = 1;
            c6 = leaveCurrentFrame;
            c4 = lib(channelId[6])();
            let obj8 = applicationId(channelId[7]);
            message = 4;
            c6 = 1;
            let obj5 = { value: null, done: false };
            obj5[0] = obj8.getActivityLaunchErrorInfo(c6, applicationId);
            return obj5;
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              obj5 = lib(channelId[2]);
              const obj6 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
              obj6[1] = applicationId;
              obj5.dispatch(obj6);
              c6 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              message = arg1;
              c4.showLaunchErrorModal(message.message);
              c4 = 0;
              obj3 = lib(channelId[2]);
              obj8 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
              obj8[1] = applicationId;
              obj3.dispatch(obj8);
              c6 = 3;
              return { value: false, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            obj = lib(channelId[2]);
            const obj9 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            obj9[1] = applicationId;
            obj.dispatch(obj9);
            c6 = 3;
            obj10 = { value: null, done: true };
            obj10[0] = arg1;
            return obj10;
          } else {
            leaveCurrentFrame = arg1;
            const obj11 = { type: "FRAME_UPDATE_PROXY_TICKET", applicationId: null, proxyTicket: null };
            obj11[1] = applicationId;
            obj11[2] = leaveCurrentFrame;
            lib(channelId[2]).dispatch(obj11);
            c4 = 0;
            const obj18 = lib(channelId[2]);
            obj12 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: null, refreshing: false };
            obj12[1] = applicationId;
            lib(channelId[2]).dispatch(obj12);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp61) {
          leaveCurrentFrame = tmp61;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp61;
          } else if (tmp2 === tmp63) {
            message = tmp;
          } else {
            message = tmp3;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
let result = require("dispatcher").fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

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
export const stopFrame = function stopFrame(applicationId) {
  importDefault(709).dispatch({ type: "FRAME_STOP", applicationId: applicationId.applicationId });
};
export const updateFrameLayoutMode = function updateFrameLayoutMode(arg0) {
  let applicationId;
  let layoutMode;
  ({ applicationId, layoutMode } = arg0);
  importDefault(709).dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId, layoutMode });
};
export const updateFramePanelMode = function updateFramePanelMode(PIP) {
  let obj = importDefault(709);
  obj = { type: "FRAME_SET_PANEL_MODE", activityPanelMode: PIP };
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