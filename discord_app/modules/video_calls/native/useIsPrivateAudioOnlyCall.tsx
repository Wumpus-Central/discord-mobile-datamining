// discord_app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

const require = fn;
function areParticipantStatesEqual(arg0, arg1) {
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const isActivityParticipant = fn(4581).isActivityParticipant;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  _require = id;
  let items = [ChannelRTCStore];
  const items1 = [id];
  let tmp3 = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp3) {
    tmp3 = isActivityParticipant(
      _slicedToArray(
        obj.useStateFromStores(
          items,
          () => {
            const items = [
              ChannelRTCStore.getSelectedParticipant(_private.id),
              ChannelRTCStore.getParticipantsVersion(_private.id),
            ];
            return items;
          },
          items1,
          areParticipantStatesEqual,
        ),
        1,
      )[0],
    );
  }
  dependencyMap = tmp3;
  obj = require("initialize");
  const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
  const items3 = [id, tmp3];
  return require("initialize").useStateFromStores(
    items2,
    () => {
      let isPrivateResult = _private.isPrivate();
      if (isPrivateResult) {
        isPrivateResult = !VoiceStateStore.hasVideo(tmp.id);
      }
      if (isPrivateResult) {
        isPrivateResult = !closure_1;
      }
      if (isPrivateResult) {
        isPrivateResult = 0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp.id).length;
      }
      if (isPrivateResult) {
        isPrivateResult = 0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp.id).length;
      }
      if (isPrivateResult) {
        isPrivateResult = !MediaEngineStore.isVideoEnabled();
      }
      return isPrivateResult;
    },
    items3,
  );
}
