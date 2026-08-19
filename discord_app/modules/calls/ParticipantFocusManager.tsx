// discord_app/modules/calls/ParticipantFocusManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import getParticipants from "ChannelRTCStore.tsx";

initializeDefault;
class ParticipantFocusManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_1, applyArgumentsResult.handleFocusParticipant);
    return applyArgumentsResult;
  }
}
ParticipantFocusManager.prototype["handleFocusParticipant"] = function handleFocusParticipant() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    channelId = store.getSelectedParticipantId(channelId);
    const videoParticipants = store.getVideoParticipants(channelId);
    const rTCConnection = obj.getRTCConnection();
    if (rTCConnection != null) {
      const found = videoParticipants.find((item, index) => item.id === closure_0 && !item.localVideoDisabled);
      let id;
      if (found != null) {
        id = found.id;
      }
      const result = rTCConnection.setSelectedParticipant(id);
    }
  }
  obj = channelId;
};
const participantFocusManager = new ParticipantFocusManager();
let result = require("obj132").fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default participantFocusManager;