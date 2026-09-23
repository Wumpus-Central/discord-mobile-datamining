// === Module 9870: GuildEventRsvpUtils ===

// Module 9870 (GuildEventRsvpUtils)
import util from "util" /* 1115 */;
import ScheduleUtils from "ScheduleUtils" /* 9832 */;
import useEventSchedule from "useEventSchedule" /* 9835 */;
import useEventException from "useEventException" /* 9836 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7854 */;

require = fn;
const GuildScheduledEventsConstants = fn(2048);
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: hasOwnProperty } = GuildScheduledEventsConstants);
const ResponseOptions = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export const getExistingRsvp = function getExistingRsvp(id, c1) {
  return GuildScheduledEventStore.getRsvp(id, c1, AuthenticationStore.getId());
};
export { ResponseOptions };
export const getResponseOptions = function getResponseOptions() {
  const obj = { name: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.uoorxi);
  obj.value = obj.SERIES;
  const items = [obj, ];
  const obj2 = { name: null, value: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.lwZCFT);
  obj2.value = obj.RECURRENCE;
  items[1] = obj2;
  return items;
};
export const handleRsvp = function handleRsvp(openRsvpPicker) {
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
  if (null != guildScheduledEvent) {
    const eventException = useEventException.getEventException(recurrenceId, eventId);
    let scheduled_start_time;
    if (guildScheduledEvent != null) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let scheduled_start_time1;
      if (guildScheduledEvent != null) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const date = new Date(scheduled_start_time1);
      recurrenceStatus = ScheduleUtils.getRecurrenceStatus(eventException, obj5.getEventSchedule(guildScheduledEvent, recurrenceId).startTime, date);
      const tmp33Result = ScheduleUtils;
    }
    if (null == recurrenceStatus) {
      if (recurrenceId == null) {
        recurrenceId = ScheduleUtils.getNextRecurrenceIdInEvent(guildScheduledEvent);
        const tmp33Result2 = ScheduleUtils;
      }
      let tmp12 = recurrenceId;
    } else {
      tmp12 = null;
    }
    const rsvp = GuildScheduledEventStore.getRsvp(guildScheduledEvent.id, undefined, AuthenticationStore.getId());
    const id = guildScheduledEvent.id;
    if (null == tmp12) {
      if (null != rsvp) {
        let INTERESTED = constants.UNINTERESTED;
      } else {
        INTERESTED = constants.INTERESTED;
      }
      updateRsvp(eventId, null, guildId, INTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else if (null != tmp15) {
      if (null != rsvp) {
        let UNINTERESTED = constants.INTERESTED;
      } else {
        UNINTERESTED = constants.UNINTERESTED;
      }
      updateRsvp(eventId, tmp12, guildId, UNINTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else {
      openRsvpPicker.openRsvpPicker(guildScheduledEvent, tmp12);
    }
    obj5 = useEventSchedule;
  }
};