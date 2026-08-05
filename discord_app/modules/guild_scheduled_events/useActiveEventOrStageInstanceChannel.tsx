// discord_app/modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require("useGuildScheduledEvents.tsx") /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = require("../stage_channels/useLiveStageChannels.tsx")(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};