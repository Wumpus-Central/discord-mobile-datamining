// discord_app/modules/frames/FramesActionCreators.shared.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import getChannelIdForEmbeddedSurfaceDefault from "../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import createProxyTicket from "../activities/createProxyTicket.tsx";
import leaveFrame from "leaveFrame.tsx";
import leaveCurrentEmbeddedActivity from "../activities/utils/leaveCurrentEmbeddedActivity.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import FramesStore from "FramesStore.tsx";

require = fn;
let closure_13 = async function _launchFrame(arg0) {
  let invite = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  let iter = (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            invite = undefined;
            ({
              applicationId: closure_130_0,
              surface: closure_130_1,
              launch: closure_130_2,
              analyticsContext: closure_130_3,
              hostWindowKey: closure_130_4,
              showErrorModal,
            } = invite);
            if (showErrorModal === undefined) {
              showErrorModal = true;
            }
            closure_130_5 = showErrorModal;
            invite = invite.invite;
            closure_130_7 = undefined;
            let frame;
            closure_130_9 = undefined;
            closure_130_10 = undefined;
            closure_130_11 = undefined;
            closure_130_12 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_7 = closure_131_10(closure_130_0, closure_130_1);
            frame = closure_131_5.getFrame(closure_130_7);
            if (null != frame) {
              if (frame.intent === closure_131_6.MAIN) {
                closure_131_16(closure_130_7);
                const obj7 = { frameId: closure_130_7, layoutMode: closure_131_7.FOCUSED };
                closure_131_17(obj7);
              }
              c7 = 3;
              const obj10 = { value: closure_130_7, done: true };
              return obj10;
            } else {
              if (closure_131_8(closure_130_1) === closure_131_6.MAIN) {
                const result = closure_131_0(closure_131_2[5]).leaveCurrentEmbeddedActivity();
                closure_131_14();
                const obj8 = closure_131_0(closure_131_2[5]);
              }
              const sum = closure_131_12 + 1;
              closure_131_12 = sum;
              closure_130_9 = sum;
              const obj12 = {
                type: "FRAME_LAUNCH_START",
                applicationId: closure_130_0,
                frameId: closure_130_7,
                surface: closure_130_1,
                hostWindowKey: closure_130_4,
                launch: closure_130_2,
                invite,
                launchRequestId: closure_130_9,
              };
              closure_131_1(closure_131_2[6]).dispatch(obj12);
              c5 = 1;
              const obj11 = closure_131_0(closure_131_2[7]);
              const items = [
                obj11.createProxyTicket(
                  closure_130_0,
                  closure_131_1(closure_131_2[8])(closure_130_1),
                  closure_130_1.type,
                  invite,
                ),
                closure_131_1(closure_131_2[9])(closure_130_0),
              ];
              c6 = 3;
              c7 = 1;
              const obj13 = { value: Promise.all(items), done: false };
              return obj13;
            }
          }
        } else {
          if (2 === tmp7) {
            c5 = 0;
            closure_130_13 = closure_4;
            if (closure_130_5) {
              c6 = 4;
              c7 = 1;
              const obj14 = {
                value: closure_131_0(closure_131_2[10]).getActivityLaunchErrorInfo(closure_130_13, closure_130_0),
                done: false,
              };
              return obj14;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_130_10 = value;
              closure_130_11 = closure_131_3(closure_130_10, 1)[0];
              const obj16 = {
                type: "FRAME_LAUNCH",
                applicationId: closure_130_0,
                frameId: closure_130_7,
                surface: closure_130_1,
                proxyTicket: closure_130_11,
                analyticsContext: closure_130_3,
                launch: null,
                invite: null,
                hostWindowKey: null,
                launchRequestId: null,
              };
              launch = closure_130_2;
              if (closure_130_2 == null) {
                launch = {};
              }
              obj16.launch = launch;
              obj16.invite = invite;
              obj16.hostWindowKey = closure_130_4;
              obj16.launchRequestId = closure_130_9;
              closure_131_1(closure_131_2[6]).dispatch(obj16);
              c5 = 0;
              c7 = 3;
              const obj17 = { value: closure_130_7, done: true };
              return obj17;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_12 = value;
            closure_131_1(closure_131_2[11])(closure_130_12.message);
          }
          const obj19 = {
            type: "FRAME_LAUNCH_FAIL",
            applicationId: closure_130_0,
            frameId: closure_130_7,
            launchRequestId: closure_130_9,
            error: closure_130_13,
            analyticsContext: closure_130_3,
          };
          closure_131_1(closure_131_2[6]).dispatch(obj19);
          throw closure_130_13;
        }
      } catch (tmp89) {
        closure_4 = tmp89;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp89;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
function clearMainFrameSlot() {
  const mainFrame = FramesStore.getMainFrame();
  if (null != mainFrame) {
    if (mainFrame.intent === constants.MAIN) {
      leaveFrame.leaveFrame(mainFrame.id);
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
      const obj3 = {
        type: "FRAME_UPDATE_LAYOUT_MODE",
        applicationId: frame.applicationId,
        frameId: id,
        layoutMode: constants2.FOCUSED,
      };
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
    let obj2 = require;
    const result = leaveCurrentEmbeddedActivity.leaveCurrentEmbeddedActivity();
    let mainFrame1 = FramesStore.getMainFrame();
    if (null == mainFrame1) {
      mainFrame1 = DispatcherDefault;
      const obj4 = { type: "FRAME_PROMOTE", frameId };
      mainFrame1.dispatch(obj4);
    } else if (mainFrame1.intent !== constants.MAIN) {
      demoteMainFrame(mainFrame1.id);
    }
    obj2 = obj2(10879);
    obj2.leaveFrame(mainFrame1.id);
  }
}
function updateFrameLayoutMode(frameId) {
  frameId = frameId.frameId;
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = {
      type: "FRAME_UPDATE_LAYOUT_MODE",
      applicationId: frame.applicationId,
      frameId,
      layoutMode: frameId.layoutMode,
    };
    DispatcherDefault.dispatch(obj2);
  }
}
let closure_18 = async function _refreshProxyTicket(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_1 = tmp8;
          let tmp45 = closure_0;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          frame = frame.getFrame(closure_0);
          if (null == frame) {
            c6 = 3;
            return { value: false, done: true };
          } else {
            const applicationId = frame.applicationId;
            closure_129_1 = applicationId;
            const surface = frame.surface;
            if (React6(frame)) {
              let invite = frame.data.invite;
            } else {
              invite = frame.invite;
            }
            const obj5 = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, frameId: tmp45, refreshing: true };
            DispatcherDefault.dispatch(obj5);
            c4 = 2;
            const obj13 = createProxyTicket;
            tmp45 = importDefault;
            frame = obj13.createProxyTicket(
              applicationId,
              getChannelIdForEmbeddedSurfaceDefault(surface),
              surface.type,
              invite,
            );
            c5 = 4;
            c6 = 1;
          }
        }
      } else if (1 === tmp8) {
        c4 = 0;
        const obj6 = {
          type: "FRAME_SET_PROXY_TICKET_REFRESHING",
          applicationId: closure_129_1,
          frameId: closure_129_0,
          refreshing: false,
        };
        closure_130_1(closure_130_2[6]).dispatch(obj6);
        throw closure_3;
      } else if (2 === tmp8) {
        c4 = 1;
        closure_129_4 = closure_3;
        c5 = 3;
        c6 = 1;
        const obj8 = {
          value: closure_130_0(closure_130_2[10]).getActivityLaunchErrorInfo(closure_129_4, closure_129_1),
          done: false,
        };
        return obj8;
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          const obj10 = {
            type: "FRAME_SET_PROXY_TICKET_REFRESHING",
            applicationId: closure_129_1,
            frameId: closure_129_0,
            refreshing: false,
          };
          closure_130_1(closure_130_2[6]).dispatch(obj10);
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_129_3 = value;
          closure_130_1(closure_130_2[11])(closure_129_3.message);
          c4 = 0;
          const obj14 = {
            type: "FRAME_SET_PROXY_TICKET_REFRESHING",
            applicationId: closure_129_1,
            frameId: closure_129_0,
            refreshing: false,
          };
          closure_130_1(closure_130_2[6]).dispatch(obj14);
          c6 = 3;
          return { value: false, done: true };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        const obj15 = {
          type: "FRAME_SET_PROXY_TICKET_REFRESHING",
          applicationId: closure_129_1,
          frameId: closure_129_0,
          refreshing: false,
        };
        closure_130_1(closure_130_2[6]).dispatch(obj15);
        c6 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_129_2 = value;
        const obj19 = {
          type: "FRAME_UPDATE_PROXY_TICKET",
          applicationId: closure_129_1,
          frameId: closure_129_0,
          proxyTicket: closure_129_2,
        };
        closure_130_1(closure_130_2[6]).dispatch(obj19);
        c4 = 0;
        const obj16 = closure_130_1(closure_130_2[6]);
        const obj21 = {
          type: "FRAME_SET_PROXY_TICKET_REFRESHING",
          applicationId: closure_129_1,
          frameId: closure_129_0,
          refreshing: false,
        };
        closure_130_1(closure_130_2[6]).dispatch(obj21);
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp51) {
      closure_3 = tmp51;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp51;
      } else if (tmp2 === tmp53) {
        c5 = tmp2;
      } else {
        c5 = tmp;
      }
    }
  }
};
const FramesConstants = fn(6834);
({
  FrameIntent: metroRequire,
  FrameLayoutModes: closure_7,
  getFrameIntentForSurface: closure_8,
  isLaunched: closure_9,
  makeFrameId: c10,
} = FramesConstants);
const ActivityPanelModes = fn(5646).ActivityPanelModes;
let c12 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export function launchFrame() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { clearMainFrameSlot };
export { demoteMainFrame };
export { promoteFrame };
export { updateFrameLayoutMode };
export function setFrameRunsInBackground(id, enabled) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_RUNS_IN_BACKGROUND", frameId: id, enabled });
}
export function setFrameUserMuted(id, muted) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_USER_MUTED", frameId: id, muted });
}
export function updateFramePanelMode(id, PIP) {
  DispatcherDefault.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: id, activityPanelMode: PIP });
}
export function resetFrameLayoutModes(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    const obj2 = {
      type: "FRAME_UPDATE_LAYOUT_MODE",
      applicationId: frame.applicationId,
      frameId,
      layoutMode: constants2.FOCUSED,
    };
    DispatcherDefault.dispatch(obj2);
  }
  DispatcherDefault.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL });
  const obj4 = { type: "FRAME_SET_PANEL_MODE", frameId, activityPanelMode: ActivityPanelModes.PANEL };
}
export function attachFrameIframe(id, first1) {
  DispatcherDefault.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: id, iframeId: first1 });
}
export function detachFrameIframe(frameId, iframeId) {
  DispatcherDefault.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId, iframeId });
}
export function attachFrameHostWindow(frameId, windowKey) {
  DispatcherDefault.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId, windowKey });
}
export function detachFrameHostWindow(frameId, windowKey) {
  DispatcherDefault.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId, windowKey });
}
export function refreshProxyTicket() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
