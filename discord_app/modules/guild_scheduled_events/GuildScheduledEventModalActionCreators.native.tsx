// discord_app/modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function openGuildEventDetails(arg0) {
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { eventId, event, onCloseActionSheet: onClose, recurrenceId: null };
  if (recurrenceId == null) {
    recurrenceId = ScheduleUtils.getNextRecurrenceIdInEvent(event);
    const tmp2Result = ScheduleUtils;
  }
  obj2.recurrenceId = recurrenceId;
  obj.openLazy(asyncRequireImpl(9887, dependencyMap.paths), closure_5, obj2, "stack");
  const tmp3 = asyncRequireImpl(9887, dependencyMap.paths);
}
let closure_7 = async function _transitionToEventDetailsFromInvite(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
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
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj = { eventId: closure_130_0.id, event: closure_130_0, recurrenceId: null };
        let recurrenceId;
        if (closure_130_1 != null) {
          recurrenceId = closure_130_1.recurrenceId;
        }
        obj.recurrenceId = recurrenceId;
        closure_131_6(obj);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp17) {
      c5 = tmp;
      throw tmp17;
    }
  }
};
let closure_4 = fn(2047).EXPLICIT_END_EVENT_SHEET_KEY;
let closure_5 = fn(9783).GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx",
);

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openEndEventModal = function openEndEventModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9902, dependencyMap.paths), closure_4, { channel });
};
