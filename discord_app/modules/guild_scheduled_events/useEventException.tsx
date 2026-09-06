// === Module 9669: useEventException ===

// Module 9669 (useEventException)
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  _require = arg1;
  const items = [GuildScheduledEventStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
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
    found = stateFromStoresArray.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
  }
  return found;
};
export const getEventException = function getEventException(recurrenceId, eventId) {
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
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
    found = prop.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
  }
  return found;
};