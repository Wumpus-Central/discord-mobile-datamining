// === Module 8744: restoreEventRecurrence ===

// Module 8744 (restoreEventRecurrence)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8494 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = GuildScheduledEventsActionCreatorsDefault.deleteGuildEventException(guild_id, id, c2);
    }
    return result;
  }
  result = GuildScheduledEventsActionCreatorsDefault.updateGuildEventException({ scheduled_start_time, scheduled_end_time, is_canceled: false }, guild_id, id, c2);
  const obj2 = { scheduled_start_time, scheduled_end_time, is_canceled: false };
};