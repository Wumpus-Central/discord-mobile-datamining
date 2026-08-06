// discord_app/modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx
import noop from "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("t").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventSchedule.tsx");

export default function GuildEventSchedule(schedule) {
  let guildEvent;
  let recurrenceId;
  schedule = schedule.schedule;
  const onChange = schedule.onChange;
  ({ guildEvent, recurrenceId } = schedule);
  let obj = onChange(3866)();
  const addResult = obj.add(schedule(8865).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  const items = [schedule.startDate];
  const memo = React.useMemo(() => onChange(outer1_2[2])(schedule.startDate).add(15, "minutes"), items);
  const tmp2 = onChange(3866)();
  const addResult1 = onChange(3866)().add(schedule(8865).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  if (null != recurrenceId) {
    addResult.add(tmp3(8865).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
    addResult1.add(tmp3(8865).MAX_YEARS_AHEAD_RECURRING_EVENT, "years");
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
  const children = [callback(schedule(8890).GuildEventDatetime, obj), ];
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
    tmp9Result = callback(tmp3(8890).GuildEventDatetime, obj);
  }
  children[1] = tmp9Result;
  return closure_6(closure_5, { children });
};