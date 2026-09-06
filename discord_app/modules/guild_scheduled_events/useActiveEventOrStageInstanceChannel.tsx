// discord_app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
import useGuildScheduledEvents from "useGuildScheduledEvents.tsx";
import useLiveStageChannelsDefault from "../stage_channels/useLiveStageChannels.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = ChannelStore.getChannel(id);
  }
  return firstActiveEventChannel;
};
