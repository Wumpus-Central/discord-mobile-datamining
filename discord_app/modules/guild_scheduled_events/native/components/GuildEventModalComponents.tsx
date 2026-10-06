// discord_app/modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageIcon from "../../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceNormalIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import TableRadioRow2 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TextInput_TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea2 from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import useGuildsUserCanStartStageIn from "../../useGuildsUserCanStartStageIn.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09224_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/09225_AssetRegistry.js";
import LocationIcon from "../../../../design/components/Icon/native/redesign/generated/LocationIcon.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/09228_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildScheduledEventsConstants from "../../GuildScheduledEventsConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, name;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const View = react_native.View;
({
  GuildScheduledEventEntityTypes: metroRequire,
  GUILD_EVENT_MAX_DESCRIPTION_LENGTH: metroImportDefault,
  MAX_EVENT_LOCATION_LENGTH: metroImportAll,
  GUILD_EVENT_MAX_NAME_LENGTH: c9,
} = GuildScheduledEventsConstants);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({
  formGroup: { paddingVertical: 8 },
  formGroupSmall: { paddingVertical: 4 },
  formGroupLarge: { paddingTop: 16, paddingBottom: 4 },
  dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" },
  timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" },
  formHeader: { marginBottom: 8 },
  header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let onChange;
      let tmp5;
      let tmp6;
      let topic;
      const obj = react2;
      const cResult = obj.c(8);
      ({ topic, onChange } = arg0);
      const tmp4 = closure_13();
      const formGroupSmall = tmp4.formGroupSmall;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t["0HbEQ6"]);
        const intl2 = intl7.intl;
        const stringResult1 = intl2.string(intl7.t["6/yars"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === onChange) {
        let tmp9;
        if (cResult[3] === topic) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.formGroupSmall) {
          let tmp11;
          if (cResult[6] === tmp9) {
            tmp11 = cResult[7];
          }
          return tmp11;
        }
        const obj2 = { style: formGroupSmall, children: tmp9 };
        const tmp14 = unpackModuleId(View, obj2);
        cResult[5] = tmp4.formGroupSmall;
        cResult[6] = tmp9;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      const obj3 = {
        label: tmp5,
        placeholder: tmp6,
        onChange,
        value: topic,
        maxLength,
        autoFocus: true,
        clearable: true,
      };
      const tmp10 = unpackModuleId(TextInput_TextInput.TextInput, obj3);
      cResult[2] = onChange;
      cResult[3] = topic;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let TextInput;
      let intl;
      let intl2;
      let obj2;
      let onChange;
      let topic;
      ({ topic, onChange } = arg0);
      const obj = { style: closure_13().formGroupSmall, children: unpackModuleId(TextInput, obj2) };
      obj2 = {
        label: intl.string(intl7.t["0HbEQ6"]),
        placeholder: intl2.string(intl7.t["6/yars"]),
        onChange,
        value: topic,
        maxLength,
        autoFocus: true,
        clearable: true,
      };
      TextInput = TextInput_TextInput.TextInput;
      intl = intl7.intl;
      intl2 = intl7.intl;
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let onChange;
      let onFocus;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(9);
      ({ location: _location, onChange, onFocus } = arg0);
      const tmp4 = closure_13();
      const formGroupLarge = tmp4.formGroupLarge;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t.yx785A);
        const intl2 = intl7.intl;
        const stringResult1 = intl2.string(intl7.t.mkCMia);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === _location) {
        if (cResult[3] === onChange) {
          let tmp9;
          if (cResult[4] === onFocus) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.formGroupLarge) {
            let tmp11;
            if (cResult[7] === tmp9) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
          const obj2 = { style: formGroupLarge, children: tmp9 };
          const tmp14 = unpackModuleId(View, obj2);
          cResult[6] = tmp4.formGroupLarge;
          cResult[7] = tmp9;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj3 = {
        label: tmp5,
        placeholder: tmp6,
        value: _location,
        maxLength: metroImportAll,
        onChange,
        onFocus,
        clearable: true,
      };
      const tmp10 = unpackModuleId(TextInput_TextInput.TextInput, obj3);
      cResult[2] = _location;
      cResult[3] = onChange;
      cResult[4] = onFocus;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let TextInput;
      let _location;
      let intl;
      let intl2;
      let obj2;
      let onChange;
      let onFocus;
      ({ location: _location, onChange, onFocus } = arg0);
      const obj = { style: closure_13().formGroupLarge, children: unpackModuleId(TextInput, obj2) };
      obj2 = {
        label: intl.string(intl7.t.yx785A),
        placeholder: intl2.string(intl7.t.mkCMia),
        value: _location,
        maxLength: metroImportAll,
        onChange,
        onFocus,
        clearable: true,
      };
      TextInput = TextInput_TextInput.TextInput;
      intl = intl7.intl;
      intl2 = intl7.intl;
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let entityType;
      let guild;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let onChange;
      let obj = react2;
      const cResult = obj.c(10);
      ({ guild, entityType, disabled, onChange } = arg0);
      const obj2 = useGuildsUserCanStartStageIn;
      const channelsUserCanStartStageIn = obj2.useChannelsUserCanStartStageIn(guild);
      if (cResult[0] === disabled) {
        if (cResult[1] === guild.features) {
          let arr2;
          let tmp7;
          if (cResult[2] === channelsUserCanStartStageIn) {
            arr2 = cResult[3];
          }
          if (cResult[4] !== arr2) {
            const mapped = arr2.map((name) => {
              let IconComponent;
              let description;
              let disabled;
              let value;
              name = name.name;
              ({ value, description, IconComponent, disabled } = name);
              const obj = {
                label: name,
                subLabel: description,
                value,
                icon: closure_1_11(IconComponent, {}),
                disabled,
              };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              return closure_1_11(TableRadioRow, obj, name);
            });
            cResult[4] = arr2;
            cResult[5] = mapped;
            tmp7 = mapped;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] === entityType) {
            if (cResult[7] === onChange) {
              let tmp9;
              if (cResult[8] === tmp7) {
                tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
          const obj3 = { defaultValue: entityType, onChange, hasIcons: true, children: tmp7 };
          const tmp11 = unpackModuleId(TableRadioGroup2.TableRadioGroup, obj3);
          cResult[6] = entityType;
          cResult[7] = onChange;
          cResult[8] = tmp7;
          cResult[9] = tmp11;
          tmp9 = tmp11;
        }
      }
      const obj4 = {
        name: intl.string(intl7.t.BVZqJl),
        value: metroRequire.VOICE,
        description: intl2.string(intl7.t["EV//4f"]),
        icon: AssetRegistryDefault,
        IconComponent: VoiceNormalIcon.VoiceNormalIcon,
        disabled,
      };
      intl = intl7.intl;
      intl2 = intl7.intl;
      const items = [obj4];
      const obj5 = {
        name: intl3.string(intl7.t.w7ipbz),
        value: metroRequire.EXTERNAL,
        description: intl4.string(intl7.t.DYxrHm),
        icon: AssetRegistryDefault2,
        IconComponent: LocationIcon.LocationIcon,
        disabled,
      };
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      items[1] = obj5;
      const features = guild.features;
      if (features.has(GuildFeatures.COMMUNITY)) {
        const unshift = items.unshift;
        const obj6 = {
          name: intl5.string(intl7.t.EErMzA),
          value: metroRequire.STAGE_INSTANCE,
          description: intl6.string(intl7.t.LgALpp),
          icon: AssetRegistryDefault3,
          IconComponent: StageIcon.StageIcon,
          disabled: 0 === channelsUserCanStartStageIn.length || disabled,
        };
        intl5 = intl7.intl;
        intl6 = intl7.intl;
        unshift(obj6);
      }
      cResult[0] = disabled;
      cResult[1] = guild.features;
      cResult[2] = channelsUserCanStartStageIn;
      cResult[3] = items;
      arr2 = items;
    }
  : (arg0) => {
      let disabled;
      let entityType;
      let guild;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let onChange;
      ({ guild, disabled } = arg0);
      ({ entityType, onChange } = arg0);
      let obj = useGuildsUserCanStartStageIn;
      const obj2 = {
        name: intl.string(intl7.t.BVZqJl),
        value: metroRequire.VOICE,
        description: intl2.string(intl7.t["EV//4f"]),
        icon: AssetRegistryDefault,
        IconComponent: VoiceNormalIcon.VoiceNormalIcon,
        disabled,
      };
      const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
      intl = intl7.intl;
      intl2 = intl7.intl;
      const items = [obj2];
      const obj3 = {
        name: intl3.string(intl7.t.w7ipbz),
        value: metroRequire.EXTERNAL,
        description: intl4.string(intl7.t.DYxrHm),
        icon: AssetRegistryDefault2,
        IconComponent: LocationIcon.LocationIcon,
        disabled,
      };
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      items[1] = obj3;
      const features = guild.features;
      if (features.has(GuildFeatures.COMMUNITY)) {
        const unshift = items.unshift;
        const obj4 = {
          name: intl5.string(intl7.t.EErMzA),
          value: metroRequire.STAGE_INSTANCE,
          description: intl6.string(intl7.t.LgALpp),
          icon: AssetRegistryDefault3,
          IconComponent: StageIcon.StageIcon,
          disabled: 0 === channelsUserCanStartStageIn.length || disabled,
        };
        intl5 = intl7.intl;
        intl6 = intl7.intl;
        unshift(obj4);
      }
      const obj5 = {
        defaultValue: entityType,
        onChange,
        hasIcons: true,
        children: items.map((name) => {
          let IconComponent;
          let description;
          let disabled;
          let value;
          name = name.name;
          ({ value, description, IconComponent, disabled } = name);
          const obj = { label: name, subLabel: description, value, icon: closure_1_11(IconComponent, {}), disabled };
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          return closure_1_11(TableRadioRow, obj, name);
        }),
      };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      return unpackModuleId(TableRadioGroup, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let onChange;
      let onFocus;
      let tmp6;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(11);
      ({ description, onChange, onFocus } = arg0);
      const tmp4 = closure_13();
      const ref = react.useRef(null);
      if (cResult[0] !== onFocus) {
        const fn = function l() {
          if (onFocus != null) {
            tmp(ref);
          }
        };
        cResult[0] = onFocus;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const formGroupSmall = tmp4.formGroupSmall;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t["+gRCC7"]);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl7.intl;
        const stringResult1 = intl2.string(intl7.t["kWO/E8"]);
        cResult[3] = stringResult1;
        tmp9 = stringResult1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === description) {
        if (cResult[5] === tmp6) {
          let tmp11;
          if (cResult[6] === onChange) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.formGroupSmall) {
            let tmp13;
            if (cResult[9] === tmp11) {
              tmp13 = cResult[10];
            }
            return tmp13;
          }
          const obj2 = { style: formGroupSmall, ref, children: tmp11 };
          const tmp16 = unpackModuleId(View, obj2);
          cResult[8] = tmp4.formGroupSmall;
          cResult[9] = tmp11;
          cResult[10] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj3 = {
        label: tmp7,
        maxLength: metroImportDefault,
        placeholder: tmp9,
        onChange,
        onFocus: tmp6,
        value: description,
      };
      const tmp12 = unpackModuleId(TextArea2.TextArea, obj3);
      cResult[4] = description;
      cResult[5] = tmp6;
      cResult[6] = onChange;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : (onFocus) => {
      let TextArea;
      let description;
      let intl;
      let intl2;
      let obj2;
      let onChange;
      onFocus = onFocus.onFocus;
      ({ description, onChange } = onFocus);
      const tmp = closure_13();
      const ref = react.useRef(null);
      const obj = { style: tmp.formGroupSmall, ref, children: unpackModuleId(TextArea, obj2) };
      obj2 = {
        label: intl.string(intl7.t["+gRCC7"]),
        maxLength: metroImportDefault,
        placeholder: intl2.string(intl7.t["kWO/E8"]),
        onChange,
        onFocus() {
          if (onFocus != null) {
            tmp(ref);
          }
        },
        value: description,
      };
      TextArea = TextArea2.TextArea;
      intl = intl7.intl;
      intl2 = intl7.intl;
      return unpackModuleId(View, obj);
    };
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx",
);

export const GuildEventTopic = tmp4;
export const GuildEventLocation = tmp5;
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  let selectedItem;
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  let recurrenceOptions;
  const tmp = closure_13();
  const items = [recurrenceRule, startDate];
  dependencyMap = recurrenceOptions.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.recurrenceRuleToOption(startDate, recurrenceRule);
  }, items);
  const tmp2 = startDate;
  let tmp3 = dependencyMap;
  let obj = startDate(9198);
  recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === selectedItem);
  let label;
  if (found != null) {
    label = found.label;
  }
  let obj2 = { style: tmp.formGroup, children: items1 };
  const obj3 = { style: tmp.header, children: closure_11(Text, obj4) };
  obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: intl.string(tmp2(1126).t["59TVxL"]) };
  Text = tmp2(4892).Text;
  intl = tmp2(1126).intl;
  items1 = [closure_11(View, obj3)];
  const obj5 = {
    onPress() {
      let intl;
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj2 = {
        title: intl.string(intl7.t["59TVxL"]),
        items: recurrenceOptions,
        onItemSelect(c7) {
          onRecurrenceChange(c7);
          const obj = recurrenceRule(selectedItem[14]);
          obj.hideActionSheet();
        },
        selectedItem,
        hasIcons: false,
      };
      ActionSheetActionCreatorsDefault;
      const tmp3 = asyncRequire(8978, dependencyMap.paths);
      intl = intl7.intl;
      openLazy(tmp3, "SelectRecurrenceOption", obj2);
    },
    text: intl2.string(tmp2(1126).t["59TVxL"]),
    value: label,
    icon: recurrenceRule(9222),
    iconPosition: "end",
    accessibilityLabel: intl3.string(tmp2(1126).t["59TVxL"]),
    accessibilityHint: label,
  };
  const InputButton = tmp2(8602).InputButton;
  intl2 = tmp2(1126).intl;
  intl3 = tmp2(1126).intl;
  items1[1] = closure_11(InputButton, obj5);
  return closure_12(View, obj2);
};
export const GuildEventEntityTypeSelection = tmp6;
export const GuildEventDescription = tmp7;
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  let Stack;
  let items;
  let items1;
  let items2;
  let maximumDate;
  let obj3;
  const onPress = () => {
    let toDateResult;
    if (!disabled) {
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      const tmp6 = "date" === time ? dateLabel : timeLabel;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj2 = {
        onSubmit(set) {
          if ("date" !== time) {
            fn(set);
          } else {
            const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
            fn(set.set(obj));
          }
        },
        title: tmp6,
        startDate: date.toDate(),
        minimumDate: toDateResult,
        maximumDate: maximumDate.toDate(),
        requireDateChanged: true,
        mode: time,
      };
      ActionSheetActionCreatorsDefault;
      const tmp10 = asyncRequire(9229, dependencyMap.paths);
      if (null != dependencyMap) {
        toDateResult = dependencyMap.toDate();
      } else {
        toDateResult = date.toDate();
      }
      openLazy(tmp10, "DatePicker", obj2);
    }
  };
  dateLabel = dateLabel.dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(4467)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(4467)();
    const str = "days";
    const str2 = "month";
    const addResult = obj.add(30, "days");
    maximumDate = addResult.endOf("month");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {};
  }
  const tmp5 = closure_13();
  let obj2 = { style: tmp5.formGroup, children: closure_12(Stack, obj3) };
  obj3 = { direction: "horizontal", spacing: 16, children: items1 };
  const obj4 = { style: tmp5.dateInput, children: items };
  Stack = dateLabel(5600).Stack;
  items = [,];
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  items[0] = closure_11(dateLabel(4892).Text, obj5);
  const obj6 = { text: dateLabel, value: date.format("MMM Do YYYY"), onPress, disabled };
  const InputButton = dateLabel(8602).InputButton;
  date = "date";
  items[1] = closure_11(InputButton, obj6);
  items1 = [closure_12(disabled, obj4)];
  const obj7 = { style: tmp5.timeInput, children: items2 };
  items2 = [,];
  const obj8 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  items2[0] = closure_11(dateLabel(4892).Text, obj8);
  const obj9 = { text: timeLabel, value: date.format("LT"), onPress, disabled };
  const InputButton2 = dateLabel(8602).InputButton;
  const time = "time";
  items2[1] = closure_11(InputButton2, obj9);
  items1[1] = closure_12(disabled, obj7);
  return closure_11(disabled, obj2);
};
