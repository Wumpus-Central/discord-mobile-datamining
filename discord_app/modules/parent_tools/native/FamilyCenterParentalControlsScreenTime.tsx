// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, navigation, rule;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (rule) => {
      let tmp13;
      let tmp5;
      let tmp7;
      let tmp9;
      let obj = rule(navigation[6]);
      const cResult = obj.c(19);
      rule = rule.rule;
      const teenId = rule.teenId;
      navigation = rule.navigation;
      const readOnly = rule.readOnly;
      if (cResult[0] !== rule) {
        const tmpResult = rule(navigation[7]);
        const scheduleRuleDateRange = tmpResult.getScheduleRuleDateRange(rule);
        cResult[0] = rule;
        cResult[1] = scheduleRuleDateRange;
        tmp5 = scheduleRuleDateRange;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== rule.days) {
        const tmpResult2 = rule(navigation[7]);
        const formatDaysResult = tmpResult2.formatDays(rule.days);
        cResult[2] = rule.days;
        cResult[3] = formatDaysResult;
        tmp7 = formatDaysResult;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== rule.enabled) {
        let stringResult;
        const enabled = rule.enabled;
        const intl = tmp(tmp2[8]).intl;
        const string = intl.string;
        const tmp11 = teenId(navigation[9]);
        if (enabled) {
          stringResult = string(tmp11["8vDHRq"]);
        } else {
          stringResult = string(tmp11["4z9fN+"]);
        }
        cResult[4] = rule.enabled;
        cResult[5] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp9) {
        let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: tmp9 };
        const tmp15 = closure_5(rule(navigation[10]).Text, obj2);
        cResult[6] = tmp9;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === navigation) {
        if (cResult[9] === (undefined !== readOnly && readOnly)) {
          if (cResult[10] === rule) {
            let tmp17;
            if (cResult[11] === teenId) {
              tmp17 = cResult[12];
            }
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp13) {
                if (cResult[15] === !(undefined !== readOnly && readOnly)) {
                  if (cResult[16] === tmp17) {
                    let tmp18;
                    if (cResult[17] === tmp5) {
                      tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj3 = {
              label: tmp5,
              subLabel: tmp7,
              trailing: tmp13,
              arrow: !(undefined !== readOnly && readOnly),
              onPress: tmp17,
            };
            const tmp20 = closure_5(rule(navigation[11]).TableRow, obj3);
            cResult[13] = tmp7;
            cResult[14] = tmp13;
            cResult[15] = !(undefined !== readOnly && readOnly);
            cResult[16] = tmp17;
            cResult[17] = tmp5;
            cResult[18] = tmp20;
            tmp18 = tmp20;
          }
        }
      }
      let fn;
      if (!(undefined !== readOnly && readOnly)) {
        fn = () => {
          let obj2;
          const navigate = navigation.navigate;
          const FAMILY_CENTER_SCHEDULE_DOWNTIME = UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME;
          const obj = { teenId, rule: obj2 };
          obj2 = {};
          const merged = Object.assign(rule);
          return navigate(FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
        };
      }
      cResult[8] = navigation;
      cResult[9] = undefined !== readOnly && readOnly;
      cResult[10] = rule;
      cResult[11] = teenId;
      cResult[12] = fn;
      tmp17 = fn;
    }
  : (rule) => {
      let Text;
      let fn;
      let readOnly;
      let stringResult;
      let teenId;
      rule = rule.rule;
      ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
      if (readOnly === undefined) {
        readOnly = false;
      }
      let obj = rule(12483);
      const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
      let obj2 = rule(12483);
      const obj3 = {
        label: scheduleRuleDateRange,
        subLabel: obj2.formatDays(rule.days),
        trailing: closure_5(Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult }),
        arrow: !readOnly,
        onPress: fn,
      };
      const TableRow = rule(6000).TableRow;
      Text = rule(4892).Text;
      const enabled = rule.enabled;
      const intl = rule(1126).intl;
      const string = intl.string;
      const tmp4 = _modDef2521;
      if (enabled) {
        stringResult = string(tmp4["8vDHRq"]);
      } else {
        stringResult = string(tmp4["4z9fN+"]);
      }
      fn = undefined;
      if (!readOnly) {
        fn = () => {
          let obj2;
          const navigate = dependencyMap.navigate;
          const FAMILY_CENTER_SCHEDULE_DOWNTIME = UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME;
          const obj = { teenId: importDefault, rule: obj2 };
          obj2 = {};
          const merged = Object.assign(rule);
          return navigate(FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
        };
      }
      return closure_5(TableRow, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (readOnly) => {
      let container;
      let header;
      let id;
      let items;
      let obj = require("react");
      const cResult = obj.c(28);
      readOnly = readOnly.readOnly;
      _require = tmp4;
      const tmp5 = closure_7();
      const tmpResult = require("useSelectedTeenUser");
      const selectedTeenUser = tmpResult.useSelectedTeenUser();
      const tmpResult3 = require("useNavigation");
      navigation = tmpResult3.useNavigation();
      id = undefined;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      if (cResult[0] === navigation) {
        if (cResult[1] === (undefined !== readOnly && readOnly)) {
          let rules;
          const tmp9 = cResult[2];
          if (selectedTeenUser != null) {
            const restrictedSchedule = selectedTeenUser.restrictedSchedule;
            if (restrictedSchedule != null) {
              rules = restrictedSchedule.rules;
            }
          }
          if (tmp9 === rules) {
            if (cResult[3] === tmp5) {
              let tmp11;
              let tmp12;
              let tmp13;
              let tmp14;
              let tmp15;
              let tmp16;
              let tmp17;
              if (cResult[4] === id) {
                tmp11 = cResult[5];
                tmp12 = cResult[6];
                tmp13 = cResult[7];
                tmp14 = cResult[8];
                tmp15 = cResult[9];
                tmp16 = cResult[10];
                tmp17 = cResult[11];
              }
              const _Symbol2 = Symbol;
              if (tmp17 === Symbol.for("react.early_return_sentinel")) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp13) {
                    let tmp36;
                    if (cResult[21] === tmp14) {
                      tmp36 = cResult[22];
                    }
                    if (cResult[23] === tmp12) {
                      if (cResult[24] === tmp15) {
                        if (cResult[25] === tmp16) {
                          let tmp39;
                          if (cResult[26] === tmp36) {
                            tmp39 = cResult[27];
                          }
                          tmp17 = tmp39;
                        }
                      }
                    }
                    const obj2 = { style: tmp15, children: items };
                    items = [tmp16, tmp36];
                    const tmp41 = closure_6(tmp12, obj2);
                    cResult[23] = tmp12;
                    cResult[24] = tmp15;
                    cResult[25] = tmp16;
                    cResult[26] = tmp36;
                    cResult[27] = tmp41;
                    tmp39 = tmp41;
                  }
                }
                const obj3 = { hasIcons: tmp13, children: tmp14 };
                const tmp38 = closure_5(tmp11, obj3);
                cResult[19] = tmp11;
                cResult[20] = tmp13;
                cResult[21] = tmp14;
                cResult[22] = tmp38;
                tmp36 = tmp38;
              }
              return tmp17;
            }
          }
        }
      }
      let rules1;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (selectedTeenUser != null) {
        const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule2 != null) {
          rules1 = restrictedSchedule2.rules;
        }
      }
      if (rules1 == null) {
        rules1 = [];
      }
      let tmp19 = null;
      let tmp20;
      let tmp21;
      let mapped;
      let flag;
      let tmp23;
      let tmp24;
      const tmpResult4 = require("FamilyCenterRestrictedHoursUtils");
      const sortRulesByStartTimeResult = tmpResult4.sortRulesByStartTime(rules1);
      if (null != id) {
        let tmp26;
        let tmp29;
        const _Symbol = Symbol;
        ({ container, header } = tmp5);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[8]).intl;
          const stringResult = intl.string(navigation(id[9])["72CmJd"]);
          cResult[12] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[12];
        }
        if (cResult[13] !== tmp5.header) {
          const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: header, children: tmp26 };
          cResult[13] = tmp5.header;
          cResult[14] = closure_5(require("Text/Text").Text, obj4);
          closure_5(require("Text/Text").Text, obj4);
          class P {
            constructor(arg0) {
              obj = { rule: readOnly, teenId: id, navigation: closure_1, readOnly };
              return jsx(f68533, obj, readOnly.ruleId);
            }
          }
        } else {
          tmp29 = cResult[14];
        }
        if (cResult[15] === navigation) {
          if (cResult[16] === (undefined !== readOnly && readOnly)) {
            let tmp33;
            if (cResult[17] === id) {
              tmp33 = cResult[18];
            }
            mapped = sortRulesByStartTimeResult.map(tmp33);
            flag = false;
            tmp19 = forResult;
            tmp20 = tmp29;
            tmp21 = container;
            tmp23 = View;
            tmp24 = tmp32;
          }
        }
        class P {
          constructor(arg0) {
            obj = { rule: readOnly, teenId: id, navigation: closure_1, readOnly };
            return jsx(f68533, obj, readOnly.ruleId);
          }
        }
        cResult[15] = navigation;
        cResult[16] = undefined !== readOnly && readOnly;
        cResult[17] = id;
        cResult[18] = P;
        tmp33 = P;
      }
      cResult[0] = navigation;
      cResult[1] = undefined !== readOnly && readOnly;
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
      cResult[5] = tmp24;
      cResult[6] = tmp23;
      cResult[7] = flag;
      cResult[8] = mapped;
      cResult[9] = tmp21;
      cResult[10] = tmp20;
      cResult[11] = tmp19;
      tmp17 = tmp19;
      tmp16 = tmp20;
      tmp15 = tmp21;
      tmp14 = mapped;
      tmp13 = flag;
      tmp12 = tmp23;
      tmp11 = tmp24;
    }
  : (readOnly) => {
      let intl;
      let items;
      let flag = readOnly.readOnly;
      if (flag === undefined) {
        flag = false;
      }
      let id;
      const tmp = closure_7();
      let obj = flag(id[12]);
      const selectedTeenUser = obj.useSelectedTeenUser();
      const obj2 = flag(id[13]);
      importDefault = obj2.useNavigation();
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
      let tmp6 = null;
      const tmp2Result = flag(id[7]);
      const sortRulesByStartTimeResult = tmp2Result.sortRulesByStartTime(rules);
      if (null != id) {
        const obj3 = { style: tmp.container, children: items };
        const obj4 = {
          variant: "text-sm/semibold",
          color: "text-subtle",
          style: tmp.header,
          children: intl.string(require("../FamilyCenter.messages.js")["72CmJd"]),
        };
        const Text = tmp2(tmp3[10]).Text;
        intl = tmp2(tmp3[8]).intl;
        items = [closure_5(Text, obj4)];
        const obj5 = {
          hasIcons: false,
          children: sortRulesByStartTimeResult.map((rule) => {
            const obj = { rule, teenId: id, navigation, readOnly: flag };
            return hasOwnProperty(closure_8, obj, rule.ruleId);
          }),
        };
        const TableRowGroup = tmp2(tmp3[14]).TableRowGroup;
        items[1] = closure_5(TableRowGroup, obj5);
        tmp6 = closure_6(View, obj3);
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default tmp4;
