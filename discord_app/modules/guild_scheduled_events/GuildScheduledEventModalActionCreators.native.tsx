// discord_app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import getRRule from "utils/ScheduleUtils.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { EXPLICIT_END_EVENT_SHEET_KEY as closure_4 } from "GuildScheduledEventsConstants.tsx";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_5 } from "native/GuildEventModalConstants.tsx";

require = arg1;
function openGuildEventDetails(arg0) {
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { eventId, event, onCloseActionSheet: onClose, recurrenceId: null };
  if (recurrenceId == null) {
    recurrenceId = getRRule.getNextRecurrenceIdInEvent(event);
    const tmp2Result = getRRule;
  }
  obj[3] = recurrenceId;
  obj.openLazy(asyncRequireImpl(9681, dependencyMap.paths), closure_5, obj, "stack");
}
function _transitionToEventDetailsFromInvite() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp5;
              closure_2 = tmp2;
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.resolve();
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = { eventId: null, event: null, recurrenceId: null };
            obj[0] = id.id;
            obj[1] = id;
            let recurrenceId;
            if (recurrenceId != null) {
              recurrenceId = recurrenceId.recurrenceId;
            }
            obj[2] = recurrenceId;
            closure_6(obj);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c5 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  const self = this;
  const apply = _transitionToEventDetailsFromInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openEndEventModal = function openEndEventModal(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(9694, dependencyMap.paths), closure_4, obj);
};