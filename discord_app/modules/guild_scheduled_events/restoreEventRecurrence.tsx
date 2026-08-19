// === Module 12400: restoreEventRecurrence ===

// Module 12400 (restoreEventRecurrence)
import obj132 from "obj132" /* 2 */;
import _modDef8783 from "module_8783" /* 8783 */;

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