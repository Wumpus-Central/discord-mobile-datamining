// discord_app/modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return channel.getChannel(connectedActivityChannelId.getConnectedActivityChannelId());
};