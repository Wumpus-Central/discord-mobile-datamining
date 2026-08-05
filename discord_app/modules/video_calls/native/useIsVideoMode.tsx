import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/video_calls/native/useIsVideoMode.tsx
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";

const require = arg1;
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [ensureGuildLoaded, handleConnectionOpen, _detectH265HardwareDecode, updateVoiceState, reset];
  return initialize /* initialize */.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = reset.getAllActiveStreams().length > 0 || updateVoiceState.hasVideo(channel.id) || _detectH265HardwareDecode.isVideoEnabled();
      const tmp3 = reset.getAllActiveStreams().length > 0 || updateVoiceState.hasVideo(channel.id) || _detectH265HardwareDecode.isVideoEnabled();
    }
    return tmp2;
  });
};
export const isVideoMode = function isVideoMode(closure_9, closure_11, closure_8, closure_12, closure_10) {
  let obj = closure_9;
  if (closure_9 === undefined) {
    obj = ensureGuildLoaded;
  }
  let obj2 = closure_11;
  if (closure_11 === undefined) {
    obj2 = handleConnectionOpen;
  }
  let obj3 = closure_8;
  if (closure_8 === undefined) {
    obj3 = reset;
  }
  let obj4 = closure_12;
  if (closure_12 === undefined) {
    obj4 = updateVoiceState;
  }
  let obj5 = closure_10;
  if (closure_10 === undefined) {
    obj5 = _detectH265HardwareDecode;
  }
  const channel = obj.getChannel(obj2.getVoiceChannelId());
  let tmp2 = null != channel;
  if (tmp2) {
    tmp2 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
    const tmp3 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
};