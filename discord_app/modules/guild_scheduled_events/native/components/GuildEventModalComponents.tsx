// discord_app/modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageIcon from "../../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import _modDef8622 from "../../../../../_runtime/metro/08622__.js";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import useGuildsUserCanStartStageIn from "../../useGuildsUserCanStartStageIn.tsx";
import _modDef9713 from "../../../../../_runtime/metro/09713__.js";
import _modDef9714 from "../../../../../_runtime/metro/09714__.js";
import LocationIcon from "../../../../design/components/Icon/native/redesign/generated/LocationIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(1963);
({ GuildScheduledEventEntityTypes: metroRequire, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: closure_7, MAX_EVENT_LOCATION_LENGTH: closure_8, GUILD_EVENT_MAX_NAME_LENGTH: closure_9 } = GuildScheduledEventsConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { paddingTop: 16, paddingBottom: 4 }, dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" }, timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" }, formHeader: { marginBottom: 8 }, header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export const GuildEventTopic = function GuildEventTopic(arg0) {
  ({ topic, onChange } = arg0);
  let obj = { style: closure_13().formGroupSmall, children: null };
  obj = { label: null, placeholder: null, onChange: null, value: null, maxLength: null, autoFocus: true, isClearable: true };
  const intl = util.intl;
  obj.label = intl.string(util.t["0HbEQ6"]);
  const intl2 = util.intl;
  obj.placeholder = intl2.string(util.t["6/yars"]);
  obj.onChange = onChange;
  obj.value = topic;
  obj.maxLength = maxLength3;
  obj.children = closure_1_11(TextInput.TextInput, obj);
  return closure_1_11(View, obj);
};
export const GuildEventLocation = function GuildEventLocation(arg0) {
  ({ location: _location, onChange, onFocus } = arg0);
  let obj = { style: closure_13().formGroupLarge, children: null };
  obj = { label: null, placeholder: null, value: null, maxLength: null, onChange: null, onFocus: null, isClearable: true };
  const intl = util.intl;
  obj.label = intl.string(util.t.yx785A);
  const intl2 = util.intl;
  obj.placeholder = intl2.string(util.t.mkCMia);
  obj.value = _location;
  obj.maxLength = maxLength2;
  obj.onChange = onChange;
  obj.onFocus = onFocus;
  obj.children = closure_1_11(TextInput.TextInput, obj);
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
  let obj = startDate(9665);
  recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (found != null) {
    label = found.label;
  }
  obj = { style: tmp.formGroup, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp2(1114).intl;
  obj1.children = intl.string(startDate(1114).t["59TVxL"]);
  obj.children = closure_11(startDate(4556).Text, obj1);
  const items1 = [closure_11(View, obj), ];
  let obj2 = {
    onPress() {
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj2 = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj.title = intl.string(util.t["59TVxL"]);
      obj.items = recurrenceOptions;
      obj.onItemSelect = function onItemSelect(c7) {
        onRecurrenceChange(c7);
        recurrenceRule(closure_3[12]).hideActionSheet();
      };
      obj.selectedItem = selectedItem;
      obj2.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "SelectRecurrenceOption", obj);
    },
    text: null,
    value: null,
    icon: null,
    iconPosition: "end",
    accessibilityLabel: null,
    accessibilityHint: null
  };
  const intl2 = tmp2(1114).intl;
  obj2.text = intl2.string(startDate(1114).t["59TVxL"]);
  obj2.value = label;
  obj2.icon = recurrenceRule(9711);
  const intl3 = tmp2(1114).intl;
  obj2.accessibilityLabel = intl3.string(startDate(1114).t["59TVxL"]);
  obj2.accessibilityHint = label;
  items1[1] = closure_11(startDate(8902).InputButton, obj2);
  obj.children = items1;
  return closure_12(View, obj);
};
export const GuildEventEntityTypeSelection = function GuildEventEntityTypeSelection(arg0) {
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  let obj = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  const intl = util.intl;
  obj.name = intl.string(util.t.BVZqJl);
  obj.value = constants.VOICE;
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["EV//4f"]);
  obj.icon = _modDef9713;
  obj.IconComponent = VoiceNormalIcon.VoiceNormalIcon;
  obj.disabled = disabled;
  const items = [obj, ];
  obj = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t.w7ipbz);
  obj.value = constants.EXTERNAL;
  const intl4 = util.intl;
  obj.description = intl4.string(util.t.DYxrHm);
  obj.icon = _modDef9714;
  obj.IconComponent = LocationIcon.LocationIcon;
  obj.disabled = disabled;
  items[1] = obj;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const obj1 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
    const intl5 = util.intl;
    obj1.name = intl5.string(util.t.EErMzA);
    obj1.value = constants.STAGE_INSTANCE;
    const intl6 = util.intl;
    obj1.description = intl6.string(util.t.LgALpp);
    obj1.icon = _modDef8622;
    obj1.IconComponent = StageIcon.StageIcon;
    obj1.disabled = 0 === channelsUserCanStartStageIn.length || disabled;
    items.unshift(obj1);
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
  let obj = { style: closure_13().formGroupSmall, ref, children: null };
  obj = { label: null, maxLength: null, placeholder: null, onChange: null, onFocus: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["+gRCC7"]);
  obj.maxLength = maxLength;
  const intl2 = util.intl;
  obj.placeholder = intl2.string(util.t["kWO/E8"]);
  obj.onChange = onChange;
  obj.onFocus = function onFocus() {
    if (onFocus != null) {
      tmp(ref);
    }
  };
  obj.value = description;
  obj.children = closure_1_11(TextArea.TextArea, obj);
  return closure_1_11(View, obj);
};
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  dateLabel = dateLabel.dateLabel;
  let time = dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(4153)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(4153)();
    maximumDate = obj.add(30, "days").endOf("month");
    const addResult = obj.add(30, "days");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {

    };
  }
  let tmp5 = closure_13();
  obj = { style: tmp5.formGroup, children: null };
  obj = { direction: "horizontal", spacing: 16, children: null };
  const obj1 = { style: tmp5.dateInput, children: null };
  const items = [closure_11(time(4556).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel }), ];
  time = "date";
  items[1] = closure_11(time(8902).InputButton, {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        let obj = date(paths[11]);
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: "date" === time ? require : importDefault,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[12]);
        const tmp5 = "date" === time ? require : importDefault;
        obj.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj.minimumDate = toDateResult;
        obj.maximumDate = noop.toDate();
        obj.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  });
  obj1.children = items;
  const items1 = [closure_12(disabled, obj1), ];
  const obj4 = { style: tmp5.timeInput, children: null };
  const items2 = [closure_11(time(4556).Text, { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel }), ];
  let obj2 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  const obj3 = {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    () => {
      if (!View) {
        let obj = date(paths[11]);
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: "date" === time ? require : importDefault,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[12]);
        const tmp5 = "date" === time ? require : importDefault;
        obj.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj.minimumDate = toDateResult;
        obj.maximumDate = noop.toDate();
        obj.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  };
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  time = "time";
  items2[1] = closure_11(time(8902).InputButton, {
    text: timeLabel,
    value: date.format("LT"),
    () => {
      if (!View) {
        let obj = date(paths[11]);
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit(set) {
              if ("date" !== time) {
                fn(set);
              } else {
                const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
                fn(set.set(obj));
              }
            },
          title: "date" === time ? require : importDefault,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null
        };
        const obj2 = timeLabel(paths[12]);
        const tmp5 = "date" === time ? require : importDefault;
        obj.startDate = importAll.toDate();
        if (null != dependencyMap) {
          let toDateResult = dependencyMap.toDate();
        } else {
          toDateResult = importAll.toDate();
        }
        obj.minimumDate = toDateResult;
        obj.maximumDate = noop.toDate();
        obj.mode = openLazyResult;
        openLazyResult = obj2.openLazy(time(paths[14])(paths[27], paths.paths), "DatePicker", obj);
        const tmp8 = time(paths[14])(paths[27], paths.paths);
      }
    },
    disabled
  });
  obj4.children = items2;
  items1[1] = closure_12(disabled, obj4);
  obj.children = items1;
  obj.children = closure_12(time(4973).Stack, obj);
  return closure_11(disabled, obj);
};