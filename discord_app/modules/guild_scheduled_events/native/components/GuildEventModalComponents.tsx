// discord_app/modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import dismissGlobalKeyboardAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import context from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import registerAssetDefault from "../../../../../_runtime/08749_registerAsset.js";
import useChannelsUserCanStartStageIn from "../../useGuildsUserCanStartStageIn.tsx";
import registerAssetDefault2 from "../../../../../_runtime/09683_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/09684_registerAsset.js";
import LocationIcon from "../../../../design/components/Icon/native/redesign/generated/LocationIcon.tsx";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import GUILD_EVENT_MAX_NAME_LENGTH from "../../GuildScheduledEventsConstants.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({
  GuildScheduledEventEntityTypes: closure_6,
  GUILD_EVENT_MAX_DESCRIPTION_LENGTH: error,
  MAX_EVENT_LOCATION_LENGTH: closure_8,
  GUILD_EVENT_MAX_NAME_LENGTH: c9,
} = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({
  formGroup: { paddingVertical: 8 },
  formGroupSmall: { paddingVertical: 4 },
  formGroupLarge: { paddingTop: 16, paddingBottom: 4 },
  dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" },
  timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" },
  formHeader: { marginBottom: 8 },
  header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 },
});
let result = require("set").fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx",
);

export const GuildEventTopic = function GuildEventTopic(arg0) {
  ({ topic, onChange } = arg0);
  let obj = { style: callback3().formGroupSmall, children: null };
  obj = {
    label: null,
    accessibilityLabel: null,
    placeholder: null,
    onChange: null,
    value: null,
    maxLength: null,
    autoFocus: true,
    isClearable: true,
  };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["0HbEQ6"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["0HbEQ6"]);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["6/yars"]);
  obj[3] = onChange;
  obj[4] = topic;
  obj[5] = closure_9;
  obj[1] = callback(TextInput.TextInput, obj);
  return callback(View, obj);
};
export const GuildEventLocation = function GuildEventLocation(arg0) {
  ({ location: _location, onChange, onFocus } = arg0);
  let obj = { style: callback3().formGroupLarge, children: null };
  obj = {
    label: null,
    placeholder: null,
    value: null,
    maxLength: null,
    onChange: null,
    onFocus: null,
    isClearable: true,
  };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.yx785A);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.mkCMia);
  obj[2] = _location;
  obj[3] = closure_8;
  obj[4] = onChange;
  obj[5] = onFocus;
  obj[1] = callback(TextInput.TextInput, obj);
  return callback(View, obj);
};
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  dependencyMap = undefined;
  let recurrenceOptions;
  const tmp = callback3();
  const items = [recurrenceRule, startDate];
  dependencyMap = recurrenceOptions.useMemo(
    () => startDate(paths[8]).recurrenceRuleToOption(startDate, recurrenceRule),
    items,
  );
  let obj = startDate(9634);
  recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (found != null) {
    label = found.label;
  }
  obj = { style: tmp.formGroup, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
  let intl = tmp2(1236).intl;
  obj1[2] = intl.string(startDate(1236).t["59TVxL"]);
  obj[1] = callback(startDate(4474).Text, obj1);
  const items1 = [callback(View, obj)];
  let obj2 = {
    onPress() {
      let obj = onRecurrenceChange(paths[11]);
      const result = obj.dismissGlobalKeyboard();
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj2 = recurrenceRule(paths[12]);
      const intl = startDate(paths[7]).intl;
      obj[0] = intl.string(startDate(paths[7]).t["59TVxL"]);
      obj[1] = recurrenceOptions;
      obj[2] = function onItemSelect(arg0) {
        callback(arg0);
        closure_1_1(closure_1_3[12]).hideActionSheet();
      };
      obj[3] = paths;
      obj2.openLazy(startDate(paths[14])(paths[13], paths.paths), "SelectRecurrenceOption", obj);
    },
    text: null,
    value: null,
    icon: null,
    iconPosition: "end",
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  const intl2 = tmp2(1236).intl;
  obj2[1] = intl2.string(startDate(1236).t["59TVxL"]);
  obj2[2] = label;
  obj2[3] = recurrenceRule(9681);
  const intl3 = tmp2(1236).intl;
  obj2[5] = intl3.string(startDate(1236).t["59TVxL"]);
  obj2[6] = label;
  items1[1] = callback(startDate(8984).InputButton, obj2);
  obj[1] = items1;
  return callback2(View, obj);
};
export const GuildEventEntityTypeSelection = function GuildEventEntityTypeSelection(arg0) {
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  let obj = useChannelsUserCanStartStageIn;
  obj = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BVZqJl);
  obj[1] = constants.VOICE;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["EV//4f"]);
  obj[3] = registerAssetDefault2;
  obj[4] = VoiceNormalIcon.VoiceNormalIcon;
  obj[5] = disabled;
  const items = [obj];
  obj = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.w7ipbz);
  obj[1] = constants.EXTERNAL;
  const intl4 = getSystemLocale.intl;
  obj[2] = intl4.string(getSystemLocale.t.DYxrHm);
  obj[3] = registerAssetDefault3;
  obj[4] = LocationIcon.LocationIcon;
  obj[5] = disabled;
  items[1] = obj;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    obj1 = { name: null, value: null, description: null, icon: null, IconComponent: null, disabled: null };
    const intl5 = tmp(1236).intl;
    obj1[0] = intl5.string(tmp(1236).t.EErMzA);
    obj1[1] = constants.STAGE_INSTANCE;
    const intl6 = tmp(1236).intl;
    obj1[2] = intl6.string(tmp(1236).t.LgALpp);
    obj1[3] = registerAssetDefault;
    obj1[4] = tmp(5046).StageIcon;
    obj1[5] = 0 === channelsUserCanStartStageIn.length || disabled;
    items.unshift(obj1);
  }
  return callback(context.TableRadioGroup, {
    defaultValue: entityType,
    onChange,
    hasIcons: true,
    children: items.map((name) => {
      name = name.name;
      ({ value, description, IconComponent, disabled } = name);
      return callback2(
        callback(table[24]).TableRadioRow,
        { label: name, subLabel: description, value, icon: callback2(IconComponent, {}), disabled },
        name,
      );
    }),
  });
};
export const GuildEventDescription = function GuildEventDescription(onFocus) {
  onFocus = onFocus.onFocus;
  let ref;
  ({ description, onChange } = onFocus);
  ref = React.useRef(null);
  let obj = { style: callback3().formGroupSmall, ref, children: null };
  obj = { label: null, maxLength: null, placeholder: null, onChange: null, onFocus: null, value: null };
  const intl = onFocus(1236).intl;
  obj[0] = intl.string(onFocus(1236).t["+gRCC7"]);
  obj[1] = closure_7;
  const intl2 = onFocus(1236).intl;
  obj[2] = intl2.string(onFocus(1236).t["kWO/E8"]);
  obj[3] = onChange;
  obj[4] = function onFocus() {
    if (onFocus != null) {
      tmp(ref);
    }
  };
  obj[5] = description;
  obj[2] = callback(onFocus(7808).TextArea, obj);
  return callback(View, obj);
};
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  dateLabel = dateLabel.dateLabel;
  let time = dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(4075)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(4075)();
    maximumDate = obj.add(30, "days").endOf("month");
    const addResult = obj.add(30, "days");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {};
  }
  let tmp5 = callback3();
  obj = { style: tmp5.formGroup, children: null };
  obj = { direction: "horizontal", spacing: 16, children: null };
  obj1 = { style: tmp5.dateInput, children: null };
  const items = [
    callback(time(4474).Text, {
      style: tmp5.formHeader,
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: dateLabel,
    }),
  ];
  time = "date";
  items[1] = callback(time(8984).InputButton, {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    onPress: () => {
      if (!disabled) {
        let obj = dismissGlobalKeyboardAll;
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit: null,
          title: null,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null,
        };
        obj[0] = function onSubmit(set) {
          if ("date" !== closure_0) {
            closure_1_6(set);
          } else {
            const obj = { hour: null, minute: null, second: 0, millisecond: 0 };
            obj[0] = closure_1_2.get("hour");
            obj[1] = closure_1_2.get("minute");
            closure_1_6(set.set(obj));
          }
        };
        obj[1] = "date" === time ? time : timeLabel;
        const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
        const obj4 = date;
        const tmp2 = dependencyMap;
        const tmp5 = "date" === time ? time : timeLabel;
        obj[2] = date.toDate();
        if (null != closure_1_3) {
          let toDateResult = obj5.toDate();
        } else {
          toDateResult = obj4.toDate();
        }
        obj[3] = toDateResult;
        obj[4] = maximumDate.toDate();
        obj[6] = openLazyResult;
        openLazyResult = obj2.openLazy(asyncRequireImpl(9687, dependencyMap.paths), "DatePicker", obj);
        obj5 = closure_1_3;
        const tmp8 = asyncRequireImpl(9687, dependencyMap.paths);
      }
    },
    disabled,
  });
  obj1[1] = items;
  const items1 = [callback2(disabled, obj1)];
  let obj4 = { style: tmp5.timeInput, children: null };
  const items2 = [
    callback(time(4474).Text, {
      style: tmp5.formHeader,
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: timeLabel,
    }),
  ];
  let obj2 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  const obj3 = {
    text: dateLabel,
    value: date.format("MMM Do YYYY"),
    onPress: () => {
      if (!disabled) {
        let obj = dismissGlobalKeyboardAll;
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit: null,
          title: null,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null,
        };
        obj[0] = function onSubmit(set) {
          if ("date" !== closure_0) {
            closure_1_6(set);
          } else {
            const obj = { hour: null, minute: null, second: 0, millisecond: 0 };
            obj[0] = closure_1_2.get("hour");
            obj[1] = closure_1_2.get("minute");
            closure_1_6(set.set(obj));
          }
        };
        obj[1] = "date" === time ? time : timeLabel;
        const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
        const obj4 = date;
        const tmp2 = dependencyMap;
        const tmp5 = "date" === time ? time : timeLabel;
        obj[2] = date.toDate();
        if (null != closure_1_3) {
          let toDateResult = obj5.toDate();
        } else {
          toDateResult = obj4.toDate();
        }
        obj[3] = toDateResult;
        obj[4] = maximumDate.toDate();
        obj[6] = openLazyResult;
        openLazyResult = obj2.openLazy(asyncRequireImpl(9687, dependencyMap.paths), "DatePicker", obj);
        obj5 = closure_1_3;
        const tmp8 = asyncRequireImpl(9687, dependencyMap.paths);
      }
    },
    disabled,
  };
  let obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  time = "time";
  items2[1] = callback(time(8984).InputButton, {
    text: timeLabel,
    value: date.format("LT"),
    onPress: () => {
      if (!disabled) {
        let obj = dismissGlobalKeyboardAll;
        const result = obj.dismissGlobalKeyboard();
        let openLazyResult = time;
        obj = {
          onSubmit: null,
          title: null,
          startDate: null,
          minimumDate: null,
          maximumDate: null,
          requireDateChanged: true,
          mode: null,
        };
        obj[0] = function onSubmit(set) {
          if ("date" !== closure_0) {
            closure_1_6(set);
          } else {
            const obj = { hour: null, minute: null, second: 0, millisecond: 0 };
            obj[0] = closure_1_2.get("hour");
            obj[1] = closure_1_2.get("minute");
            closure_1_6(set.set(obj));
          }
        };
        obj[1] = "date" === time ? time : timeLabel;
        const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
        const obj4 = date;
        const tmp2 = dependencyMap;
        const tmp5 = "date" === time ? time : timeLabel;
        obj[2] = date.toDate();
        if (null != closure_1_3) {
          let toDateResult = obj5.toDate();
        } else {
          toDateResult = obj4.toDate();
        }
        obj[3] = toDateResult;
        obj[4] = maximumDate.toDate();
        obj[6] = openLazyResult;
        openLazyResult = obj2.openLazy(asyncRequireImpl(9687, dependencyMap.paths), "DatePicker", obj);
        obj5 = closure_1_3;
        const tmp8 = asyncRequireImpl(9687, dependencyMap.paths);
      }
    },
    disabled,
  });
  obj4[1] = items2;
  items1[1] = callback2(disabled, obj4);
  obj[2] = items1;
  obj[1] = callback2(time(4926).Stack, obj);
  return callback(disabled, obj);
};
