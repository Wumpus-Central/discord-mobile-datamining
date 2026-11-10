// discord_app/modules/voice_panel/native/dock/useVoicePanelDockPIPStream.tsx
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore.tsx";

const require = globalThis.__r;

require = fn;
const ApplicationStreamStates = fn(1072).ApplicationStreamStates;
const ParticipantTypes = fn(5807).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockPIPStream.tsx");

export default function useVoicePanelDockPIPStream(arg0) {
  _require = arg0;
  items = [ApplicationStreamingStore, AuthenticationStore, ChannelRTCStore, VoicePanelDockPIPWatchPromptStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const id = AuthenticationStore.getId();
    const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(id);
    const found = allActiveStreamsForChannel.find((ownerId) => ownerId.ownerId !== closure_0);
    if (null != found) {
      const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(found);
      const participant = ChannelRTCStore.getParticipant(tmp, encodeStreamKeyResult);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let tmp15 = type === ParticipantTypes.STREAM && null != participant.streamId;
      if (!tmp15) {
        tmp15 = tmp17;
      }
      const obj3 = {
        streamKey: encodeStreamKeyResult,
        ownerId: found.ownerId,
        isWatching: tmp15,
        isConnecting: !tmp15,
        hasEnded: found.state === ApplicationStreamStates.ENDED || found.state === tmp16.FAILED,
      };
      return obj3;
    } else {
      let found1;
      if (!VoicePanelDockPIPWatchPromptStore.isDismissed()) {
        const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp);
        found1 = allApplicationStreamsForChannel.find((ownerId) => {
          let tmp = ownerId.ownerId !== closure_0;
          if (tmp) {
            tmp = !VoicePanelDockPIPWatchPromptStore.hasWatched(ownerId.ownerId);
          }
          return tmp;
        });
      }
      let encodeStreamKeyResult1;
      if (null != found1) {
        encodeStreamKeyResult1 = StreamKeyUtils.encodeStreamKey(found1);
      }
      const obj5 = {
        streamKey: encodeStreamKeyResult1,
        ownerId: null,
        isWatching: false,
        isConnecting: false,
        hasEnded: false,
      };
      let ownerId;
      if (found1 != null) {
        ownerId = found1.ownerId;
      }
      obj5.ownerId = ownerId;
      return obj5;
    }
  });
}
