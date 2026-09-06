// discord_app/modules/video_calls/native/useIsVideoMode.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [ChannelStore, SelectedChannelStore, MediaEngineStore, VoiceStateStore, ApplicationStreamingStore];
  return initialize.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 =
        ApplicationStreamingStore.getAllActiveStreams().length > 0 ||
        VoiceStateStore.hasVideo(channel.id) ||
        MediaEngineStore.isVideoEnabled();
      const tmp3 =
        ApplicationStreamingStore.getAllActiveStreams().length > 0 ||
        VoiceStateStore.hasVideo(channel.id) ||
        MediaEngineStore.isVideoEnabled();
    }
    return tmp2;
  });
}
export const isVideoMode = function isVideoMode(arg0, arg1, arg2, arg3, arg4) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = ChannelStore;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = SelectedChannelStore;
  }
  let obj3 = arg2;
  if (arg2 === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  let obj4 = arg3;
  if (arg3 === undefined) {
    obj4 = VoiceStateStore;
  }
  let obj5 = arg4;
  if (arg4 === undefined) {
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
