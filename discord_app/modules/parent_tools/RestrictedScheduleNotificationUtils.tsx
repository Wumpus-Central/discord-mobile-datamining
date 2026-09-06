// discord_app/modules/parent_tools/RestrictedScheduleNotificationUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import util from "../../intl/index.native.tsx";
import _modDef2396 from "FamilyCenter.messages.js";
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
          everyResult = days.every((item) => set.has(item));
        }
        return everyResult;
      } else {
        return false;
      }
      tmp7Result = _modDef12;
    } else {
      return false;
    }
    obj2 = _modDef12;
  }
}
let RestrictedScheduleNotificationKind = {
  Created: "created",
  Enabled: "enabled",
  Disabled: "disabled",
  Updated: "updated",
  Removed: "removed",
  Multiple: "multiple",
};
let map = new Map();
RestrictedScheduleNotificationKind = {
  [Created]: _modDef2396["5V7eBH"],
  [Enabled]: _modDef2396.iefrVg,
  [Disabled]: _modDef2396["k+s9cM"],
  [Updated]: _modDef2396.Nm6hZV,
  [Multiple]: _modDef2396.Nm6hZV,
  [Removed]: _modDef2396.jR6uOs,
};
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = RestrictedScheduleNotificationKind);
let result = size.fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

export { RestrictedScheduleNotificationKind };
export const EMPTY_SCHEDULE_SNAPSHOT = map;
export const toScheduleSnapshot = function toScheduleSnapshot(restrictedSchedule) {
  if (null != restrictedSchedule) {
    if (0 !== restrictedSchedule.rules.length) {
      const _Map = Map;
      const rules = restrictedSchedule.rules;
      map = new Map(
        rules.map((ruleId) => {
          const items = [ruleId.ruleId, ruleId];
          return items;
        }),
      );
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
    if (Created === obj.Removed) {
      closure_5 = closure_5 + 1;
    } else if (Created === obj.Created) {
      closure_2 = value;
      closure_6 = closure_6 + 1;
    } else if (Created === obj.Updated) {
      closure_3 = value;
      closure_7 = closure_7 + 1;
    } else {
      const items = [,];
      ({ Enabled: arr[0], Disabled: arr[1] } = obj);
      if (items.includes(Created)) {
        closure_8 = closure_8 + 1;
      }
    }
  }
  _require = null;
  importDefault = null;
  dependencyMap = null;
  rule = null;
  closure_4 = 0;
  isOnlyDayLoss = 0;
  closure_6 = 0;
  closure_7 = 0;
  closure_8 = 0;
  let items = [];
  const items1 = [...EMPTY_SCHEDULE_SNAPSHOT.keys(), ...toScheduleSnapshotResult.keys()];
  for (const item10030 of set) {
    value = arg0.get(item10030);
    value = arg1.get(item10030);
    let tmp4 = value;
    if (null == value) {
      let enabled;
      if (value != null) {
        enabled = value.enabled;
      }
      if (enabled) {
        let recordResult = record(rule.Removed, value);
      }
    } else if (null == value) {
      if (tmp4.enabled) {
        let recordResult1 = record(rule.Created, tmp4);
      }
    } else if (value.enabled !== tmp4.enabled) {
      let tmp34 = rule;
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
          let obj = _modDef12;
          isEqualResult = obj.isEqual(tmp8.startTime, tmp6.startTime);
        }
        if (isEqualResult) {
          let obj1 = _modDef12;
          isEqualResult = obj1.isEqual(tmp8.endTime, tmp6.endTime);
        }
        if (isEqualResult) {
          let obj2 = _modDef12;
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
        let recordResult3 = record(rule.Updated, tmp4);
        obj = { oldRule: null, newRule: null };
        obj.oldRule = value;
        obj.newRule = tmp4;
        let arr = items.push(obj);
      }
    }
    continue;
  }
  if (0 === closure_4) {
    return null;
  } else {
    if (1 === closure_6) {
      if (0 === closure_8) {
        if (tmp70) {
          obj = { kind: rule.Created, rule: dependencyMap };
          return obj;
        }
      }
    }
    if (1 === closure_7) {
      if (0 === tmp71) {
        if (1 <= isOnlyDayLoss) {
          if (0 === closure_8) {
            obj1 = { kind: rule.Updated, rule };
            return obj1;
          }
        }
      }
    }
    if (2 === closure_7) {
      if (0 === tmp71) {
        if (0 === isOnlyDayLoss) {
          if (0 === closure_8) {
            [tmp53, tmp54] = items;
            if (isOnlyDayLoss(tmp53.oldRule, tmp53.newRule)) {
              obj2 = { kind: rule.Updated, rule: tmp54.newRule };
              return obj2;
            } else if (tmp55(tmp54.oldRule, tmp54.newRule)) {
              const obj3 = { kind: rule.Updated, rule: tmp53.newRule };
              return obj3;
            }
            tmp55 = isOnlyDayLoss;
          }
        }
      }
    }
    if (1 < closure_4) {
      const obj4 = { kind: rule.Multiple, rule: null };
      let obj5 = obj4;
    } else {
      obj5 = { kind: _require, rule: importDefault };
    }
    return obj5;
  }
  let set = new Set(items1);
};
export const getRestrictedScheduleNotificationTitle = function getRestrictedScheduleNotificationTitle(kind) {
  const intl = util.intl;
  return intl.string(obj[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    result = FamilyCenterRestrictedHoursUtils.formatRestrictedScheduleInAppSubtitle(rule);
  }
  if (result == null) {
    const intl = util.intl;
    result = intl.string(_modDef2396["8OlpoY"]);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};
