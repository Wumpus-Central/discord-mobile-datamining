// discord_app/modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  let obj = onChange(4044)();
  const addResult = obj.add(schedule(9573).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = React.useMemo(() => onChange(closure_1_2[2])(schedule.startDate).add(15, "minutes"), items);
  const tmp2 = onChange(4044)();
  const addResult1 = onChange(4044)().add(schedule(9573).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(tmp3(9573).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(tmp3(9573).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
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
    timeLabel: null
  };
  const intl = tmp3(1236).intl;
  obj[4] = intl.string(schedule(1236).t.kKOIwJ);
  const intl2 = tmp3(1236).intl;
  obj[5] = intl2.string(schedule(1236).t["6dGmCD"]);
  const children = [callback(schedule(9619).GuildEventDatetime, obj), ];
  let tmp9Result = null != guildEvent.scheduled_end_time;
  if (tmp9Result) {
    obj = { date: null, onChange: null, minimumDate: null, maximumDate: null, dateLabel: null, timeLabel: null };
    obj[0] = schedule.endDate;
    obj[1] = function onChange(endDate) {
      const obj = {};
      const merged = Object.assign(schedule);
      obj.endDate = endDate;
      onChange(obj);
    };
    obj[2] = memo;
    obj[3] = addResult1;
    const intl3 = tmp3(1236).intl;
    obj[4] = intl3.string(tmp3(1236).t.CTLgZJ);
    const intl4 = tmp3(1236).intl;
    obj[5] = intl4.string(tmp3(1236).t.j2RuXF);
    tmp9Result = callback(tmp3(9619).GuildEventDatetime, obj);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
};