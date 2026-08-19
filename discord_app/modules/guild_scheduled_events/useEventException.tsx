// discord_app/modules/guild_scheduled_events/useEventException.tsx
import scheduledEventSort from "GuildScheduledEventStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  let _require = arg1;
  const items = [closure_2];
  const stateFromStoresArray = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const guildScheduledEvent = closure_1_2.getGuildScheduledEvent(closure_0);
    let prop;
    if (guildScheduledEvent != null) {
      prop = guildScheduledEvent.guild_scheduled_event_exceptions;
    }
    if (prop == null) {
      prop = [];
    }
    return prop;
  });
  _require = arg0;
  let found;
  if (stateFromStoresArray != null) {
    found = stateFromStoresArray.find((item, index) => item.event_exception_id === closure_0);
  }
  return found;
};
export const getEventException = function getEventException(recurrenceId, eventId) {
  guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(eventId);
  let prop;
  if (guildScheduledEvent != null) {
    prop = guildScheduledEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  closure_0 = recurrenceId;
  let found;
  if (prop != null) {
    found = prop.find((item, index) => item.event_exception_id === closure_0);
  }
  return found;
};