// === Module 9465: useIsVideoMode ===

// Module 9465 (useIsVideoMode)
import initialize from "initialize" /* 504 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [ChannelStore, SelectedChannelStore, MediaEngineStore, VoiceStateStore, ApplicationStreamingStore];
  return initialize.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
      const tmp3 = ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
    }
    return tmp2;
  });
};
export const isVideoMode = function isVideoMode() {
  let obj = ChannelStore;
  if (ChannelStore === undefined) {
    obj = ChannelStore;
  }
  let obj2 = SelectedChannelStore;
  if (SelectedChannelStore === undefined) {
    obj2 = SelectedChannelStore;
  }
  let obj3 = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  let obj4 = VoiceStateStore;
  if (VoiceStateStore === undefined) {
    obj4 = VoiceStateStore;
  }
  let obj5 = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj5 = MediaEngineStore;
  }
  const channel = obj.getChannel(obj2.getVoiceChannelId());
  let tmp2 = null != channel;
  if (tmp2) {
    tmp2 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
    const tmp3 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
};