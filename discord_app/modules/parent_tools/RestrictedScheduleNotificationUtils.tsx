let Created;
let Disabled;
let Enabled;
let Multiple;
let Removed;
let Updated;
function isOnlyDayLoss(label, label2) {
  if (label.label !== label2.label) {
    return false;
  } else {
    if (obj2.isEqual(label.startTime, label2.startTime)) {
      if (tmp7Result.isEqual(label.endTime, label2.endTime)) {
        const _Set = Set;
        const set = new Set(label.days);
        let everyResult = label2.days.length < label.days.length;
        if (everyResult) {
          const days = label2.days;
          everyResult = days.every((arg0) => set.has(arg0));
        }
        return everyResult;
      } else {
        return false;
      }
      tmp7Result = tmp7(12);
    } else {
      return false;
    }
    obj2 = importDefault(12);
    tmp7 = importDefault;
  }
}
let obj = { Created: "created", Enabled: "enabled", Disabled: "disabled", Updated: "updated", Removed: "removed", Multiple: "multiple" };
let map = new Map();
obj = { [Created]: require("messagesProxy")["5V7eBH"], [Enabled]: require("messagesProxy").iefrVg, [Disabled]: require("messagesProxy")["k+s9cM"], [Updated]: require("messagesProxy").Nm6hZV, [Multiple]: require("messagesProxy").Nm6hZV, [Removed]: require("messagesProxy").jR6uOs };
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

export const RestrictedScheduleNotificationKind = obj;
export const EMPTY_SCHEDULE_SNAPSHOT = map;
export const toScheduleSnapshot = function toScheduleSnapshot(rules) {
  if (null != rules) {
    if (0 !== rules.rules.length) {
      const _Map = Map;
      rules = rules.rules;
      const map = new Map(rules.map((ruleId) => {
        const items = [ruleId.ruleId, ruleId];
        return items;
      }));
    }
    return map;
  }
};
export const diffSchedules = function diffSchedules(arr, toScheduleSnapshotResult) {
  let tmp53;
  let tmp54;
  function record(Created, value) {
    if (0 === closure_4) {
      let closure_0 = Created;
      let closure_1 = value;
    }
    closure_4 = closure_4 + 1;
    if (Created === _null3.Removed) {
      closure_5 = closure_5 + 1;
    } else if (Created === tmp2.Created) {
      let closure_2 = value;
      closure_6 = closure_6 + 1;
    } else if (Created === tmp2.Updated) {
      let closure_3 = value;
      closure_7 = closure_7 + 1;
    } else {
      const items = [, ];
      ({ Enabled: arr[0], Disabled: arr[1] } = tmp2);
      if (items.includes(Created)) {
        closure_8 = closure_8 + 1;
      }
    }
  }
  let c0 = null;
  const importDefault = null;
  const dependencyMap = null;
  let obj = null;
  let c4 = 0;
  const isOnlyDayLoss = 0;
  let c6 = 0;
  let c7 = 0;
  let c8 = 0;
  let items = [];
  const items1 = [...arr.keys(), ...toScheduleSnapshotResult.keys()];
  for (const item10030 of set) {
    let value = arg0.get(item10030);
    value = arg1.get(item10030);
    let tmp4 = value;
    if (null == value) {
      let tmp42 = value;
      let enabled;
      if (value != null) {
        enabled = value.enabled;
      }
      if (enabled) {
        let tmp44 = obj;
        let tmp45 = value;
        let recordResult = record(obj.Removed, value);
      }
    } else {
      let tmp66 = value;
      if (null == value) {
        let tmp38 = value;
        if (tmp4.enabled) {
          let tmp39 = obj;
          let tmp40 = value;
          let recordResult1 = record(obj.Created, tmp4);
        }
      } else {
        let tmp67 = value;
        let tmp68 = value;
        if (value.enabled !== tmp4.enabled) {
          let tmp33 = value;
          let tmp34 = obj;
          if (tmp4.enabled) {
            let Disabled = tmp34.Enabled;
          } else {
            Disabled = tmp34.Disabled;
          }
          let tmp35 = value;
          if (tmp4.enabled) {
            let tmp36 = value;
          } else {
            tmp36 = value;
          }
          let recordResult2 = record(Disabled, tmp36);
        } else {
          let tmp69 = value;
          enabled = tmp4.enabled;
          let tmp27 = !enabled;
          if (enabled) {
            let tmp5 = value;
            let tmp6 = tmp4;
            let tmp7 = value;
            let tmp8 = value;
            let isEqualResult = value.label === tmp4.label;
            if (isEqualResult) {
              let tmp10 = importDefault;
              let tmp11 = dependencyMap;
              obj = importDefault(12);
              let tmp12 = tmp7;
              let tmp13 = tmp5;
              isEqualResult = obj.isEqual(tmp8.startTime, tmp6.startTime);
            }
            if (isEqualResult) {
              let tmp14 = importDefault;
              let tmp15 = dependencyMap;
              let obj1 = importDefault(12);
              let tmp16 = tmp7;
              let tmp17 = tmp5;
              isEqualResult = obj1.isEqual(tmp8.endTime, tmp6.endTime);
            }
            if (isEqualResult) {
              let tmp18 = importDefault;
              let tmp19 = dependencyMap;
              let obj2 = importDefault(12);
              let tmp20 = tmp7;
              let items2 = [];
              let tmp21 = items2;
              let num = 0;
              let arraySpreadResult = HermesBuiltin.arraySpread(tmp8.days, 0);
              let tmp24 = tmp5;
              let items3 = [];
              let tmp25 = items3;
              let sorted = items2.sort();
              arraySpreadResult = HermesBuiltin.arraySpread(tmp6.days, 0);
              isEqualResult = obj2.isEqual(sorted, items3.sort());
            }
            tmp27 = isEqualResult;
          }
          if (!tmp27) {
            let tmp28 = obj;
            let tmp29 = value;
            let recordResult3 = record(obj.Updated, tmp4);
            obj = { oldRule: null, newRule: null };
            let tmp31 = value;
            obj[0] = value;
            obj[1] = tmp4;
            arr = items.push(obj);
          }
        }
      }
    }
    continue;
  }
  if (0 === c4) {
    return null;
  } else {
    if (1 === c6) {
      if (0 === c8) {
        if (tmp70) {
          obj = { kind: null, rule: null };
          obj[0] = obj.Created;
          obj[1] = dependencyMap;
          return obj;
        }
      }
    }
    if (1 === c7) {
      if (0 === tmp71) {
        if (1 <= isOnlyDayLoss) {
          if (0 === c8) {
            obj1 = { kind: null, rule: null };
            obj1[0] = obj.Updated;
            obj1[1] = obj;
            return obj1;
          }
        }
      }
    }
    if (2 === c7) {
      if (0 === tmp71) {
        if (0 === isOnlyDayLoss) {
          if (0 === c8) {
            [tmp53, tmp54] = items;
            if (isOnlyDayLoss(tmp53.oldRule, tmp53.newRule)) {
              obj2 = { kind: null, rule: null };
              obj2[0] = obj.Updated;
              obj2[1] = tmp54.newRule;
              return obj2;
            } else if (tmp55(tmp54.oldRule, tmp54.newRule)) {
              const obj3 = { kind: null, rule: null };
              obj3[0] = obj.Updated;
              obj3[1] = tmp53.newRule;
              return obj3;
            }
            tmp55 = isOnlyDayLoss;
          }
        }
      }
    }
    if (1 < c4) {
      const obj4 = { kind: null, rule: null };
      obj4[0] = obj.Multiple;
      let obj5 = obj4;
    } else {
      obj5 = { kind: null, rule: null };
      obj5[0] = c0;
      obj5[1] = importDefault;
    }
    return obj5;
  }
  let set = new Set(items1);
};
export const getRestrictedScheduleNotificationTitle = function getRestrictedScheduleNotificationTitle(kind) {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(obj[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    result = require(10261) /* setsEqual */.formatRestrictedScheduleInAppSubtitle(rule);
    const obj = require(10261) /* setsEqual */;
  }
  if (result == null) {
    const intl = require(1236) /* getSystemLocale */.intl;
    result = intl.string(importDefault(2225)["8OlpoY"]);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};