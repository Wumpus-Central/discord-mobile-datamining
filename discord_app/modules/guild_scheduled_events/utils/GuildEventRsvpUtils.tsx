import fetchFingerprint from "fetchFingerprint";
import scheduledEventSort from "scheduledEventSort";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let c4;
let c5;
const require = arg1;
({ GuildScheduledEventUserResponses: c4, GuildScheduledEventStatusDone: c5 } = GUILD_EVENT_MAX_NAME_LENGTH);
let obj = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export const getExistingRsvp = function getExistingRsvp(id, outer1_1) {
  return store2.getRsvp(id, outer1_1, store.getId());
};
export const ResponseOptions = obj;
export const getResponseOptions = function getResponseOptions() {
  let obj = { name: null, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.uoorxi);
  obj[1] = obj.SERIES;
  const items = [obj, ];
  obj = { name: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.lwZCFT);
  obj[1] = obj.RECURRENCE;
  items[1] = obj;
  return items;
};
export const handleRsvp = function handleRsvp(openRsvpPicker) {
  let eventId;
  let guildId;
  let onRsvp;
  let recurrenceId;
  let updateRsvp;
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  const guildScheduledEvent = store2.getGuildScheduledEvent(eventId);
  if (null != guildScheduledEvent) {
    const eventException = require(8219) /* useEventException */.getEventException(recurrenceId, eventId);
    const obj4 = require(8219) /* useEventException */;
    let scheduled_start_time;
    if (guildScheduledEvent != null) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let tmp33Result = tmp33(8214);
      let scheduled_start_time1;
      if (guildScheduledEvent != null) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const date = new Date(scheduled_start_time1);
      recurrenceStatus = tmp33Result.getRecurrenceStatus(eventException, obj5.getEventSchedule(guildScheduledEvent, recurrenceId).startTime, date);
    }
    if (null == recurrenceStatus) {
      if (recurrenceId == null) {
        tmp33Result = tmp33(8214);
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
    obj5 = require(8220) /* useEventSchedule */;
  }
};