// discord_app/modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import useEventSchedule from "../useEventSchedule.tsx";
import useEventException from "../useEventException.tsx";
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../GuildScheduledEventStore.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "../GuildScheduledEventsConstants.tsx";

require = arg1;
({ GuildScheduledEventUserResponses: c4, GuildScheduledEventStatusDone: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
let obj = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export const getExistingRsvp = function getExistingRsvp(closure_1_0, closure_1_1) {
  return store2.getRsvp(closure_1_0, closure_1_1, store.getId());
};
export const ResponseOptions = obj;
export const getResponseOptions = function getResponseOptions() {
  obj = { name: null, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.uoorxi);
  obj[1] = obj.SERIES;
  const items = [obj];
  obj = { name: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.lwZCFT);
  obj[1] = obj.RECURRENCE;
  items[1] = obj;
  return items;
};
export const handleRsvp = function handleRsvp(openRsvpPicker) {
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  const guildScheduledEvent = store2.getGuildScheduledEvent(eventId);
  if (null != guildScheduledEvent) {
    const eventException = useEventException.getEventException(recurrenceId, eventId);
    const obj4 = useEventException;
    let scheduled_start_time;
    if (guildScheduledEvent != null) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let tmp33Result = tmp33(9634);
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
        tmp33Result = tmp33(9634);
        recurrenceId = tmp33Result.getNextRecurrenceIdInEvent(guildScheduledEvent);
      }
      let tmp12 = recurrenceId;
    } else {
      tmp12 = null;
    }
    const rsvp = store2.getRsvp(guildScheduledEvent.id, undefined, store.getId());
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
