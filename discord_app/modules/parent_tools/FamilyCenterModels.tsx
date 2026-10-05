// === Module 1400: FamilyCenterModels ===

// Module 1400 (FamilyCenterModels)
import user from "user" /* 1385 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let end_time;

let obj = { 0: user.DayOfWeek.SUNDAY, 1: user.DayOfWeek.MONDAY, 2: user.DayOfWeek.TUESDAY, 3: user.DayOfWeek.WEDNESDAY, 4: user.DayOfWeek.THURSDAY, 5: user.DayOfWeek.FRIDAY, 6: user.DayOfWeek.SATURDAY };
const frozen = Object.freeze(obj);
const _false = Object.freeze({ [user.DayOfWeek.DAY_OF_WEEK_UNSPECIFIED]: 0, [user.DayOfWeek.MONDAY]: 1, [user.DayOfWeek.TUESDAY]: 2, [user.DayOfWeek.WEDNESDAY]: 3, [user.DayOfWeek.THURSDAY]: 4, [user.DayOfWeek.FRIDAY]: 5, [user.DayOfWeek.SATURDAY]: 6, [user.DayOfWeek.SUNDAY]: 0 });
class ScheduleRuleRecord extends Record {
  constructor(arg0) {
    const tmp = new ScheduleRuleRecord(new.target, this);
    ({ ruleId: tmp.ruleId, label: tmp.label, startTime: tmp.startTime, endTime: tmp.endTime, days: tmp.days, enabled: tmp.enabled } = arg0);
    return tmp;
  }
  static fromServer(end_time) {
    let days;
    let enabled;
    let label;
    let rule_id;
    let start_time;
    ({ rule_id, label, start_time } = end_time);
    end_time = end_time.end_time;
    ({ days, enabled } = end_time);
    if (typeof ScheduleRuleRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new ScheduleRuleRecord(tmp, ScheduleRuleRecord, this, rule_id, label, start_time, end_time, days, enabled);
      tmp4.ruleId = rule_id;
      tmp4.label = label;
      tmp4.startTime = start_time;
      tmp4.endTime = end_time;
      tmp4.days = days;
      tmp4.enabled = enabled;
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromCache(arg0) {
    if (typeof ScheduleRuleRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new ScheduleRuleRecord(tmp, tmp2);
      ({ ruleId: tmp5.ruleId, label: tmp5.label, startTime: tmp5.startTime, endTime: tmp5.endTime, days: tmp5.days, enabled: tmp5.enabled } = arg0);
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isActiveAt(arg0, c1) {
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
              if (sum > sum1) {
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
              let SUNDAY;
              if (arg0 === user.DayOfWeek.MONDAY) {
                SUNDAY = user.DayOfWeek.SUNDAY;
              } else {
                SUNDAY = arg0 - 1;
              }
              const days2 = self.days;
              if (days2.includes(SUNDAY)) {
                if (c1 < sum1) {
                  return true;
                }
              }
            }
            return false;
          }
        }
      }
    }
    return false;
  }
  getEndMinutes() {
    let sum = null;
    if (null != this.endTime) {
      const endTime = this.endTime;
      sum = 60 * endTime.hours + endTime.minutes;
    }
    return sum;
  }
  getStartMinutes() {
    let sum = null;
    if (null != this.startTime) {
      const startTime = this.startTime;
      sum = 60 * startTime.hours + startTime.minutes;
    }
    return sum;
  }
}
const prototype = ScheduleRuleRecord.prototype;
class RestrictedScheduleRecord extends Record {
  constructor(rules) {
    const tmp = new RestrictedScheduleRecord(new.target);
    tmp.rules = rules.rules;
    return tmp;
  }
  static fromServer(rules) {
    let tmp2 = null;
    if (null != rules) {
      rules = rules.rules;
      const self = this;
      if (typeof RestrictedScheduleRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp7 = new RestrictedScheduleRecord(tmp, rules, RestrictedScheduleRecord, this);
        tmp7.rules = tmp5;
        tmp2 = tmp7;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp2;
  }
  static fromCache(rules) {
    let tmp2 = null;
    if (null != rules) {
      rules = rules.rules;
      const self = this;
      if (typeof RestrictedScheduleRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp7 = new RestrictedScheduleRecord(tmp, rules, RestrictedScheduleRecord, this);
        tmp7.rules = tmp5;
        tmp2 = tmp7;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp2;
  }
  isInRestrictedHours() {
    let date;
    if (date === undefined) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
    }
    let closure_0;
    let closure_1;
    if (0 === this.rules.length) {
      return false;
    } else {
      closure_0 = frozen[date.getDay(date)];
      const result = 60 * date.getHours();
      closure_1 = result + date.getMinutes();
      const rules = tmp2.rules;
      return rules.some((isActiveAt) => isActiveAt.isActiveAt(closure_0, closure_1));
    }
  }
  getNextStartInfo() {
    let date;
    if (date === undefined) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
    }
    const self3 = this;
    if (0 !== this.rules.length) {
      if (!self3.isInRestrictedHours(date)) {
        const day = date.getDay();
        const result = 60 * date.getHours();
        const sum = result + date.getMinutes();
        let tmp6 = null;
        const rules = self3.rules;
        const found = rules.filter((enabled) => enabled.enabled);
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp11 = nextResult;
          let startMinutes = nextResult.getStartMinutes();
          let tmp13 = startMinutes;
          if (null != startMinutes) {
            if (0 !== tmp11.days.length) {
              let days = tmp11.days;
              for (const item10043 of days) {
                let result1 = (closure_3[item10043] - day + 7) % 7;
                let num4 = result1;
                let tmp17 = 0 === result1;
                if (tmp17) {
                  tmp17 = tmp13 <= sum;
                }
                if (tmp17) {
                  num4 = 7;
                }
                let sum1 = 24 * num4 * 60 - sum + tmp13;
                let tmp23 = null == tmp6;
                if (!tmp23) {
                  tmp23 = sum1 < tmp6.minutesUntil;
                }
                if (tmp23) {
                  let obj = { minutesUntil: sum1, rule: tmp11 };
                  tmp6 = obj;
                }
                continue;
              }
            }
          }
          continue;
        }
        return tmp6;
      }
    }
    return null;
  }
  getNextEndTime() {
    let date = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
    }
    let closure_0;
    let c1;
    if (0 === this.rules.length) {
      return null;
    } else {
      closure_0 = frozen[date.getDay(date)];
      const result = 60 * date.getHours();
      const sum = result + date.getMinutes();
      c1 = sum;
      const rules = tmp2.rules;
      const found = rules.filter((isActiveAt) => isActiveAt.isActiveAt(closure_0, c1));
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let endMinutes = nextResult.getEndMinutes();
        let startMinutes = nextResult.getStartMinutes();
        if (null != endMinutes) {
          if (null != startMinutes) {
            let tmp10 = startMinutes > endMinutes;
            let tmp11 = globalThis;
            let _Date2 = Date;
            let self3 = this;
            let self4 = this;
            let date1 = new Date(date);
            let obj4 = date1;
            let _Math = Math;
            let rounded = Math.floor(endMinutes / 60);
            let result1 = endMinutes % 60;
            if (tmp10) {
              tmp10 = sum >= startMinutes;
            }
            if (tmp10) {
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
  }
}
const prototype2 = RestrictedScheduleRecord.prototype;
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterModels.tsx");

export const JS_DAY_TO_DAY_OF_WEEK = frozen;
export { ScheduleRuleRecord };
export { RestrictedScheduleRecord };
export const ensureRestrictedScheduleRecord = function ensureRestrictedScheduleRecord(restrictedSchedule) {
  let tmp2 = null;
  if (null != restrictedSchedule) {
    let tmp3 = restrictedSchedule;
    if (!(restrictedSchedule instanceof RestrictedScheduleRecord)) {
      let fromCacheResult;
      if (0 === restrictedSchedule.rules.length) {
        const self = this;
        if (typeof RestrictedScheduleRecord === "function") {
          const items = [];
          const self2 = this;
          const self3 = this;
          const tmp6 = new RestrictedScheduleRecord(tmp, RestrictedScheduleRecord, this, items, RestrictedScheduleRecord, restrictedSchedule.rules.length, tmp3);
          tmp6.rules = items;
          fromCacheResult = tmp6;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if ("ruleId" in restrictedSchedule.rules[0]) {
        fromCacheResult = RestrictedScheduleRecord.fromCache(restrictedSchedule);
      } else {
        fromCacheResult = RestrictedScheduleRecord.fromServer(restrictedSchedule);
      }
      tmp3 = fromCacheResult;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};