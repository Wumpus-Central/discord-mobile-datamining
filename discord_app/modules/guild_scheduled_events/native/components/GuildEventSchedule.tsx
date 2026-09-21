// discord_app/modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx
import _modDef4348 from "../../../../../_runtime/metro/04348__.js";
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
  const tmp2 = onChange(4348)();
  const addResult = onChange(4348)().add(schedule(9753).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = noop.useMemo(() => _modDef4348(schedule.startDate).add(15, "minutes"), items);
  let obj = onChange(4348)();
  const addResult1 = onChange(4348)().add(schedule(9753).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(tmp3(9753).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(tmp3(9753).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
  }
  const obj2 = {
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
  const intl = tmp3(1115).intl;
  obj2.dateLabel = intl.string(schedule(1115).t.kKOIwJ);
  const intl2 = tmp3(1115).intl;
  obj2.timeLabel = intl2.string(schedule(1115).t["6dGmCD"]);
  const children = [closure_4(schedule(9795).GuildEventDatetime, obj2)];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  if (tmp9Result) {
    const obj4 = {
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
    const intl3 = tmp3(1115).intl;
    obj4.dateLabel = intl3.string(tmp3(1115).t.CTLgZJ);
    const intl4 = tmp3(1115).intl;
    obj4.timeLabel = intl4.string(tmp3(1115).t.j2RuXF);
    tmp9Result = closure_4(tmp3(9795).GuildEventDatetime, obj4);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
}
