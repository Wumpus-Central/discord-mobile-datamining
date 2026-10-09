// discord_app/modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef4661 from "../../../../../_runtime/metro/04661__.js";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import GuildEventModalComponents from "GuildEventModalComponents.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventSchedule(onChange) {
      const cResult = c.c(29);
      ({ guildEvent, recurrenceId, schedule } = onChange);
      onChange = onChange.onChange;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = _modDef4661();
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === recurrenceId) {
        if (cResult[2] === schedule) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        if (cResult[8] === onChange) {
          if (cResult[9] === schedule) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === onChange) {
            if (cResult[12] === schedule) {
              let tmp16 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult = intl.string(util.t.kKOIwJ);
              const intl2 = util.intl;
              const stringResult1 = intl2.string(util.t["6dGmCD"]);
              cResult[14] = stringResult;
              cResult[15] = stringResult1;
              let tmp18 = stringResult1;
              let tmp17 = stringResult;
            } else {
              tmp17 = cResult[14];
              tmp18 = cResult[15];
            }
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp8) {
                if (cResult[18] === schedule.startDate) {
                  let tmp21 = cResult[19];
                }
                if (cResult[20] === guildEvent.scheduled_end_time) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp7) {
                      if (cResult[23] === tmp9) {
                        if (cResult[24] === schedule.endDate) {
                          let tmp24 = cResult[25];
                        }
                        if (cResult[26] === tmp21) {
                          if (cResult[27] === tmp24) {
                            let tmp28 = cResult[28];
                          }
                          return tmp28;
                        }
                        const obj3 = { children: null };
                        const items = [tmp21, tmp24];
                        obj3.children = items;
                        const tmp31 = timestampProducer(hasOwnProperty, obj3);
                        cResult[26] = tmp21;
                        cResult[27] = tmp24;
                        cResult[28] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                  }
                }
                let tmp26 = null != guildEvent.scheduled_end_time;
                if (tmp26) {
                  const obj6 = {
                    date: schedule.endDate,
                    onChange: tmp16,
                    minimumDate: tmp9,
                    maximumDate: tmp7,
                    dateLabel: null,
                    timeLabel: null,
                  };
                  const intl3 = util.intl;
                  obj6.dateLabel = intl3.string(util.t.CTLgZJ);
                  const intl4 = util.intl;
                  obj6.timeLabel = intl4.string(util.t.j2RuXF);
                  tmp26 = React4(GuildEventModalComponents.GuildEventDatetime, obj6);
                }
                cResult[20] = guildEvent.scheduled_end_time;
                cResult[21] = tmp16;
                cResult[22] = tmp7;
                cResult[23] = tmp9;
                cResult[24] = schedule.endDate;
                cResult[25] = tmp26;
                tmp24 = tmp26;
              }
            }
            const obj7 = {
              date: schedule.startDate,
              onChange: tmp15,
              minimumDate: first,
              maximumDate: tmp8,
              dateLabel: tmp17,
              timeLabel: tmp18,
            };
            const tmp23 = React4(GuildEventModalComponents.GuildEventDatetime, obj7);
            cResult[16] = tmp15;
            cResult[17] = tmp8;
            cResult[18] = schedule.startDate;
            cResult[19] = tmp23;
            tmp21 = tmp23;
          }
          function handleChangeEventEndTime(endDate) {
            const obj = {};
            const merged = Object.assign(schedule);
            obj.endDate = endDate;
            onChange(obj);
          }
          cResult[11] = onChange;
          cResult[12] = schedule;
          cResult[13] = handleChangeEventEndTime;
          tmp16 = handleChangeEventEndTime;
        }
        function handleChangeEventStartTime(startDate) {
          const obj = {};
          const merged = Object.assign(schedule);
          obj.startDate = startDate;
          onChange(obj);
        }
        cResult[8] = onChange;
        cResult[9] = schedule;
        cResult[10] = handleChangeEventStartTime;
        tmp15 = handleChangeEventStartTime;
      }
      const addResult = _modDef4661().add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
      if (cResult[6] !== schedule.startDate) {
        const addResult1 = _modDef4661(schedule.startDate).add(15, "minutes");
        cResult[6] = schedule.startDate;
        cResult[7] = addResult1;
        let tmp11 = addResult1;
        const obj4 = _modDef4661(schedule.startDate);
      } else {
        tmp11 = cResult[7];
      }
      const obj2 = _modDef4661();
      const addResult2 = _modDef4661().add(ScheduleUtils.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
      if (null != recurrenceId) {
        addResult.add(ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
        addResult2.add(ScheduleUtils.MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
      }
      cResult[1] = recurrenceId;
      cResult[2] = schedule;
      cResult[3] = addResult2;
      cResult[4] = addResult;
      cResult[5] = tmp11;
      tmp9 = tmp11;
      tmp8 = addResult;
      tmp7 = addResult2;
      const obj5 = _modDef4661();
    }
  : function GuildEventSchedule(schedule) {
      schedule = schedule.schedule;
      const onChange = schedule.onChange;
      ({ guildEvent, recurrenceId } = schedule);
      const tmp2 = onChange(4661)();
      const addResult = onChange(4661)().add(schedule(8504).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
      const items = [schedule.startDate];
      const memo = noop.useMemo(() => _modDef4661(schedule.startDate).add(15, "minutes"), items);
      let obj = onChange(4661)();
      const addResult1 = onChange(4661)().add(schedule(8504).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
      if (null != recurrenceId) {
        addResult.add(tmp3(8504).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
        addResult1.add(tmp3(8504).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
      }
      const obj2 = {
        date: schedule.startDate,
        onChange: function handleChangeEventStartTime(startDate) {
          const obj = {};
          const merged = Object.assign(schedule);
          obj.startDate = startDate;
          onChange(obj);
        },
        minimumDate: tmp2,
        maximumDate: addResult,
        dateLabel: null,
        timeLabel: null,
      };
      const intl = tmp3(1126).intl;
      obj2.dateLabel = intl.string(schedule(1126).t.kKOIwJ);
      const intl2 = tmp3(1126).intl;
      obj2.timeLabel = intl2.string(schedule(1126).t["6dGmCD"]);
      const children = [closure_4(schedule(8524).GuildEventDatetime, obj2)];
      let tmp9Result = null != guildEvent.scheduled_end_time;
      if (tmp9Result) {
        const obj4 = {
          date: schedule.endDate,
          onChange: function handleChangeEventEndTime(endDate) {
            const obj = {};
            const merged = Object.assign(schedule);
            obj.endDate = endDate;
            onChange(obj);
          },
          minimumDate: memo,
          maximumDate: addResult1,
          dateLabel: null,
          timeLabel: null,
        };
        const intl3 = tmp3(1126).intl;
        obj4.dateLabel = intl3.string(tmp3(1126).t.CTLgZJ);
        const intl4 = tmp3(1126).intl;
        obj4.timeLabel = intl4.string(tmp3(1126).t.j2RuXF);
        tmp9Result = closure_4(tmp3(8524).GuildEventDatetime, obj4);
      }
      children[1] = tmp9Result;
      return closure_6(closure_5, { children });
    };
