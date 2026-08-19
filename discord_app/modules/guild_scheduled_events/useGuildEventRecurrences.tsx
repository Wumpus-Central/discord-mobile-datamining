// discord_app/modules/guild_scheduled_events/useGuildEventRecurrences.tsx
import usePrevValueDefault from "../../../discord_common/js/shared/hooks/usePrevValue.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import scheduledEventSort from "GuildScheduledEventStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default function useGuildEventRecurrences(arg0, arg1, closure_2) {
  const _require = arg0;
  importDefault = arg1;
  dependencyMap = closure_2;
  let obj = initialize;
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.getGuildScheduledEvent(closure_0));
  const tmp4 = usePrevValueDefault(closure_2);
  closure_4 = tmp4;
  if (null != closure_2) {
    if (null != stateFromStores) {
      tmp(8785);
      const tmpResult = tmp(8785);
      let _Date = Date;
      let rRule = tmpResult.getRRule(closure_2);
      let date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = tmpResult.generateNextRecurrences(4, rRule, date);
    }
    const tmp14 = stateFromStores(tmp5([]), 2);
    first = tmp14[0];
    closure_6 = tmp14[1];
    const items1 = [closure_2, first.length, stateFromStores, tmp4];
    const effect = obj2.useEffect(() => {
      if (null != closure_4) {
        if (null != dependencyMap) {
          if (null != stateFromStores) {
            if (!obj3.isEqual(tmp, dependencyMap)) {
              const rRule = callback(8785).getRRule(dependencyMap);
              const obj = callback(8785);
              const _Date = Date;
              const date = new Date(tmp13.scheduled_start_time);
              callback3(callback(8785).generateNextRecurrences(first.length, rRule, date));
              const obj2 = callback(8785);
            }
            obj3 = callback2(12);
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, first];
    const effect1 = obj2.useEffect(() => {
      if (null != callback2) {
        const mapped = first.map((item, index) => {
          const time = item.getTime();
          const rounded = Math.floor(time / callback(687).Millis.SECOND);
          return callback(11).fromTimestamp(rounded * callback(687).Millis.SECOND);
        });
        const guildEventUserCounts = callback2(8796).getGuildEventUserCounts(tmp, closure_0, mapped);
        const obj = callback2(8796);
      }
    }, items2);
    const items3 = [closure_2, first, ];
    let scheduled_start_time;
    if (stateFromStores != null) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    obj = { recurrenceStartTimes: null, canViewMoreRecurrences: null, updateRecurrenceStartTimes: null };
    obj[0] = first;
    obj[1] = obj2.useMemo(() => {
      if (null != dependencyMap) {
        if (0 !== first.length) {
          let scheduled_start_time;
          if (stateFromStores != null) {
            scheduled_start_time = stateFromStores.scheduled_start_time;
          }
          if (null != scheduled_start_time) {
            const _Date = Date;
            const date = new Date();
            const fullYear = date.getFullYear();
            date.setFullYear(fullYear + callback(8785).MAX_YEARS_AHEAD_RECURRING_EVENT);
            const rRule = callback(8785).getRRule(tmp);
            const afterResult = rRule.after(first[first.length - 1]);
            return null != afterResult && afterResult <= date;
          }
        }
      }
      return false;
    }, items3);
    obj[2] = function updateRecurrenceStartTimes() {
      if (null != dependencyMap) {
        if (null != stateFromStores) {
          const rRule = callback(8785).getRRule(tmp);
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
          const obj2 = callback(8785);
          arraySpreadResult = HermesBuiltin.arraySpread(obj2.generateNextRecurrences(4, rRule, tmp7, true), arraySpreadResult);
          callback3(items);
          const obj = callback(8785);
        }
      }
    };
    return obj;
  }
};