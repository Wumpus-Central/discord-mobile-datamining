// discord_app/modules/frames/preloadChannelAppFrame.tsx
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import leaveFrame from "leaveFrame.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import FramesStore from "FramesStore.tsx";

require = fn;
const FramesConstants = fn(6724);
({ getFrameSurfaceForChannel: metroRequire, makeFrameId: closure_7 } = FramesConstants);
const Constants = fn(1087);
({ ChannelTypes: closure_8, Permissions: closure_9 } = Constants);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export const preloadChannelAppFrame = function preloadChannelAppFrame(id) {
  const channel1 = ChannelStore.getChannel(id);
  if (channel1 != null) {
    const application_id = channel1.application_id;
  }
  let type;
  if (channel1 != null) {
    type = channel1.type;
  }
  let tmp3 = null;
  if (type === constants.GUILD_APP) {
    tmp3 = closure_6(channel1);
  }
  let tmp5 = null;
  if (null != channel1) {
    tmp5 = null;
    if (null != application_id) {
      tmp5 = null;
      if (null != tmp3) {
        const obj = {
          channel: channel1,
          applicationId: application_id,
          surface: tmp3,
          frameId: closure_7(application_id, tmp3),
        };
        tmp5 = obj;
      }
    }
  }
  if (null != tmp5) {
    ({ channel, applicationId, frameId } = tmp5);
    if (map.has(frameId)) {
      closure_130_0 = frameId;
      value = map.get(frameId);
      if (value == null) {
        const obj4 = { stopTimer: null, launchRequestId: "r" };
        const timeout = new frameId(4795).Timeout();
        obj4.stopTimer = timeout;
        value = obj4;
      }
      const result = map.set(frameId, value);
      const stopTimer2 = value.stopTimer;
      stopTimer2.start(5000, () => {
        value = map.get(frameId);
        if (null != value) {
          const stopTimer = value.stopTimer;
          stopTimer.stop();
          map.delete(frameId);
          let tmp5 = null != value.launchRequestId;
          if (tmp5) {
            const frame = FramesStore.getFrame(frameId);
            let launchRequestId;
            if (frame != null) {
              launchRequestId = frame.launchRequestId;
            }
            tmp5 = launchRequestId === value.launchRequestId;
          }
          if (tmp5) {
            leaveFrame.leaveFrame(frameId);
          }
        }
      });
    } else if (null == FramesStore.getFrame(frameId)) {
      if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
        if (!obj3.isChannelContentGated(channel)) {
          if (!tmp7Result.isChannelSpoilerGated(channel)) {
            if (null != getURLForApplicationDefault(applicationId)) {
              closure_129_0 = frameId;
              value3 = map.get(frameId);
              if (value3 == null) {
                const obj5 = { stopTimer: null, launchRequestId: "r" };
                const timeout1 = new frameId(4795).Timeout();
                obj5.stopTimer = timeout1;
                value3 = obj5;
              }
              const result1 = map.set(frameId, value3);
              let stopTimer = value3.stopTimer;
              stopTimer.start(5000, () => {
                value = map.get(frameId);
                if (null != value) {
                  const stopTimer = value.stopTimer;
                  stopTimer.stop();
                  map.delete(frameId);
                  let tmp5 = null != value.launchRequestId;
                  if (tmp5) {
                    const frame = FramesStore.getFrame(frameId);
                    let launchRequestId;
                    if (frame != null) {
                      launchRequestId = frame.launchRequestId;
                    }
                    tmp5 = launchRequestId === value.launchRequestId;
                  }
                  if (tmp5) {
                    leaveFrame.leaveFrame(frameId);
                  }
                }
              });
              const obj6 = { applicationId, surface: tmp5.surface, showErrorModal: false };
              const tmp7Result2 = frameId(11059);
              frameId(11059)
                .launchFrame(obj6)
                .catch(() => {
                  value = map.get(frameId);
                  if (value != null) {
                    const stopTimer = value.stopTimer;
                    stopTimer.stop();
                  }
                  map.delete(frameId);
                });
              value4 = map.get(frameId);
              if (null != value4) {
                let frame = FramesStore.getFrame(frameId);
                let launchRequestId;
                if (frame != null) {
                  launchRequestId = frame.launchRequestId;
                }
                value4.launchRequestId = launchRequestId;
              }
              const launchFrameResult = frameId(11059).launchFrame(obj6);
            }
          }
          tmp7Result = frameId(6630);
        }
        obj3 = frameId(6610);
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
export const cancelChannelAppFramePreload = function cancelChannelAppFramePreload(id) {
  const channel = ChannelStore.getChannel(id);
  if (channel != null) {
    const application_id = channel.application_id;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp3 = null;
  if (type === constants.GUILD_APP) {
    tmp3 = timestampProducer(channel);
  }
  let tmp5 = null;
  if (null != channel) {
    tmp5 = null;
    if (null != application_id) {
      tmp5 = null;
      if (null != tmp3) {
        const obj = { channel, applicationId: application_id, surface: tmp3, frameId: React5(application_id, tmp3) };
        tmp5 = obj;
      }
    }
  }
  if (null != tmp5) {
    const frameId = tmp5.frameId;
    value = map.get(frameId);
    if (null != value) {
      const stopTimer = value.stopTimer;
      stopTimer.stop();
      map.delete(frameId);
      let tmp9 = null != value.launchRequestId;
      if (tmp9) {
        const frame = FramesStore.getFrame(frameId);
        let launchRequestId;
        if (frame != null) {
          launchRequestId = frame.launchRequestId;
        }
        tmp9 = launchRequestId === value.launchRequestId;
      }
      if (tmp9) {
        leaveFrame.leaveFrame(frameId);
      }
    }
  }
};
