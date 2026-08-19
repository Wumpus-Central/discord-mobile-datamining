// === Module 8893: getNextShownUpcomingEventNoticeType ===

// Module 8893 (getNextShownUpcomingEventNoticeType)
import obj132 from "obj132" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import tDefault from "t" /* 3975 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;

({ UpcomingGuildEventNoticeTypes: obj1, NEW_EVENT_WINDOW_MILLISECONDS: c3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: c4, ACKED_RECENTLY_WINDOW_DAYS: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = obj132.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, closure_7, flag) {
  const obj = tDefault();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  const diff = time - closure_4;
  if (obj.isBetween(diff, time)) {
    if (null != arg1) {
      const obj4 = tDefault(arg1);
      const isBetweenResult = obj4.isBetween(diff, time);
      let EVENT_STARTING_SOON;
      if (!isBetweenResult) {
        if (!obj4.isBetween(obj5.subtract(closure_5, "days"), time)) {
          EVENT_STARTING_SOON = constants.EVENT_STARTING_SOON;
        }
      }
      return EVENT_STARTING_SOON;
    } else {
      return constants.EVENT_STARTING_SOON;
    }
  } else {
    let tmp5 = closure_7;
    const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(guildScheduledEvent.id);
    if (closure_7 == null) {
      tmp5 = extractTimestampResult;
    }
    if (obj.isBetween(extractTimestampResult, Math.min(tmp5 + closure_3, time))) {
      if (null == arg1) {
        if (!flag) {
          return constants.NEW_EVENT;
        }
      }
    }
    const tmpResult = DISCORD_EPOCHDefault;
  }
  const date = new Date(guildScheduledEvent.scheduled_start_time);
};