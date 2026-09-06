// discord_app/modules/parent_tools/native/ScheduleDowntimeScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef2396 from "../FamilyCenter.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import FamilyCenterRestrictedHoursUtils from "../FamilyCenterRestrictedHoursUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function OverlappingSchedulesWarning(conflictingEntries) {
  conflictingEntries = conflictingEntries.conflictingEntries;
  let tmp = null;
  if (0 !== conflictingEntries.length) {
    let obj = { messageType: native.HelpMessageTypes.WARNING, borderRadius: nativeDefault.radii.md, children: null };
    obj = { spacing: 8, children: null };
    obj = { variant: "text-sm/medium", children: null };
    const intl = util.intl;
    obj.children = intl.string(_modDef2396["26A0Df"]);
    const items = [closure_1_11(Text_Text.Text, obj)];
    const obj1 = {
      spacing: 4,
      children: conflictingEntries.map((dayLabel) => {
        dayLabel = dayLabel.dayLabel;
        return closure_1_11(
          require("Text/Text").Text,
          { variant: "text-sm/medium", children: "" + dayLabel + "  " + dayLabel.timeRange },
          dayLabel,
        );
      }),
    };
    items[1] = closure_1_11(Stack_Stack.Stack, obj1);
    obj.children = items;
    obj.children = closure_1_12(Stack_Stack.Stack, obj);
    tmp = closure_1_11(native.HelpMessage, obj);
  }
  return tmp;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1 },
  scrollContent: null,
  section: null,
  sectionHeader: null,
  daysContainer: null,
  dayButton: null,
  dayButtonSelected: null,
  overlapWarningContent: null,
  footer: null,
};
createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_24,
};
createStyles.scrollContent = createStyles;
createStyles.section = { gap: nativeDefault.space.PX_8 };
let obj1 = { gap: nativeDefault.space.PX_8 };
createStyles.sectionHeader = { gap: nativeDefault.space.PX_4 };
let obj2 = { gap: nativeDefault.space.PX_4 };
createStyles.daysContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles.dayButton = {
  flex: 1,
  aspectRatio: 1,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  borderWidth: 1,
  borderColor: "transparent",
};
createStyles.dayButtonSelected = { backgroundColor: "rgba(88, 101, 242, 0.16)", borderColor: "rgba(88, 101, 242, 1)" };
let obj4 = {
  flex: 1,
  aspectRatio: 1,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  borderWidth: 1,
  borderColor: "transparent",
};
createStyles.overlapWarningContent = { marginTop: nativeDefault.space.PX_24 };
let obj5 = { marginTop: nativeDefault.space.PX_24 };
createStyles.footer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/ScheduleDowntimeScreen.tsx");

export default function ScheduleDowntimeScreen() {
  closure_20 = async function _handleSubmit() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null != teenId) {
            closure_2_17(true);
            c3 = 1;
            const obj1 = { label: "", start_time: null, end_time: null, days: null, enabled: null };
            let obj3 = tmp3(tmp36[19]);
            obj1.start_time = obj3.toTimeProto(first1);
            let obj4 = tmp3(tmp36[19]);
            obj1.end_time = obj4.toTimeProto(first2);
            const _Array = Array;
            obj1.days = Array.from(first3);
            obj1.enabled = enabled;
            if (timestampProducer) {
              let ruleId;
              if (rule != null) {
                ruleId = rule.ruleId;
              }
              if (null != ruleId) {
                let tmp27Result = tmp3(tmp36[22]);
                c1 = 3;
                c4 = 1;
                const obj2 = {
                  value: tmp27Result.updateRestrictedScheduleRule(teenId, rule.ruleId, obj1),
                  done: false,
                };
                return obj2;
              }
            }
            tmp27Result = tmp3(tmp36[22]);
            c1 = 2;
            c4 = 1;
            obj3 = { value: tmp27Result.addRestrictedScheduleRule(teenId, obj1), done: false };
            return obj3;
          } else {
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_17(false);
          throw tmp36;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
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
        c3 = 0;
        closure_128_17(false);
        c4 = 3;
        obj4 = { value, done: true };
        return obj4;
      } catch (tmp36) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp36;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  _require = tmp;
  let stringResult = rule;
  let obj = require("useNavigation");
  const stackNavigation = obj.useStackNavigation();
  let obj1 = require("useSettingNavigationRoute");
  const params = obj1.useSettingNavigationRoute().params;
  rule = undefined;
  if (params != null) {
    rule = params.rule;
  }
  let obj2 = teenId;
  asyncGeneratorStep = teenId.useMemo(() => closure_0(rule[19]).getShortDayLabels("narrow"), []);
  const memo = teenId.useMemo(() => closure_0(rule[19]).getShortDayLabels("short"), []);
  teenId = undefined;
  if (params != null) {
    teenId = params.teenId;
  }
  closure_6 = tmp8;
  let flag;
  if (rule != null) {
    flag = rule.enabled;
  }
  if (flag == null) {
    flag = true;
  }
  const tmp10 = memo(obj2.useState(flag), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  let tmp2Result = tmp2(stringResult[20]);
  let items = [stateFromStores];
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    if (null == teenId) {
      let items = [];
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
  if (rule != null) {
    startTime = rule.startTime;
  }
  let tmp16 = null;
  if (null != startTime) {
    let time = { hours: rule.startTime.hours, minutes: null, seconds: 0, nanos: 0 };
    let num = rule.startTime.minutes;
    if (num == null) {
      num = 0;
    }
    time.minutes = num;
    tmp16 = time;
  }
  let tmp9Result = tmp9(
    stackNavigation(stringResult[21])({ initial: tmp16, defaultValue: { hours: 22, minutes: 0 } }),
    2,
  );
  const first1 = tmp9Result[0];
  closure_11 = tmp9Result[1];
  let endTime;
  let tmp13Result = tmp13(stringResult[21]);
  if (rule != null) {
    endTime = rule.endTime;
  }
  let tmp21 = null;
  if (null != endTime) {
    const time1 = { hours: rule.endTime.hours, minutes: null, seconds: 0, nanos: 0 };
    let num2 = rule.endTime.minutes;
    if (num2 == null) {
      num2 = 0;
    }
    time1.minutes = num2;
    tmp21 = time1;
  }
  tmp9Result = tmp9(tmp13Result({ initial: tmp21, defaultValue: { hours: 7, minutes: 0 } }), 2);
  const first2 = tmp9Result[0];
  closure_13 = tmp9Result[1];
  let days;
  if (rule != null) {
    days = rule.days;
  }
  const tmp14 = stackNavigation(stringResult[21]);
  const tmp9Result1 = memo(obj2.useState(new Set(days)), 2);
  const first3 = tmp9Result1[0];
  closure_15 = tmp9Result1[1];
  const tmp9Result2 = memo(obj2.useState(false), 2);
  const first4 = tmp9Result2[0];
  closure_17 = tmp9Result2[1];
  const items1 = [null != rule, ,];
  let ruleId;
  if (rule != null) {
    ruleId = rule.ruleId;
  }
  items1[1] = ruleId;
  items1[2] = stateFromStores;
  const memo1 = obj2.useMemo(() => {
    if (closure_6) {
      let ruleId;
      if (rule != null) {
        ruleId = rule.ruleId;
      }
      if (null != ruleId) {
        let found = stateFromStores.filter((ruleId) => ruleId.ruleId !== ruleId.ruleId);
      }
      return found;
    }
    found = stateFromStores;
  }, items1);
  const items2 = [memo, memo1, first3];
  const memo2 = obj2.useMemo(
    () => FamilyCenterRestrictedHoursUtils.computeOverlappingInfo(first3, memo1, memo),
    items2,
  );
  const items3 = [teenId, ,];
  let ruleId1;
  let set = new Set(days);
  if (rule != null) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  const callback = obj2.useCallback(
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              if (null != teenId) {
                let ruleId;
                if (rule != null) {
                  ruleId = rule.ruleId;
                }
                if (null != ruleId) {
                  closure_17(true);
                  c4 = 1;
                  let obj1 = closure_0(c2[22]);
                  c2 = 2;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.deleteRestrictedScheduleRule(teenId, rule.ruleId);
                  return obj1;
                }
              }
              c5 = 3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_17(false);
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
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
          c4 = 0;
          closure_129_17(false);
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp35) {
          closure_3 = tmp35;
          if (tmp4 === c4) {
            c5 = tmp2;
            throw tmp35;
          } else {
            c2 = tmp;
          }
        }
      }
    }),
    items3,
  );
  const items4 = [stackNavigation, null != rule, callback, first4];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (closure_6) {
      let obj = {
        headerRight() {
          let obj = {
            onPress,
            accessibilityRole: "button",
            accessibilityLabel: null,
            hitSlop: 8,
            disabled: null,
            children: null,
          };
          const intl = closure_0(rule[15]).intl;
          obj.accessibilityLabel = intl.string(closure_0(rule[15]).t.oyYWHE);
          obj.disabled = disabled;
          obj = { color: stackNavigation(rule[11]).colors.ICON_FEEDBACK_CRITICAL, size: "md" };
          obj.children = closure_11(closure_0(rule[23]).TrashIcon, obj);
          return closure_11(first, obj);
        },
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  tmp2Result = tmp2(stringResult[19]);
  const timeToMinutesResult = tmp2Result.timeToMinutes(first1);
  const tmp33 = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            if (null != teenId) {
              let ruleId;
              if (rule != null) {
                ruleId = rule.ruleId;
              }
              if (null != ruleId) {
                closure_17(true);
                c4 = 1;
                let obj1 = closure_0(c2[22]);
                c2 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.deleteRestrictedScheduleRule(teenId, rule.ruleId);
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_17(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
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
        c4 = 0;
        closure_129_17(false);
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp35) {
        closure_3 = tmp35;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp35;
        } else {
          c2 = tmp;
        }
      }
    }
  });
  const timeToMinutesResult1 = require("FamilyCenterRestrictedHoursUtils").timeToMinutes(first2);
  obj = { startTime: null, endTime: null, timeHook: null };
  const tmp2Result1 = require("FamilyCenterRestrictedHoursUtils");
  obj.startTime = require("FamilyCenterRestrictedHoursUtils").formatTime(first1);
  const tmp2Result2 = require("FamilyCenterRestrictedHoursUtils");
  obj.endTime = require("FamilyCenterRestrictedHoursUtils").formatTime(first2);
  obj.timeHook = function timeHook(children, arg1) {
    return closure_11(closure_0(rule[14]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
  };
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = tmp2(stringResult[15]).intl;
    let formatResult = intl2.format(tmp13(stringResult[16]).R87Y2K, obj);
  } else {
    let intl = tmp2(stringResult[15]).intl;
    formatResult = intl.format(tmp13(stringResult[16]).vX7xid, obj);
  }
  let tmp40 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !first4;
  if (null == teenId) {
    return null;
  } else {
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.scrollContent, children: null };
    obj2 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(stringResult[15]).intl;
    obj2.children = intl3.string(tmp13(stringResult[16]).AcJ4ke);
    const items5 = [closure_11(tmp2(stringResult[14]).Text, obj2), , ,];
    let tmp43Result = tmp8;
    if (tmp8) {
      let obj3 = { hasIcons: false, children: null };
      let obj4 = { label: null, value: null, onValueChange: null };
      const intl4 = tmp2(stringResult[15]).intl;
      obj4.label = intl4.string(tmp13(stringResult[16])["30Owsd"]);
      obj4.value = value;
      obj4.onValueChange = function handleEnabledChange() {
        closure_8((arg0) => !arg0);
      };
      obj3.children = tmp43(tmp2(stringResult[25]).TableSwitchRow, obj4);
      tmp43Result = tmp43(tmp2(stringResult[24]).TableRowGroup, obj3);
    }
    items5[1] = tmp43Result;
    const obj5 = { style: tmp.section, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl5 = tmp2(stringResult[15]).intl;
    obj6.children = intl5.string(tmp13(stringResult[16])["37z4a2"]);
    const items6 = [closure_11(tmp2(stringResult[14]).Text, obj6)];
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl6 = tmp2(stringResult[15]).intl;
    obj8.label = intl6.string(tmp13(stringResult[16]).DsXytO);
    const obj9 = { variant: "text-md/normal", children: tmp2(stringResult[19]).formatTime(first1) };
    obj8.trailing = closure_11(tmp2(stringResult[14]).Text, obj9);
    obj8.onPress = function handleStartTimePress() {
      const intl = util.intl;
      const f116116 = (first1) => {
        closure_1_11(first1);
        const result = (closure_0(rule[19]).timeToMinutes(first1) + 540) % 1440;
        const time = { hours: Math.floor(result / 60), minutes: result % 60 };
        closure_1_13(time);
      };
      const obj = { title: intl.string(_modDef2396["8bLRt0"]), mode: "time", startDate: null, onSubmit: null };
      const stringResult = intl.string(_modDef2396["8bLRt0"]);
      const tmp2 = asyncRequireImpl(9717, dependencyMap.paths);
      obj.startDate = new Date(2025, 0, 1, first1.hours, first1.minutes, 0, 0);
      obj.onSubmit = function onSubmit(hours) {
        const time = { hours: hours.hours(), minutes: hours.minutes() };
        return closure_0(time);
      };
      obj.openLazy(tmp2, "ScheduleDowntimeStartTimePicker", obj);
    };
    const items7 = [closure_11(tmp2(stringResult[26]).TableRow, obj8)];
    const obj10 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl7 = tmp2(stringResult[15]).intl;
    obj10.label = intl7.string(tmp13(stringResult[16])["5SHDP6"]);
    const obj11 = { variant: "text-md/normal", children: null };
    const tmp2Result4 = tmp2(stringResult[19]);
    const tmp44 = closure_8;
    obj11.children = tmp2(stringResult[19]).formatTime(first2);
    obj10.trailing = closure_11(tmp2(stringResult[14]).Text, obj11);
    obj10.onPress = function handleEndTimePress() {
      const intl = util.intl;
      closure_0 = closure_13;
      const obj = { title: intl.string(_modDef2396["+JkWJV"]), mode: "time", startDate: null, onSubmit: null };
      const stringResult = intl.string(_modDef2396["+JkWJV"]);
      const tmp2 = asyncRequireImpl(9717, dependencyMap.paths);
      obj.startDate = new Date(2025, 0, 1, first2.hours, first2.minutes, 0, 0);
      obj.onSubmit = function onSubmit(hours) {
        const time = { hours: hours.hours(), minutes: hours.minutes() };
        return closure_0(time);
      };
      obj.openLazy(tmp2, "ScheduleDowntimeEndTimePicker", obj);
    };
    items7[1] = closure_11(tmp2(stringResult[26]).TableRow, obj10);
    obj7.children = items7;
    items6[1] = first2(tmp2(stringResult[24]).TableRowGroup, obj7);
    obj5.children = items6;
    items5[2] = first2(closure_6, obj5);
    const obj12 = { style: tmp.section, children: null };
    const obj13 = { style: tmp.sectionHeader, children: null };
    const obj14 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl8 = tmp2(stringResult[15]).intl;
    obj14.children = intl8.string(tmp13(stringResult[16]).HaV0Sg);
    const items8 = [closure_11(tmp2(stringResult[14]).Text, obj14)];
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: formatResult };
    items8[1] = closure_11(tmp2(stringResult[14]).Text, obj15);
    obj13.children = items8;
    const items9 = [first2(closure_6, obj13), ,];
    const obj16 = { style: tmp.daysContainer, children: null };
    const DAYS_ORDERED = tmp2(stringResult[19]).DAYS_ORDERED;
    obj16.children = DAYS_ORDERED.map((item, index) => {
      closure_0 = item;
      const hasItem = first3.has(item);
      const items = [closure_0.dayButton];
      let dayButtonSelected = hasItem;
      if (hasItem) {
        dayButtonSelected = closure_0.dayButtonSelected;
      }
      let obj = {
        style: items,
        onPress() {
          closure_15((items) => {
            const set = new Set(items);
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
        accessibilityLabel: dependencyMap[index],
        children: null,
      };
      items[1] = dayButtonSelected;
      let str = "text-muted";
      if (hasItem) {
        str = "control-secondary-text-default";
      }
      obj = { variant: "text-sm/semibold", color: str, children: dependencyMap[index] };
      obj.children = closure_11(closure_0(rule[14]).Text, obj);
      return closure_11(first, obj, item);
    });
    items9[1] = closure_11(closure_6, obj16);
    tmp43Result = memo2.conflictingEntries.length > 0;
    if (tmp43Result) {
      const obj17 = { style: tmp.overlapWarningContent, children: null };
      const obj18 = { conflictingEntries: memo2.conflictingEntries };
      obj17.children = tmp43(first3, obj18);
      tmp43Result = tmp43(tmp42, obj17);
    }
    const obj19 = { children: null };
    items9[2] = tmp43Result;
    obj12.children = items9;
    items5[3] = first2(closure_6, obj12);
    obj1.children = items5;
    obj19.children = first2(closure_6, obj1);
    const items10 = [closure_11(tmp44, obj19)];
    let obj20 = { style: tmp.footer, children: null };
    let Button = tmp2(stringResult[28]).Button;
    let intl9 = tmp2(stringResult[15]).intl;
    let string = intl9.string;
    tmp13Result = tmp13(stringResult[16]);
    const obj21 = { bottom: true, children: null };
    const obj22 = {
      text: string(tmp8 ? tmp13Result.TDc9mW : tmp13Result.pvcruO),
      onPress: function handleSubmit() {
        const self = this;
        const apply = closure_20.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      disabled: null,
      loading: null,
      variant: "primary",
      size: "lg",
    };
    tmp40 = !tmp40;
    obj22.disabled = tmp40;
    obj22.loading = first4;
    const items11 = [closure_11(Button, obj22)];
    const obj23 = { text: null, onPress: null, disabled: null, variant: "secondary", size: "lg" };
    intl9 = tmp2(stringResult[15]).intl;
    string = intl9.string;
    stringResult = string(tmp2(stringResult[15]).t["ETE/oC"]);
    obj23.text = stringResult;
    obj23.onPress = function onPress() {
      return stackNavigation.goBack();
    };
    obj23.disabled = first4;
    Button = tmp43(tmp2(stringResult[28]).Button, obj23);
    items11[1] = Button;
    obj20.children = items11;
    obj20 = tmp41(tmp42, obj20);
    obj21.children = obj20;
    tmp13Result = tmp43(tmp2(stringResult[27]).SafeAreaPaddingView, obj21);
    items10[1] = tmp13Result;
    obj.children = items10;
    first2(closure_6, obj);
    const tmp2Result5 = tmp2(stringResult[19]);
  }
}
