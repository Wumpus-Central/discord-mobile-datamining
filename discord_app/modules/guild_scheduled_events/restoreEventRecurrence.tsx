// discord_app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = GuildScheduledEventsActionCreatorsDefault.deleteGuildEventException(
        guild_id,
        id,
        event_exception_id,
      );
    }
    return result;
  }
  const obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
}
