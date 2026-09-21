// === Module 15212: ScheduleDowntimeScreen ===

// Module 15212 (ScheduleDowntimeScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import _modDef2482 from "module_2482" /* 2482 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils" /* 10340 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function OverlappingSchedulesWarning(conflictingEntries) {
  conflictingEntries = conflictingEntries.conflictingEntries;
  let tmp = null;
  if (0 !== conflictingEntries.length) {
    const obj = { messageType: native.HelpMessageTypes.WARNING, borderRadius: nativeDefault.radii.md, children: null };
    const obj2 = { spacing: 8, children: null };
    const obj3 = { variant: "text-sm/medium", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef2482["26A0Df"]);
    const items = [closure_1_11(Text_Text.Text, obj3), ];
    const obj4 = {
      spacing: 4,
      children: conflictingEntries.map((dayLabel) => {
          dayLabel = dayLabel.dayLabel;
          return closure_1_11(require("Text/Text").Text, { variant: "text-sm/medium", children: "" + dayLabel + "  " + dayLabel.timeRange }, dayLabel);
        })
    };
    items[1] = closure_1_11(Stack_Stack.Stack, obj4);
    obj2.children = items;
    obj.children = closure_1_12(Stack_Stack.Stack, obj2);
    tmp = closure_1_11(native.HelpMessage, obj);
  }
  return tmp;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1 }, scrollContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 }, section: null, sectionHeader: null, daysContainer: null, dayButton: null, dayButtonSelected: null, overlapWarningContent: null, footer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeader = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.daysContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.dayButton = { flex: 1, aspectRatio: 1, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderWidth: 1, borderColor: "transparent" };
obj2.dayButtonSelected = { backgroundColor: "rgba(88, 101, 242, 0.16)", borderColor: "rgba(88, 101, 242, 1)" };
let obj7 = { flex: 1, aspectRatio: 1, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderWidth: 1, borderColor: "transparent" };
obj2.overlapWarningContent = { marginTop: nativeDefault.space.PX_24 };
let obj8 = { marginTop: nativeDefault.space.PX_24 };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (null != teenId) {
            closure_2_17(true);
            c3 = 1;
            const obj6 = { label: "", start_time: tmp3(tmp36[19]).toTimeProto(first1), end_time: null, days: null, enabled: null };
            const obj4 = tmp3(tmp36[19]);
            obj6.end_time = tmp3(tmp36[19]).toTimeProto(first2);
            const _Array = Array;
            obj6.days = Array.from(first3);
            obj6.enabled = enabled;
            if (timestampProducer) {
              let ruleId;
              if (rule != null) {
                ruleId = rule.ruleId;
              }
              if (null != ruleId) {
                c1 = 3;
                c4 = 1;
                const obj7 = { value: tmp3(tmp36[22]).updateRestrictedScheduleRule(teenId, rule.ruleId, obj6), done: false };
                return obj7;
              }
            }
            const obj5 = tmp3(tmp36[19]);
            c1 = 2;
            c4 = 1;
            const obj8 = { value: tmp3(tmp36[22]).addRestrictedScheduleRule(teenId, obj6), done: false };
            return obj8;
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
            const obj = { value, done: true };
            return obj;
          }
          closure_128_1.goBack();
          c3 = 0;
          closure_128_17(false);
        }
        c3 = 0;
        closure_128_17(false);
        c4 = 3;
        const obj9 = { value, done: true };
        return obj9;
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
  const stackNavigation = require("useNavigation").useStackNavigation();
  let obj = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  rule = undefined;
  if (params != null) {
    rule = params.rule;
  }
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
  const tmp10 = memo(teenId.useState(flag), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  let obj2 = require("useSettingNavigationRoute");
  let items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
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
  const tmp2Result = require("useStateFromStores");
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
  const tmp9Result = memo(stackNavigation(stringResult[21])({ initial: tmp16, defaultValue: { hours: 22, minutes: 0 } }), 2);
  const first1 = tmp9Result[0];
  closure_11 = tmp9Result[1];
  let endTime;
  const tmp14 = stackNavigation(stringResult[21]);
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
  const tmp9Result4 = memo(stackNavigation(stringResult[21])({ initial: tmp21, defaultValue: { hours: 7, minutes: 0 } }), 2);
  const first2 = tmp9Result4[0];
  closure_13 = tmp9Result4[1];
  let days;
  if (rule != null) {
    days = rule.days;
  }
  const tmp13Result = stackNavigation(stringResult[21]);
  const tmp9Result5 = memo(teenId.useState(new Set(days)), 2);
  const first3 = tmp9Result5[0];
  closure_15 = tmp9Result5[1];
  const tmp9Result6 = memo(teenId.useState(false), 2);
  const first4 = tmp9Result6[0];
  closure_17 = tmp9Result6[1];
  const items1 = [null != rule, , ];
  let ruleId;
  if (rule != null) {
    ruleId = rule.ruleId;
  }
  items1[1] = ruleId;
  items1[2] = stateFromStores;
  const memo1 = obj3.useMemo(() => {
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
  const memo2 = obj3.useMemo(() => FamilyCenterRestrictedHoursUtils.computeOverlappingInfo(first3, memo1, memo), items2);
  const items3 = [teenId, , ];
  let ruleId1;
  let set = new Set(days);
  if (rule != null) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  const callback = obj3.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
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
                c2 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(c2[22]).deleteRestrictedScheduleRule(teenId, rule.ruleId), done: false };
                return obj5;
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
        const obj = { value, done: true };
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
  }), items3);
  const items4 = [stackNavigation, null != rule, callback, first4];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (closure_6) {
      let obj = {
        headerRight() {
            const obj = { onPress, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, children: null };
            const intl = closure_0(rule[15]).intl;
            obj.accessibilityLabel = intl.string(closure_0(rule[15]).t.oyYWHE);
            obj.disabled = disabled;
            obj.children = closure_11(closure_0(rule[23]).TrashIcon, { color: stackNavigation(rule[11]).colors.ICON_FEEDBACK_CRITICAL, size: "md" });
            return closure_11(first, obj);
          }
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  const tmp33 = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
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
                c2 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(c2[22]).deleteRestrictedScheduleRule(teenId, rule.ruleId), done: false };
                return obj5;
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
        const obj = { value, done: true };
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
  const timeToMinutesResult = require("FamilyCenterRestrictedHoursUtils").timeToMinutes(first1);
  const tmp2Result7 = require("FamilyCenterRestrictedHoursUtils");
  const timeToMinutesResult1 = require("FamilyCenterRestrictedHoursUtils").timeToMinutes(first2);
  let obj4 = { startTime: null, endTime: null, timeHook: null };
  const tmp2Result8 = require("FamilyCenterRestrictedHoursUtils");
  obj4.startTime = require("FamilyCenterRestrictedHoursUtils").formatTime(first1);
  const tmp2Result9 = require("FamilyCenterRestrictedHoursUtils");
  obj4.endTime = require("FamilyCenterRestrictedHoursUtils").formatTime(first2);
  obj4.timeHook = function timeHook(children, arg1) {
    return closure_11(closure_0(rule[14]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
  };
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = tmp2(stringResult[15]).intl;
    let formatResult = intl2.format(tmp13(stringResult[16]).R87Y2K, obj4);
  } else {
    let intl = tmp2(stringResult[15]).intl;
    formatResult = intl.format(tmp13(stringResult[16]).vX7xid, obj4);
  }
  let tmp40 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !first4;
  if (null == teenId) {
    return null;
  } else {
    let obj5 = { style: tmp.container, children: null };
    let obj6 = { style: tmp.scrollContent, children: null };
    let obj7 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(stringResult[15]).intl;
    obj7.children = intl3.string(tmp13(stringResult[16]).AcJ4ke);
    const items5 = [closure_11(tmp2(stringResult[14]).Text, obj7), , , ];
    let tmp43Result = tmp8;
    if (tmp8) {
      let obj8 = { hasIcons: false, children: null };
      let obj9 = { label: null, value: null, onValueChange: null };
      const intl4 = tmp2(stringResult[15]).intl;
      obj9.label = intl4.string(tmp13(stringResult[16])["30Owsd"]);
      obj9.value = value;
      obj9.onValueChange = function handleEnabledChange() {
        closure_8((arg0) => !arg0);
      };
      obj8.children = tmp43(tmp2(stringResult[25]).TableSwitchRow, obj9);
      tmp43Result = tmp43(tmp2(stringResult[24]).TableRowGroup, obj8);
    }
    items5[1] = tmp43Result;
    const obj10 = { style: tmp.section, children: null };
    const obj11 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl5 = tmp2(stringResult[15]).intl;
    obj11.children = intl5.string(tmp13(stringResult[16])["37z4a2"]);
    const items6 = [closure_11(tmp2(stringResult[14]).Text, obj11), ];
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl6 = tmp2(stringResult[15]).intl;
    obj13.label = intl6.string(tmp13(stringResult[16]).DsXytO);
    const obj14 = { variant: "text-md/normal", children: tmp2(stringResult[19]).formatTime(first1) };
    obj13.trailing = closure_11(tmp2(stringResult[14]).Text, obj14);
    obj13.onPress = function handleStartTimePress() {
      const intl = util.intl;
      const f118597 = (first1) => {
        closure_1_11(first1);
        const result = (closure_0(rule[19]).timeToMinutes(first1) + 540) % 1440;
        const time = { hours: Math.floor(result / 60), minutes: result % 60 };
        closure_1_13(time);
      };
      const stringResult = intl.string(_modDef2482["8bLRt0"]);
      const obj2 = { title: stringResult, mode: "time", startDate: null, onSubmit: null };
      const obj = ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequireImpl(9802, dependencyMap.paths);
      obj2.startDate = new Date(2025, 0, 1, first1.hours, first1.minutes, 0, 0);
      obj2.onSubmit = function onSubmit(hours) {
        const time = { hours: hours.hours(), minutes: hours.minutes() };
        return closure_0(time);
      };
      obj.openLazy(tmp2, "ScheduleDowntimeStartTimePicker", obj2);
    };
    const items7 = [closure_11(tmp2(stringResult[26]).TableRow, obj13), ];
    const obj15 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl7 = tmp2(stringResult[15]).intl;
    obj15.label = intl7.string(tmp13(stringResult[16])["5SHDP6"]);
    const obj16 = { variant: "text-md/normal", children: null };
    const tmp2Result11 = tmp2(stringResult[19]);
    const tmp44 = closure_8;
    obj16.children = tmp2(stringResult[19]).formatTime(first2);
    obj15.trailing = closure_11(tmp2(stringResult[14]).Text, obj16);
    obj15.onPress = function handleEndTimePress() {
      const intl = util.intl;
      closure_0 = closure_13;
      const stringResult = intl.string(_modDef2482["+JkWJV"]);
      const obj2 = { title: stringResult, mode: "time", startDate: null, onSubmit: null };
      const obj = ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequireImpl(9802, dependencyMap.paths);
      obj2.startDate = new Date(2025, 0, 1, first2.hours, first2.minutes, 0, 0);
      obj2.onSubmit = function onSubmit(hours) {
        const time = { hours: hours.hours(), minutes: hours.minutes() };
        return closure_0(time);
      };
      obj.openLazy(tmp2, "ScheduleDowntimeEndTimePicker", obj2);
    };
    items7[1] = closure_11(tmp2(stringResult[26]).TableRow, obj15);
    obj12.children = items7;
    items6[1] = first2(tmp2(stringResult[24]).TableRowGroup, obj12);
    obj10.children = items6;
    items5[2] = first2(closure_6, obj10);
    const obj17 = { style: tmp.section, children: null };
    const obj18 = { style: tmp.sectionHeader, children: null };
    const obj19 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl8 = tmp2(stringResult[15]).intl;
    obj19.children = intl8.string(tmp13(stringResult[16]).HaV0Sg);
    const items8 = [closure_11(tmp2(stringResult[14]).Text, obj19), ];
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: formatResult };
    items8[1] = closure_11(tmp2(stringResult[14]).Text, obj20);
    obj18.children = items8;
    const items9 = [first2(closure_6, obj18), , ];
    const obj21 = { style: tmp.daysContainer, children: null };
    const DAYS_ORDERED = tmp2(stringResult[19]).DAYS_ORDERED;
    obj21.children = DAYS_ORDERED.map((item, index) => {
      closure_0 = item;
      const hasItem = first3.has(item);
      const items = [closure_0.dayButton, ];
      let dayButtonSelected = hasItem;
      if (hasItem) {
        dayButtonSelected = closure_0.dayButtonSelected;
      }
      const obj = {
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
        children: null
      };
      items[1] = dayButtonSelected;
      let str = "text-muted";
      if (hasItem) {
        str = "control-secondary-text-default";
      }
      obj.children = closure_11(closure_0(rule[14]).Text, { variant: "text-sm/semibold", color: str, children: dependencyMap[index] });
      return closure_11(first, obj, item);
    });
    items9[1] = closure_11(closure_6, obj21);
    let tmp43Result2 = memo2.conflictingEntries.length > 0;
    if (tmp43Result2) {
      const obj22 = { style: tmp.overlapWarningContent, children: null };
      const obj23 = { conflictingEntries: memo2.conflictingEntries };
      obj22.children = tmp43(first3, obj23);
      tmp43Result2 = tmp43(tmp42, obj22);
    }
    const obj24 = { children: null };
    items9[2] = tmp43Result2;
    obj17.children = items9;
    items5[3] = first2(closure_6, obj17);
    obj6.children = items5;
    obj24.children = first2(closure_6, obj6);
    const items10 = [closure_11(tmp44, obj24), ];
    let obj25 = { style: tmp.footer, children: null };
    let Button = tmp2(stringResult[28]).Button;
    let intl9 = tmp2(stringResult[15]).intl;
    let string = intl9.string;
    let tmp13Result2 = tmp13(stringResult[16]);
    const obj26 = { bottom: true, children: null };
    const obj27 = {
      text: string(tmp8 ? tmp13Result2.TDc9mW : tmp13Result2.pvcruO),
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
      size: "lg"
    };
    tmp40 = !tmp40;
    obj27.disabled = tmp40;
    obj27.loading = first4;
    const items11 = [closure_11(Button, obj27), ];
    const obj28 = { text: null, onPress: null, disabled: null, variant: "secondary", size: "lg" };
    intl9 = tmp2(stringResult[15]).intl;
    string = intl9.string;
    stringResult = string(tmp2(stringResult[15]).t["ETE/oC"]);
    obj28.text = stringResult;
    obj28.onPress = function onPress() {
      return stackNavigation.goBack();
    };
    obj28.disabled = first4;
    Button = tmp43(tmp2(stringResult[28]).Button, obj28);
    items11[1] = Button;
    obj25.children = items11;
    obj25 = tmp41(tmp42, obj25);
    obj26.children = obj25;
    tmp13Result2 = tmp43(tmp2(stringResult[27]).SafeAreaPaddingView, obj26);
    items10[1] = tmp13Result2;
    obj5.children = items10;
    first2(closure_6, obj5);
    const tmp2Result12 = tmp2(stringResult[19]);
  }
};