// === Module 16388: handleFocusParticipant ===

// Module 16388 (handleFocusParticipant)
import createRTCConnection from "createRTCConnection";
import getParticipants from "getParticipants";
import "initialize";

class ParticipantFocusManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(getParticipants, applyArgumentsResult.handleFocusParticipant);
    return applyArgumentsResult;
  }
}
ParticipantFocusManager.prototype["handleFocusParticipant"] = function handleFocusParticipant() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    channelId = store.getSelectedParticipantId(channelId);
    const videoParticipants = store.getVideoParticipants(channelId);
    const rTCConnection = channelId.getRTCConnection();
    if (rTCConnection != null) {
      const found = videoParticipants.find((id) => id.id === createRTCConnection && !id.localVideoDisabled);
      let id;
      if (found != null) {
        id = found.id;
      }
      const result = rTCConnection.setSelectedParticipant(id);
    }
  }
};
const participantFocusManager = new ParticipantFocusManager();
let result = require("initialize").fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default participantFocusManager;