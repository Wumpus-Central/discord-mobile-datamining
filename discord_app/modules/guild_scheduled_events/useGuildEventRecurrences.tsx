// discord_app/modules/guild_scheduled_events/useGuildEventRecurrences.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import ScheduleUtils from "utils/ScheduleUtils.tsx";
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager.tsx";
import usePrevValueDefault from "../../../discord_common/js/shared/hooks/usePrevValue.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildEventRecurrences.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, byWeekday) => {
      _require = arg0;
      importDefault = arg1;
      dependencyMap = byWeekday;
      const cResult = require("c").c(29);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [first1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          return GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmp8 = usePrevValueDefault(byWeekday);
      noop = tmp8;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === byWeekday) {
          const tmp13 = stateFromStores(noop.useState(cResult[5]), 2);
          first1 = tmp13[0];
          closure_6 = tmp13[1];
          if (cResult[6] === stateFromStores) {
            if (cResult[7] === tmp8) {
              if (cResult[8] === byWeekday) {
                if (cResult[9] === first1.length) {
                  let tmp14 = cResult[10];
                  let tmp15 = cResult[11];
                }
                const effect = obj5.useEffect(tmp14, tmp15);
                if (cResult[12] === arg0) {
                  if (cResult[13] === arg1) {
                    if (cResult[14] === first1) {
                      let tmp17 = cResult[15];
                      let tmp18 = cResult[16];
                    }
                    const effect1 = obj5.useEffect(tmp17, tmp18);
                    if (cResult[17] === stateFromStores) {
                      if (cResult[18] === byWeekday) {
                        if (cResult[19] === first1) {
                          let tmp20 = cResult[20];
                        }
                        class M {
                          constructor() {
                            if (null != closure_2) {
                              tmp2 = closure_3;
                              if (null != closure_3) {
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj = closure_0(closure_2[7]);
                                rRule = obj.getRRule(tmp);
                                tmp6 = closure_5;
                                num = 1;
                                tmp7 = closure_5[closure_5.length - 1];
                                tmp8 = closure_6;
                                items = [];
                                num2 = 0;
                                tmp9 = items;
                                tmp10 = closure_5;
                                arraySpreadResult = HermesBuiltin.arraySpread(closure_5, 0);
                                obj2 = closure_0(closure_2[7]);
                                flag = true;
                                num3 = 4;
                                tmp12 = obj2;
                                tmp13 = rRule;
                                tmp14 = tmp7;
                                tmp15 = items;
                                tmp16 = arraySpreadResult;
                                arraySpreadResult1 = HermesBuiltin.arraySpread(
                                  obj2.generateNextRecurrences(4, rRule, tmp7, true),
                                  arraySpreadResult,
                                );
                                tmp18 = closure_6(items);
                              }
                            }
                            return;
                          }
                        }
                        if (cResult[25] === false) {
                          if (cResult[26] === first1) {
                            if (cResult[27] === tmp20) {
                              let tmp22 = cResult[28];
                            }
                            return tmp22;
                          }
                        }
                        let obj2 = {
                          recurrenceStartTimes: first1,
                          canViewMoreRecurrences: false,
                          updateRecurrenceStartTimes: tmp20,
                        };
                        cResult[25] = false;
                        cResult[26] = first1;
                        cResult[27] = tmp20;
                        cResult[28] = obj2;
                        tmp22 = obj2;
                      }
                    }
                    class M {
                      constructor() {
                        if (null != closure_2) {
                          tmp2 = closure_3;
                          if (null != closure_3) {
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj = closure_0(closure_2[7]);
                            rRule = obj.getRRule(tmp);
                            tmp6 = closure_5;
                            num = 1;
                            tmp7 = closure_5[closure_5.length - 1];
                            tmp8 = closure_6;
                            items = [];
                            num2 = 0;
                            tmp9 = items;
                            tmp10 = closure_5;
                            arraySpreadResult = HermesBuiltin.arraySpread(closure_5, 0);
                            obj2 = closure_0(closure_2[7]);
                            flag = true;
                            num3 = 4;
                            tmp12 = obj2;
                            tmp13 = rRule;
                            tmp14 = tmp7;
                            tmp15 = items;
                            tmp16 = arraySpreadResult;
                            arraySpreadResult1 = HermesBuiltin.arraySpread(
                              obj2.generateNextRecurrences(4, rRule, tmp7, true),
                              arraySpreadResult,
                            );
                            tmp18 = closure_6(items);
                          }
                        }
                        return;
                      }
                    }
                    cResult[17] = stateFromStores;
                    cResult[18] = byWeekday;
                    cResult[19] = first1;
                    cResult[20] = M;
                    tmp20 = M;
                  }
                }
                class N {
                  constructor() {
                    if (null != closure_1) {
                      tmp2 = closure_5;
                      tmp4 = closure_1;
                      tmp5 = closure_2;
                      mapped = closure_5.map((getTime) => {
                        const time = getTime.getTime();
                        const rounded = Math.floor(time / closure_1_1(1102).Millis.SECOND);
                        return closure_1_1(11).fromTimestamp(rounded * closure_1_1(1102).Millis.SECOND);
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
                tmp18 = items1;
                tmp17 = N;
              }
            }
          }
          const fn2 = function v() {
            if (null != closure_4) {
              if (null != closure_2) {
                if (null != stateFromStores) {
                  if (!obj3.isEqual(tmp, closure_2)) {
                    const rRule = ScheduleUtils.getRRule(closure_2);
                    const _Date = Date;
                    const date = new Date(tmp13.scheduled_start_time);
                    closure_6(ScheduleUtils.generateNextRecurrences(first1.length, rRule, date));
                  }
                  obj3 = _modDef12;
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
          tmp15 = items2;
          tmp14 = fn2;
        }
      }
      if (null == byWeekday) {
        let items3 = [];
        cResult[3] = stateFromStores;
        class M {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_3;
              if (null != closure_3) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[7]);
                rRule = obj.getRRule(tmp);
                tmp6 = closure_5;
                num = 1;
                tmp7 = closure_5[closure_5.length - 1];
                tmp8 = closure_6;
                items = [];
                num2 = 0;
                tmp9 = items;
                tmp10 = closure_5;
                arraySpreadResult = HermesBuiltin.arraySpread(closure_5, 0);
                obj2 = closure_0(closure_2[7]);
                flag = true;
                num3 = 4;
                tmp12 = obj2;
                tmp13 = rRule;
                tmp14 = tmp7;
                tmp15 = items;
                tmp16 = arraySpreadResult;
                arraySpreadResult1 = HermesBuiltin.arraySpread(
                  obj2.generateNextRecurrences(4, rRule, tmp7, true),
                  arraySpreadResult,
                );
                tmp18 = closure_6(items);
              }
            }
            return;
          }
        }
        cResult[4] = byWeekday;
        cResult[5] = items3;
      }
      const tmpResult = require("initialize");
      const tmpResult3 = require("ScheduleUtils");
      let rRule = require("ScheduleUtils").getRRule(byWeekday);
      const tmpResult4 = require("ScheduleUtils");
      items3 = tmpResult3.generateNextRecurrences(4, rRule, new Date(stateFromStores.scheduled_start_time));
    }
  : (arg0, arg1, byWeekday) => {
      _require = arg0;
      importDefault = arg1;
      dependencyMap = byWeekday;
      let items = [recurrenceStartTimes];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildScheduledEventStore.getGuildScheduledEvent(closure_0),
      );
      const tmp4 = usePrevValueDefault(byWeekday);
      closure_4 = tmp4;
      if (null != byWeekday) {
        if (null != stateFromStores) {
          const tmpResult = tmp(9198);
          let _Date = Date;
          let rRule = tmp(9198).getRRule(byWeekday);
          let date = new Date(stateFromStores.scheduled_start_time);
          const nextRecurrences = tmpResult.generateNextRecurrences(4, rRule, date);
          const tmpResult2 = tmp(9198);
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
              const rounded = Math.floor(time / closure_1_1(1102).Millis.SECOND);
              return closure_1_1(11).fromTimestamp(rounded * closure_1_1(1102).Millis.SECOND);
            });
            const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(
              tmp,
              closure_0,
              mapped,
            );
          }
        }, items2);
        const items3 = [byWeekday, recurrenceStartTimes];
        let scheduled_start_time;
        if (stateFromStores != null) {
          scheduled_start_time = stateFromStores.scheduled_start_time;
        }
        items3[2] = scheduled_start_time;
        let obj3 = {
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
                const arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
                const obj2 = ScheduleUtils;
                HermesBuiltin.arraySpread(
                  obj2.generateNextRecurrences(4, rRule, first[first.length - 1], true),
                  arraySpreadResult,
                );
                closure_6(items);
              }
            }
          },
        };
        return obj3;
      }
    };
