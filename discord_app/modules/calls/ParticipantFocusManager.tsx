// === Module 17466: ParticipantFocusManager ===

// Module 17466 (ParticipantFocusManager)
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

class ParticipantFocusManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_1, applyArgumentsResult.handleFocusParticipant);
    return applyArgumentsResult;
  }
}
ParticipantFocusManager.prototype["handleFocusParticipant"] = function handleFocusParticipant() {
  const channelId = RTCConnectionStore.getChannelId();
  if (null != channelId) {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(channelId);
    const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (rTCConnection != null) {
      const found = videoParticipants.find((id) => id.id === closure_0 && !id.localVideoDisabled);
      let id;
      if (found != null) {
        id = found.id;
      }
      const result = rTCConnection.setSelectedParticipant(id);
    }
  }
};
const participantFocusManager = new ParticipantFocusManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default participantFocusManager;