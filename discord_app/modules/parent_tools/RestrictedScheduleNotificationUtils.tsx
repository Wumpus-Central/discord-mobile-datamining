// discord_app/modules/parent_tools/RestrictedScheduleNotificationUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import intl2 from "../../intl/index.native.tsx";
import _modDef2521 from "FamilyCenter.messages.js";
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _require, c0, c3, closure_5, dependencyMap, importDefault, set;

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
    obj2 = _modDef12;
    if (obj2.isEqual(label.startTime, label2.startTime)) {
      const tmp5Result = _modDef12;
      if (tmp5Result.isEqual(label.endTime, label2.endTime)) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        let everyResult = label2.days.length < label.days.length;
        new Set(label.days);
        if (everyResult) {
          const days = label2.days;
          everyResult = days.every((item) => set.has(item));
        }
        return everyResult;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
let obj = {
  Created: "created",
  Enabled: "enabled",
  Disabled: "disabled",
  Updated: "updated",
  Removed: "removed",
  Multiple: "multiple",
};
let map = new Map();
let obj2 = {
  [Created]: _modDef2521["5V7eBH"],
  [Enabled]: _modDef2521.iefrVg,
  [Disabled]: _modDef2521["k+s9cM"],
  [Updated]: _modDef2521.Nm6hZV,
  [Multiple]: _modDef2521.Nm6hZV,
  [Removed]: _modDef2521.jR6uOs,
};
({ Created, Enabled, Disabled, Updated, Multiple, Removed } = obj);
let result = size.fileFinishedImporting("modules/parent_tools/RestrictedScheduleNotificationUtils.tsx");

export const RestrictedScheduleNotificationKind = obj;
export const EMPTY_SCHEDULE_SNAPSHOT = map;
export const toScheduleSnapshot = function toScheduleSnapshot(restrictedSchedule) {
  if (null != restrictedSchedule) {
    if (0 !== restrictedSchedule.rules.length) {
      const _Map = Map;
      const rules = restrictedSchedule.rules;
      const self = this;
      const self2 = this;
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
  let _null;
  let _null2;
  let tmp54;
  let tmp55;
  function record(Created, value) {
    const tmp = closure_4;
    if (0 === closure_4) {
      c0 = Created;
      let c1 = value;
    }
    closure_4 = tmp + 1;
    if (Created === obj.Removed) {
      closure_5 = closure_5 + 1;
    } else if (Created === obj.Created) {
      let c2 = value;
      closure_6 = closure_6 + 1;
    } else if (Created === obj.Updated) {
      c3 = value;
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
  let closure_4 = 0;
  isOnlyDayLoss = 0;
  let closure_6 = 0;
  let closure_7 = 0;
  let closure_8 = 0;
  let items = [];
  const items1 = [...EMPTY_SCHEDULE_SNAPSHOT.keys(), ...toScheduleSnapshotResult.keys()];
  let self = this;
  set = new Set(items1);
  for (const item10030 of set) {
    let value = EMPTY_SCHEDULE_SNAPSHOT.get(item10030);
    let value2 = toScheduleSnapshotResult.get(item10030);
    let tmp4 = value2;
    if (null == value2) {
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
      let Disabled;
      let tmp37;
      let tmp35 = rule;
      if (tmp4.enabled) {
        Disabled = tmp35.Enabled;
      } else {
        Disabled = tmp35.Disabled;
      }
      if (tmp4.enabled) {
        tmp37 = value2;
      } else {
        tmp37 = value;
      }
      let recordResult2 = record(Disabled, tmp37);
    } else {
      let tmp28 = !tmp4.enabled;
      if (!tmp28) {
        let tmp6 = tmp4;
        let tmp8 = value;
        let isEqualResult = value.label === tmp4.label;
        if (isEqualResult) {
          let obj = _modDef12;
          isEqualResult = obj.isEqual(tmp8.startTime, tmp6.startTime);
        }
        if (isEqualResult) {
          obj2 = _modDef12;
          isEqualResult = obj2.isEqual(tmp8.endTime, tmp6.endTime);
        }
        if (isEqualResult) {
          let tmp20 = _modDef12;
          let items2 = [];
          let isEqual = tmp20.isEqual;
          let arraySpreadResult = HermesBuiltin.arraySpread(items2, tmp8.days, 0);
          let items3 = [];
          let sorted = items2.sort();
          let arraySpreadResult2 = HermesBuiltin.arraySpread(items3, tmp6.days, 0);
          isEqualResult = isEqual(sorted, items3.sort());
        }
        tmp28 = isEqualResult;
      }
      if (!tmp28) {
        let recordResult3 = record(rule.Updated, tmp4);
        let obj3 = { oldRule: value, newRule: tmp4 };
        let arr = items.push(obj3);
      }
    }
    continue;
  }
  if (0 === closure_4) {
    return null;
  } else {
    let obj9;
    if (1 === closure_6) {
      if (0 === closure_8) {
        if (tmp71) {
          return { kind: rule.Created, rule: dependencyMap };
        }
      }
    }
    const tmp49 = closure_7;
    if (1 === closure_7) {
      if (0 === closure_6) {
        if (1 <= isOnlyDayLoss) {
          if (0 === closure_8) {
            return { kind: rule.Updated, rule };
          }
        }
      }
    }
    if (2 === tmp49) {
      if (0 === closure_6) {
        if (0 === isOnlyDayLoss) {
          if (0 === closure_8) {
            [tmp54, tmp55] = items;
            const tmp56 = isOnlyDayLoss;
            if (isOnlyDayLoss(tmp54.oldRule, tmp54.newRule)) {
              return { kind: rule.Updated, rule: tmp55.newRule };
            } else if (tmp56(tmp55.oldRule, tmp55.newRule)) {
              return { kind: rule.Updated, rule: tmp54.newRule };
            }
          }
        }
      }
    }
    if (1 < closure_4) {
      obj9 = { kind: rule.Multiple, rule: null };
      const obj8 = { kind: rule.Multiple, rule: null };
    } else {
      obj9 = { kind: _require, rule: importDefault };
    }
    return obj9;
  }
};
export const getRestrictedScheduleNotificationTitle = function getRestrictedScheduleNotificationTitle(kind) {
  const intl = intl2.intl;
  return intl.string(obj2[kind]);
};
export const getRestrictedScheduleNotificationSubtitle = function getRestrictedScheduleNotificationSubtitle(rule) {
  let result = null;
  if (null != rule) {
    const obj = FamilyCenterRestrictedHoursUtils;
    result = obj.formatRestrictedScheduleInAppSubtitle(rule);
  }
  if (result == null) {
    const intl = intl2.intl;
    result = intl.string(_modDef2521["8OlpoY"]);
  }
  return result;
};
export const restrictedScheduleNotificationKey = function restrictedScheduleNotificationKey(kind) {
  return "restricted-schedule-" + kind;
};
