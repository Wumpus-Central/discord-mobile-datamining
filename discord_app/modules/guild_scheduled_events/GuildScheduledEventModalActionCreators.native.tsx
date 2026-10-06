// discord_app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import GuildEventModalConstants from "native/GuildEventModalConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, closure_3;

function openGuildEventDetails(arg0) {
  let event;
  let eventId;
  let onClose;
  let recurrenceId;
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  obj = { eventId, event, onCloseActionSheet: onClose, recurrenceId };
  const tmp4 = asyncRequire(9315, dependencyMap.paths);
  if (recurrenceId == null) {
    const tmp3Result = ScheduleUtils;
    recurrenceId = tmp3Result.getNextRecurrenceIdInEvent(event);
  }
  openLazy(tmp4, closure_5, obj, "stack");
}
let obj = function _transitionToEventDetailsFromInvite() {
  obj = _asyncToGenerator(async (event, arg1) => {
    let recurrenceId = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: Promise.resolve(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            obj = { eventId: event.id, event, recurrenceId };
            recurrenceId = undefined;
            if (recurrenceId != null) {
              recurrenceId = recurrenceId.recurrenceId;
            }
            closure_131_6(obj);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = GuildScheduledEventsConstants.EXPLICIT_END_EVENT_SHEET_KEY;
let closure_5 = GuildEventModalConstants.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx",
);

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return obj(...arguments);
};
export const openEndEventModal = function openEndEventModal(channel) {
  obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(9333, dependencyMap.paths), closure_4, obj2);
};
