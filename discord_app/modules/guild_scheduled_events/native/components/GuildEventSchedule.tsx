// discord_app/modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  let obj = onChange(4153)();
  const addResult = obj.add(schedule(9665).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = noop.useMemo(() => _modDef4153(schedule.startDate).add(15, "minutes"), items);
  const tmp2 = onChange(4153)();
  const addResult1 = onChange(4153)().add(schedule(9665).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(tmp3(9665).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(tmp3(9665).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  obj = {
    date: schedule.startDate,
    onChange(startDate) {
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
  const intl = tmp3(1114).intl;
  obj.dateLabel = intl.string(schedule(1114).t.kKOIwJ);
  const intl2 = tmp3(1114).intl;
  obj.timeLabel = intl2.string(schedule(1114).t["6dGmCD"]);
  const children = [closure_4(schedule(9710).GuildEventDatetime, obj)];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  if (tmp9Result) {
    obj = {
      date: schedule.endDate,
      onChange(endDate) {
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
    const intl3 = tmp3(1114).intl;
    obj.dateLabel = intl3.string(tmp3(1114).t.CTLgZJ);
    const intl4 = tmp3(1114).intl;
    obj.timeLabel = intl4.string(tmp3(1114).t.j2RuXF);
    tmp9Result = closure_4(tmp3(9710).GuildEventDatetime, obj);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
}
