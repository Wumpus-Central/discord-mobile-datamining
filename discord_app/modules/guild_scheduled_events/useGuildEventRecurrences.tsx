// discord_app/modules/guild_scheduled_events/useGuildEventRecurrences.tsx
import usePrevValueDefault from "../../../discord_common/js/shared/hooks/usePrevValue.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "GuildScheduledEventStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, byWeekday) {
  const _require = arg0;
  importDefault = arg1;
  dependencyMap = byWeekday;
  let obj = initialize;
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.getGuildScheduledEvent(closure_0));
  const tmp4 = usePrevValueDefault(byWeekday);
  closure_4 = tmp4;
  if (null != byWeekday) {
    if (null != stateFromStores) {
      let tmpResult = tmp(9634);
      tmpResult = tmp(9634);
      let _Date = Date;
      let rRule = tmpResult.getRRule(byWeekday);
      let date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = tmpResult.generateNextRecurrences(4, rRule, date);
    }
    const tmp14 = stateFromStores(tmp5([]), 2);
    first = tmp14[0];
    closure_6 = tmp14[1];
    const items1 = [byWeekday, first.length, stateFromStores, tmp4];
    const effect = obj2.useEffect(() => {
      if (null != closure_4) {
        if (null != byWeekday) {
          if (null != stateFromStores) {
            if (!obj3.isEqual(tmp, tmp12)) {
              const rRule = callback(tmp15[5]).getRRule(tmp12);
              const obj = callback(tmp15[5]);
              const _Date = Date;
              const date = new Date(tmp13.scheduled_start_time);
              callback3(callback(tmp15[5]).generateNextRecurrences(first.length, rRule, date));
              const obj2 = callback(tmp15[5]);
            }
            obj3 = callback2(byWeekday[6]);
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, first];
    const effect1 = obj2.useEffect(() => {
      if (null != callback2) {
        const mapped = first.map((getTime) => {
          const time = getTime.getTime();
          const rounded = Math.floor(time / callback(687).Millis.SECOND);
          return callback(11).fromTimestamp(rounded * callback(687).Millis.SECOND);
        });
        const guildEventUserCounts = callback2(byWeekday[9]).getGuildEventUserCounts(tmp, closure_0, mapped);
        const obj = callback2(byWeekday[9]);
      }
    }, items2);
    const items3 = [byWeekday, first];
    let scheduled_start_time;
    if (stateFromStores != null) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    obj = { recurrenceStartTimes: null, canViewMoreRecurrences: null, updateRecurrenceStartTimes: null };
    obj[0] = first;
    obj[1] = obj2.useMemo(() => {
      if (null != byWeekday) {
        if (0 !== first.length) {
          let scheduled_start_time;
          if (stateFromStores != null) {
            scheduled_start_time = stateFromStores.scheduled_start_time;
          }
          if (null != scheduled_start_time) {
            const _Date = Date;
            const date = new Date();
            const fullYear = date.getFullYear();
            date.setFullYear(fullYear + callback(byWeekday[5]).MAX_YEARS_AHEAD_RECURRING_EVENT);
            const rRule = callback(byWeekday[5]).getRRule(tmp);
            const afterResult = rRule.after(arr[arr.length - 1]);
            return null != afterResult && afterResult <= date;
          }
        }
      }
      return false;
    }, items3);
    obj[2] = function updateRecurrenceStartTimes() {
      if (null != byWeekday) {
        if (null != stateFromStores) {
          const rRule = callback(byWeekday[5]).getRRule(tmp);
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
          const obj2 = callback(byWeekday[5]);
          arraySpreadResult = HermesBuiltin.arraySpread(
            obj2.generateNextRecurrences(4, rRule, tmp7, true),
            arraySpreadResult,
          );
          callback3(items);
          const obj = callback(byWeekday[5]);
        }
      }
    };
    return obj;
  }
}
