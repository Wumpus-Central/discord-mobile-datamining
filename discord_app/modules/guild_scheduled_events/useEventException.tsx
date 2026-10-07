// discord_app/modules/guild_scheduled_events/useEventException.tsx
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg1;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildScheduledEventStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function o() {
          const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
          let prop;
          if (guildScheduledEvent != null) {
            prop = guildScheduledEvent.guild_scheduled_event_exceptions;
          }
          if (prop == null) {
            prop = [];
          }
          return prop;
        };
        cResult[1] = arg1;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6);
      if (cResult[3] === stateFromStoresArray) {
        if (cResult[4] === arg0) {
          let tmp7 = cResult[5];
        }
        return tmp7;
      }
      _require = arg0;
      let found;
      if (stateFromStoresArray != null) {
        found = stateFromStoresArray.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
      }
      cResult[3] = stateFromStoresArray;
      cResult[4] = arg0;
      cResult[5] = found;
      tmp7 = found;
      const tmpResult = require("initialize");
    }
  : (arg0, arg1) => {
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
