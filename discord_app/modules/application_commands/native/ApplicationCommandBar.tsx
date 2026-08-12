// discord_app/modules/application_commands/native/ApplicationCommandBar.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "DescriptionEllipsis";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/void/native.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let StyleSheet;
let c10;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function ApplicationCommandOptionItem(arg0) {
  let option;
  let optionState;
  ({ option, optionState } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = createCacheKey();
  let flag;
  if (optionState != null) {
    flag = optionState.isActive;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = { accessibilityLabel: null, accessibilityRole: "button", disabled: null, style: null };
  const intl = getSystemLocale.intl;
  obj = { optionName: option.displayName };
  obj[0] = intl.formatToPlainString(getSystemLocale.t.evoEHc, obj);
  obj[2] = flag;
  const items = [tmp2.applicationCommandOption, , ];
  let activeCommandOption = flag;
  if (flag) {
    activeCommandOption = tmp2.activeCommandOption;
  }
  items[1] = activeCommandOption;
  let completeCommandOption = !flag;
  if (!flag) {
    let success;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success = lastValidationResult.success;
      }
    }
    completeCommandOption = success;
  }
  if (completeCommandOption) {
    completeCommandOption = tmp2.completeCommandOption;
  }
  items[2] = completeCommandOption;
  obj[3] = items;
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.applicationCommandOptionText, , , ];
  let activeCommandOptionText = flag;
  if (flag) {
    activeCommandOptionText = tmp2.activeCommandOptionText;
  }
  items1[1] = activeCommandOptionText;
  let completeCommandOptionText = !flag;
  if (!flag) {
    let success1;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success1 = lastValidationResult2.success;
      }
    }
    completeCommandOptionText = success1;
  }
  if (completeCommandOptionText) {
    completeCommandOptionText = tmp2.completeCommandOptionText;
  }
  items1[2] = completeCommandOptionText;
  let errorCommandOptionText = !flag;
  if (!flag) {
    let success2;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success2 = lastValidationResult3.success;
      }
    }
    errorCommandOptionText = false === success2;
  }
  if (errorCommandOptionText) {
    errorCommandOptionText = tmp2.errorCommandOptionText;
  }
  obj = { style: items1, numberOfLines: 1, children: option.displayName };
  items1[3] = errorCommandOptionText;
  obj.children = closure_8(Button.LegacyText, obj);
  return closure_8(PressableBase.PressableOpacity, obj);
}
({ View: c5, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { applicationCommandBar: null, applicationIcon: null, applicationTopWrapperScrollView: null, applicationName: null, applicationOptionalOptionsDivider: null, applicationOptionalOptionsDividerWithNoRequired: null, applicationOptionalOptionsIndicator: null, applicationDescriptionContainer: null, applicationDescriptionDivider: null, applicationCommandOption: null, applicationCommandOptionText: null, activeCommandOption: null, activeCommandOptionText: null, completeCommandOptionText: null, errorCommandOptionText: null, optionDescriptionContainer: null, descriptionEllipsis: null, descriptionEllipsisDots: null, completeCommandOption: null };
createCacheKey = { flexDirection: "column", backgroundColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: require("Themes").modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: require("Themes").modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 24, height: 24, borderRadius: require("Themes").radii.md, marginRight: 16 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 };
createCacheKey[3] = { textAlignVertical: "center", marginRight: 12 };
let obj1 = { width: 24, height: 24, borderRadius: require("Themes").radii.md, marginRight: 16 };
createCacheKey[4] = { width: StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, height: "100%" };
createCacheKey[5] = { marginLeft: 4 };
createCacheKey[6] = { marginHorizontal: 4, paddingVertical: 8 };
createCacheKey[7] = { flexShrink: 1 };
let obj2 = { width: StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, height: "100%" };
createCacheKey[8] = { marginLeft: 0, backgroundColor: require("Themes").colors.MOBILE_COMMAND_BAR_DIVIDER };
let obj3 = { marginLeft: 0, backgroundColor: require("Themes").colors.MOBILE_COMMAND_BAR_DIVIDER };
createCacheKey[9] = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: require("Themes").radii.xs, backgroundColor: require("result").DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
let obj4 = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: require("Themes").radii.xs, backgroundColor: require("result").DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
createCacheKey[10] = { color: require("Themes").colors.TEXT_DEFAULT };
let obj5 = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[11] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[12] = { color: require("Themes").colors.WHITE };
createCacheKey[13] = { opacity: 0.5 };
const obj7 = { color: require("Themes").colors.WHITE };
createCacheKey[14] = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[15] = { overflow: "hidden", paddingHorizontal: 16, paddingVertical: 8, flexDirection: "row" };
const obj8 = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[16] = { marginLeft: 10, backgroundColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
const obj9 = { marginLeft: 10, backgroundColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createCacheKey[17] = { backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const obj10 = { backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[18] = { backgroundColor: require("result").DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
function ApplicationCommandOptionDescription(option) {
  let c6;
  let tmp10;
  option = option.option;
  const optionState = option.optionState;
  let importDefault;
  let first;
  let callback;
  let first1;
  let closure_5;
  c6 = undefined;
  let c7;
  const tmp = createCacheKey();
  const tmp4 = importDefault(first[16])(option);
  importDefault = tmp4;
  const tmp5 = callback(first1.useState(undefined), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState(0), 2);
  first1 = tmp7[0];
  closure_5 = tmp7[1];
  [tmp10, c6] = callback(first1.useState(0), 2);
  const tmp11 = importDefault(first[16])(first1);
  c7 = tmp11;
  const items = [tmp4, option, first1, tmp11];
  const effect = first1.useEffect(() => {
    if (c1 !== option) {
      callback2(0);
      _undefined(0);
      callback(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === c7;
      }
      if (tmp2) {
        callback(1);
      }
    }
  }, items);
  const items1 = [first];
  let tmp14 = 1 === first;
  callback = first1.useCallback(() => {
    _slicedToArray(1);
  }, items1);
  if (tmp14) {
    tmp14 = tmp10 === first1;
  }
  let str = "button";
  if (tmp14) {
    str = "text";
  }
  let obj = { accessibilityRole: str, disabled: tmp14, onPress: callback, children: null };
  obj = { style: tmp.optionDescriptionContainer, children: null };
  obj = { style: tmp.applicationDescriptionContainer, children: null };
  let error;
  if (optionState != null) {
    if (optionState.lastValidationResult != null) {
      error = lastValidationResult.error;
    }
  }
  function onDescriptionLayout(nativeEvent) {
    const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
    let tmp2 = undefined === first;
    if (!tmp2) {
      tmp2 = truncResult > first1;
    }
    if (tmp2) {
      callback2(truncResult);
    }
    _undefined(truncResult);
  }
  if (null != error) {
    const obj1 = { lineClamp: null, onLayout: null, variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    obj1[0] = first;
    obj1[1] = onDescriptionLayout;
    obj1[4] = optionState.lastValidationResult.error;
    let obj2 = obj1;
  } else {
    obj2 = { lineClamp: null, onLayout: null, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
    obj2[0] = first;
    obj2[1] = onDescriptionLayout;
    obj2[4] = null != option ? option.displayDescription : option.command.displayDescription;
  }
  obj[1] = closure_8(option(first[14]).Text, obj2);
  const items2 = [closure_8(closure_5, obj), ];
  let tmp15Result = null;
  if (tmp10 !== first1) {
    ({ descriptionEllipsis: obj6[0], descriptionEllipsisDots: obj6[1] } = tmp);
    tmp15Result = tmp15(importDefault(tmp3[17]), { style: null, dotStyle: null });
    const obj3 = { style: null, dotStyle: null };
  }
  items2[1] = tmp15Result;
  obj[1] = items2;
  obj[3] = closure_10(closure_5, obj);
  return closure_8(option(first[8]).PressableOpacity, obj);
}
const obj11 = { backgroundColor: require("result").DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default function _default(command) {
  let c10;
  let c9;
  let currentOption;
  let dependencyMap;
  let tmp4;
  let tmp6;
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  let c6;
  let ref;
  let callback2;
  c9 = undefined;
  c10 = undefined;
  let first;
  let closure_12;
  let stateFromStores;
  let closure_14;
  let tmp = first();
  c6 = tmp;
  ref = optionStates.useRef(null);
  callback2 = optionStates.useRef({});
  [tmp4, c9] = currentOption(optionStates.useState(false), 2);
  const tmp3 = currentOption(optionStates.useState(false), 2);
  [tmp6, c10] = currentOption(optionStates.useState(false), 2);
  const tmp7 = currentOption(optionStates.useState(), 2);
  first = tmp7[0];
  closure_12 = tmp7[1];
  const items = [command];
  const effect = optionStates.useEffect(() => {
    let options = false;
    let c1 = false;
    options = options.options;
    if (options != null) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          let c0 = true;
        } else {
          let c1 = true;
        }
      });
    }
    _undefined2(options);
    _undefined3(c1);
  }, items);
  const items1 = [currentOption];
  const effect1 = optionStates.useEffect(() => {
    let name;
    if (currentOption != null) {
      name = currentOption.name;
    }
    closure_12(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = optionStates.useEffect(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = ref.current[tmp];
    }
    if (null != tmp2) {
      const current = ref.current;
      if (current != null) {
        const obj = { x: null, animated: true };
        obj[0] = tmp2.x - _undefined.applicationTopWrapperScrollView.paddingHorizontal;
        current.scrollTo(obj);
      }
    }
  }, items2);
  let obj = command(589);
  const items3 = [ref];
  stateFromStores = obj.useStateFromStores(items3, () => {
    if (null != closure_2) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return ref.getMember(tmp, tmp2.botId);
      }
    }
  });
  const items4 = [section, stateFromStores];
  const memo = optionStates.useMemo(() => command(outer1_2[12]).getApplicationCommandsIconSource(section, stateFromStores), items4);
  closure_14 = optionStates.useCallback((nativeEvent, name) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    current[name.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
    ref.current = current;
  }, []);
  let name;
  if (currentOption != null) {
    name = currentOption.name;
  }
  let tmp17;
  if (null != name) {
    let name1;
    if (currentOption != null) {
      name1 = currentOption.name;
    }
    tmp17 = optionStates[name1];
  }
  obj = { style: tmp.applicationCommandBar, children: null };
  obj = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, horizontal: true, children: null };
  let tmp22 = null != memo;
  if (tmp22) {
    const obj1 = { style: null, source: null };
    obj1[0] = tmp.applicationIcon;
    obj1[1] = memo;
    tmp22 = callback2(section(5307), obj1);
  }
  const items5 = [tmp22, callback2(command(4340).Text, { style: tmp.applicationName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` }), , ];
  let options = command.options;
  let mapped;
  if (options != null) {
    mapped = options.map((required) => {
      let closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = { option: null, onPress: null, optionState: null, onLayout: null };
        obj[0] = required;
        obj[1] = function onPress() {
          let tmpResult;
          if (outer1_5 != null) {
            tmpResult = tmp(closure_0);
          }
          return tmpResult;
        };
        obj[2] = optionStates[required.name];
        obj[3] = function onLayout(arg0) {
          return outer1_14(arg0, closure_0);
        };
        tmp = ref(closure_12, obj, required.name);
      }
      return tmp;
    });
  }
  items5[2] = mapped;
  let tmp19Result = null;
  if (tmp4) {
    const items6 = [tmp.applicationOptionalOptionsDivider, ];
    let applicationOptionalOptionsDividerWithNoRequired = !tmp6;
    if (!tmp6) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    const obj3 = { style: null };
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    obj3[0] = items6;
    const items7 = [tmp25(tmp20, obj3), , ];
    const obj4 = { style: null, lineClamp: 1, variant: "eyebrow", color: "text-muted", children: null };
    obj4[0] = tmp.applicationOptionalOptionsIndicator;
    const intl = tmp12(1236).intl;
    obj4[4] = intl.string(tmp12(1236).t.U19GM3);
    items7[1] = tmp25(tmp12(4340).Text, obj4);
    const options1 = command.options;
    let mapped1;
    if (options1 != null) {
      mapped1 = options1.map((required) => {
        let closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = { option: null, onPress: null, optionState: null, onLayout: null };
          obj[0] = required;
          obj[1] = function onPress() {
            return outer1_5(closure_0);
          };
          obj[2] = optionStates[required.name];
          obj[3] = function onLayout(arg0) {
            return outer1_14(arg0, closure_0);
          };
          tmp = ref(closure_12, obj, required.name);
        }
        return tmp;
      });
    }
    const obj5 = { children: null };
    items7[2] = mapped1;
    obj5[0] = items7;
    tmp19Result = tmp19(c9, obj5);
    const tmp28 = c9;
  }
  items5[3] = tmp19Result;
  obj[5] = items5;
  const items8 = [c10(c6, obj), callback2(command(8008).FormDivider, { style: tmp.applicationDescriptionDivider }), callback2(stateFromStores, { command, option: currentOption, optionState: tmp17 }), callback2(command(8008).FormDivider, { style: tmp.applicationDescriptionDivider })];
  obj[1] = items8;
  return c10(onPressOption, obj);
};