// === Module 15129: FamilyCenterParentalControlsScreenTime ===

// Module 15129 (FamilyCenterParentalControlsScreenTime)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import _modDef2565 from "module_2565" /* 2565 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { header: { paddingTop: nativeDefault.space.PX_24 }, container: null };
let obj2 = { paddingTop: nativeDefault.space.PX_24 };
obj.container = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScheduleRuleRow(rule) {
  const cResult = rule(navigation[6]).c(19);
  rule = rule.rule;
  const teenId = rule.teenId;
  navigation = rule.navigation;
  const readOnly = rule.readOnly;
  if (cResult[0] !== rule) {
    const scheduleRuleDateRange = tmp(tmp2[7]).getScheduleRuleDateRange(rule);
    cResult[0] = rule;
    cResult[1] = scheduleRuleDateRange;
    let tmp5 = scheduleRuleDateRange;
    const tmpResult = tmp(tmp2[7]);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== rule.days) {
    const formatDaysResult = tmp(tmp2[7]).formatDays(rule.days);
    cResult[2] = rule.days;
    cResult[3] = formatDaysResult;
    let tmp7 = formatDaysResult;
    const tmpResult2 = tmp(tmp2[7]);
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== rule.enabled) {
    const intl = tmp(tmp2[8]).intl;
    const string = intl.string;
    let enabled = teenId(tmp2[9]);
    if (rule.enabled) {
      let stringResult = string(enabled["8vDHRq"]);
    } else {
      stringResult = string(enabled["4z9fN+"]);
    }
    enabled = rule.enabled;
    cResult[4] = enabled;
    cResult[5] = stringResult;
  } else {
    if (cResult[6] !== cResult[5]) {
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: tmp9 };
      const tmp15 = closure_5(tmp(tmp2[10]).Text, obj2);
      cResult[6] = tmp9;
      cResult[7] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === navigation) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === rule) {
          if (cResult[11] === teenId) {
            let tmp17 = cResult[12];
          }
          if (cResult[13] === tmp7) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp16) {
                if (cResult[16] === tmp17) {
                  if (cResult[17] === tmp5) {
                    let tmp18 = cResult[18];
                  }
                  return tmp18;
                }
              }
            }
          }
          const obj3 = { label: tmp5, subLabel: tmp7, trailing: tmp13, arrow: tmp16, onPress: tmp17 };
          const tmp20 = closure_5(tmp(tmp2[11]).TableRow, obj3);
          cResult[13] = tmp7;
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp17;
          cResult[17] = tmp5;
          cResult[18] = tmp20;
          tmp18 = tmp20;
        }
      }
    }
    let fn;
    if (!tmp4) {
      fn = () => {
        const obj = { teenId, rule: null };
        const merged = Object.assign(rule);
        obj.rule = {};
        return navigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
      };
    }
    cResult[8] = navigation;
    cResult[9] = tmp4;
    cResult[10] = rule;
    cResult[11] = teenId;
    cResult[12] = fn;
    tmp17 = fn;
  }
  let obj = rule(navigation[6]);
}) : (function ScheduleRuleRow(rule) {
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  const scheduleRuleDateRange = rule(12519).getScheduleRuleDateRange(rule);
  let obj = rule(12519);
  const obj2 = rule(12519);
  const obj3 = { label: scheduleRuleDateRange, subLabel: rule(12519).formatDays(rule.days), trailing: null, arrow: null, onPress: null };
  const intl = rule(1126).intl;
  const string = intl.string;
  const tmp4 = _modDef2565;
  if (rule.enabled) {
    let stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  obj3.trailing = closure_5(rule(5087).Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult });
  obj3.arrow = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      const obj = { teenId, rule: null };
      const merged = Object.assign(rule);
      obj.rule = {};
      return navigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj3.onPress = fn;
  return closure_5(rule(6186).TableRow, obj3);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterParentalControlsScreenTime(readOnly) {
  const cResult = require("c").c(28);
  readOnly = readOnly.readOnly;
  _require = tmp4;
  const tmp5 = closure_7();
  const obj = require("c");
  const selectedTeenUser = require("useSelectedTeenUser").useSelectedTeenUser();
  const tmpResult = require("useSelectedTeenUser");
  const navigation = require("useNavigation").useNavigation();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  if (cResult[0] === navigation) {
    if (cResult[1] === tmp4) {
      let rules;
      if (selectedTeenUser != null) {
        const restrictedSchedule = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          rules = restrictedSchedule.rules;
        }
      }
      if (cResult[2] === rules) {
        if (cResult[3] === tmp5) {
          if (cResult[4] === id) {
            let tmp16 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (tmp16 !== Symbol.for("react.early_return_sentinel")) {
            return tmp16;
          } else {
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp12) {
                if (cResult[21] === tmp13) {
                  let tmp35 = cResult[22];
                }
                if (cResult[23] === tmp11) {
                  if (cResult[24] === tmp14) {
                    if (cResult[25] === tmp15) {
                    }
                  }
                }
                const obj2 = { style: tmp14, children: null };
                const items = [tmp15, tmp35];
                obj2.children = items;
                const tmp40 = closure_6(tmp11, obj2);
                cResult[23] = tmp11;
                cResult[24] = tmp14;
                cResult[25] = tmp15;
                cResult[26] = tmp35;
                cResult[27] = tmp40;
              }
            }
            const obj3 = { hasIcons: tmp12, children: tmp13 };
            const tmp37 = closure_5(tmp10, obj3);
            cResult[19] = tmp10;
            cResult[20] = tmp12;
            cResult[21] = tmp13;
            cResult[22] = tmp37;
            tmp35 = tmp37;
          }
        }
      }
    }
  }
  let rules1;
  const tmpResult3 = require("useNavigation");
  if (selectedTeenUser != null) {
    const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule2 != null) {
      rules1 = restrictedSchedule2.rules;
    }
  }
  if (rules1 == null) {
    rules1 = [];
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult4 = require("FamilyCenterRestrictedHoursUtils");
  if (null == id) {
    cResult[0] = navigation;
    cResult[1] = tmp4;
    let rules2;
    if (selectedTeenUser != null) {
      const restrictedSchedule3 = selectedTeenUser.restrictedSchedule;
      if (restrictedSchedule3 != null) {
        rules2 = restrictedSchedule3.rules;
      }
    }
    cResult[2] = rules2;
    cResult[3] = tmp5;
    cResult[4] = id;
    cResult[5] = undefined;
    cResult[6] = undefined;
    cResult[7] = undefined;
    cResult[8] = undefined;
    cResult[9] = undefined;
    cResult[10] = undefined;
    cResult[11] = null;
    tmp16 = null;
  } else {
    const _Symbol = Symbol;
    ({ container, header } = tmp5);
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[8]).intl;
      const stringResult = intl.string(navigation(tmp2[9])["72CmJd"]);
      cResult[12] = stringResult;
      let tmp19 = stringResult;
    } else {
      tmp19 = cResult[12];
    }
    if (cResult[13] !== tmp5.header) {
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: header, children: tmp19 };
      cResult[13] = tmp5.header;
      cResult[14] = closure_5(tmp(tmp2[10]).Text, obj4);
      class N {
        constructor(arg0) {
          obj = { rule: readOnly, teenId: id, navigation: closure_1, readOnly };
          return jsx(ScheduleRuleRow, obj, readOnly.ruleId);
        }
      }
      const tmp24 = closure_5(tmp(tmp2[10]).Text, obj4);
    }
    if (cResult[15] === navigation) {
      if (cResult[16] === tmp4) {
        if (cResult[17] === id) {
          let tmp26 = cResult[18];
        }
        const mapped = sortRulesByStartTimeResult.map(tmp26);
      }
    }
    class N {
      constructor(arg0) {
        obj = { rule: readOnly, teenId: id, navigation: closure_1, readOnly };
        return jsx(ScheduleRuleRow, obj, readOnly.ruleId);
      }
    }
    cResult[15] = navigation;
    cResult[16] = tmp4;
    cResult[17] = id;
    cResult[18] = N;
    tmp26 = N;
  }
  sortRulesByStartTimeResult = require("FamilyCenterRestrictedHoursUtils").sortRulesByStartTime(rules1);
}) : (function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let id;
  const tmp = closure_7();
  const selectedTeenUser = flag(id[12]).useSelectedTeenUser();
  const obj = flag(id[12]);
  importDefault = flag(id[13]).useNavigation();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  const obj2 = flag(id[13]);
  const tmp2Result = flag(id[7]);
  let tmp6 = null;
  if (null != id) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.header, children: null };
    const intl = tmp2(tmp3[8]).intl;
    obj4.children = intl.string(require("module_2565")["72CmJd"]);
    const items = [closure_5(tmp2(tmp3[10]).Text, obj4), ];
    const obj5 = { hasIcons: false, children: sortRulesByStartTimeResult.map((rule) => hasOwnProperty(closure_8, { rule, teenId: id, navigation, readOnly: flag }, rule.ruleId)) };
    items[1] = closure_5(tmp2(tmp3[14]).TableRowGroup, obj5);
    obj3.children = items;
    tmp6 = closure_6(View, obj3);
  }
  return tmp6;
});