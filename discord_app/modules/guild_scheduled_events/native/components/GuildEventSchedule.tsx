// === Module 9220: GuildEventSchedule ===

// Module 9220 (GuildEventSchedule)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import _modDef4467 from "module_4467" /* 4467 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import GuildEventModalComponents from "GuildEventModalComponents" /* 9221 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  let first;
  let guildEvent;
  let intl2;
  let intl3;
  let items;
  let recurrenceId;
  let schedule;
  let tmp12;
  let obj = react2;
  const cResult = obj.c(29);
  ({ guildEvent, recurrenceId, schedule } = onChange);
  onChange = onChange.onChange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = _modDef4467();
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === recurrenceId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === schedule) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
      class C {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(schedule);
          obj.startDate = onChange;
          tmp2 = onChange(obj);
          return;
        }
      }
    }
    if (cResult[8] === onChange) {
      let tmp15;
      if (cResult[9] === schedule) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === onChange) {
        let tmp16;
        let tmp19;
        let tmp18;
        if (cResult[12] === schedule) {
          tmp16 = cResult[13];
        }
        const _Symbol = Symbol;
        class T {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(schedule);
            obj.endDate = onChange;
            tmp2 = onChange(obj);
            return;
          }
        }
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const string = intl5.intl.string;
          class T {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(schedule);
              obj.endDate = onChange;
              tmp2 = onChange(obj);
              return;
            }
          }
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t["6dGmCD"]);
          cResult[14] = tmp20;
          cResult[15] = stringResult;
          tmp19 = stringResult;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[14];
          tmp19 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          if (cResult[17] === tmp8) {
            let tmp22;
            if (cResult[18] === schedule.startDate) {
              tmp22 = cResult[19];
            }
            if (cResult[20] === guildEvent.scheduled_end_time) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp7) {
                  if (cResult[23] === tmp9) {
                    let tmp25;
                    if (cResult[24] === schedule.endDate) {
                      tmp25 = cResult[25];
                    }
                    if (cResult[26] === tmp22) {
                      let tmp28;
                      if (cResult[27] === tmp25) {
                        tmp28 = cResult[28];
                      }
                      return tmp28;
                    }
                    class T {
                      constructor(arg0) {
                        obj = {};
                        merged = Object.assign(schedule);
                        obj.endDate = onChange;
                        tmp2 = onChange(obj);
                        return;
                      }
                    }
                    const obj5 = { children: items };
                    items = [tmp22, tmp25];
                    const tmp30 = metroRequire(hasOwnProperty, obj5);
                    cResult[26] = tmp22;
                    cResult[27] = tmp25;
                    cResult[28] = tmp30;
                    tmp28 = tmp30;
                  }
                }
              }
            }
            class T {
              constructor(arg0) {
                obj = {};
                merged = Object.assign(schedule);
                obj.endDate = onChange;
                tmp2 = onChange(obj);
                return;
              }
            }
            let tmp26 = null != guildEvent.scheduled_end_time;
            if (tmp26) {
              const obj6 = { date: null, onChange: tmp16, minimumDate: tmp9, maximumDate: tmp7, dateLabel: intl2.string(intl5.t.CTLgZJ), timeLabel: intl3.string(intl5.t.j2RuXF) };
              class T {
                constructor(arg0) {
                  obj = {};
                  merged = Object.assign(schedule);
                  obj.endDate = onChange;
                  tmp2 = onChange(obj);
                  return;
                }
              }
              const GuildEventDatetime = GuildEventModalComponents.GuildEventDatetime;
              intl2 = intl5.intl;
              intl3 = intl5.intl;
              tmp26 = React3(GuildEventDatetime, obj6);
            }
            cResult[20] = guildEvent.scheduled_end_time;
            cResult[21] = tmp16;
            cResult[22] = tmp7;
            cResult[23] = tmp9;
            cResult[24] = schedule.endDate;
            cResult[25] = tmp26;
            tmp25 = tmp26;
          }
        }
        const obj7 = { date: tmp17, onChange: tmp15, minimumDate: first, maximumDate: tmp8, dateLabel: tmp18, timeLabel: tmp19 };
        const tmp24 = React3(GuildEventModalComponents.GuildEventDatetime, obj7);
        cResult[16] = tmp15;
        cResult[17] = tmp8;
        cResult[18] = schedule.startDate;
        cResult[19] = tmp24;
        tmp22 = tmp24;
      }
      class T {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(schedule);
          obj.endDate = onChange;
          tmp2 = onChange(obj);
          return;
        }
      }
      cResult[11] = onChange;
      cResult[12] = schedule;
      cResult[13] = T;
      tmp16 = T;
    }
    class C {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.startDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    cResult[8] = onChange;
    cResult[9] = schedule;
    cResult[10] = C;
    tmp15 = C;
  }
  const obj2 = _modDef4467();
  const addResult = obj2.add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  if (cResult[6] !== schedule.startDate) {
    const obj3 = _modDef4467(schedule.startDate);
    class T {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.endDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    const addResult1 = obj3.add(15, "minutes");
    cResult[6] = schedule.startDate;
    cResult[7] = addResult1;
    tmp12 = addResult1;
  } else {
    tmp12 = cResult[7];
  }
  const obj4 = _modDef4467();
  const addResult2 = obj4.add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    const add = addResult.add;
    class T {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(schedule);
        obj.endDate = onChange;
        tmp2 = onChange(obj);
        return;
      }
    }
    addResult2.add(ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  cResult[1] = recurrenceId;
  cResult[2] = schedule;
  cResult[3] = addResult2;
  cResult[4] = addResult;
  cResult[5] = tmp12;
  tmp8 = addResult;
  tmp7 = addResult2;
}) : ((schedule) => {
  let guildEvent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let recurrenceId;
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  const tmp2 = onChange(4467)();
  let obj = onChange(4467)();
  const addResult = obj.add(schedule(9198).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = react.useMemo(() => {
    const obj = _modDef4467(schedule.startDate);
    return obj.add(15, "minutes");
  }, items);
  const obj3 = onChange(4467)();
  const addResult1 = obj3.add(schedule(9198).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(schedule(9198).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(schedule(9198).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  const obj2 = {
    date: schedule.startDate,
    onChange(startDate) {
      const obj = { startDate };
      const merged = Object.assign(schedule);
      onChange(obj);
    },
    minimumDate: tmp2,
    maximumDate: addResult,
    dateLabel: intl.string(schedule(1126).t.kKOIwJ),
    timeLabel: intl2.string(schedule(1126).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp3(9221).GuildEventDatetime;
  intl = tmp3(1126).intl;
  intl2 = tmp3(1126).intl;
  const children = [closure_4(GuildEventDatetime, obj2), ];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  if (tmp9Result) {
    const obj4 = {
      date: schedule.endDate,
      onChange(endDate) {
          const obj = { endDate };
          const merged = Object.assign(schedule);
          onChange(obj);
        },
      minimumDate: memo,
      maximumDate: addResult1,
      dateLabel: intl3.string(schedule(1126).t.CTLgZJ),
      timeLabel: intl4.string(schedule(1126).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp3(9221).GuildEventDatetime;
    intl3 = tmp3(1126).intl;
    intl4 = tmp3(1126).intl;
    tmp9Result = closure_4(GuildEventDatetime2, obj4);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default tmp3;