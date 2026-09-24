// === Module 9879: GuildEventModalComponents ===

// Module 9879 (GuildEventModalComponents)
import util from "util" /* 1115 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import StageIcon from "StageIcon" /* 5403 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5407 */;
import TableRadioGroup from "TableRadioGroup" /* 5990 */;
import TableRadioRow from "TableRadioRow" /* 5993 */;
import TextInput from "TextInput" /* 6936 */;
import TextArea from "TextArea" /* 7418 */;
import _modDef8980 from "module_8980" /* 8980 */;
import ScheduleUtils from "ScheduleUtils" /* 9837 */;
import useGuildsUserCanStartStageIn from "useGuildsUserCanStartStageIn" /* 9881 */;
import _modDef9882 from "module_9882" /* 9882 */;
import _modDef9883 from "module_9883" /* 9883 */;
import LocationIcon from "LocationIcon" /* 9884 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(2050);
({ GuildScheduledEventEntityTypes: metroRequire, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: closure_7, MAX_EVENT_LOCATION_LENGTH: closure_8, GUILD_EVENT_MAX_NAME_LENGTH: closure_9 } = GuildScheduledEventsConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { paddingTop: 16, paddingBottom: 4 }, dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" }, timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" }, formHeader: { marginBottom: 8 }, header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export const GuildEventTopic = function GuildEventTopic(arg0) {
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
};
export const GuildEventLocation = function GuildEventLocation(arg0) {
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
};
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  let recurrenceOptions;
  const tmp = closure_13();
  const items = [recurrenceRule, startDate];
  dependencyMap = recurrenceOptions.useMemo(() => ScheduleUtils.recurrenceRuleToOption(startDate, recurrenceRule), items);
  recurrenceOptions = startDate(9837).getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (found != null) {
    label = found.label;
  }
  let obj2 = { style: tmp.formGroup, children: null };
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp2(1115).intl;
  obj4.children = intl.string(startDate(1115).t["59TVxL"]);
  obj3.children = closure_11(startDate(4825).Text, obj4);
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
        recurrenceRule(closure_3[12]).hideActionSheet();
      };
      obj3.selectedItem = selectedItem;
      obj2.openLazy(asyncRequireImpl(9623, dependencyMap.paths), "SelectRecurrenceOption", obj3);
    },
    text: null,
    value: null,
    icon: null,
    iconPosition: "end",
    accessibilityLabel: null,
    accessibilityHint: null
  };
  const intl2 = tmp2(1115).intl;
  obj5.text = intl2.string(startDate(1115).t["59TVxL"]);
  obj5.value = label;
  obj5.icon = recurrenceRule(9880);
  const intl3 = tmp2(1115).intl;
  obj5.accessibilityLabel = intl3.string(startDate(1115).t["59TVxL"]);
  obj5.accessibilityHint = label;
  items1[1] = closure_11(startDate(9264).InputButton, obj5);
  obj2.children = items1;
  return closure_12(View, obj2);
};
export const GuildEventEntityTypeSelection = function GuildEventEntityTypeSelection(arg0) {
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  const obj2 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const channelsUserCanStartStageIn = useGuildsUserCanStartStageIn.useChannelsUserCanStartStageIn(guild);
  const intl = util.intl;
  obj2.name = intl.string(util.t.BVZqJl);
  obj2.value = constants.VOICE;
  const intl2 = util.intl;
  obj2.description = intl2.string(util.t["EV//4f"]);
  obj2.icon = _modDef9882;
  obj2.IconComponent = VoiceNormalIcon.VoiceNormalIcon;
  obj2.disabled = disabled;
  const items = [obj2, ];
  const obj3 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t.w7ipbz);
  obj3.value = constants.EXTERNAL;
  const intl4 = util.intl;
  obj3.description = intl4.string(util.t.DYxrHm);
  obj3.icon = _modDef9883;
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
    obj4.icon = _modDef8980;
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
};
export const GuildEventDescription = function GuildEventDescription(onFocus) {
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
};
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  dateLabel = dateLabel.dateLabel;
  let time = dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(4416)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(4416)();
    maximumDate = timeLabel(4416)().add(30, "days").endOf("month");
    const addResult = timeLabel(4416)().add(30, "days");
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
  const items = [closure_11(time(4825).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel }), ];
  time = "date";
  items[1] = closure_11(time(9264).InputButton, {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        const result = date(paths[11]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[11]);
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
        const obj2 = timeLabel(paths[12]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  });
  obj4.children = items;
  const items1 = [closure_12(disabled, obj4), ];
  const obj7 = { style: tmp5.timeInput, children: null };
  const items2 = [closure_11(time(4825).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel }), ];
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  const obj6 = {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        const result = date(paths[11]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[11]);
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
        const obj2 = timeLabel(paths[12]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  };
  const obj8 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  time = "time";
  items2[1] = closure_11(time(9264).InputButton, {
    text: timeLabel,
    value: date.format("LT"),
    () => {
      if (!View) {
        const result = date(paths[11]).dismissGlobalKeyboard();
        let openLazyResult = time;
        let obj = date(paths[11]);
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
        const obj2 = timeLabel(paths[12]);
        obj3.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj3.minimumDate = toDateResult;
        obj3.maximumDate = noop.toDate();
        obj3.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj3);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  });
  obj7.children = items2;
  items1[1] = closure_12(disabled, obj7);
  obj3.children = items1;
  obj2.children = closure_12(time(5271).Stack, obj3);
  return closure_11(disabled, obj2);
};