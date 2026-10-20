// === Module 8957: GuildScheduledEventUtils ===

// Module 8957 (GuildScheduledEventUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef2050 from "module_2050" /* 2050 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4806 */;
import size from "module_2" /* 2 */;

({ UpcomingGuildEventNoticeTypes: c2, NEW_EVENT_WINDOW_MILLISECONDS: c3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: closure_4, ACKED_RECENTLY_WINDOW_DAYS: hasOwnProperty } = GuildScheduledEventsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, arg2, flag) {
  const obj = _modDef2050();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  const diff = time - React4;
  if (obj.isBetween(diff, time)) {
    if (null != arg1) {
      const obj4 = _modDef2050(arg1);
      const isBetweenResult = obj4.isBetween(diff, time);
      let EVENT_STARTING_SOON;
      if (!isBetweenResult) {
        if (!obj4.isBetween(obj5.subtract(hasOwnProperty, "days"), time)) {
          EVENT_STARTING_SOON = constants.EVENT_STARTING_SOON;
        }
      }
      return EVENT_STARTING_SOON;
    } else {
      return constants.EVENT_STARTING_SOON;
    }
  } else {
    let tmp5 = arg2;
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(guildScheduledEvent.id);
    if (arg2 == null) {
      tmp5 = extractTimestampResult;
    }
    if (obj.isBetween(extractTimestampResult, Math.min(tmp5 + React3, time))) {
      if (null == arg1) {
        if (!flag) {
          return constants.NEW_EVENT;
        }
      }
    }
    const tmpResult = SnowflakeUtilsDefault;
  }
  const date = new Date(guildScheduledEvent.scheduled_start_time);
};