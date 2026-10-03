// === Module 9186: GuildEventModalComponents ===

// Module 9186 (GuildEventModalComponents)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import StageIcon from "StageIcon" /* 5881 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5885 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import TextInput from "TextInput" /* 6098 */;
import TextArea from "TextArea" /* 6580 */;
import ScheduleUtils from "ScheduleUtils" /* 9163 */;
import useGuildsUserCanStartStageIn from "useGuildsUserCanStartStageIn" /* 9188 */;
import _modDef9189 from "module_9189" /* 9189 */;
import _modDef9190 from "module_9190" /* 9190 */;
import LocationIcon from "LocationIcon" /* 9191 */;
import _modDef9193 from "module_9193" /* 9193 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(2057);
({ GuildScheduledEventEntityTypes: metroRequire, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: closure_7, MAX_EVENT_LOCATION_LENGTH: closure_8, GUILD_EVENT_MAX_NAME_LENGTH: closure_9 } = GuildScheduledEventsConstants);
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { paddingTop: 16, paddingBottom: 4 }, dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" }, timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" }, formHeader: { marginBottom: 8 }, header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 } });
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ topic, onChange } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["0HbEQ6"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["6/yars"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === onChange) {
    if (cResult[3] === topic) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.formGroupSmall) {
      if (cResult[6] === tmp9) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj2 = { style: tmp4.formGroupSmall, children: tmp9 };
    const tmp14 = closure_1_11(View, obj2);
    cResult[5] = tmp4.formGroupSmall;
    cResult[6] = tmp9;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = closure_1_11(TextInput.TextInput, { label: tmp5, placeholder: tmp6, onChange, value: topic, maxLength: maxLength3, autoFocus: true, clearable: true });
  cResult[2] = onChange;
  cResult[3] = topic;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj3 = { label: tmp5, placeholder: tmp6, onChange, value: topic, maxLength: maxLength3, autoFocus: true, clearable: true };
}) : ((arg0) => {
  ({ topic, onChange } = arg0);
  const obj = { style: closure_13().formGroupSmall, children: null };
  const obj2 = { label: null, placeholder: null, onChange: null, value: null, maxLength: null, autoFocus: true, clearable: true };
  const intl = util.intl;
  obj2.label = intl.string(util.t["0HbEQ6"]);
  const intl2 = util.intl;
  obj2.placeholder = intl2.string(util.t["6/yars"]);
  obj2.onChange = onChange;
  obj2.value = topic;
  obj2.maxLength = maxLength3;
  obj.children = closure_1_11(TextInput.TextInput, obj2);
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ location: _location, onChange, onFocus } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.yx785A);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.mkCMia);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === _location) {
    if (cResult[3] === onChange) {
      if (cResult[4] === onFocus) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.formGroupLarge) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj2 = { style: tmp4.formGroupLarge, children: tmp9 };
      const tmp14 = closure_1_11(View, obj2);
      cResult[6] = tmp4.formGroupLarge;
      cResult[7] = tmp9;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
  }
  const tmp10 = closure_1_11(TextInput.TextInput, { label: tmp5, placeholder: tmp6, value: _location, maxLength: maxLength2, onChange, onFocus, clearable: true });
  cResult[2] = _location;
  cResult[3] = onChange;
  cResult[4] = onFocus;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const obj3 = { label: tmp5, placeholder: tmp6, value: _location, maxLength: maxLength2, onChange, onFocus, clearable: true };
}) : ((arg0) => {
  ({ location: _location, onChange, onFocus } = arg0);
  const obj = { style: closure_13().formGroupLarge, children: null };
  const obj2 = { label: null, placeholder: null, value: null, maxLength: null, onChange: null, onFocus: null, clearable: true };
  const intl = util.intl;
  obj2.label = intl.string(util.t.yx785A);
  const intl2 = util.intl;
  obj2.placeholder = intl2.string(util.t.mkCMia);
  obj2.value = _location;
  obj2.maxLength = maxLength2;
  obj2.onChange = onChange;
  obj2.onFocus = onFocus;
  obj.children = closure_1_11(TextInput.TextInput, obj2);
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ guild, entityType, disabled, onChange } = arg0);
  const channelsUserCanStartStageIn = useGuildsUserCanStartStageIn.useChannelsUserCanStartStageIn(guild);
  if (cResult[0] === disabled) {
    if (cResult[1] === guild.features) {
      if (cResult[2] === channelsUserCanStartStageIn) {
        let arr2 = cResult[3];
      }
      if (cResult[4] !== arr2) {
        const mapped = arr2.map((name) => {
          name = name.name;
          ({ value, description, IconComponent, disabled } = name);
          return closure_1_11(TableRadioRow.TableRadioRow, { label: name, subLabel: description, value, icon: closure_1_11(IconComponent, {}), disabled }, name);
        });
        cResult[4] = arr2;
        cResult[5] = mapped;
        let tmp7 = mapped;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === entityType) {
        if (cResult[7] === onChange) {
          if (cResult[8] === tmp7) {
            let tmp9 = cResult[9];
          }
          return tmp9;
        }
      }
      const obj3 = { defaultValue: entityType, onChange, hasIcons: true, children: tmp7 };
      const tmp11 = closure_1_11(TableRadioGroup.TableRadioGroup, obj3);
      cResult[6] = entityType;
      cResult[7] = onChange;
      cResult[8] = tmp7;
      cResult[9] = tmp11;
      tmp9 = tmp11;
    }
  }
  const obj4 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl = util.intl;
  obj4.name = intl.string(util.t.BVZqJl);
  obj4.value = constants.VOICE;
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t["EV//4f"]);
  obj4.icon = _modDef9189;
  obj4.IconComponent = VoiceNormalIcon.VoiceNormalIcon;
  obj4.disabled = disabled;
  const items = [obj4, ];
  const obj5 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl3 = util.intl;
  obj5.name = intl3.string(util.t.w7ipbz);
  obj5.value = constants.EXTERNAL;
  const intl4 = util.intl;
  obj5.description = intl4.string(util.t.DYxrHm);
  obj5.icon = _modDef9190;
  obj5.IconComponent = LocationIcon.LocationIcon;
  obj5.disabled = disabled;
  items[1] = obj5;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const obj6 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
    const intl5 = util.intl;
    obj6.name = intl5.string(util.t.EErMzA);
    obj6.value = constants.STAGE_INSTANCE;
    const intl6 = util.intl;
    obj6.description = intl6.string(util.t.LgALpp);
    obj6.icon = _modDef9193;
    obj6.IconComponent = StageIcon.StageIcon;
    obj6.disabled = 0 === channelsUserCanStartStageIn.length || disabled;
    items.unshift(obj6);
  }
  cResult[0] = disabled;
  cResult[1] = guild.features;
  cResult[2] = channelsUserCanStartStageIn;
  cResult[3] = items;
  arr2 = items;
}) : ((arg0) => {
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  const obj2 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const channelsUserCanStartStageIn = useGuildsUserCanStartStageIn.useChannelsUserCanStartStageIn(guild);
  const intl = util.intl;
  obj2.name = intl.string(util.t.BVZqJl);
  obj2.value = constants.VOICE;
  const intl2 = util.intl;
  obj2.description = intl2.string(util.t["EV//4f"]);
  obj2.icon = _modDef9189;
  obj2.IconComponent = VoiceNormalIcon.VoiceNormalIcon;
  obj2.disabled = disabled;
  const items = [obj2, ];
  const obj3 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t.w7ipbz);
  obj3.value = constants.EXTERNAL;
  const intl4 = util.intl;
  obj3.description = intl4.string(util.t.DYxrHm);
  obj3.icon = _modDef9190;
  obj3.IconComponent = LocationIcon.LocationIcon;
  obj3.disabled = disabled;
  items[1] = obj3;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const obj4 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
    const intl5 = util.intl;
    obj4.name = intl5.string(util.t.EErMzA);
    obj4.value = constants.STAGE_INSTANCE;
    const intl6 = util.intl;
    obj4.description = intl6.string(util.t.LgALpp);
    obj4.icon = _modDef9193;
    obj4.IconComponent = StageIcon.StageIcon;
    obj4.disabled = 0 === channelsUserCanStartStageIn.length || disabled;
    items.unshift(obj4);
  }
  return closure_1_11(TableRadioGroup.TableRadioGroup, {
    defaultValue: entityType,
    onChange,
    hasIcons: true,
    children: items.map((name) => {
      name = name.name;
      ({ value, description, IconComponent, disabled } = name);
      return closure_1_11(TableRadioRow.TableRadioRow, { label: name, subLabel: description, value, icon: closure_1_11(IconComponent, {}), disabled }, name);
    })
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export const GuildEventTopic = tmp4;
export const GuildEventLocation = tmp5;
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  let recurrenceOptions;
  const tmp = closure_13();
  const items = [recurrenceRule, startDate];
  dependencyMap = recurrenceOptions.useMemo(() => ScheduleUtils.recurrenceRuleToOption(startDate, recurrenceRule), items);
  recurrenceOptions = startDate(9163).getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (found != null) {
    label = found.label;
  }
  let obj2 = { style: tmp.formGroup, children: null };
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp2(1126).intl;
  obj4.children = intl.string(startDate(1126).t["59TVxL"]);
  obj3.children = closure_11(startDate(4886).Text, obj4);
  const items1 = [closure_11(View, obj3), ];
  const obj5 = {
    onPress() {
      const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
      const obj3 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj2 = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj3.title = intl.string(util.t["59TVxL"]);
      obj3.items = recurrenceOptions;
      obj3.onItemSelect = function onItemSelect(c7) {
        onRecurrenceChange(c7);
        recurrenceRule(closure_3[14]).hideActionSheet();
      };
      obj3.selectedItem = selectedItem;
      obj2.openLazy(asyncRequireImpl(8949, dependencyMap.paths), "SelectRecurrenceOption", obj3);
    },
    text: null,
    value: null,
    icon: null,
    iconPosition: "end",
    accessibilityLabel: null,
    accessibilityHint: null
  };
  const intl2 = tmp2(1126).intl;
  obj5.text = intl2.string(startDate(1126).t["59TVxL"]);
  obj5.value = label;
  obj5.icon = recurrenceRule(9187);
  const intl3 = tmp2(1126).intl;
  obj5.accessibilityLabel = intl3.string(startDate(1126).t["59TVxL"]);
  obj5.accessibilityHint = label;
  items1[1] = closure_11(startDate(8567).InputButton, obj5);
  obj2.children = items1;
  return closure_12(View, obj2);
};
export const GuildEventEntityTypeSelection = tmp6;
export const GuildEventDescription = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ description, onChange, onFocus } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== onFocus) {
    const fn = function l() {
      if (onFocus != null) {
        tmp(ref);
      }
    };
    cResult[0] = onFocus;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["+gRCC7"]);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["kWO/E8"]);
    cResult[3] = stringResult1;
    let tmp9 = stringResult1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === description) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === onChange) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.formGroupSmall) {
        if (cResult[9] === tmp11) {
          let tmp13 = cResult[10];
        }
        return tmp13;
      }
      const obj2 = { style: tmp4.formGroupSmall, ref, children: tmp11 };
      const tmp16 = closure_1_11(View, obj2);
      cResult[8] = tmp4.formGroupSmall;
      cResult[9] = tmp11;
      cResult[10] = tmp16;
      tmp13 = tmp16;
    }
  }
  const tmp12 = closure_1_11(TextArea.TextArea, { label: tmp7, maxLength, placeholder: tmp9, onChange, onFocus: tmp6, value: description });
  cResult[4] = description;
  cResult[5] = tmp6;
  cResult[6] = onChange;
  cResult[7] = tmp12;
  tmp11 = tmp12;
  const obj3 = { label: tmp7, maxLength, placeholder: tmp9, onChange, onFocus: tmp6, value: description };
  ref = noop.useRef(null);
}) : ((onFocus) => {
  onFocus = onFocus.onFocus;
  ({ description, onChange } = onFocus);
  const ref = noop.useRef(null);
  const obj = { style: closure_13().formGroupSmall, ref, children: null };
  const obj2 = { label: null, maxLength: null, placeholder: null, onChange: null, onFocus: null, value: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["+gRCC7"]);
  obj2.maxLength = maxLength;
  const intl2 = util.intl;
  obj2.placeholder = intl2.string(util.t["kWO/E8"]);
  obj2.onChange = onChange;
  obj2.onFocus = function onFocus() {
    if (onFocus != null) {
      tmp(ref);
    }
  };
  obj2.value = description;
  obj.children = closure_1_11(TextArea.TextArea, obj2);
  return closure_1_11(View, obj);
});
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  dateLabel = dateLabel.dateLabel;
  let time = dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(4461)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(4461)();
    maximumDate = timeLabel(4461)().add(30, "days").endOf("month");
    const addResult = timeLabel(4461)().add(30, "days");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {

    };
  }
  let tmp5 = closure_13();
  let obj2 = { style: tmp5.formGroup, children: null };
  let obj3 = { direction: "horizontal", spacing: 16, children: null };
  const obj4 = { style: tmp5.dateInput, children: null };
  const items = [closure_11(time(4886).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel }), ];
  time = "date";
  items[1] = closure_11(time(8567).InputButton, {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        const result = date(paths[13]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[13]);
        const tmp5 = "date" === time ? require : importDefault;
        const obj3 = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: tmp5,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[14]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[16])(paths[29], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[16])(paths[29], paths.paths);
      }
    },
    disabled
  });
  obj4.children = items;
  const items1 = [closure_12(disabled, obj4), ];
  const obj7 = { style: tmp5.timeInput, children: null };
  const items2 = [closure_11(time(4886).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel }), ];
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  const obj6 = {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        const result = date(paths[13]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[13]);
        const tmp5 = "date" === time ? require : importDefault;
        const obj3 = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: tmp5,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[14]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[16])(paths[29], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[16])(paths[29], paths.paths);
      }
    },
    disabled
  };
  const obj8 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  time = "time";
  items2[1] = closure_11(time(8567).InputButton, {
    text: timeLabel,
    value: date.format("LT"),
    () => {
      if (!View) {
        const result = date(paths[13]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[13]);
        const tmp5 = "date" === time ? require : importDefault;
        const obj3 = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: tmp5,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[14]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[16])(paths[29], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[16])(paths[29], paths.paths);
      }
    },
    disabled
  });
  obj7.children = items2;
  items1[1] = closure_12(disabled, obj7);
  obj3.children = items1;
  obj2.children = closure_12(time(5593).Stack, obj3);
  return closure_11(disabled, obj2);
};