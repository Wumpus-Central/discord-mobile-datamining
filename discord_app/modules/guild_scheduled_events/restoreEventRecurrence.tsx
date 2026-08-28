// === Module 9926: restoreEventRecurrence ===

// Module 9926 (restoreEventRecurrence)
import set from "set" /* 2 */;
import _modDef9612 from "module_9612" /* 9612 */;

let result = set.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef9612.deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = _modDef9612;
    }
    return result;
  }
  let obj = _modDef9612;
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};