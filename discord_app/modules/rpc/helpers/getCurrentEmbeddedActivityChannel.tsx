// === Module 14361: getCurrentEmbeddedActivityChannel ===

// Module 14361 (getCurrentEmbeddedActivityChannel)
import closure_0 from "participantFromServer" /* 1385 */;
import closure_1 from "ensureGuildLoaded" /* 1386 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};