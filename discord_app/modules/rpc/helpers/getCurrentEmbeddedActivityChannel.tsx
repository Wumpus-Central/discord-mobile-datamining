// === Module 14122: getCurrentEmbeddedActivityChannel ===

// Module 14122 (getCurrentEmbeddedActivityChannel)
import closure_0 from "participantFromServer" /* 1386 */;
import closure_1 from "ensureGuildLoaded" /* 1387 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};