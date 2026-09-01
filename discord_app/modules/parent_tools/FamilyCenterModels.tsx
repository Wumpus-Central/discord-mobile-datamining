// discord_app/modules/parent_tools/FamilyCenterModels.tsx
import create from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import toJSDefault from "../../lib/Record.tsx";

require = arg1;
toJSDefault;
const frozen = Object.freeze({
  0: require("create").DayOfWeek.SUNDAY,
  1: require("create").DayOfWeek.MONDAY,
  2: require("create").DayOfWeek.TUESDAY,
  3: require("create").DayOfWeek.WEDNESDAY,
  4: require("create").DayOfWeek.THURSDAY,
  5: require("create").DayOfWeek.FRIDAY,
  6: require("create").DayOfWeek.SATURDAY,
});
let closure_3 = Object.freeze({
  [arg1(1930).DayOfWeek.DAY_OF_WEEK_UNSPECIFIED]: 0,
  [arg1(1930).DayOfWeek.MONDAY]: 1,
  [arg1(1930).DayOfWeek.TUESDAY]: 2,
  [arg1(1930).DayOfWeek.WEDNESDAY]: 3,
  [arg1(1930).DayOfWeek.THURSDAY]: 4,
  [arg1(1930).DayOfWeek.FRIDAY]: 5,
  [arg1(1930).DayOfWeek.SATURDAY]: 6,
  [arg1(1930).DayOfWeek.SUNDAY]: 0,
});
let ScheduleRuleRecord;
class ScheduleRuleRecord extends tmp2 {
  constructor(arg0) {
    tmp = new ScheduleRuleRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  if (typeof ScheduleRuleRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new ScheduleRuleRecord(
    "Trying to call a non-function",
    ScheduleRuleRecord,
    new.target,
    rule_id,
    label,
    start_time,
    end_time,
    days,
    enabled,
  );
  // ThrowIfThisInitialized (0x7c)
  tmp2.ruleId = rule_id;
  tmp2.label = label;
  tmp2.startTime = start_time;
  tmp2.endTime = end_time;
  tmp2.days = days;
  tmp2.enabled = enabled;
  return tmp2;
};
ScheduleRuleRecord["fromCache"] = function fromCache(arg0) {
  if (typeof ScheduleRuleRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new ScheduleRuleRecord("Trying to call a non-function", ScheduleRuleRecord);
  // ThrowIfThisInitialized (0x7c)
  ({
    ruleId: tmp2.ruleId,
    label: tmp2.label,
    startTime: tmp2.startTime,
    endTime: tmp2.endTime,
    days: tmp2.days,
    enabled: tmp2.enabled,
  } = arg0);
  return tmp2;
};
prototype["isActiveAt"] = function isActiveAt(closure_0, c1) {
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
          if (days.includes(closure_0)) {
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
            if (closure_0 === create.DayOfWeek.MONDAY) {
              let SUNDAY = tmp6(1930).DayOfWeek.SUNDAY;
            } else {
              SUNDAY = closure_0 - 1;
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
    // ThrowIfThisInitialized (0x7c)
    tmp.rules = global.rules;
    return tmp;
  }
}
const prototype2 = RestrictedScheduleRecord.prototype;
RestrictedScheduleRecord["fromServer"] = function fromServer(rules) {
  let tmp = null;
  if (null != rules) {
    rules = rules.rules;
    const mapped = rules.map(ScheduleRuleRecord.fromServer);
    if (typeof RestrictedScheduleRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp9 = new RestrictedScheduleRecord(
      "Trying to call a non-function",
      rules,
      RestrictedScheduleRecord,
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    tmp9.rules = mapped;
    tmp = tmp9;
    const tmp2 = RestrictedScheduleRecord;
  }
  return tmp;
};
RestrictedScheduleRecord["fromCache"] = function fromCache(rules) {
  let tmp = null;
  if (null != rules) {
    rules = rules.rules;
    const mapped = rules.map(ScheduleRuleRecord.fromCache);
    if (typeof RestrictedScheduleRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp9 = new RestrictedScheduleRecord(
      "Trying to call a non-function",
      rules,
      RestrictedScheduleRecord,
      new.target,
    );
    // ThrowIfThisInitialized (0x7c)
    tmp9.rules = mapped;
    tmp = tmp9;
    const tmp2 = RestrictedScheduleRecord;
  }
  return tmp;
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
          let tmp30 = nextResult;
          if (0 !== tmp13.days.length) {
            let tmp31 = nextResult;
            let days = tmp13.days;
            let tmp32 = days;
            let tmp16 = days;
            for (const item10043 of days) {
              let tmp17 = table;
              let result1 = (table[item10043] - day + 7) % 7;
              let num4 = result1;
              let tmp19 = 0 === result1;
              if (0 === result1) {
                let tmp20 = startMinutes;
                tmp19 = tmp15 <= sum;
              }
              if (tmp19) {
                num4 = 7;
              }
              let tmp21 = num4;
              let tmp22 = startMinutes;
              let sum1 = 24 * num4 * 60 - sum + tmp15;
              let tmp24 = tmp8;
              let tmp25 = null == tmp8;
              if (!tmp25) {
                let tmp26 = sum1;
                let tmp27 = tmp8;
                tmp25 = sum1 < tmp8.minutesUntil;
              }
              if (tmp25) {
                let obj = { minutesUntil: null, rule: null };
                let tmp28 = sum1;
                obj[0] = sum1;
                let tmp29 = nextResult;
                obj[1] = tmp13;
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
      let tmp8 = endMinutes;
      let startMinutes = nextResult.getStartMinutes();
      if (null != endMinutes) {
        let tmp10 = startMinutes;
        if (null != startMinutes) {
          let tmp11 = startMinutes;
          let tmp12 = startMinutes > endMinutes;
          let tmp13 = globalThis;
          let _Date2 = Date;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let tmp16 = date;
          let date1 = new Date(date);
          let obj4 = date1;
          let _Math = Math;
          let rounded = Math.floor(endMinutes / 60);
          let result1 = endMinutes % 60;
          if (tmp12) {
            tmp12 = sum >= startMinutes;
          }
          if (tmp12) {
            let tmp19 = date1;
            let num = 1;
            let setDateResult = obj4.setDate(obj4.getDate() + 1);
          }
          let tmp21 = rounded;
          let tmp22 = result1;
          let tmp23 = date1;
          let num2 = 0;
          let num3 = 0;
          let setHoursResult = date1.setHours(rounded, result1, 0, 0);
          let tmp25 = iter;
          iter.return();
          return date1;
        }
      }
      continue;
    }
    return null;
  }
};
let obj = {
  0: require("create").DayOfWeek.SUNDAY,
  1: require("create").DayOfWeek.MONDAY,
  2: require("create").DayOfWeek.TUESDAY,
  3: require("create").DayOfWeek.WEDNESDAY,
  4: require("create").DayOfWeek.THURSDAY,
  5: require("create").DayOfWeek.FRIDAY,
  6: require("create").DayOfWeek.SATURDAY,
};
let result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterModels.tsx");

export const JS_DAY_TO_DAY_OF_WEEK = frozen;
export { ScheduleRuleRecord };
export { RestrictedScheduleRecord };
export const ensureRestrictedScheduleRecord = function ensureRestrictedScheduleRecord(restrictedSchedule) {
  let tmp = null;
  if (null != restrictedSchedule) {
    let tmp2 = restrictedSchedule;
    if (restrictedSchedule instanceof RestrictedScheduleRecord) {
      tmp = tmp2;
    } else {
      let length = restrictedSchedule.rules.length;
      if (0 === length) {
        if (typeof obj !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const items = [];
        const tmp7 = new RestrictedScheduleRecord(
          "Trying to call a non-function",
          obj,
          new.target,
          items,
          RestrictedScheduleRecord,
          length,
          tmp2,
        );
        // ThrowIfThisInitialized (0x7c)
        tmp7.rules = items;
        length = tmp7;
      } else if ("ruleId" in restrictedSchedule.rules[0]) {
        length = obj.fromCache(restrictedSchedule);
      } else {
        length = obj.fromServer(restrictedSchedule);
      }
      tmp2 = length;
    }
  }
  return tmp;
};
