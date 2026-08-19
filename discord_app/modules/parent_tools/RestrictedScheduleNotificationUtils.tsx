// discord_app/modules/parent_tools/RestrictedScheduleNotificationUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import applyDefault from "../../../_runtime/00012_apply.js";
import getSystemLocale from "../../intl/index.native.tsx";
import messagesProxyDefault from "FamilyCenter.messages.js";
import setsEqual from "FamilyCenterRestrictedHoursUtils.tsx";

function isOnlyDayLoss(label, label2) {
  if (label.label !== label2.label) {
    return false;
  } else {
    if (obj2.isEqual(label.startTime, label2.startTime)) {
      if (tmp7Result.isEqual(label.endTime, label2.endTime)) {
        const _Set = Set;
        let everyResult = label2.days.length < label.days.length;
        if (everyResult) {
          const days = label2.days;
          everyResult = days.every((item, index) => set.has(item));
        }
        return everyResult;
      } else {
        return false;
      }
      tmp7Result = applyDefault;
    } else {
      return false;
    }
    obj2 = applyDefault;
  }
}
let map = new Map();
let obj = { [Created]: messagesProxyDefault["5V7eBH"], [Enabled]: messagesProxyDefault.iefrVg, [Disabled]: messagesProxyDefault["k+s9cM"], [Updated]: messagesProxyDefault.Nm6hZV, [Multiple]: messagesProxyDefault.Nm6hZV, [Removed]: messagesProxyDefault.jR6uOs };
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = obj);
let result = obj132.fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

export const RestrictedScheduleNotificationKind = obj;
export const EMPTY_SCHEDULE_SNAPSHOT = map;
export const toScheduleSnapshot = function toScheduleSnapshot(restrictedSchedule) {
  if (null != restrictedSchedule) {
    if (0 !== restrictedSchedule.rules.length) {
      const _Map = Map;
      const rules = restrictedSchedule.rules;
      map = new Map(rules.map((item, index) => {
        const items = [item.ruleId, item];
        return items;
      }));
    }
    return map;
  }
};
export const diffSchedules = function diffSchedules(EMPTY_SCHEDULE_SNAPSHOT, toScheduleSnapshotResult) {
  function record(Created, value) {
    if (0 === closure_4) {
      closure_0 = Created;
      closure_1 = value;
    }
    closure_4 = closure_4 + 1;
    if (Created === _null3.Removed) {
      closure_5 = closure_5 + 1;
    } else if (Created === _null3.Created) {
      closure_2 = value;
      closure_6 = closure_6 + 1;
    } else if (Created === _null3.Updated) {
      closure_3 = value;
      closure_7 = closure_7 + 1;
    } else {
      const items = [, ];
      ({ Enabled: arr[0], Disabled: arr[1] } = _null3);
      if (items.includes(Created)) {
        closure_8 = closure_8 + 1;
      }
    }
  }
  c0 = null;
  importDefault = null;
  dependencyMap = null;
  obj = null;
  c4 = 0;
  isOnlyDayLoss = 0;
  c6 = 0;
  c7 = 0;
  c8 = 0;
  let items = [];
  const items1 = [...EMPTY_SCHEDULE_SNAPSHOT.keys(), ...toScheduleSnapshotResult.keys()];
  for (const item10030 of set) {
    let value = arg0.get(item10030);
    value = arg1.get(item10030);
    let tmp4 = value;
    if (null == value) {
      let enabled;
      if (value != null) {
        enabled = value.enabled;
      }
      if (enabled) {
        let recordResult = record(obj.Removed, value);
      }
    } else if (null == value) {
      if (tmp4.enabled) {
        let recordResult1 = record(obj.Created, tmp4);
      }
    } else if (value.enabled !== tmp4.enabled) {
      let tmp34 = obj;
      if (tmp4.enabled) {
        let Disabled = tmp34.Enabled;
      } else {
        Disabled = tmp34.Disabled;
      }
      if (tmp4.enabled) {
        let tmp36 = value;
      } else {
        tmp36 = value;
      }
      let recordResult2 = record(Disabled, tmp36);
    } else {
      enabled = tmp4.enabled;
      let tmp27 = !enabled;
      if (enabled) {
        let tmp6 = tmp4;
        let tmp8 = value;
        let isEqualResult = value.label === tmp4.label;
        if (isEqualResult) {
          obj = applyDefault;
          isEqualResult = obj.isEqual(tmp8.startTime, tmp6.startTime);
        }
        if (isEqualResult) {
          obj1 = applyDefault;
          isEqualResult = obj1.isEqual(tmp8.endTime, tmp6.endTime);
        }
        if (isEqualResult) {
          let obj2 = applyDefault;
          let items2 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(tmp8.days, 0);
          let items3 = [];
          let sorted = items2.sort();
          arraySpreadResult = HermesBuiltin.arraySpread(tmp6.days, 0);
          isEqualResult = obj2.isEqual(sorted, items3.sort());
        }
        tmp27 = isEqualResult;
      }
      if (!tmp27) {
        let recordResult3 = record(obj.Updated, tmp4);
        obj = { oldRule: null, newRule: null };
        obj[0] = value;
        obj[1] = tmp4;
        let arr = items.push(obj);
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
  const intl = getSystemLocale.intl;
  return intl.string(obj[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    result = setsEqual.formatRestrictedScheduleInAppSubtitle(rule);
  }
  if (result == null) {
    const intl = getSystemLocale.intl;
    result = intl.string(messagesProxyDefault["8OlpoY"]);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};