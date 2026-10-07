// discord_app/modules/video_calls/native/useIsVideoMode.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
function isVideoMode() {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ChannelStore,
          SelectedChannelStore,
          MediaEngineStore,
          VoiceStateStore,
          ApplicationStreamingStore,
        ];
        const fn = function c() {
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
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
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
    };
export { isVideoMode };
