// discord_app/modules/parent_tools/native/ScheduleDowntimeScreen.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl11 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef2493 from "../FamilyCenter.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import FamilyCenterRestrictedHoursUtils from "../FamilyCenterRestrictedHoursUtils.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c5, closure_0, closure_2, closure_3, conflictingEntries, set;

let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: metroRequire, Pressable: metroImportDefault, ScrollView: metroImportAll } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1 },
  scrollContent: obj2,
  section: obj3,
  sectionHeader: obj4,
  daysContainer: obj5,
  dayButton: obj6,
  dayButtonSelected: { backgroundColor: "rgba(88, 101, 242, 0.16)", borderColor: "rgba(88, 101, 242, 1)" },
  overlapWarningContent: obj7,
  footer: obj8,
};
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_24,
};
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj6 = {
  flex: 1,
  aspectRatio: 1,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  borderWidth: 1,
  borderColor: "transparent",
};
obj7 = { marginTop: nativeDefault.space.PX_24 };
obj8 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let closure_13 = createStyles(obj);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (conflictingEntries) => {
      let Stack;
      let intl;
      let items;
      let obj4;
      let obj = react2;
      const cResult = obj.c(6);
      conflictingEntries = conflictingEntries.conflictingEntries;
      if (0 === conflictingEntries.length) {
        return null;
      } else {
        let first;
        let tmp8;
        let tmp11;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-sm/medium", children: intl.string(_modDef2493["26A0Df"]) };
          let Text = Text_Text.Text;
          intl = intl11.intl;
          const tmp7 = unpackModuleId(Text, obj2);
          cResult[0] = tmp7;
          first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== conflictingEntries) {
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function l(dayLabel) {
              dayLabel = dayLabel.dayLabel;
              const timeRange = dayLabel.timeRange;
              const obj = { variant: "text-sm/medium", children: "" + dayLabel + "  " + timeRange };
              const Text = require("Text/Text").Text;
              return closure_1_11(Text, obj, dayLabel);
            };
            cResult[3] = fn;
            tmp9 = fn;
          } else {
            tmp9 = cResult[3];
          }
          const mapped = conflictingEntries.map(tmp9);
          cResult[1] = conflictingEntries;
          cResult[2] = mapped;
          tmp8 = mapped;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[4] !== tmp8) {
          const obj3 = {
            messageType: native.HelpMessageTypes.WARNING,
            borderRadius: nativeDefault.radii.md,
            children: closure_12(Stack, obj4),
          };
          const HelpMessage = native.HelpMessage;
          obj4 = { spacing: 8, children: items };
          items = [first];
          Stack = Stack_Stack.Stack;
          const obj5 = { spacing: 4, children: tmp8 };
          items[1] = unpackModuleId(Stack_Stack.Stack, obj5);
          const tmp15 = unpackModuleId(HelpMessage, obj3);
          cResult[4] = tmp8;
          cResult[5] = tmp15;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
    }
  : (conflictingEntries) => {
      let Stack;
      let intl;
      let items;
      let obj2;
      conflictingEntries = conflictingEntries.conflictingEntries;
      let tmp = null;
      if (0 !== conflictingEntries.length) {
        let obj = {
          messageType: native.HelpMessageTypes.WARNING,
          borderRadius: nativeDefault.radii.md,
          children: closure_12(Stack, obj2),
        };
        const HelpMessage = native.HelpMessage;
        obj2 = { spacing: 8, children: items };
        Stack = Stack_Stack.Stack;
        const obj3 = { variant: "text-sm/medium", children: intl.string(_modDef2493["26A0Df"]) };
        let Text = Text_Text.Text;
        intl = intl11.intl;
        items = [unpackModuleId(Text, obj3)];
        const obj4 = {
          spacing: 4,
          children: conflictingEntries.map((dayLabel) => {
            dayLabel = dayLabel.dayLabel;
            const timeRange = dayLabel.timeRange;
            const obj = { variant: "text-sm/medium", children: "" + dayLabel + "  " + timeRange };
            const Text = require("Text/Text").Text;
            return closure_1_11(Text, obj, dayLabel);
          }),
        };
        const Stack2 = Stack_Stack.Stack;
        items[1] = unpackModuleId(Stack2, obj4);
        tmp = unpackModuleId(HelpMessage, obj);
      }
      return tmp;
    };
let result = size.fileFinishedImporting("modules/parent_tools/native/ScheduleDowntimeScreen.tsx");

export default function ScheduleDowntimeScreen() {
  let DAYS_ORDERED;
  let TableSwitchRow;
  let Text3;
  let Text4;
  let formatResult;
  let intl10;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items10;
  let items11;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let num;
  let num2;
  let obj14;
  let obj16;
  let obj23;
  let obj9;
  let rule;
  let stateFromStores;
  let teenId;
  let tmp2Result10;
  let tmp2Result11;
  let tmp2Result12;
  let tmp2Result9;
  let obj = function _handleSubmit() {
    let enabled;
    obj = _asyncToGenerator(async () => {
      let obj4;
      let obj5;
      let tmp24Result;
      let tmp24Result2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (null != teenId) {
              closure_2_17(true);
              c3 = 1;
              const obj6 = {
                label: "",
                start_time: obj4.toTimeProto(first1),
                end_time: obj5.toTimeProto(first2),
                days: Array.from(first3),
                enabled,
              };
              obj4 = tmp(closure_2[21]);
              obj5 = tmp(closure_2[21]);
              const _Array = Array;
              if (closure_2_6) {
                let ruleId;
                if (rule != null) {
                  ruleId = rule.ruleId;
                }
                if (null != ruleId) {
                  c1 = 3;
                  c4 = 1;
                  const obj7 = {
                    value: tmp24Result.updateRestrictedScheduleRule(teenId, rule.ruleId, obj6),
                    done: false,
                  };
                  tmp24Result = tmp(closure_2[24]);
                  return obj7;
                }
              }
              c1 = 2;
              c4 = 1;
              const obj8 = { value: tmp24Result2.addRestrictedScheduleRule(teenId, obj6), done: false };
              tmp24Result2 = tmp(closure_2[24]);
              return obj8;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_17(false);
            throw closure_2;
          } else {
            if (2 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_128_17(false);
                c4 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_17(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            closure_128_1.goBack();
            c3 = 0;
            closure_128_17(false);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c4 = 3;
            throw tmp33;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_13();
  _require = tmp;
  const tmp2 = _require;
  let tmp3 = rule;
  obj = require("useNavigation");
  const stackNavigation = obj.useStackNavigation();
  let obj2 = require("useSettingNavigationRoute");
  const params = obj2.useSettingNavigationRoute().params;
  rule = undefined;
  if (params != null) {
    rule = params.rule;
  }
  let obj3 = teenId;
  _asyncToGenerator = teenId.useMemo(() => {
    obj = closure_0(rule[21]);
    return obj.getShortDayLabels("narrow");
  }, []);
  const memo = teenId.useMemo(() => {
    obj = closure_0(rule[21]);
    return obj.getShortDayLabels("short");
  }, []);
  teenId = undefined;
  if (params != null) {
    teenId = params.teenId;
  }
  let closure_6 = tmp8;
  let flag;
  const useState = obj3.useState;
  if (rule != null) {
    flag = rule.enabled;
  }
  if (flag == null) {
    flag = true;
  }
  const tmp10 = memo(useState(flag), 2);
  const value = tmp10[0];
  let closure_8 = tmp10[1];
  let items = [stateFromStores];
  const tmp2Result = tmp2(tmp3[22]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let items;
    if (null == teenId) {
      items = [];
    } else {
      const user = UserStore.getUser(tmp);
      items = undefined;
      if (user != null) {
        const restrictedSchedule = user.restrictedSchedule;
        if (restrictedSchedule != null) {
          items = restrictedSchedule.rules;
        }
      }
      if (items == null) {
        items = [];
      }
    }
    return items;
  });
  let startTime;
  const tmp14 = stackNavigation(tmp3[23]);
  if (rule != null) {
    startTime = rule.startTime;
  }
  let tmp16 = null;
  if (null != startTime) {
    let time = { hours: rule.startTime.hours, minutes: num, seconds: 0, nanos: 0 };
    num = rule.startTime.minutes;
    if (num == null) {
      num = 0;
    }
    tmp16 = time;
  }
  const tmp9Result = memo(tmp14({ initial: tmp16, defaultValue: { hours: 22, minutes: 0 } }), 2);
  const first1 = tmp9Result[0];
  let closure_11 = tmp9Result[1];
  let endTime;
  const tmp13Result = stackNavigation(tmp3[23]);
  if (rule != null) {
    endTime = rule.endTime;
  }
  let tmp21 = null;
  if (null != endTime) {
    const time1 = { hours: rule.endTime.hours, minutes: num2, seconds: 0, nanos: 0 };
    num2 = rule.endTime.minutes;
    if (num2 == null) {
      num2 = 0;
    }
    tmp21 = time1;
  }
  const tmp9Result4 = memo(tmp13Result({ initial: tmp21, defaultValue: { hours: 7, minutes: 0 } }), 2);
  const first2 = tmp9Result4[0];
  closure_13 = tmp9Result4[1];
  let days;
  const useState2 = obj3.useState;
  const _Set = Set;
  if (rule != null) {
    days = rule.days;
  }
  const _Set1 = new _Set(days);
  const tmp9Result5 = memo(useState2(_Set1), 2);
  const first3 = tmp9Result5[0];
  let closure_15 = tmp9Result5[1];
  const tmp9Result6 = memo(obj3.useState(false), 2);
  const first4 = tmp9Result6[0];
  let closure_17 = tmp9Result6[1];
  const items1 = [null != rule, ,];
  let ruleId;
  const useMemo = obj3.useMemo;
  if (rule != null) {
    ruleId = rule.ruleId;
  }
  items1[1] = ruleId;
  items1[2] = stateFromStores;
  const memo1 = useMemo(() => {
    if (closure_6) {
      let found;
      let ruleId;
      if (rule != null) {
        ruleId = rule.ruleId;
      }
      if (null != ruleId) {
        found = stateFromStores.filter((ruleId) => ruleId.ruleId !== ruleId.ruleId);
      }
      return found;
    }
    found = stateFromStores;
  }, items1);
  const items2 = [memo, memo1, first3];
  const memo2 = obj3.useMemo(() => {
    obj = FamilyCenterRestrictedHoursUtils;
    return obj.computeOverlappingInfo(first3, memo1, memo);
  }, items2);
  const items3 = [, ,];
  const useCallback = obj3.useCallback;
  items3[0] = teenId;
  let ruleId1;
  const tmp33 = _asyncToGenerator(async () => {
    let c2;
    let user;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === rule) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            if (null != teenId) {
              let ruleId;
              if (rule != null) {
                ruleId = rule.ruleId;
              }
              if (null != ruleId) {
                closure_17(true);
                c4 = 1;
                const obj2 = closure_0(rule[24]);
                rule = 2;
                c5 = 1;
                const obj5 = { value: obj2.deleteRestrictedScheduleRule(teenId, rule.ruleId), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          closure_129_17(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_129_17(false);
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          user = user.getUser(closure_129_5);
          let rules;
          if (user != null) {
            const restrictedSchedule = user.restrictedSchedule;
            if (restrictedSchedule != null) {
              rules = restrictedSchedule.rules;
            }
          }
          closure_0 = rules;
          if (rules == null) {
            closure_0 = [];
          }
          if (0 === closure_0.length) {
            closure_129_1.navigate(constants.FAMILY_CENTER);
          } else {
            closure_129_1.goBack();
          }
          c4 = 0;
          closure_129_17(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp32) {
        closure_3 = tmp32;
        if (0 === c4) {
          c5 = 3;
          throw tmp32;
        } else {
          rule = 1;
        }
      }
    }
  });
  if (rule != null) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  const callback = useCallback(tmp33, items3);
  const items4 = [stackNavigation, null != rule, callback, first4];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let disabled;
    let onPress;
    if (closure_6) {
      obj = {
        headerRight() {
          let TrashIcon;
          let intl;
          let obj2;
          obj = {
            onPress,
            accessibilityRole: "button",
            accessibilityLabel: intl.string(closure_0(rule[15]).t.oyYWHE),
            hitSlop: 8,
            disabled,
            children: closure_11(TrashIcon, obj2),
          };
          intl = closure_0(rule[15]).intl;
          obj2 = { color: stackNavigation(rule[11]).colors.ICON_FEEDBACK_CRITICAL, size: "md" };
          TrashIcon = closure_0(rule[25]).TrashIcon;
          return closure_11(first, obj);
        },
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  const tmp2Result7 = tmp2(tmp3[21]);
  const timeToMinutesResult = tmp2Result7.timeToMinutes(first1);
  const tmp2Result8 = tmp2(tmp3[21]);
  const timeToMinutesResult1 = tmp2Result8.timeToMinutes(first2);
  let obj4 = {
    startTime: tmp2Result9.formatTime(first1),
    endTime: tmp2Result10.formatTime(first2),
    timeHook(children, arg1) {
      obj = { variant: "text-sm/medium", color: "text-default", children };
      return closure_11(closure_0(rule[14]).Text, obj, arg1);
    },
  };
  tmp2Result9 = tmp2(tmp3[21]);
  tmp2Result10 = tmp2(tmp3[21]);
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = tmp2(tmp3[15]).intl;
    formatResult = intl2.format(tmp13(tmp3[16]).R87Y2K, obj4);
  } else {
    let intl = tmp2(tmp3[15]).intl;
    formatResult = intl.format(tmp13(tmp3[16]).vX7xid, obj4);
  }
  let tmp42Result = null;
  const tmp40 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !first4;
  if (null != teenId) {
    let obj5 = { style: tmp.container, children: items10 };
    let obj6 = { style: tmp.scrollContent, children: items5 };
    let obj7 = { variant: "text-md/medium", color: "text-subtle", children: intl3.string(tmp13(tmp3[16]).AcJ4ke) };
    let Text = tmp2(tmp3[14]).Text;
    intl3 = tmp2(tmp3[15]).intl;
    items5 = [closure_11(Text, obj7), , ,];
    let tmp44Result = tmp8;
    const tmp45 = closure_8;
    if (tmp44Result) {
      let obj8 = { hasIcons: false, children: closure_11(TableSwitchRow, obj9) };
      const TableRowGroup = tmp2(tmp3[26]).TableRowGroup;
      obj9 = {
        label: intl4.string(tmp13(tmp3[16])["30Owsd"]),
        value,
        onValueChange: function handleEnabledChange() {
          closure_8((arg0) => !arg0);
        },
      };
      TableSwitchRow = tmp2(tmp3[27]).TableSwitchRow;
      intl4 = tmp2(tmp3[15]).intl;
      tmp44Result = tmp44(TableRowGroup, obj8);
    }
    items5[1] = tmp44Result;
    const obj10 = { style: tmp.section, children: items6 };
    const obj11 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: intl5.string(stackNavigation(tmp3[16])["37z4a2"]),
    };
    const Text2 = tmp2(tmp3[14]).Text;
    intl5 = tmp2(tmp3[15]).intl;
    items6 = [closure_11(Text2, obj11)];
    const obj12 = { hasIcons: false, children: items7 };
    const TableRowGroup2 = tmp2(tmp3[26]).TableRowGroup;
    const obj13 = {
      label: intl6.string(stackNavigation(tmp3[16]).DsXytO),
      trailing: closure_11(Text3, obj14),
      arrow: true,
      onPress: function handleStartTimePress() {
        const intl = intl11.intl;
        const f144092 = (first1) => {
          closure_1_11(first1);
          obj = closure_2_0(rule[21]);
          const result = (obj.timeToMinutes(first1) + 540) % 1440;
          const time = { hours: Math.floor(result / 60), minutes: result % 60 };
          closure_1_13(time);
        };
        const stringResult = intl.string(_modDef2493["8bLRt0"]);
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        obj = {
          title: stringResult,
          mode: "time",
          startDate: new Date(2025, 0, 1, first1.hours, first1.minutes, 0, 0),
          onSubmit(hours) {
            const time = { hours: hours.hours(), minutes: hours.minutes() };
            return closure_0(time);
          },
        };
        ActionSheetActionCreatorsDefault;
        const tmp3 = asyncRequire(9194, dependencyMap.paths);
        new Date(2025, 0, 1, first1.hours, first1.minutes, 0, 0);
        openLazy(tmp3, "ScheduleDowntimeStartTimePicker", obj);
      },
    };
    const TableRow = tmp2(tmp3[28]).TableRow;
    intl6 = tmp2(tmp3[15]).intl;
    obj14 = { variant: "text-md/normal", children: tmp2Result11.formatTime(first1) };
    Text3 = tmp2(tmp3[14]).Text;
    tmp2Result11 = tmp2(tmp3[21]);
    items7 = [closure_11(TableRow, obj13)];
    const obj15 = {
      label: intl7.string(stackNavigation(tmp3[16])["5SHDP6"]),
      trailing: closure_11(Text4, obj16),
      arrow: true,
      onPress: function handleEndTimePress() {
        const intl = intl11.intl;
        closure_0 = closure_13;
        const stringResult = intl.string(_modDef2493["+JkWJV"]);
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        obj = {
          title: stringResult,
          mode: "time",
          startDate: new Date(2025, 0, 1, first2.hours, first2.minutes, 0, 0),
          onSubmit(hours) {
            const time = { hours: hours.hours(), minutes: hours.minutes() };
            return closure_0(time);
          },
        };
        ActionSheetActionCreatorsDefault;
        const tmp3 = asyncRequire(9194, dependencyMap.paths);
        new Date(2025, 0, 1, first2.hours, first2.minutes, 0, 0);
        openLazy(tmp3, "ScheduleDowntimeEndTimePicker", obj);
      },
    };
    const TableRow2 = tmp2(tmp3[28]).TableRow;
    intl7 = tmp2(tmp3[15]).intl;
    obj16 = { variant: "text-md/normal", children: tmp2Result12.formatTime(first2) };
    Text4 = tmp2(tmp3[14]).Text;
    tmp2Result12 = tmp2(tmp3[21]);
    items7[1] = closure_11(TableRow2, obj15);
    items6[1] = first2(TableRowGroup2, obj12);
    items5[2] = first2(closure_6, obj10);
    const obj17 = { style: tmp.section, children: items9 };
    const obj18 = { style: tmp.sectionHeader, children: items8 };
    const obj19 = {
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: intl8.string(stackNavigation(tmp3[16]).HaV0Sg),
    };
    const Text5 = tmp2(tmp3[14]).Text;
    intl8 = tmp2(tmp3[15]).intl;
    items8 = [closure_11(Text5, obj19)];
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: formatResult };
    items8[1] = closure_11(tmp2(tmp3[14]).Text, obj20);
    items9 = [first2(closure_6, obj18), ,];
    const obj21 = {
      style: tmp.daysContainer,
      children: DAYS_ORDERED.map((item, index) => {
        let Text;
        let obj2;
        closure_0 = item;
        const hasItem = first3.has(item);
        const items = [closure_0.dayButton];
        const dayButtonSelected = hasItem && closure_0.dayButtonSelected;
        items[1] = dayButtonSelected;
        let str = "text-muted";
        obj = {
          style: items,
          onPress() {
            closure_15((items) => {
              set = new Set(items);
              if (set.has(closure_0)) {
                set.delete(closure_0);
              } else {
                set.add(closure_0);
              }
              return set;
            });
          },
          accessibilityRole: "button",
          accessibilityState: { selected: hasItem },
          accessibilityLabel: closure_3[index],
          children: closure_11(Text, obj2),
        };
        Text = closure_0(rule[14]).Text;
        if (hasItem) {
          str = "control-secondary-text-default";
        }
        obj2 = { variant: "text-sm/semibold", color: str, children: closure_3[index] };
        return closure_11(first, obj, item);
      }),
    };
    DAYS_ORDERED = tmp2(tmp3[21]).DAYS_ORDERED;
    items9[1] = closure_11(closure_6, obj21);
    let tmp44Result2 = memo2.conflictingEntries.length > 0;
    if (tmp44Result2) {
      const obj22 = { style: tmp.overlapWarningContent, children: closure_11(first3, obj23) };
      obj23 = { conflictingEntries: memo2.conflictingEntries };
      tmp44Result2 = tmp44(tmp43, obj22);
    }
    items9[2] = tmp44Result2;
    const obj24 = { children: first2(closure_6, obj6) };
    items5[3] = first2(closure_6, obj17);
    items10 = [closure_11(tmp45, obj24)];
    const obj25 = { style: tmp.footer, children: items11 };
    const SafeAreaPaddingView = tmp2(tmp3[29]).SafeAreaPaddingView;
    const Button = tmp2(tmp3[30]).Button;
    const intl9 = tmp2(tmp3[15]).intl;
    const string = intl9.string;
    const tmp13Result2 = stackNavigation(tmp3[16]);
    const obj26 = { bottom: true, children: first2(closure_6, obj25) };
    const obj27 = {
      text: string(null != rule ? tmp13Result2.TDc9mW : tmp13Result2.pvcruO),
      onPress: function handleSubmit() {
        return obj(...arguments);
      },
      disabled: !tmp40,
      loading: first4,
      variant: "primary",
      size: "lg",
    };
    items11 = [closure_11(Button, obj27)];
    const obj28 = {
      text: intl10.string(tmp2(tmp3[15]).t["ETE/oC"]),
      onPress() {
        return stackNavigation.goBack();
      },
      disabled: first4,
      variant: "secondary",
      size: "lg",
    };
    const Button2 = tmp2(tmp3[30]).Button;
    intl10 = tmp2(tmp3[15]).intl;
    items11[1] = closure_11(Button2, obj28);
    items10[1] = closure_11(SafeAreaPaddingView, obj26);
    tmp42Result = tmp42(tmp43, obj5);
  }
  return tmp42Result;
}
