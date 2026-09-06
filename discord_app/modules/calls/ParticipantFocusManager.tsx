// discord_app/modules/calls/ParticipantFocusManager.tsx
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import ChannelRTCStore from "ChannelRTCStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

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
