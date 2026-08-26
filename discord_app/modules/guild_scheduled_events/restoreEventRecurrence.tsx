// discord_app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
import set from "../../../_runtime/00002_set.js";
import _modDef9155 from "GuildScheduledEventsActionCreators.tsx";

let result = set.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef9155.deleteGuildEventException(guild_id, id, c2);
      const obj3 = _modDef9155;
    }
    return result;
  }
  let obj = _modDef9155;
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, c2);
};