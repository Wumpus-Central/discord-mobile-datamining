// discord_app/modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({
  UpcomingGuildEventNoticeTypes: c2,
  NEW_EVENT_WINDOW_MILLISECONDS: c3,
  EVENT_STARTING_SOON_WINDOW_MILLISECONDS: closure_4,
  ACKED_RECENTLY_WINDOW_DAYS: hasOwnProperty,
} = GuildScheduledEventsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(
  guildScheduledEvent,
  arg1,
  arg2,
  flag,
) {
  const obj = _modDef4467();
  const date = new Date(guildScheduledEvent.scheduled_start_time);
  const time = date.getTime();
  const diff = time - React3;
  if (obj.isBetween(diff, time)) {
    if (null != arg1) {
      const obj4 = _modDef4467(arg1);
      const isBetween = obj4.isBetween;
      let EVENT_STARTING_SOON;
      const isBetweenResult = obj4.isBetween(diff, time);
      const obj5 = _modDef4467(time);
      if (!isBetweenResult) {
        if (!isBetween(obj5.subtract(hasOwnProperty, "days"), time)) {
          EVENT_STARTING_SOON = constants.EVENT_STARTING_SOON;
        }
      }
      return EVENT_STARTING_SOON;
    } else {
      return constants.EVENT_STARTING_SOON;
    }
  } else {
    let tmp5 = arg2;
    const tmpResult = SnowflakeUtilsDefault;
    const extractTimestampResult = tmpResult.extractTimestamp(guildScheduledEvent.id);
    const _Math = Math;
    if (arg2 == null) {
      tmp5 = extractTimestampResult;
    }
    if (obj.isBetween(extractTimestampResult, min(tmp5 + _false, time))) {
      if (null == arg1) {
        if (!flag) {
          return constants.NEW_EVENT;
        }
      }
    }
  }
};
