// === Module 9202: useEventException ===

// Module 9202 (useEventException)
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f99830 = (event_exception_id) => event_exception_id.event_exception_id === constants;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg1;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
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
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6);
  if (cResult[3] === stateFromStoresArray) {
    let tmp7;
    if (cResult[4] === arg0) {
      tmp7 = cResult[5];
    }
    return tmp7;
  }
  _require = arg0;
  let found;
  if (stateFromStoresArray != null) {
    found = stateFromStoresArray.find(f99830);
  }
  cResult[3] = stateFromStoresArray;
  cResult[4] = arg0;
  cResult[5] = found;
  tmp7 = found;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg1;
  const items = [GuildScheduledEventStore];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
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
    found = stateFromStoresArray.find(f99830);
  }
  return found;
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default tmp2;
export const getEventException = function getEventException(recurrenceId, eventId) {
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
  let prop;
  if (guildScheduledEvent != null) {
    prop = guildScheduledEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  let closure_0 = recurrenceId;
  let found;
  if (prop != null) {
    found = prop.find(f99830);
  }
  return found;
};