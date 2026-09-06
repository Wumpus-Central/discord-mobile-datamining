// discord_app/modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx
import util from "../../../intl/index.native.tsx";
import useEventSchedule from "../useEventSchedule.tsx";
import useEventException from "../useEventException.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildScheduledEventStore from "../GuildScheduledEventStore.tsx";

require = fn;
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: hasOwnProperty } =
  GuildScheduledEventsConstants);
const ResponseOptions = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export const getExistingRsvp = function getExistingRsvp(id, c1) {
  return GuildScheduledEventStore.getRsvp(id, c1, AuthenticationStore.getId());
};
export { ResponseOptions };
export const getResponseOptions = function getResponseOptions() {
  let obj = { name: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.uoorxi);
  obj.value = obj.SERIES;
  const items = [obj];
  obj = { name: null, value: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.lwZCFT);
  obj.value = obj.RECURRENCE;
  items[1] = obj;
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
      let tmp33Result = tmp33(9665);
      let scheduled_start_time1;
      if (guildScheduledEvent != null) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const date = new Date(scheduled_start_time1);
      recurrenceStatus = tmp33Result.getRecurrenceStatus(
        eventException,
        obj5.getEventSchedule(guildScheduledEvent, recurrenceId).startTime,
        date,
      );
    }
    if (null == recurrenceStatus) {
      if (recurrenceId == null) {
        tmp33Result = tmp33(9665);
        recurrenceId = tmp33Result.getNextRecurrenceIdInEvent(guildScheduledEvent);
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
