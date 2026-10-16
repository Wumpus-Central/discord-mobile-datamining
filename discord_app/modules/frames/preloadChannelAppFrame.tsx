// === Module 17292: preloadChannelAppFrame ===

// Module 17292 (preloadChannelAppFrame)
import getURLForApplicationDefault from "getURLForApplication" /* 10948 */;
import leaveFrame from "leaveFrame" /* 10960 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import FramesStore from "FramesStore" /* 10947 */;

const require = globalThis.__r;

require = fn;
const FramesConstants = fn(10931);
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const Constants = fn(1087);
({ ChannelTypes: closure_8, Permissions: closure_9 } = Constants);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const application_id = channel.application_id;
    let tmp3 = null;
    if (channel.type === constants.GUILD_APP) {
      tmp3 = closure_6(channel);
    }
    if (null != application_id) {
      if (null != tmp3) {
        const tmp29 = closure_7(application_id, tmp3);
        _require = tmp29;
        if (map.has(tmp29)) {
          closure_130_0 = tmp29;
          value = map.get(tmp29);
          if (value == null) {
            const obj2 = { stopTimer: null, launchRequestId: "r" };
            const timeout = new require("Timers").Timeout();
            obj2.stopTimer = timeout;
            value = obj2;
          }
          closure_130_1 = value;
          const result = map.set(tmp29, value);
          const stopTimer2 = value.stopTimer;
          stopTimer2.start(5000, () => {
            map.delete(closure_0);
            let tmp4 = null != launchRequestId.launchRequestId;
            if (tmp4) {
              const frame = FramesStore.getFrame(closure_0);
              launchRequestId = undefined;
              if (frame != null) {
                launchRequestId = frame.launchRequestId;
              }
              tmp4 = launchRequestId === tmp3.launchRequestId;
            }
            if (tmp4) {
              leaveFrame.leaveFrame(closure_0);
            }
          });
        } else if (null == FramesStore.getFrame(tmp29)) {
          if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
            if (null != getURLForApplicationDefault(application_id)) {
              closure_129_0 = tmp29;
              value3 = map.get(tmp29);
              if (value3 == null) {
                const obj4 = { stopTimer: null, launchRequestId: "r" };
                const timeout1 = new require("Timers").Timeout();
                obj4.stopTimer = timeout1;
                value3 = obj4;
              }
              closure_129_1 = value3;
              const result1 = map.set(tmp29, value3);
              let stopTimer = value3.stopTimer;
              stopTimer.start(5000, () => {
                map.delete(closure_0);
                let tmp4 = null != launchRequestId.launchRequestId;
                if (tmp4) {
                  const frame = FramesStore.getFrame(closure_0);
                  launchRequestId = undefined;
                  if (frame != null) {
                    launchRequestId = frame.launchRequestId;
                  }
                  tmp4 = launchRequestId === tmp3.launchRequestId;
                }
                if (tmp4) {
                  leaveFrame.leaveFrame(closure_0);
                }
              });
              const obj5 = { applicationId: application_id, surface: tmp3, showErrorModal: false };
              const obj3 = require("_launchFrame");
              require("_launchFrame").launchFrame(obj5).catch(() => {
                value = map.get(closure_0);
                if (value != null) {
                  const stopTimer = value.stopTimer;
                  stopTimer.stop();
                }
                map.delete(closure_0);
              });
              value4 = map.get(tmp29);
              if (null != value4) {
                let frame = FramesStore.getFrame(tmp29);
                let launchRequestId;
                if (frame != null) {
                  launchRequestId = frame.launchRequestId;
                }
                value4.launchRequestId = launchRequestId;
              }
              const launchFrameResult = require("_launchFrame").launchFrame(obj5);
            }
          }
        }
      }
    }
  }
};
export const claimPreloadedFrame = function claimPreloadedFrame(frameId) {
  let flag = map.has(frameId);
  if (flag) {
    value = map.get(frameId);
    if (value != null) {
      const stopTimer = value.stopTimer;
      stopTimer.stop();
    }
    map.delete(frameId);
    flag = true;
  }
  return flag;
};