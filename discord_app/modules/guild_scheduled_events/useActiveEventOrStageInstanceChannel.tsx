// discord_app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
import useGuildEvents from "useGuildScheduledEvents.tsx";
import useLiveStageChannelsDefault from "../stage_channels/useLiveStageChannels.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx",
);

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
