// === Module 9797: useGuildEventRecurrences ===

// Module 9797 (useGuildEventRecurrences)
import _modDef12 from "module_12" /* 12 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9781 */;
import usePrevValueDefault from "usePrevValue" /* 9798 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, byWeekday) {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = byWeekday;
  let obj = require("initialize");
  let items = [recurrenceStartTimes];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(closure_0));
  const tmp4 = usePrevValueDefault(byWeekday);
  closure_4 = tmp4;
  if (null != byWeekday) {
    if (null != stateFromStores) {
      tmp(9665);
      const tmpResult = tmp(9665);
      let _Date = Date;
      let rRule = tmpResult.getRRule(byWeekday);
      let date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = tmpResult.generateNextRecurrences(4, rRule, date);
    }
    const tmp14 = stateFromStores(tmp5([]), 2);
    recurrenceStartTimes = tmp14[0];
    closure_6 = tmp14[1];
    const items1 = [byWeekday, recurrenceStartTimes.length, stateFromStores, tmp4];
    const effect = obj2.useEffect(() => {
      if (null != closure_4) {
        if (null != closure_2) {
          if (null != stateFromStores) {
            if (!obj3.isEqual(tmp, closure_2)) {
              const rRule = ScheduleUtils.getRRule(closure_2);
              const _Date = Date;
              const date = new Date(tmp13.scheduled_start_time);
              closure_6(ScheduleUtils.generateNextRecurrences(first.length, rRule, date));
            }
            obj3 = _modDef12;
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, recurrenceStartTimes];
    const effect1 = obj2.useEffect(() => {
      if (null != closure_1) {
        const mapped = first.map((getTime) => {
          const time = getTime.getTime();
          const rounded = Math.floor(time / closure_1_1(1090).Millis.SECOND);
          return closure_1_1(11).fromTimestamp(rounded * closure_1_1(1090).Millis.SECOND);
        });
        const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(tmp, closure_0, mapped);
      }
    }, items2);
    const items3 = [byWeekday, recurrenceStartTimes, ];
    let scheduled_start_time;
    if (stateFromStores != null) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    obj = {
      recurrenceStartTimes,
      canViewMoreRecurrences: obj2.useMemo(() => {
          if (null != closure_2) {
            if (0 !== first.length) {
              let scheduled_start_time;
              if (stateFromStores != null) {
                scheduled_start_time = stateFromStores.scheduled_start_time;
              }
              if (null != scheduled_start_time) {
                const _Date = Date;
                const date = new Date();
                const fullYear = date.getFullYear();
                date.setFullYear(fullYear + ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT);
                const rRule = ScheduleUtils.getRRule(tmp);
                const afterResult = rRule.after(first[first.length - 1]);
                return null != afterResult && afterResult <= date;
              }
            }
          }
          return false;
        }, items3),
      updateRecurrenceStartTimes() {
          if (null != closure_2) {
            if (null != stateFromStores) {
              const rRule = ScheduleUtils.getRRule(tmp);
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
              const obj2 = ScheduleUtils;
              arraySpreadResult = HermesBuiltin.arraySpread(obj2.generateNextRecurrences(4, rRule, tmp7, true), arraySpreadResult);
              closure_6(items);
            }
          }
        }
    };
    return obj;
  }
};