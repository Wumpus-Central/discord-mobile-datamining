// === Module 13838: getCurrentEmbeddedActivityChannel ===

// Module 13838 (getCurrentEmbeddedActivityChannel)
import participantFromServer from "participantFromServer" /* 1390 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

const result = require("obj132").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};