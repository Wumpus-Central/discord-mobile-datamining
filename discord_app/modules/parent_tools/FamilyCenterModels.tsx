// discord_app/modules/parent_tools/FamilyCenterModels.tsx
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import Record from "../../lib/Record.tsx";

require = fn;
const frozen = Object.freeze({
  0: fn(1379).DayOfWeek.SUNDAY,
  1: fn(1379).DayOfWeek.MONDAY,
  2: fn(1379).DayOfWeek.TUESDAY,
  3: fn(1379).DayOfWeek.WEDNESDAY,
  4: fn(1379).DayOfWeek.THURSDAY,
  5: fn(1379).DayOfWeek.FRIDAY,
  6: fn(1379).DayOfWeek.SATURDAY,
});
let closure_3 = Object.freeze({
  [fn(1379).DayOfWeek.DAY_OF_WEEK_UNSPECIFIED]: 0,
  [fn(1379).DayOfWeek.MONDAY]: 1,
  [fn(1379).DayOfWeek.TUESDAY]: 2,
  [fn(1379).DayOfWeek.WEDNESDAY]: 3,
  [fn(1379).DayOfWeek.THURSDAY]: 4,
  [fn(1379).DayOfWeek.FRIDAY]: 5,
  [fn(1379).DayOfWeek.SATURDAY]: 6,
  [fn(1379).DayOfWeek.SUNDAY]: 0,
});
let ScheduleRuleRecord;
class ScheduleRuleRecord extends tmp2 {
  constructor(arg0) {
    tmp = new ScheduleRuleRecord(new.target, new.target);
    ({
      ruleId: tmp.ruleId,
      label: tmp.label,
      startTime: tmp.startTime,
      endTime: tmp.endTime,
      days: tmp.days,
      enabled: tmp.enabled,
    } = global);
    return tmp;
  }
}
const prototype = ScheduleRuleRecord.prototype;
ScheduleRuleRecord["fromServer"] = function fromServer(end_time) {
  ({ rule_id, label, start_time } = end_time);
  end_time = end_time.end_time;
  ({ days, enabled } = end_time);
  if (typeof ScheduleRuleRecord === "function") {
    const tmp6 = new ScheduleRuleRecord(tmp, tmp2, new.target, rule_id, label, start_time, end_time, days, enabled);
    tmp6.ruleId = rule_id;
    tmp6.label = label;
    tmp6.startTime = start_time;
    tmp6.endTime = end_time;
    tmp6.days = days;
    tmp6.enabled = enabled;
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
ScheduleRuleRecord["fromCache"] = function fromCache(arg0) {
  if (typeof ScheduleRuleRecord === "function") {
    const tmp7 = new ScheduleRuleRecord(tmp, tmp2);
    ({
      ruleId: tmp7.ruleId,
      label: tmp7.label,
      startTime: tmp7.startTime,
      endTime: tmp7.endTime,
      days: tmp7.days,
      enabled: tmp7.enabled,
    } = arg0);
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["isActiveAt"] = function isActiveAt(arg0, c1) {
  const self = this;
  if (null != this.startTime) {
    if (null != self.endTime) {
      if (0 !== self.days.length) {
        if (self.enabled) {
          const startTime = self.startTime;
          const sum = 60 * startTime.hours + startTime.minutes;
          const endTime = self.endTime;
          const sum1 = 60 * endTime.hours + endTime.minutes;
          const days = self.days;
          if (days.includes(arg0)) {
            if (tmp5) {
              if (c1 >= sum) {
                return true;
              }
            } else if (c1 >= sum) {
              if (c1 < sum1) {
                return true;
              }
            }
          }
          if (sum > sum1) {
            if (arg0 === user.DayOfWeek.MONDAY) {
              let SUNDAY = tmp6(1379).DayOfWeek.SUNDAY;
            } else {
              SUNDAY = arg0 - 1;
            }
            const days2 = self.days;
            if (days2.includes(SUNDAY)) {
              if (c1 < sum1) {
                return true;
              }
            }
            tmp6 = require;
          }
          return false;
        }
      }
    }
  }
  return false;
};
prototype["getEndMinutes"] = function getEndMinutes() {
  let sum = null;
  if (null != this.endTime) {
    const endTime = this.endTime;
    sum = 60 * endTime.hours + endTime.minutes;
  }
  return sum;
};
prototype["getStartMinutes"] = function getStartMinutes() {
  let sum = null;
  if (null != this.startTime) {
    const startTime = this.startTime;
    sum = 60 * startTime.hours + startTime.minutes;
  }
  return sum;
};
let RestrictedScheduleRecord;
class RestrictedScheduleRecord extends tmp2 {
  constructor(arg0) {
    tmp = new RestrictedScheduleRecord(new.target);
    tmp.rules = global.rules;
    return tmp;
  }
}
const prototype2 = RestrictedScheduleRecord.prototype;
RestrictedScheduleRecord["fromServer"] = function fromServer(rules) {
  let tmp2 = null;
  if (null != rules) {
    if (typeof RestrictedScheduleRecord === "function") {
      const tmp10 = new RestrictedScheduleRecord(tmp, rules.rules, tmp3, new.target);
      tmp10.rules = tmp5;
      tmp2 = tmp10;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    tmp3 = RestrictedScheduleRecord;
  }
  return tmp2;
};
RestrictedScheduleRecord["fromCache"] = function fromCache(rules) {
  let tmp2 = null;
  if (null != rules) {
    if (typeof RestrictedScheduleRecord === "function") {
      const tmp10 = new RestrictedScheduleRecord(tmp, rules.rules, tmp3, new.target);
      tmp10.rules = tmp5;
      tmp2 = tmp10;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    tmp3 = RestrictedScheduleRecord;
  }
  return tmp2;
};
prototype2["isInRestrictedHours"] = function isInRestrictedHours(date) {
  if (date === undefined) {
    const _Date = Date;
    date = new Date();
  }
  closure_0 = undefined;
  closure_1 = undefined;
  if (0 === this.rules.length) {
    return false;
  } else {
    closure_0 = frozen[date.getDay(date)];
    const result = 60 * date.getHours();
    closure_1 = result + date.getMinutes();
    const rules = tmp4.rules;
    return rules.some((isActiveAt) => isActiveAt.isActiveAt(closure_0, closure_1));
  }
};
prototype2["getNextStartInfo"] = function getNextStartInfo(date) {
  if (date === undefined) {
    const _Date = Date;
    date = new Date();
  }
  const self = this;
  if (0 !== this.rules.length) {
    if (!self.isInRestrictedHours(date)) {
      const day = date.getDay();
      const result = 60 * date.getHours();
      const sum = result + date.getMinutes();
      let tmp8 = null;
      const rules = self.rules;
      const found = rules.filter((enabled) => enabled.enabled);
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp13 = nextResult;
        let startMinutes = nextResult.getStartMinutes();
        let tmp15 = startMinutes;
        if (null != startMinutes) {
          if (0 !== tmp13.days.length) {
            let days = tmp13.days;
            for (const item10043 of days) {
              let result1 = (closure_3[item10043] - day + 7) % 7;
              let num4 = result1;
              let tmp19 = 0 === result1;
              if (0 === result1) {
                tmp19 = tmp15 <= sum;
              }
              if (tmp19) {
                num4 = 7;
              }
              let sum1 = 24 * num4 * 60 - sum + tmp15;
              let tmp25 = null == tmp8;
              if (!tmp25) {
                tmp25 = sum1 < tmp8.minutesUntil;
              }
              if (tmp25) {
                let obj = { minutesUntil: null, rule: null };
                obj.minutesUntil = sum1;
                obj.rule = tmp13;
                tmp8 = obj;
              }
              continue;
            }
          }
        }
        continue;
      }
      return tmp8;
    }
  }
  return null;
};
prototype2["getNextEndTime"] = function getNextEndTime() {
  let date = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    date = new Date();
  }
  closure_0 = undefined;
  c1 = undefined;
  if (0 === this.rules.length) {
    return null;
  } else {
    closure_0 = frozen[date.getDay(date)];
    const result = 60 * date.getHours();
    const sum = result + date.getMinutes();
    c1 = sum;
    const rules = tmp4.rules;
    const found = rules.filter((isActiveAt) => isActiveAt.isActiveAt(closure_0, c1));
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let endMinutes = nextResult.getEndMinutes();
      let startMinutes = nextResult.getStartMinutes();
      if (null != endMinutes) {
        if (null != startMinutes) {
          let tmp12 = startMinutes > endMinutes;
          let tmp13 = globalThis;
          let _Date2 = Date;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let date1 = new Date(date);
          let obj4 = date1;
          let _Math = Math;
          let rounded = Math.floor(endMinutes / 60);
          let result1 = endMinutes % 60;
          if (tmp12) {
            tmp12 = sum >= startMinutes;
          }
          if (tmp12) {
            let setDateResult = obj4.setDate(obj4.getDate() + 1);
          }
          let setHoursResult = date1.setHours(rounded, result1, 0, 0);
          iter.return();
          return date1;
        }
      }
      continue;
    }
    return null;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterModels.tsx");

export const JS_DAY_TO_DAY_OF_WEEK = frozen;
export { ScheduleRuleRecord };
export { RestrictedScheduleRecord };
export const ensureRestrictedScheduleRecord = function ensureRestrictedScheduleRecord(restrictedSchedule) {
  let tmp2 = null;
  if (null != restrictedSchedule) {
    let tmp3 = restrictedSchedule;
    if (restrictedSchedule instanceof RestrictedScheduleRecord) {
      tmp2 = tmp3;
    } else {
      let length = restrictedSchedule.rules.length;
      if (0 === length) {
        if (typeof obj === "function") {
          const items = [];
          const tmp8 = new RestrictedScheduleRecord(
            tmp,
            obj,
            new.target,
            items,
            RestrictedScheduleRecord,
            length,
            tmp3,
          );
          tmp8.rules = items;
          length = tmp8;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if ("ruleId" in restrictedSchedule.rules[0]) {
        length = obj.fromCache(restrictedSchedule);
      } else {
        length = obj.fromServer(restrictedSchedule);
      }
      tmp3 = length;
    }
  }
  return tmp2;
};
