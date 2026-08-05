import { useLiveStageChannels } from "../stage_channels/useLiveStageChannels.tsx";
import { useGuildEvents } from "useGuildScheduledEvents.tsx";
// discord_app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildEvents /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = useLiveStageChannels(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};