// discord_app/modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { t } from "../../../_runtime/03837_t.js";

let c3;
let c4;
let c5;
let obj1;
({ UpcomingGuildEventNoticeTypes: obj1, NEW_EVENT_WINDOW_MILLISECONDS: c3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: c4, ACKED_RECENTLY_WINDOW_DAYS: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, arg2, flag) {
  const obj = t();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  const diff = time - closure_4;
  if (obj.isBetween(diff, time)) {
    if (null != arg1) {
      const obj4 = tmp(3837)(arg1);
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
    let tmp5 = arg2;
    const extractTimestampResult = tmp(11).extractTimestamp(guildScheduledEvent.id);
    if (arg2 == null) {
      tmp5 = extractTimestampResult;
    }
    if (obj.isBetween(extractTimestampResult, Math.min(tmp5 + closure_3, time))) {
      if (null == arg1) {
        if (!flag) {
          return constants.NEW_EVENT;
        }
      }
    }
  }
  const date = new Date(guildScheduledEvent.scheduled_start_time);
};