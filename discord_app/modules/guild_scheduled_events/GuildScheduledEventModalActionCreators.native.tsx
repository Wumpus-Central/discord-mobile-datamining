// discord_app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
import asyncRequireImpl from "asyncRequireImpl";
import { EXPLICIT_END_EVENT_SHEET_KEY as closure_4 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_5 } from "CREATE_GUILD_EVENT_MODAL_KEY";

const require = arg1;
function openGuildEventDetails(arg0) {
  let event;
  let eventId;
  let onClose;
  let recurrenceId;
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  let obj = importDefault(4253);
  obj = { eventId, event, onCloseActionSheet: onClose, recurrenceId: null };
  if (recurrenceId == null) {
    recurrenceId = require(8864) /* getRRule */.getNextRecurrenceIdInEvent(event);
    const tmp2Result = require(8864) /* getRRule */;
  }
  obj[3] = recurrenceId;
  obj.openLazy(require(1959) /* asyncRequireImpl */(8873, dependencyMap.paths), closure_5, obj, "stack");
}
function _transitionToEventDetailsFromInvite() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
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
              let asyncRequireImpl = tmp5;
              let closure_2 = tmp2;
              c4 = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
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
  const _transitionToEventDetailsFromInvite = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("CREATE_GUILD_EVENT_MODAL_KEY").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

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
  let obj = importDefault(4253);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(9069, dependencyMap.paths), closure_4, obj);
};