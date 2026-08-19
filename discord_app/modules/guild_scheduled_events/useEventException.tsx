// === Module 8790: useEventException ===

// Module 8790 (useEventException)
import scheduledEventSort from "scheduledEventSort" /* 4370 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  let _require = arg1;
  const items = [closure_2];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
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