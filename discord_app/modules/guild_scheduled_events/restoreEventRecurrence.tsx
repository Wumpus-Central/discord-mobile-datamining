// discord_app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import _modDef8783 from "GuildScheduledEventsActionCreators.tsx";

let result = obj132.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef8783.deleteGuildEventException(guild_id, id, c2);
    }
    return result;
  }
  const obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, c2);
};