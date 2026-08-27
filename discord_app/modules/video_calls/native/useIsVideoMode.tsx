// === Module 9814: useIsVideoMode ===

// Module 9814 (useIsVideoMode)
import initialize from "initialize" /* 589 */;
import closure_2 from "reset" /* 4467 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "_detectH265HardwareDecode" /* 4496 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import closure_6 from "updateVoiceState" /* 4464 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [closure_3, closure_5, closure_4, closure_6, closure_2];
  return initialize.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = closure_2.getAllActiveStreams().length > 0 || closure_6.hasVideo(channel.id) || closure_4.isVideoEnabled();
      const tmp3 = closure_2.getAllActiveStreams().length > 0 || closure_6.hasVideo(channel.id) || closure_4.isVideoEnabled();
    }
    return tmp2;
  });
};
export const isVideoMode = function isVideoMode(closure_9, closure_11, closure_8, closure_12, closure_10) {
  let obj = closure_9;
  if (closure_9 === undefined) {
    obj = closure_3;
  }
  let obj2 = closure_11;
  if (closure_11 === undefined) {
    obj2 = closure_5;
  }
  let obj3 = closure_8;
  if (closure_8 === undefined) {
    obj3 = closure_2;
  }
  let obj4 = closure_12;
  if (closure_12 === undefined) {
    obj4 = closure_6;
  }
  let obj5 = closure_10;
  if (closure_10 === undefined) {
    obj5 = closure_4;
  }
  const channel = obj.getChannel(obj2.getVoiceChannelId());
  let tmp2 = null != channel;
  if (tmp2) {
    tmp2 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
    const tmp3 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
};