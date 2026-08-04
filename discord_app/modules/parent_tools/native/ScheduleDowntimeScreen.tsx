// discord_app/modules/parent_tools/native/ScheduleDowntimeScreen.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import setsEqual from "setsEqual";
import get_ActivityIndicator from "useNavigation";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserSettingsSections } from "ME";
import jsxProd from "useTimeValue";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function OverlappingSchedulesWarning(conflictingEntries) {
  conflictingEntries = conflictingEntries.conflictingEntries;
  let tmp = null;
  if (0 !== conflictingEntries.length) {
    let obj = { messageType: null, borderRadius: null, children: null };
    obj[0] = require(1297) /* Button */.HelpMessageTypes.WARNING;
    obj[1] = importDefault(712).radii.md;
    obj = { spacing: 8, children: null };
    obj = { variant: "text-sm/medium", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(importDefault(2225)["26A0Df"]);
    const items = [callback2(require(4189) /* Text */.Text, obj), ];
    const obj1 = { spacing: 4, children: null };
    obj1[1] = conflictingEntries.map((dayLabel) => {
      dayLabel = dayLabel.dayLabel;
      const obj = { variant: "text-sm/medium", children: null };
      obj[1] = "" + dayLabel + "  " + dayLabel.timeRange;
      return callback2(callback(table[14]).Text, obj, dayLabel);
    });
    items[1] = callback2(require(4602) /* Stack */.Stack, obj1);
    obj[1] = items;
    obj[2] = callback3(require(4602) /* Stack */.Stack, obj);
    tmp = callback2(require(1297) /* Button */.HelpMessage, obj);
  }
  return tmp;
}
({ View: closure_6, Pressable: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { flex: 1 }, scrollContent: null, section: null, sectionHeader: null, daysContainer: null, dayButton: null, dayButtonSelected: null, overlapWarningContent: null, footer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_24, gap: require("Themes").space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { gap: require("Themes").space.PX_8 };
let obj1 = { gap: require("Themes").space.PX_8 };
createCacheKey[3] = { gap: require("Themes").space.PX_4 };
let obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[4] = { flexDirection: "row", gap: require("Themes").space.PX_8 };
let obj3 = { flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey[5] = { flex: 1, aspectRatio: 1, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderWidth: 1, borderColor: "transparent" };
createCacheKey[6] = { backgroundColor: "rgba(88, 101, 242, 0.16)", borderColor: "rgba(88, 101, 242, 1)" };
let obj4 = { flex: 1, aspectRatio: 1, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderWidth: 1, borderColor: "transparent" };
createCacheKey[7] = { marginTop: require("Themes").space.PX_24 };
let obj5 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[8] = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
let result = require("noop").fileFinishedImporting("modules/parent_tools/native/ScheduleDowntimeScreen.tsx");

export default function ScheduleDowntimeScreen() {
  function _handleSubmit() {
    const self = this;
    const tmp = dependencyMap(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === navigation) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp3;
              if (null != outer1_5) {
                outer1_17(true);
                let c3 = 1;
                const obj1 = { label: "", start_time: null, end_time: null, days: null, enabled: null };
                let obj3 = outer1_0(outer1_2[19]);
                obj1[1] = obj3.toTimeProto(outer1_10);
                let obj4 = outer1_0(outer1_2[19]);
                obj1[2] = obj4.toTimeProto(outer1_12);
                const _Array = Array;
                obj1[3] = Array.from(outer1_14);
                obj1[4] = outer1_7;
                if (outer1_6) {
                  let ruleId;
                  if (outer1_2 != null) {
                    ruleId = tmp34.ruleId;
                  }
                  if (null != ruleId) {
                    let tmp27Result = tmp27(tmp28[22]);
                    navigation = 3;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = tmp27Result.updateRestrictedScheduleRule(tmp46, tmp34.ruleId, obj1);
                    return obj2;
                  }
                }
                tmp27Result = tmp27(tmp28[22]);
                navigation = 2;
                c4 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = tmp27Result.addRestrictedScheduleRule(tmp46, obj1);
                return obj3;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback(false);
            throw closure_2;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              callback(false);
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            navigation.goBack();
            c3 = 0;
            callback(false);
          }
          c3 = 0;
          callback(false);
          c4 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } catch (tmp36) {
          closure_2 = tmp36;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp36;
          } else {
            navigation = tmp;
          }
        }
      }
    });
    const _handleSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  const require = tmp;
  let stringResult = rule;
  let obj = require(rule[17]);
  const stackNavigation = obj.useStackNavigation();
  let obj1 = require(rule[18]);
  const params = obj1.useSettingNavigationRoute().params;
  rule = undefined;
  if (params != null) {
    rule = params.rule;
  }
  let obj2 = teenId;
  let callback = teenId.useMemo(() => tmp(rule[19]).getShortDayLabels("narrow"), []);
  const memo = teenId.useMemo(() => tmp(rule[19]).getShortDayLabels("short"), []);
  teenId = undefined;
  if (params != null) {
    teenId = params.teenId;
  }
  let closure_6 = tmp8;
  let flag;
  if (rule != null) {
    flag = rule.enabled;
  }
  if (flag == null) {
    flag = true;
  }
  const tmp10 = memo(obj2.useState(flag), 2);
  const first = tmp10[0];
  let closure_8 = tmp10[1];
  let tmp2Result = tmp2(stringResult[20]);
  let items = [stateFromStores];
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    if (null == teenId) {
      let items = [];
    } else {
      const user = stateFromStores.getUser(tmp);
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
    obj = { hours: null, minutes: null, seconds: 0, nanos: 0 };
    obj[0] = rule.startTime.hours;
    let num = rule.startTime.minutes;
    if (num == null) {
      num = 0;
    }
    obj[1] = num;
    tmp16 = obj;
  }
  let tmp9Result = tmp9(stackNavigation(stringResult[21])({ initial: tmp16, defaultValue: { hours: 22, minutes: 0 } }), 2);
  const first1 = tmp9Result[0];
  const callback2 = tmp9Result[1];
  let endTime;
  let tmp13Result = tmp13(stringResult[21]);
  if (rule != null) {
    endTime = rule.endTime;
  }
  let tmp21 = null;
  if (null != endTime) {
    obj = { hours: null, minutes: null, seconds: 0, nanos: 0 };
    obj[0] = rule.endTime.hours;
    let num2 = rule.endTime.minutes;
    if (num2 == null) {
      num2 = 0;
    }
    obj[1] = num2;
    tmp21 = obj;
  }
  tmp9Result = tmp9(tmp13Result({ initial: tmp21, defaultValue: { hours: 7, minutes: 0 } }), 2);
  const first2 = tmp9Result[0];
  createCacheKey = tmp9Result[1];
  let days;
  if (rule != null) {
    days = rule.days;
  }
  const tmp14 = stackNavigation(stringResult[21]);
  const tmp9Result1 = memo(obj2.useState(new Set(days)), 2);
  const first3 = tmp9Result1[0];
  let closure_15 = tmp9Result1[1];
  const tmp9Result2 = memo(obj2.useState(false), 2);
  const first4 = tmp9Result2[0];
  let closure_17 = tmp9Result2[1];
  const items1 = [null != rule, , ];
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
  const memo2 = obj2.useMemo(() => tmp(rule[19]).computeOverlappingInfo(first3, memo1, memo), items2);
  const items3 = [teenId, , ];
  let ruleId1;
  let set = new Set(days);
  if (rule != null) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  callback = obj2.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const navigation = tmp3;
            if (null != c5) {
              let ruleId;
              if (table != null) {
                ruleId = tmp28.ruleId;
              }
              if (null != ruleId) {
                outer1_17(true);
                let c4 = 1;
                let obj1 = outer1_0(table[22]);
                table = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.deleteRestrictedScheduleRule(c5, tmp28.ruleId);
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          outer1_17(false);
          throw ME;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          const user = outer1_9.getUser(c5);
          let rules;
          if (user != null) {
            const restrictedSchedule = user.restrictedSchedule;
            if (restrictedSchedule != null) {
              rules = restrictedSchedule.rules;
            }
          }
          let length = rules;
          if (rules == null) {
            length = [];
          }
          if (0 === length.length) {
            navigation.navigate(outer1_10.FAMILY_CENTER);
          } else {
            navigation.goBack();
          }
          c4 = 0;
          outer1_17(false);
        }
        c4 = 0;
        outer1_17(false);
        c5 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp35) {
        ME = tmp35;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp35;
        } else {
          table = tmp;
        }
      }
    }
  }), items3);
  const items4 = [stackNavigation, null != rule, callback, first4];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (closure_6) {
      let obj = { headerRight: null };
      obj[0] = function headerRight() {
        let obj = { onPress: closure_19, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, disabled: null, children: null };
        const intl = outer1_0(outer1_2[15]).intl;
        obj[2] = intl.string(outer1_0(outer1_2[15]).t.oyYWHE);
        obj[4] = closure_16;
        obj = { color: null, size: "md" };
        obj[0] = outer1_1(outer1_2[11]).colors.ICON_FEEDBACK_CRITICAL;
        obj[5] = outer1_11(outer1_0(outer1_2[23]).TrashIcon, obj);
        return outer1_11(outer1_7, obj);
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  tmp2Result = tmp2(stringResult[19]);
  const timeToMinutesResult = tmp2Result.timeToMinutes(first1);
  const tmp33 = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const navigation = tmp3;
            if (null != c5) {
              let ruleId;
              if (table != null) {
                ruleId = tmp28.ruleId;
              }
              if (null != ruleId) {
                outer1_17(true);
                let c4 = 1;
                let obj1 = outer1_0(table[22]);
                table = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.deleteRestrictedScheduleRule(c5, tmp28.ruleId);
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          outer1_17(false);
          throw ME;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          const user = outer1_9.getUser(c5);
          let rules;
          if (user != null) {
            const restrictedSchedule = user.restrictedSchedule;
            if (restrictedSchedule != null) {
              rules = restrictedSchedule.rules;
            }
          }
          let length = rules;
          if (rules == null) {
            length = [];
          }
          if (0 === length.length) {
            navigation.navigate(outer1_10.FAMILY_CENTER);
          } else {
            navigation.goBack();
          }
          c4 = 0;
          outer1_17(false);
        }
        c4 = 0;
        outer1_17(false);
        c5 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp35) {
        ME = tmp35;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp35;
        } else {
          table = tmp;
        }
      }
    }
  });
  const timeToMinutesResult1 = require(stringResult[19]).timeToMinutes(first2);
  obj1 = { startTime: null, endTime: null, timeHook: null };
  const tmp2Result1 = require(stringResult[19]);
  obj1[0] = require(stringResult[19]).formatTime(first1);
  const tmp2Result2 = require(stringResult[19]);
  obj1[1] = require(stringResult[19]).formatTime(first2);
  obj1[2] = function timeHook(children) {
    return callback2(tmp(rule[14]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
  };
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = tmp2(stringResult[15]).intl;
    let formatResult = intl2.format(tmp13(stringResult[16]).R87Y2K, obj1);
  } else {
    let intl = tmp2(stringResult[15]).intl;
    formatResult = intl.format(tmp13(stringResult[16]).vX7xid, obj1);
  }
  let tmp40 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !first4;
  if (null == teenId) {
    return null;
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.scrollContent;
    let obj4 = { variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(stringResult[15]).intl;
    obj4[2] = intl3.string(tmp13(stringResult[16]).AcJ4ke);
    const items5 = [callback2(tmp2(stringResult[14]).Text, obj4), , , ];
    let tmp43Result = tmp8;
    if (tmp8) {
      const obj5 = { hasIcons: false, children: null };
      const obj6 = { label: null, value: null, onValueChange: null };
      const intl4 = tmp2(stringResult[15]).intl;
      obj6[0] = intl4.string(tmp13(stringResult[16])["30Owsd"]);
      obj6[1] = first;
      obj6[2] = function handleEnabledChange() {
        callback((arg0) => !arg0);
      };
      obj5[1] = tmp43(tmp2(stringResult[25]).TableSwitchRow, obj6);
      tmp43Result = tmp43(tmp2(stringResult[24]).TableRowGroup, obj5);
    }
    items5[1] = tmp43Result;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.section;
    const obj8 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl5 = tmp2(stringResult[15]).intl;
    obj8[2] = intl5.string(tmp13(stringResult[16])["37z4a2"]);
    const items6 = [callback2(tmp2(stringResult[14]).Text, obj8), ];
    const obj9 = { hasIcons: false, children: null };
    const obj10 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl6 = tmp2(stringResult[15]).intl;
    obj10[0] = intl6.string(tmp13(stringResult[16]).DsXytO);
    const obj11 = { variant: "text-md/normal", children: null };
    obj11[1] = tmp2(stringResult[19]).formatTime(first1);
    obj10[1] = callback2(tmp2(stringResult[14]).Text, obj11);
    obj10[3] = function handleStartTimePress() {
      const intl = tmp(rule[15]).intl;
      const f109802 = (first1) => {
        callback(first1);
        let obj = f109802(outer1_2[19]);
        const result = (obj.timeToMinutes(first1) + 540) % 1440;
        obj = { hours: Math.floor(result / 60), minutes: result % 60 };
        callback2(obj);
      };
      let obj = stackNavigation(rule[7]);
      obj = { title: intl.string(stackNavigation(rule[16])["8bLRt0"]), mode: "time", startDate: null, onSubmit: null };
      const stringResult = intl.string(stackNavigation(rule[16])["8bLRt0"]);
      const tmp2 = tmp(rule[9])(rule[8], rule.paths);
      obj[2] = new Date(2025, 0, 1, first1.hours, first1.minutes, 0, 0);
      obj[3] = function onSubmit(hours) {
        return callback({ hours: hours.hours(), minutes: hours.minutes() });
      };
      obj.openLazy(tmp2, "ScheduleDowntimeStartTimePicker", obj);
    };
    const items7 = [callback2(tmp2(stringResult[26]).TableRow, obj10), ];
    const obj12 = { label: null, trailing: null, arrow: true, onPress: null };
    const intl7 = tmp2(stringResult[15]).intl;
    obj12[0] = intl7.string(tmp13(stringResult[16])["5SHDP6"]);
    const obj13 = { variant: "text-md/normal", children: null };
    const tmp2Result4 = tmp2(stringResult[19]);
    const tmp44 = closure_8;
    obj13[1] = tmp2(stringResult[19]).formatTime(first2);
    obj12[1] = callback2(tmp2(stringResult[14]).Text, obj13);
    obj12[3] = function handleEndTimePress() {
      const intl = tmp(rule[15]).intl;
      let obj = stackNavigation(rule[7]);
      obj = { title: intl.string(stackNavigation(rule[16])["+JkWJV"]), mode: "time", startDate: null, onSubmit: null };
      const stringResult = intl.string(stackNavigation(rule[16])["+JkWJV"]);
      const tmp2 = closure_13(rule[9])(rule[8], rule.paths);
      obj[2] = new Date(2025, 0, 1, first2.hours, first2.minutes, 0, 0);
      obj[3] = function onSubmit(hours) {
        return callback({ hours: hours.hours(), minutes: hours.minutes() });
      };
      obj.openLazy(tmp2, "ScheduleDowntimeEndTimePicker", obj);
    };
    items7[1] = callback2(tmp2(stringResult[26]).TableRow, obj12);
    obj9[1] = items7;
    items6[1] = first2(tmp2(stringResult[24]).TableRowGroup, obj9);
    obj7[1] = items6;
    items5[2] = first2(closure_6, obj7);
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.section;
    const obj15 = { style: null, children: null };
    obj15[0] = tmp.sectionHeader;
    const obj16 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    const intl8 = tmp2(stringResult[15]).intl;
    obj16[2] = intl8.string(tmp13(stringResult[16]).HaV0Sg);
    const items8 = [callback2(tmp2(stringResult[14]).Text, obj16), ];
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj17[2] = formatResult;
    items8[1] = callback2(tmp2(stringResult[14]).Text, obj17);
    obj15[1] = items8;
    const items9 = [first2(closure_6, obj15), , ];
    const obj18 = { style: null, children: null };
    obj18[0] = tmp.daysContainer;
    const DAYS_ORDERED = tmp2(stringResult[19]).DAYS_ORDERED;
    obj18[1] = DAYS_ORDERED.map((arg0, arg1) => {
      const hasItem = first3.has(arg0);
      const items = [arg0.dayButton, ];
      let dayButtonSelected = hasItem;
      if (hasItem) {
        dayButtonSelected = tmp.dayButtonSelected;
      }
      let obj = {
        style: items,
        onPress() {
          outer1_15((items) => {
            const set = new Set(items);
            if (set.has(closure_0)) {
              set.delete(tmp);
            } else {
              set.add(tmp);
            }
            return set;
          });
        },
        accessibilityRole: "button",
        accessibilityState: { selected: hasItem },
        accessibilityLabel: dependencyMap[arg1],
        children: null
      };
      items[1] = dayButtonSelected;
      let str = "text-muted";
      if (hasItem) {
        str = "control-secondary-text-default";
      }
      obj = { variant: "text-sm/semibold", color: str, children: dependencyMap[arg1] };
      obj[5] = closure_11(arg0(rule[14]).Text, obj);
      return closure_11(first, obj, arg0);
    });
    items9[1] = callback2(closure_6, obj18);
    tmp43Result = memo2.conflictingEntries.length > 0;
    if (tmp43Result) {
      const obj19 = { style: null, children: null };
      obj19[0] = tmp.overlapWarningContent;
      const obj20 = { conflictingEntries: null };
      obj20[0] = memo2.conflictingEntries;
      obj19[1] = tmp43(first3, obj20);
      tmp43Result = tmp43(tmp42, obj19);
    }
    const obj21 = { children: null };
    items9[2] = tmp43Result;
    obj14[1] = items9;
    items5[3] = first2(closure_6, obj14);
    obj3[1] = items5;
    obj21[0] = first2(closure_6, obj3);
    const items10 = [callback2(tmp44, obj21), ];
    let obj22 = { style: null, children: null };
    obj22[0] = tmp.footer;
    let Button = tmp2(stringResult[28]).Button;
    let intl9 = tmp2(stringResult[15]).intl;
    let string = intl9.string;
    tmp13Result = tmp13(stringResult[16]);
    const obj23 = { bottom: true, children: null };
    const obj24 = { text: null, onPress: null, disabled: null, loading: null, variant: "primary", size: "lg" };
    obj24[0] = string(tmp8 ? tmp13Result.TDc9mW : tmp13Result.pvcruO);
    obj24[1] = function handleSubmit() {
      const self = this;
      const apply = _handleSubmit.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp40 = !tmp40;
    obj24[2] = tmp40;
    obj24[3] = first4;
    const items11 = [callback2(Button, obj24), ];
    const obj25 = { text: null, onPress: null, disabled: null, variant: "secondary", size: "lg" };
    intl9 = tmp2(stringResult[15]).intl;
    string = intl9.string;
    stringResult = string(tmp2(stringResult[15]).t["ETE/oC"]);
    obj25[0] = stringResult;
    obj25[1] = function onPress() {
      return stackNavigation.goBack();
    };
    obj25[2] = first4;
    Button = tmp43(tmp2(stringResult[28]).Button, obj25);
    items11[1] = Button;
    obj22[1] = items11;
    obj22 = tmp41(tmp42, obj22);
    obj23[1] = obj22;
    tmp13Result = tmp43(tmp2(stringResult[27]).SafeAreaPaddingView, obj23);
    items10[1] = tmp13Result;
    obj2[1] = items10;
    first2(closure_6, obj2);
    const tmp2Result5 = tmp2(stringResult[19]);
  }
};