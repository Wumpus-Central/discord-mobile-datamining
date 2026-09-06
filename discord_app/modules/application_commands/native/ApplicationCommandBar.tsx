// discord_app/modules/application_commands/native/ApplicationCommandBar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import usePreviousDefault from "../../../hooks/usePrevious.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import DescriptionEllipsisDefault from "../../../components_native/common/DescriptionEllipsis.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
function ApplicationCommandOptionItem(arg0) {
  ({ option, optionState } = arg0);
  const merged = Object.assign(arg0, Object.assign({ option: 0, optionState: 0 }));
  const tmp2 = closure_11();
  let flag;
  if (optionState != null) {
    flag = optionState.isActive;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = { accessibilityLabel: null, accessibilityRole: "button", disabled: null, style: null };
  const intl = util.intl;
  obj = { optionName: option.displayName };
  obj.accessibilityLabel = intl.formatToPlainString(util.t.evoEHc, obj);
  obj.disabled = flag;
  const items = [tmp2.applicationCommandOption, ,];
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
  obj.style = items;
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.applicationCommandOptionText, , ,];
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
  obj.children = React6(native.LegacyText, obj);
  return React6(Pressables.PressableOpacity, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = {
  applicationCommandBar: null,
  applicationIcon: null,
  applicationTopWrapperScrollView: null,
  applicationName: null,
  applicationOptionalOptionsDivider: null,
  applicationOptionalOptionsDividerWithNoRequired: null,
  applicationOptionalOptionsIndicator: null,
  applicationDescriptionContainer: null,
  applicationDescriptionDivider: null,
  applicationCommandOption: null,
  applicationCommandOptionText: null,
  activeCommandOption: null,
  activeCommandOptionText: null,
  completeCommandOptionText: null,
  errorCommandOptionText: null,
  optionDescriptionContainer: null,
  descriptionEllipsis: null,
  descriptionEllipsisDots: null,
  completeCommandOption: null,
};
createStyles = {
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
  overflow: "hidden",
};
createStyles.applicationCommandBar = createStyles;
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md, marginRight: 16 };
createStyles.applicationIcon = size;
createStyles.applicationTopWrapperScrollView = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 8,
};
createStyles.applicationName = { textAlignVertical: "center", marginRight: 12 };
const size1 = {
  width: StyleSheet.hairlineWidth,
  marginVertical: 8,
  marginHorizontal: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  height: "100%",
};
createStyles.applicationOptionalOptionsDivider = size1;
createStyles.applicationOptionalOptionsDividerWithNoRequired = { marginLeft: 4 };
createStyles.applicationOptionalOptionsIndicator = { marginHorizontal: 4, paddingVertical: 8 };
createStyles.applicationDescriptionContainer = { flexShrink: 1 };
createStyles.applicationDescriptionDivider = {
  marginLeft: 0,
  backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER,
};
let obj1 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
createStyles.applicationCommandOption = {
  marginHorizontal: 4,
  padding: 8,
  fontSize: 12,
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: fn(5441).DARK_PRIMARY_800_LIGHT_PRIMARY_300,
};
let obj2 = {
  marginHorizontal: 4,
  padding: 8,
  fontSize: 12,
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: fn(5441).DARK_PRIMARY_800_LIGHT_PRIMARY_300,
};
createStyles.applicationCommandOptionText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.activeCommandOption = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.activeCommandOptionText = { color: nativeDefault.colors.WHITE };
createStyles.completeCommandOptionText = { opacity: 0.5 };
let obj5 = { color: nativeDefault.colors.WHITE };
createStyles.errorCommandOptionText = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.optionDescriptionContainer = {
  overflow: "hidden",
  paddingHorizontal: 16,
  paddingVertical: 8,
  flexDirection: "row",
};
const obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.descriptionEllipsis = {
  marginLeft: 10,
  backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
};
const obj7 = { marginLeft: 10, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles.descriptionEllipsisDots = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj8 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.completeCommandOption = { backgroundColor: fn(5441).DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
let closure_11 = createStyles.createStyles(createStyles);
function ApplicationCommandOptionDescription(option) {
  option = option.option;
  const optionState = option.optionState;
  c6 = undefined;
  const tmp = closure_11();
  const tmp4 = usePreviousDefault(option);
  closure_1 = tmp4;
  const tmp5 = _slicedToArray(noop.useState(undefined), 2);
  const lineClamp = tmp5[0];
  closure_3 = tmp5[1];
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  const first1 = tmp7[0];
  closure_5 = tmp7[1];
  [tmp10, c6] = _slicedToArray(noop.useState(0), 2);
  const tmp11 = usePreviousDefault(first1);
  closure_7 = tmp11;
  const items = [tmp4, option, first1, tmp11];
  const effect = noop.useEffect(() => {
    if (closure_1 !== option) {
      closure_5(0);
      _undefined(0);
      closure_3(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === closure_7;
      }
      if (tmp2) {
        closure_3(1);
      }
    }
  }, items);
  const items1 = [lineClamp];
  let tmp14 = 1 === lineClamp;
  const callback = noop.useCallback(() => {
    closure_3(1);
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
      closure_5(truncResult);
    }
    _undefined(truncResult);
  }
  if (null != error) {
    const obj1 = {
      lineClamp,
      onLayout: onDescriptionLayout,
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      children: optionState.lastValidationResult.error,
    };
    let obj2 = obj1;
  } else {
    obj2 = {
      lineClamp,
      onLayout: onDescriptionLayout,
      variant: "text-sm/medium",
      color: "mobile-text-heading-primary",
      children: null != option ? option.displayDescription : option.command.displayDescription,
    };
  }
  obj.children = React6(Text_Text.Text, obj2);
  const items2 = [React6(hasOwnProperty, obj)];
  let tmp15Result = null;
  if (tmp10 !== first1) {
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp15Result = React6(DescriptionEllipsisDefault, { style: null, dotStyle: null });
    const obj3 = { style: null, dotStyle: null };
  }
  items2[1] = tmp15Result;
  obj.children = items2;
  obj.children = closure_1_10(hasOwnProperty, obj);
  return React6(Pressables.PressableOpacity, obj);
}
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default function _default(command) {
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  c9 = undefined;
  c10 = undefined;
  let first;
  let tmp = first();
  closure_6 = tmp;
  optionStates.useRef(null);
  const ref = optionStates.useRef({});
  [tmp4, c9] = currentOption(optionStates.useState(false), 2);
  const tmp3 = currentOption(optionStates.useState(false), 2);
  [tmp6, c10] = currentOption(optionStates.useState(false), 2);
  const tmp7 = currentOption(optionStates.useState(), 2);
  first = tmp7[0];
  closure_12 = tmp7[1];
  const items = [command];
  const effect = optionStates.useEffect(() => {
    c0 = false;
    c1 = false;
    const options = command.options;
    if (options != null) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          c0 = true;
        } else {
          c1 = true;
        }
      });
    }
    _undefined(c0);
    _undefined2(c1);
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
        const obj = { x: tmp2.x - closure_6.applicationTopWrapperScrollView.paddingHorizontal, animated: true };
        current.scrollTo(obj);
      }
    }
  }, items2);
  let obj = command(504);
  const items3 = [ref];
  const stateFromStores = obj.useStateFromStores(items3, () => {
    if (null != dependencyMap) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items4 = [section, stateFromStores];
  const memo = optionStates.useMemo(
    () => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores),
    items4,
  );
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
  obj = {
    ref,
    contentContainerStyle: tmp.applicationTopWrapperScrollView,
    keyboardShouldPersistTaps: "always",
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: null,
  };
  let tmp22 = null != memo;
  if (tmp22) {
    const obj1 = { style: tmp.applicationIcon, source: memo };
    tmp22 = ref(section(5587), obj1);
  }
  const items5 = [
    tmp22,
    ref(command(4556).Text, {
      style: tmp.applicationName,
      lineClamp: 1,
      variant: "text-sm/semibold",
      color: "mobile-text-heading-primary",
      children: `/ ${command.displayName}`,
    }),
    ,
  ];
  let options = command.options;
  let mapped;
  if (options != null) {
    mapped = options.map((required) => {
      closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
            let tmpResult;
            if (onPressOption != null) {
              tmpResult = tmp(closure_0);
            }
            return tmpResult;
          },
          optionState: optionStates[required.name],
          onLayout(arg0) {
            return closure_14(arg0, closure_0);
          },
        };
        tmp = ref(closure_12, obj, required.name);
      }
      return tmp;
    });
  }
  items5[2] = mapped;
  let tmp19Result = null;
  if (tmp4) {
    const items6 = [tmp.applicationOptionalOptionsDivider];
    let applicationOptionalOptionsDividerWithNoRequired = !tmp6;
    if (!tmp6) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    const obj3 = { style: null };
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    obj3.style = items6;
    const items7 = [tmp25(tmp20, obj3), ,];
    const obj4 = {
      style: tmp.applicationOptionalOptionsIndicator,
      lineClamp: 1,
      variant: "eyebrow",
      color: "text-muted",
      children: null,
    };
    const intl = tmp12(1114).intl;
    obj4.children = intl.string(tmp12(1114).t.U19GM3);
    items7[1] = tmp25(tmp12(4556).Text, obj4);
    const options1 = command.options;
    let mapped1;
    if (options1 != null) {
      mapped1 = options1.map((required) => {
        closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
              return onPressOption(closure_0);
            },
            optionState: optionStates[required.name],
            onLayout(arg0) {
              return closure_14(arg0, closure_0);
            },
          };
          tmp = ref(closure_12, obj, required.name);
        }
        return tmp;
      });
    }
    const obj5 = { children: null };
    items7[2] = mapped1;
    obj5.children = items7;
    tmp19Result = tmp19(c9, obj5);
  }
  items5[3] = tmp19Result;
  obj.children = items5;
  const items8 = [
    c10(closure_6, obj),
    ref(command(8593).FormDivider, { style: tmp.applicationDescriptionDivider }),
    ref(stateFromStores, { command, option: currentOption, optionState: tmp17 }),
    ref(command(8593).FormDivider, { style: tmp.applicationDescriptionDivider }),
  ];
  obj.children = items8;
  return c10(onPressOption, obj);
}
