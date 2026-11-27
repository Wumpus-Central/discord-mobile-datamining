// === Module 19554: useVoicePanelDockPIPStream ===

// Module 19554 (useVoicePanelDockPIPStream)
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore" /* 19555 */;

const require = globalThis.__r;

require = fn;
const ApplicationStreamStates = fn(1071).ApplicationStreamStates;
const ParticipantTypes = fn(5693).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockPIPStream.tsx");

export default function useVoicePanelDockPIPStream(arg0) {
  _require = arg0;
  items = [ApplicationStreamingStore, AuthenticationStore, ChannelRTCStore, ChannelStore, VoicePanelDockPIPWatchPromptStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const id = AuthenticationStore.getId();
    const channel = ChannelStore.getChannel(id);
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp3 = true === isDMResult;
    if (!tmp3) {
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp3 = true === isGuildStageVoiceResult;
    }
    const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp);
    const found = allActiveStreamsForChannel.find((ownerId) => ownerId.ownerId !== closure_0);
    if (null != found) {
      const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(found);
      const participant = ChannelRTCStore.getParticipant(tmp, encodeStreamKeyResult);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let tmp19 = type === ParticipantTypes.STREAM && null != participant.streamId;
      if (!tmp19) {
        tmp19 = tmp21;
      }
      const obj = { streamKey: encodeStreamKeyResult, ownerId: found.ownerId, isWatching: tmp19, isConnecting: !tmp19, hasEnded: found.state === ApplicationStreamStates.ENDED || found.state === tmp20.FAILED, isAutoWatchChannel: tmp3 };
      return obj;
    } else {
      let found1;
      if (!tmp3) {
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
      }
      let encodeStreamKeyResult1;
      if (null != found1) {
        encodeStreamKeyResult1 = StreamKeyUtils.encodeStreamKey(found1);
      }
      const obj4 = { streamKey: encodeStreamKeyResult1, ownerId: null, isWatching: false, isConnecting: false, hasEnded: false, isAutoWatchChannel: null };
      let ownerId;
      if (found1 != null) {
        ownerId = found1.ownerId;
      }
      obj4.ownerId = ownerId;
      obj4.isAutoWatchChannel = tmp3;
      return obj4;
    }
  });
};