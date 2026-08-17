// discord_app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
import set from "set" /* 2 */;
import _modDef8783 from "module_8783" /* 8783 */;

let result = set.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef8783.deleteGuildEventException(guild_id, id, c2);
      const obj3 = _modDef8783;
    }
    return result;
  }
  let obj = _modDef8783;
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, c2);
};