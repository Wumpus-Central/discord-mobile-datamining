// === Module 9322: useGuildEventRecurrences ===

// Module 9322 (useGuildEventRecurrences)
import _modDef12 from "module_12" /* 12 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9306 */;
import reactDefault from "react" /* 9323 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, tmp5;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1, byWeekday) {
  let closure_0;
  let closure_1;
  let closure_4;
  let first;
  let first1;
  let tmp6;
  let tmp9;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = byWeekday;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(29);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [first1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = reactDefault(byWeekday);
  react = tmp8;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === byWeekday) {
      tmp9 = cResult[5];
    }
    const tmp15 = stateFromStores(react.useState(tmp9), 2);
    first1 = tmp15[0];
    let closure_6 = tmp15[1];
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === tmp8) {
        if (cResult[8] === byWeekday) {
          let tmp16;
          let tmp17;
          if (cResult[9] === first1.length) {
            tmp16 = cResult[10];
            tmp17 = cResult[11];
          }
          const effect = obj4.useEffect(tmp16, tmp17);
          if (cResult[12] === arg0) {
            if (cResult[13] === arg1) {
              let tmp19;
              let tmp20;
              if (cResult[14] === first1) {
                tmp19 = cResult[15];
                tmp20 = cResult[16];
              }
              const effect1 = obj4.useEffect(tmp19, tmp20);
              if (cResult[17] === stateFromStores) {
                if (cResult[18] === byWeekday) {
                  let tmp22;
                  if (cResult[19] === first1) {
                    tmp22 = cResult[20];
                  }
                  class M {
                    constructor() {
                      if (null != byWeekday) {
                        if (null != stateFromStores) {
                          const obj = ScheduleUtils;
                          const rRule = obj.getRRule(tmp2);
                          const items = [];
                          const arraySpreadResult = HermesBuiltin.arraySpread(items, first1, 0);
                          const obj2 = ScheduleUtils;
                          HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first1[first1.length - 1], true), arraySpreadResult);
                          closure_6(items);
                        }
                      }
                    }
                  }
                  if (cResult[25] === false) {
                    if (cResult[26] === first1) {
                      let tmp24;
                      if (cResult[27] === tmp22) {
                        tmp24 = cResult[28];
                      }
                      return tmp24;
                    }
                  }
                  let obj2 = { recurrenceStartTimes: first1, canViewMoreRecurrences: flag, updateRecurrenceStartTimes: tmp22 };
                  cResult[25] = false;
                  cResult[26] = first1;
                  cResult[27] = tmp22;
                  cResult[28] = obj2;
                  tmp24 = obj2;
                }
              }
              class M {
                constructor() {
                  if (null != byWeekday) {
                    if (null != stateFromStores) {
                      const obj = ScheduleUtils;
                      const rRule = obj.getRRule(tmp2);
                      const items = [];
                      const arraySpreadResult = HermesBuiltin.arraySpread(items, first1, 0);
                      const obj2 = ScheduleUtils;
                      HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first1[first1.length - 1], true), arraySpreadResult);
                      closure_6(items);
                    }
                  }
                }
              }
              cResult[17] = stateFromStores;
              cResult[18] = byWeekday;
              cResult[19] = first1;
              cResult[20] = M;
              tmp22 = M;
            }
          }
          class N {
            constructor() {
              if (null != closure_1) {
                tmp2 = closure_5;
                tmp4 = closure_1;
                tmp5 = closure_2;
                mapped = closure_5.map((getTime) => {
                  const fromTimestamp = closure_1_1(byWeekday[9]).fromTimestamp;
                  closure_1_1(byWeekday[9]);
                  const time = getTime.getTime();
                  const floorResult = floor(time / closure_1_1(byWeekday[10]).Millis.SECOND);
                  return fromTimestamp(floorResult * closure_1_1(byWeekday[10]).Millis.SECOND);
                });
                obj = closure_1(closure_2[11]);
                tmp6 = closure_0;
                guildEventUserCounts = obj.getGuildEventUserCounts(tmp, closure_0, mapped);
              }
              return;
            }
          }
          const items1 = [arg0, arg1, first1];
          cResult[12] = arg0;
          cResult[13] = arg1;
          cResult[14] = first1;
          cResult[15] = N;
          cResult[16] = items1;
          tmp20 = items1;
          tmp19 = N;
        }
      }
    }
    const fn2 = function v() {
      if (null != closure_4) {
        if (null != byWeekday) {
          if (null != stateFromStores) {
            const obj2 = _modDef12;
            if (!obj2.isEqual(tmp, byWeekday)) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(byWeekday);
              const _Date = Date;
              const self = this;
              const self2 = this;
              const generateNextRecurrences = ScheduleUtils.generateNextRecurrences;
              const length = first1.length;
              ScheduleUtils;
              const date = new Date(tmp12.scheduled_start_time);
              closure_6(generateNextRecurrences(length, rRule, date));
            }
          }
        }
      }
    };
    const items2 = [byWeekday, first1.length, stateFromStores, tmp8];
    cResult[6] = stateFromStores;
    cResult[7] = tmp8;
    cResult[8] = byWeekday;
    cResult[9] = first1.length;
    cResult[10] = fn2;
    cResult[11] = items2;
    tmp17 = items2;
    tmp16 = fn2;
  }
  if (null != byWeekday) {
    let nextRecurrences;
    if (null != stateFromStores) {
      let generateNextRecurrences = tmp(9198).generateNextRecurrences;
      tmp(9198);
      const tmpResult4 = tmp(9198);
      class M {
        constructor() {
          if (null != byWeekday) {
            if (null != stateFromStores) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(tmp2);
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, first1, 0);
              const obj2 = ScheduleUtils;
              HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first1[first1.length - 1], true), arraySpreadResult);
              closure_6(items);
            }
          }
        }
      }
      let self = this;
      let self2 = this;
      let rRule = tmpResult4.getRRule(byWeekday);
      let date = new Date(stateFromStores.scheduled_start_time);
      nextRecurrences = generateNextRecurrences(4, rRule, date);
    }
    cResult[3] = stateFromStores;
    class M {
      constructor() {
        if (null != byWeekday) {
          if (null != stateFromStores) {
            const obj = ScheduleUtils;
            const rRule = obj.getRRule(tmp2);
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(items, first1, 0);
            const obj2 = ScheduleUtils;
            HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first1[first1.length - 1], true), arraySpreadResult);
            closure_6(items);
          }
        }
      }
    }
    cResult[4] = byWeekday;
    cResult[5] = nextRecurrences;
    tmp9 = nextRecurrences;
  }
  nextRecurrences = [];
}) : (function(arg0, arg1, byWeekday) {
  let closure_0;
  let closure_1;
  let recurrenceStartTimes;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = byWeekday;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("get initialized");
  let items = [recurrenceStartTimes];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(closure_0));
  const tmp4 = reactDefault(byWeekday);
  let closure_4 = tmp4;
  let obj2 = closure_4;
  if (null != byWeekday) {
    if (null != stateFromStores) {
      let generateNextRecurrences = tmp(9198).generateNextRecurrences;
      tmp(9198);
      let _Date = Date;
      let self = this;
      let self2 = this;
      const tmpResult2 = tmp(9198);
      let rRule = tmpResult2.getRRule(byWeekday);
      let date = new Date(stateFromStores.scheduled_start_time);
      const nextRecurrences = generateNextRecurrences(4, rRule, date);
    }
    const tmp12 = stateFromStores;
    const tmp13 = stateFromStores(tmp5([]), 2);
    recurrenceStartTimes = tmp13[0];
    let closure_6 = tmp13[1];
    const items1 = [byWeekday, recurrenceStartTimes.length, stateFromStores, tmp4];
    const effect = obj2.useEffect(function() {
      if (null != closure_4) {
        if (null != byWeekday) {
          if (null != stateFromStores) {
            const obj2 = _modDef12;
            if (!obj2.isEqual(tmp, byWeekday)) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(byWeekday);
              const _Date = Date;
              const self = this;
              const self2 = this;
              const generateNextRecurrences = ScheduleUtils.generateNextRecurrences;
              const length = first.length;
              ScheduleUtils;
              const date = new Date(tmp12.scheduled_start_time);
              closure_6(generateNextRecurrences(length, rRule, date));
            }
          }
        }
      }
    }, items1);
    const items2 = [arg0, arg1, recurrenceStartTimes];
    const effect1 = obj2.useEffect(() => {
      if (null != closure_1) {
        const mapped = first.map((getTime) => {
          const fromTimestamp = closure_1_1(byWeekday[9]).fromTimestamp;
          closure_1_1(byWeekday[9]);
          const time = getTime.getTime();
          const floorResult = floor(time / closure_1_1(byWeekday[10]).Millis.SECOND);
          return fromTimestamp(floorResult * closure_1_1(byWeekday[10]).Millis.SECOND);
        });
        const obj = GuildScheduledEventManagerDefault;
        const guildEventUserCounts = obj.getGuildEventUserCounts(tmp, closure_0, mapped);
      }
    }, items2);
    const items3 = [byWeekday, recurrenceStartTimes, ];
    let scheduled_start_time;
    const useMemo = obj2.useMemo;
    if (stateFromStores != null) {
      scheduled_start_time = stateFromStores.scheduled_start_time;
    }
    items3[2] = scheduled_start_time;
    const obj3 = {
      recurrenceStartTimes,
      canViewMoreRecurrences: useMemo(function() {
          if (null != byWeekday) {
            if (0 !== first.length) {
              let scheduled_start_time;
              if (stateFromStores != null) {
                scheduled_start_time = stateFromStores.scheduled_start_time;
              }
              if (null != scheduled_start_time) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date();
                const setFullYear = date.setFullYear;
                const fullYear = date.getFullYear();
                setFullYear(fullYear + ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT);
                const tmp10 = first[first.length - 1];
                const obj2 = ScheduleUtils;
                const rRule = obj2.getRRule(tmp);
                const afterResult = rRule.after(tmp10);
                return null != afterResult && afterResult <= date;
              }
            }
          }
          return false;
        }, items3),
      updateRecurrenceStartTimes() {
          if (null != byWeekday) {
            if (null != stateFromStores) {
              const obj = ScheduleUtils;
              const rRule = obj.getRRule(tmp2);
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, first, 0);
              const obj2 = ScheduleUtils;
              HermesBuiltin.arraySpread(items, obj2.generateNextRecurrences(4, rRule, first[first.length - 1], true), arraySpreadResult);
              closure_6(items);
            }
          }
        }
    };
    return obj3;
  }
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default tmp2;