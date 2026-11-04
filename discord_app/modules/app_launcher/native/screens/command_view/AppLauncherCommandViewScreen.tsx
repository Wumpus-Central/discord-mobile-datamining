// discord_app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import _modDef1652 from "../../../../../../_runtime/metro/01652__.js";
import Server from "../../../../../flow/Server.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05723_LinearGradient.js";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import BaseTextButton from "../../../../../design/components/Button/native/BaseTextButton.native.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import usePreviousDefault from "../../../../../hooks/usePrevious.tsx";
import ApplicationCommandUtils from "../../../../application_commands/ApplicationCommandUtils.tsx";
import Upload from "../../../../../lib/uploader/Upload.tsx";
import utils_UploadUtils from "../../../../../utils/native/UploadUtils.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import MediaKeyboardUtils from "../../../../media_keyboard/native/MediaKeyboardUtils.tsx";
import showMediaKeyboardActionSheet from "../../../../media_keyboard/native/showMediaKeyboardActionSheet.tsx";
import useKeyboardActionSheetHeightDefault from "../../../../action_sheet/native/useKeyboardActionSheetHeight.tsx";
import AppLauncherContext from "../../AppLauncherContext.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import ApplicationCommandOptionValueParser from "../../../../chat_input/native/ApplicationCommandOptionValueParser.tsx";
import _modDef12662 from "../../../../../../_runtime/metro/12662__.js";
import _modDef12663 from "../../../../../../_runtime/metro/12663__.js";
import AppLauncherCommandViewHeader from "AppLauncherCommandViewHeader.tsx";
import ApplicationCommandValidationUtils from "../../../../application_commands/ApplicationCommandValidationUtils.tsx";
import application_commands_ApplicationCommandValidationUtils from "../../../../application_commands/native/ApplicationCommandValidationUtils.tsx";
import useLatchDefault from "../../hooks/useLatch.tsx";
import CommandOptionViewDefault from "CommandOptionView.tsx";
import _modDef12746 from "../../../../../../_runtime/metro/12746__.js";
import _modDef12747 from "../../../../../../_runtime/metro/12747__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

require = fn;
function AppLauncherCommandViewFooter(onHeightChange) {
  _require = onHeightChange.onHeightChange;
  ({ enableSubmit, onSubmit, animatedStyle, isSending, footerStickyInsetBottom } = onHeightChange);
  const tmp = closure_23();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = require("initialize");
  [tmp7, c2] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  let items1 = [
    closure_25,
    stateFromStores,
    tmp7,
    require("../../../../../../_runtime/metro/01652__.js").withDelay,
    require("timing/timing").withTiming,
    require("timingPresets").timingStandard,
    closure_24,
    require("../../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    require("HapticUtils").triggerHapticFeedback,
    require("HapticUtils").HapticFeedbackTypes,
    isSending,
  ];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  dependencyMap = undefined;
  c4 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class AppLauncherCommandViewScreenTsx2 {
    constructor() {
      if (closure_0) {
        obj1 = {};
      } else {
        tmp = closure_1;
        if (closure_1) {
          tmp5 = closure_4;
          tmp6 = closure_5;
          items = [, , ,];
          items[0] = closure_5;
          tmp7 = closure_6;
          items[1] = closure_6;
          tmp8 = closure_7;
          items[2] = closure_7;
          tmp9 = closure_8;
          items[3] = closure_8;
          tmp10 = items;
          [tmp11, tmp12, tmp13, tmp14] = items;
          obj6 = { opacity: 1, transform: null };
          obj7 = { translateX: null };
          class AppLauncherCommandViewScreenTsx1 {
            constructor() {
              return closure_0(closure_1, closure_2.IMPACT_LIGHT);
            }
          }
          items1 = [, ,];
          items1[0] = tmp12;
          items1[1] = tmp13;
          items1[2] = tmp14;
          AppLauncherCommandViewScreenTsx1.__closure = items1;
          num3 = 323925726197;
          AppLauncherCommandViewScreenTsx1.__workletHash = 323925726197;
          AppLauncherCommandViewScreenTsx1.__initData = tmp11;
          str = "respect-motion-settings";
          num4 = -4;
          tmp15 = tmp5;
          tmp16 = AppLauncherCommandViewScreenTsx1;
          tmp4 = closure_2;
          num5 = 100;
          obj7.translateX = tmp4(100, closure_3(-4, tmp5, "respect-motion-settings", AppLauncherCommandViewScreenTsx1));
          items2 = [];
          items2[0] = obj7;
          obj6.transform = items2;
          obj1 = obj6;
        } else {
          tmp2 = closure_3;
          obj = closure_9;
          num = 1;
          if (closure_9.get()) {
            num = 0;
          }
          obj1 = { opacity: null, transform: null };
          tmp3 = closure_4;
          obj1.opacity = tmp2(num, closure_4);
          num2 = 0;
          if (obj.get()) {
            num2 = 100;
          }
          obj8 = { translateX: null };
          obj8.translateX = tmp2(num2, tmp3);
          items3 = [];
          items3[0] = obj8;
          class AppLauncherCommandViewScreenTsx1 {
            constructor() {
              return closure_0(closure_1, closure_2.IMPACT_LIGHT);
            }
          }
        }
      }
      return obj1;
    }
  }
  let items2 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  AppLauncherCommandViewScreenTsx2.__closure = items2;
  AppLauncherCommandViewScreenTsx2.__workletHash = 1083775890910;
  AppLauncherCommandViewScreenTsx2.__initData = tmp8;
  const animatedStyle1 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    AppLauncherCommandViewScreenTsx2,
  );
  let obj3 = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      _undefined2(height);
      if (_undefined != null) {
        _undefined(height);
      }
    },
    style: null,
    children: null,
  };
  let items3 = [tmp.footerContainer, animatedStyle];
  obj3.style = items3;
  let obj4 = {
    style: {
      width: "100%",
      top: -12,
      bottom: -footerStickyInsetBottom,
      left: tmp.footerContainer.paddingHorizontal,
      position: "absolute",
    },
    start: constants3.START,
    end: null,
    colors: null,
    pointerEvents: "none",
  };
  const point = { x: 0, y: 12 / (tmp2[0] + 12) };
  obj4.end = point;
  let obj2 = require("../../../../../../_runtime/metro/01652__.js");
  const tmp20 = LinearGradientDefault;
  const items4 = [
    require("ColorUtils").hexWithOpacity(tmp.linearGradient.backgroundColor, 0),
    tmp.linearGradient.backgroundColor,
  ];
  obj4.colors = items4;
  const items5 = [closure_20(tmp20, obj4)];
  let obj5 = {
    onPress: onSubmit,
    onPressIn() {
      return _undefined3(true);
    },
    onPressOut() {
      return _undefined3(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton,
    text: null,
    icon: null,
    iconPosition: "end",
  };
  const intl = tmp3(1113).intl;
  obj5.text = intl.string(require("util").t.TXNS7S);
  const obj6 = { style: animatedStyle1, children: null };
  const tmp3Result = require("ColorUtils");
  obj6.children = closure_20(require("SendMessageIcon").SendMessageIcon, {
    style: { marginLeft: 8 },
    color: nativeDefault.unsafe_rawColors.WHITE,
    size: "sm",
  });
  obj5.icon = closure_20(_modDef1652.View, obj6);
  items5[1] = closure_20(require("BaseTextButton").BaseTextButton, obj5);
  obj3.children = items5;
  return closure_21(_modDef1652.View, obj3);
}
function AppLauncherCommandViewInner(command) {
  command = command.command;
  _require = command;
  const context = command.context;
  importDefault = context;
  ({ preSelectedCommand, installOnDemand } = command);
  c2 = installOnDemand;
  const sectionName = command.sectionName;
  dependencyMap = sectionName;
  const analyticsLocation = command.analyticsLocation;
  const onCommandExecuted = command.onCommandExecuted;
  let ref4;
  let prefilledOptions;
  let guild_id;
  let stateFromStores;
  let ref6;
  let ref7;
  let ref8;
  closure_23 = undefined;
  c24 = undefined;
  let first;
  closure_26 = undefined;
  let ref9;
  let first1;
  closure_29 = undefined;
  let ref10;
  c31 = undefined;
  let optionValues;
  let first2;
  closure_34 = undefined;
  closure_35 = undefined;
  let first3;
  closure_37 = undefined;
  let first4;
  closure_39 = undefined;
  let first5;
  let setFocusedOption;
  let sum1;
  let sharedValue;
  let sharedValue1;
  let callback1;
  let callback2;
  let id;
  let commandContext;
  let callback3;
  let onStartEditing;
  let callback5;
  let callback6;
  let onPressAttachmentOption;
  let setLatch;
  let tryCallback;
  let onOptionViewLayout;
  let onDismiss;
  closure_58 = undefined;
  ({ section, loading, hasPermissions } = command);
  const tmp = closure_23();
  noop = tmp;
  const tmp2 = ref4();
  closure_7 = tmp2;
  const requiredAppLauncherContext = require("AppLauncherContext").useRequiredAppLauncherContext();
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  noop.useRef(null);
  const ref = noop.useRef({});
  const ref2 = noop.useRef({});
  noop.useRef(0);
  ref4 = noop.useRef(0);
  noop.useRef(0);
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  id = undefined;
  if (command != null) {
    id = command.id;
  }
  let tmp9 = null;
  if (commandId === id) {
    prefilledOptions = undefined;
    if (preSelectedCommand != null) {
      prefilledOptions = preSelectedCommand.prefilledOptions;
    }
    if (prefilledOptions == null) {
      prefilledOptions = null;
    }
    tmp9 = prefilledOptions;
  }
  prefilledOptions = tmp9;
  guild_id = context.channel.guild_id;
  let obj = require("AppLauncherContext");
  items = [ref2];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleStore.getRolesSnapshot(guild_id));
  ref6 = obj2.useRef(false);
  ref7 = obj2.useRef(Date.now());
  ref8 = obj2.useRef(null);
  closure_23 = obj2.useRef(false);
  const items1 = [command];
  const effect = obj2.useEffect(() => {
    if (null != current) {
      current = ref8.current;
      return () => {
        if (!ref.current) {
          const _Date = Date;
          const diff = Date.now() - current;
          const obj2 = { time_spent: diff, num_options: null, used_options: null, last_used_option_type: null };
          options = options.options;
          let num;
          if (options != null) {
            num = options.length;
          }
          if (num == null) {
            num = 0;
          }
          obj2.num_options = num;
          obj2.used_options = current;
          obj2.last_used_option_type = current;
          AppAnalyticsUtils.trackWithMetadata(constants2.APP_LAUNCHER_COMMAND_CLOSED, obj2);
        }
      };
    }
  }, items1);
  const items2 = [chatInputRef, keyboardCloseReasonRef, tmp2];
  const callback = obj2.useCallback(() => {
    if (closure_7.canGoBack()) {
      closure_7.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items2);
  const tmp3Result = require("initialize");
  [arr4, c24] = onCommandExecuted(noop.useState([]), 2);
  const tmp15 = onCommandExecuted(noop.useState([]), 2);
  first = tmp15[0];
  closure_26 = tmp15[1];
  const tmp14 = onCommandExecuted(noop.useState([]), 2);
  ref9 = obj2.useRef(new Set());
  const tmp17 = onCommandExecuted(noop.useState([]), 2);
  first1 = tmp17[0];
  closure_29 = tmp17[1];
  let set = new Set();
  ref10 = obj2.useRef(new Set());
  const set1 = new Set();
  [tmp20, c31] = onCommandExecuted(noop.useState([]), 2);
  optionValues = obj2.useRef({});
  const tmp21 = onCommandExecuted(noop.useState({}), 2);
  first2 = tmp21[0];
  closure_34 = tmp21[1];
  let tmp23 = onCommandExecuted(noop.useState(true), 2);
  closure_35 = tmp23[1];
  const tmp19 = onCommandExecuted(noop.useState([]), 2);
  const tmp25 = onCommandExecuted(noop.useState(new Set()), 2);
  first3 = tmp25[0];
  closure_37 = tmp25[1];
  const tmp27 = onCommandExecuted(noop.useState(0), 2);
  first4 = tmp27[0];
  closure_39 = tmp27[1];
  const tmp29 = onCommandExecuted(noop.useState(null), 2);
  first5 = tmp29[0];
  setFocusedOption = tmp29[1];
  const tmp32 = onCommandExecuted(noop.useState(0), 2);
  let sum =
    useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets
      .bottom + tmp32[0];
  sum1 = sum + nativeDefault.space.PX_16;
  let sum2 =
    useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets
      .bottom + nativeDefault.space.PX_16;
  const set2 = new Set();
  sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp3Result6 = require("../../../../../../_runtime/metro/01652__.js");
  sharedValue1 = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items3 = [first4, sum1, sharedValue1];
  callback1 = obj2.useCallback((required) => {
    const diff = first4 - sum1;
    const diff1 = diff - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (null != ref.current[required.name]) {
        if (diff1 > 0) {
          if (required.required) {
            let current3 = ref3.current;
          } else {
            current3 = ref4.current;
          }
          const sum = tmp9 + current3;
          const diff2 = sum - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
          let num = ref2.current[required.name];
          if (num == null) {
            num = 0;
          }
          sum1 = diff2 + num;
          value = sharedValue1.get();
          const sum2 = value + diff1;
          if (num >= diff1) {
            if (tmp23) {
              const current5 = ref.current;
              let scrollToResult;
              if (current5 != null) {
                const obj2 = { y: null, animated: true };
                const _Math2 = Math;
                obj2.y = Math.max(0, sum1 - diff1);
                scrollToResult = current5.scrollTo(obj2);
              }
            }
            tmp23 = sum1 < value || sum1 > sum2;
          } else {
            if (sum1 > value) {
              if (diff2 < sum2) {
                let diff3 = diff2;
                if (sum1 > sum2) {
                  diff3 = sum1 - diff1;
                }
              }
              const current4 = ref.current;
              if (current4 != null) {
                const obj = { y: null, animated: true };
                const _Math = Math;
                obj.y = Math.max(0, diff3);
                current4.scrollTo(obj);
              }
            }
            diff3 = diff2 - diff1 / 2;
          }
        }
      }
    } else {
      const diff4 = ref5.current - diff1;
      if (sharedValue1.get() < 0) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollTo({ y: 0, animated: true });
        }
      } else {
        if (tmp5) {
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd({ animated: true });
          }
        }
        tmp5 = diff4 > 0 && sharedValue1.get() > diff4;
      }
    }
  }, items3);
  const items4 = [context.channel.guild_id, context.channel.id, first2];
  callback2 = obj2.useCallback((name, content) => {
    optionValues.current[name.name] = content;
    const obj = {};
    const merged = Object.assign(first2);
    const obj2 = ApplicationCommandValidationUtils;
    obj[name.name] = obj2.validateOptionContent({
      option: name,
      content,
      guildId: _undefined.channel.guild_id,
      channelId: _undefined.channel.id,
      allowEmptyValues: false,
      commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
    });
    closure_34(obj);
    closure_20.current = true;
    closure_22.current = name.type;
  }, items4);
  const tmp40 = usePreviousDefault(command);
  id = tmp40;
  const items5 = [guild_id, command, , , ,];
  let id1;
  if (tmp40 != null) {
    id1 = tmp40.id;
  }
  items5[2] = id1;
  items5[3] = tmp9;
  items5[4] = stateFromStores;
  items5[5] = context.channel.id;
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    if (closure_0 != null) {
      id = tmp.id;
    }
    let id1;
    if (id != null) {
      id1 = id.id;
    }
    if (id !== id1) {
      closure_0 = [];
      items = [];
      closure_2 = [];
      closure_3 = {};
      closure_32.current = {};
      if (tmp != null) {
        const options = tmp.options;
        if (options != null) {
          const item = options.forEach((required) => {
            const name = required;
            if (true !== required.required) {
              let someResult;
              if (prefilledOptions != null) {
                someResult = prefilledOptions.some((name) => name.name === name.name);
              }
              if (someResult) {
                items.push(required);
                const obj3 = {
                  option: required,
                  prefilledValues: prefilledOptions,
                  guildId: guild_id,
                  roles: stateFromStores,
                };
                closure_32.current[required.name] = AppLauncherNativeUtils.getInitialOptionValues(obj3);
                const obj5 = {
                  option: required,
                  content: closure_32.current[required.name],
                  guildId: guild_id,
                  channelId: items.channel.id,
                  allowEmptyValues: false,
                  commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
                };
                closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj5);
              } else {
                name.push(required);
              }
            } else {
              closure_2.push(required);
              const obj7 = {
                option: required,
                prefilledValues: prefilledOptions,
                guildId: guild_id,
                roles: stateFromStores,
              };
              closure_32.current[required.name] = AppLauncherNativeUtils.getInitialOptionValues(obj7);
              const obj9 = {
                option: required,
                content: closure_32.current[required.name],
                guildId: guild_id,
                channelId: items.channel.id,
                allowEmptyValues: false,
                commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
              };
              closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj9);
            }
          });
        }
      }
      command(sectionName[32]).batchUpdates(() => {
        closure_34(closure_3);
        c24(closure_2);
        items = [...items];
        closure_26(items);
        closure_29(items);
        c31(closure_0);
        closure_37(new Set());
      });
      let current = ref9.current;
      current.clear();
      const item1 = items.forEach((name) => {
        const current = ref.current;
        return current.add(name.name);
      });
      const current2 = ref10.current;
      current2.clear();
      const item2 = items.forEach((name) => {
        const current = ref2.current;
        return current.add(name.name);
      });
      const obj = command(sectionName[32]);
    }
  }, items5);
  const tmp3Result7 = require("../../../../../../_runtime/metro/01652__.js");
  commandContext = require("useCommandContext").useCommandContext(context);
  const items6 = [
    callback1,
    chatInputRef,
    command,
    commandContext,
    sharedValue,
    keyboardCloseReasonRef,
    onCommandExecuted,
    first2,
    sectionName,
  ];
  callback3 = obj2.useCallback(() => {
    if (null != command) {
      const firstInvalidOption = application_commands_ApplicationCommandValidationUtils.getFirstInvalidOption(
        command,
        first2,
      );
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const set = new Set(Object.keys(first2));
        closure_37(set);
        callback1(firstInvalidOption);
        const obj = { application_id: null, command_id: null, argument_type: null, is_required: null };
        ({ applicationId: obj2.application_id, rootCommand } = command);
        id = undefined;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        obj.command_id = id;
        let num = firstInvalidOption.type;
        if (num == null) {
          num = 3;
        }
        obj.argument_type = Server.ApplicationCommandOptionType[num];
        obj.is_required = firstInvalidOption.required;
        AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
        const tmp14Result = AppAnalyticsUtils;
      } else {
        closure_35(false);
        let result = sharedValue.set(true);
        closure_23.current = true;
        const obj4 = { command, optionValues: null, context: null, sectionName: null, commandOrigin: null };
        const tmp14Result3 = AppLauncherUtils;
        obj4.optionValues = ApplicationCommandOptionValueParser.parseOptionValuesForSend(
          commandContext.channel,
          command,
          optionValues.current,
        );
        obj4.context = commandContext;
        obj4.sectionName = sectionName;
        obj4.commandOrigin = ApplicationCommandTypes.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
        const result1 = tmp14Result3.executeAppLauncherCommand(obj4);
        const tmp14Result4 = ApplicationCommandOptionValueParser;
        result1
          .then(() => {
            const result = c0(5384).triggerHapticFeedback(c0(5384).HapticFeedbackTypes.IMPACT_MEDIUM);
            const timerId = setTimeout(() => {
              closure_1_8.current = command(11690).AppLauncherKeyboardCloseReason.COMMAND;
              const current = ref.current;
              if (current != null) {
                current.closeCustomKeyboard();
              }
              if (closure_1_5 != null) {
                closure_1_5();
              }
            }, 300);
          })
          .catch(() => {
            closure_1_35(true);
            const result = sharedValue.set(false);
          });
        const nextPromise = result1.then(() => {
          const result = c0(5384).triggerHapticFeedback(c0(5384).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_1_8.current = command(11690).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
            if (closure_1_5 != null) {
              closure_1_5();
            }
          }, 300);
        });
      }
    }
  }, items6);
  ref(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  const callback4 = obj2.useCallback(
    analyticsLocation(function* () {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c2 = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (c2) {
              if (null == tmp2) {
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const obj4 = {
                  applicationId: tmp2.applicationId,
                  channel: channel.channel,
                  commandIntegrationTypes: tmp2.integration_types,
                  appLauncherContext: null,
                };
                const obj6 = { entrypoint, location: analyticsLocation, sectionName };
                obj4.appLauncherContext = obj6;
                channel = 1;
                c2 = 1;
                const obj7 = { value: tmp2(sectionName[38]).installApplicationOnDemandIfNeeded(obj4), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (!value.isAuthorized) {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
          closure_128_49();
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    }),
    items7,
  );
  const tmp3Result8 = require("useCommandContext");
  const tmp3Result9 = require("AppLauncherContext");
  const items8 = [
    ref9,
    tmp3Result9.useRequiredAppLauncherContext().bottomSheetPosition,
    useWindowDimensionsDefault({ ignoreKeyboard: true }).height,
    useKeyboardActionSheetHeightDefault().maximum,
    sum2,
  ];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  dependencyMap = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items8;
  class AppLauncherCommandViewScreenTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: -closure_0.get() - closure_1 + closure_2 - closure_3 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp49, tmp50, tmp51, tmp52];
  AppLauncherCommandViewScreenTsx3.__closure = items9;
  AppLauncherCommandViewScreenTsx3.__workletHash = 6990790101682;
  AppLauncherCommandViewScreenTsx3.__initData = tmp48;
  const items10 = [first3, callback1];
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    AppLauncherCommandViewScreenTsx3,
  );
  onStartEditing = obj2.useCallback((name) => {
    first3.delete(name.name);
    closure_37(new Set(first3));
    callback1(name);
  }, items10);
  const items11 = [first3];
  let name;
  if (first5 != null) {
    name = first5.name;
  }
  items11[1] = name;
  callback5 = obj2.useCallback((name) => {
    first3.add(name.name);
    closure_37(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      setFocusedOption(null);
    }
    const set = new Set(first3);
  }, items11);
  const items12 = [command];
  callback6 = obj2.useCallback((arg0) => {
    if (null != c0) {
      ({ applicationId: obj2.application_id, id: obj2.command_id } = c0);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_OPTION_PRESSED, {
        application_id: null,
        command_id: null,
        option_name: null,
        option_type: null,
      });
      const obj3 = { application_id: null, command_id: null, option_name: null, option_type: null };
    }
  }, items12);
  const items13 = [chatInputRef, context.channel, callback5, callback6];
  onPressAttachmentOption = obj2.useCallback((option) => {
    let FILE_ATTACHMENT = option;
    let obj = { target: stateFromStores.APP_LAUNCHER, option };
    const mediaKeyboardDraftType = command(sectionName[41]).getMediaKeyboardDraftType(obj.target);
    let fileTypes;
    if (option.type === command(sectionName[35]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    let obj2 = command(sectionName[41]);
    const fileTypeFiltering = command(sectionName[42]).getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    ({ validateFilenames: analyticsLocation, showInvalidFileTypeAlert: onCommandExecuted } = fileTypeFiltering);
    callback6(option);
    let tmpResult = command(sectionName[42]);
    let result = command(sectionName[45]).dismissGlobalKeyboard();
    if (fileTypeFiltering.mediaFilesAllowed) {
      const obj3 = {
        channel: obj.channel,
        draftType: mediaKeyboardDraftType,
        extensions: allowedExtensions,
        uploadLimit: 1,
        disableWhenReachedLimit: false,
        includedUploadIds: null,
        onAttachPress: null,
        onPressCamera: null,
        onPressItem: null,
        onViewAll: null,
        onManageLimited: null,
        onClose: null,
        onBack: null,
      };
      items = [option.name];
      obj3.includedUploadIds = items;
      obj3.onAttachPress = function onAttachPress() {
        obj = FILE_ATTACHMENT(allowedExtensions[41]);
        FILE_ATTACHMENT = FILE_ATTACHMENT(allowedExtensions[46]).UploadOrigin.FILE_ATTACHMENT;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[43]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: prefilledOptions,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              channel.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        });
        obj.handleAttachFile({});
      };
      obj3.onPressCamera = function onPressCamera(previewType) {
        obj = FILE_ATTACHMENT(allowedExtensions[41]);
        const obj2 = {};
        const IMAGE_PICKER = FILE_ATTACHMENT(allowedExtensions[46]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[43]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: prefilledOptions,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              channel.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        });
        obj2.previewType = previewType;
        obj.handleCameraDialog(obj2);
      };
      obj3.onPressItem = function onPressItem(item) {
        obj = showMediaKeyboardActionSheet;
        const result = obj.hideMediaKeyboardActionSheet();
        const result1 = MediaKeyboardUtils.mediaNodeToUploadItem(item.item);
        if (allowedExtensions.length > 0) {
          items = [utils_UploadUtils.getFileFromUploadItem(result1).filename];
          if (!analyticsLocation(items)) {
            return onCommandExecuted();
          }
          const tmpResult = utils_UploadUtils;
        }
        const result2 = MediaKeyboardUtils.addAttachmentForCommand(
          item.channelId,
          chatInputRef,
          result1,
          obj,
          Upload.UploadOrigin.IMAGE_PICKER,
        );
        const tmpResult2 = MediaKeyboardUtils;
      };
      obj3.onViewAll = function onViewAll() {
        obj = FILE_ATTACHMENT(allowedExtensions[41]);
        let obj2 = {};
        const IMAGE_PICKER = FILE_ATTACHMENT(allowedExtensions[46]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[43]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: prefilledOptions,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              channel.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        });
        obj2.draftType = mediaKeyboardDraftType;
        obj.handleViewAllDialog(obj2);
      };
      obj3.onManageLimited = function onManageLimited() {
        obj = FILE_ATTACHMENT(allowedExtensions[41]);
        const result = obj.handleLimitedPickerDialog({
          onDismissKeyboard: FILE_ATTACHMENT(allowedExtensions[43]).hideMediaKeyboardActionSheet,
          onRestoreKeyboard,
        });
      };
      obj3.onClose = function onClose() {
        callback5(FILE_ATTACHMENT);
      };
      obj3.onBack = function onBack() {
        const result = FILE_ATTACHMENT(allowedExtensions[43]).hideMediaKeyboardActionSheet();
      };
      let result1 = command(sectionName[43]).showMediaKeyboardActionSheet(obj3);
      const tmpResult5 = command(sectionName[43]);
    } else {
      const obj4 = {};
      FILE_ATTACHMENT = command(sectionName[46]).UploadOrigin.FILE_ATTACHMENT;
      const obj5 = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
          return IMAGE_PICKER(allowedExtensions[43]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard: prefilledOptions,
        onSelectFiles(arg0) {
          if (allowedExtensions.length > 0) {
            obj = utils_UploadUtils;
            items = [obj.getFileFromUploadItem(arg0[0]).filename];
            if (!analyticsLocation(items)) {
              return onCommandExecuted();
            }
          }
          const result = MediaKeyboardUtils.addAttachmentForCommand(
            channel.channel.id,
            chatInputRef,
            arg0[0],
            obj,
            IMAGE_PICKER,
          );
        },
      };
      let merged = Object.assign(obj5);
      command(sectionName[41]).handleAttachFile(obj4);
      const tmpResult6 = command(sectionName[41]);
    }
    const tmpResult4 = command(sectionName[45]);
  }, items13);
  const tmp57 = useLatchDefault(() => {
    callback1(first5);
  });
  setLatch = tmp57.setLatch;
  tryCallback = tmp57.tryCallback;
  const items14 = [tryCallback];
  const callback7 = obj2.useCallback((nativeEvent) => {
    closure_14.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items15 = [first5, setLatch, callback1];
  const callback8 = obj2.useCallback((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items14);
  onOptionViewLayout = obj2.useCallback((nativeEvent, name) => {
    ({ height, y: closure_12.current[name.name] } = nativeEvent.nativeEvent.layout);
    ref2.current[name.name] = height;
    if (null == ref.current[name.name]) {
      name = undefined;
      if (first5 != null) {
        name = first5.name;
      }
      if (name === name.name) {
        setLatch(true);
      }
    }
    let name1;
    if (first5 != null) {
      name1 = first5.name;
    }
    if (tmp4) {
      callback1(name);
    }
    tmp4 = name1 === name.name && null != ref2.current[name.name] && height > ref2.current[name.name];
  }, items15);
  const items16 = [first5, callback1];
  const effect2 = obj2.useEffect(() => {
    if (null != first5) {
      callback1(tmp);
    }
  }, items16);
  const items17 = [first1, first, callback2, guild_id, stateFromStores, ,];
  let applicationId;
  if (command != null) {
    applicationId = command.applicationId;
  }
  items17[5] = applicationId;
  let id2;
  if (command != null) {
    id2 = command.id;
  }
  items17[6] = id2;
  const items18 = [first1, first, first2, first3, , ,];
  let name1;
  const callback9 = obj2.useCallback((name) => {
    let current = ref9.current;
    current.add(name.name);
    items = [];
    items[HermesBuiltin.arraySpread(first1, 0)] = name;
    closure_29(items);
    _undefined2(
      first.filter((name) => {
        const current = ref.current;
        return !current.has(name.name);
      }),
    );
    setFocusedOption(name);
    callback2(
      name,
      AppLauncherNativeUtils.getInitialOptionValues({
        option: name,
        prefilledValues: [],
        guildId: guild_id,
        roles: stateFromStores,
      }),
    );
    closure_20.current = true;
    closure_22.current = name.type;
    const obj2 = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    let applicationId;
    if (command != null) {
      applicationId = command.applicationId;
    }
    const obj6 = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    id = undefined;
    if (command != null) {
      id = command.id;
    }
    obj6.command_id = id;
    ({ name: obj4.option_name, type: obj4.option_type } = name);
    AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj6);
  }, items17);
  if (first5 != null) {
    name1 = first5.name;
  }
  items18[4] = name1;
  let applicationId1;
  if (command != null) {
    applicationId1 = command.applicationId;
  }
  items18[5] = applicationId1;
  let id3;
  if (command != null) {
    id3 = command.id;
  }
  items18[6] = id3;
  onDismiss = obj2.useCallback((name) => {
    let current = ref9.current;
    current.delete(name.name);
    const current2 = ref10.current;
    current2.delete(name.name);
    closure_29(first1.filter((name) => name.name !== name.name));
    _undefined2(
      first.filter((name) => {
        const current = ref.current;
        return !current.has(name.name);
      }),
    );
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp3[tmp];
    const merged = Object.assign(first2);
    closure_34({});
    first3.delete(name.name);
    closure_37(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      setFocusedOption(null);
    }
    const obj = {};
    const set = new Set(first3);
    let applicationId;
    if (name != null) {
      applicationId = tmp16.applicationId;
    }
    const obj4 = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    id = undefined;
    if (name != null) {
      id = tmp16.id;
    }
    obj4.command_id = id;
    ({ name: obj3.option_name, type: obj3.option_type } = name);
    command(sectionName[26]).trackWithMetadata(ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj4);
    const obj2 = command(sectionName[26]);
  }, items18);
  const callback10 = obj2.useCallback((nativeEvent) => closure_39(nativeEvent.nativeEvent.layout.height), []);
  let tmp76Result = first.length > 0;
  let tmp71 = tmp69;
  const callback11 = obj2.useCallback((arg0, current) => {
    closure_16.current = current;
    return current;
  }, []);
  if (arr4.length <= 0) {
    tmp71 = tmp76Result;
  }
  let prefilledOptions1;
  if (preSelectedCommand != null) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_58 = null != prefilledOptions1;
  if (entrypoint === require("AppLauncherTypes").AppLauncherEntrypoint.VOICE) {
    let BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = tmp3(5400).BottomSheetScrollView;
  }
  if (loading) {
    let tmp76Result2 = ref6(ref10, {});
    let tmp73 = ref6;
  } else if (null == command) {
    let obj3 = { onPressBack: callback };
    tmp76Result2 = ref6(c31, obj3);
    tmp73 = ref6;
  } else if (hasPermissions) {
    let obj4 = {
      ref,
      contentContainerStyle: tmp.optionsContainer,
      scrollIndicatorInsets: null,
      scrollToOverflowEnabled: true,
      onContentSizeChange: null,
      preserveScrollMomentum: true,
      lockableScrollableContentOffsetY: null,
      keyboardShouldPersistTaps: "handled",
      contentInsetAdjustmentBehavior: "never",
      automaticallyAdjustContentInsets: false,
      onLayout: null,
      automaticallyAdjustsScrollIndicatorInsets: false,
      children: null,
    };
    let obj5 = { bottom: sum1 };
    obj4.scrollIndicatorInsets = obj5;
    obj4.onContentSizeChange = callback11;
    obj4.lockableScrollableContentOffsetY = sharedValue1;
    obj4.onLayout = callback10;
    let obj6 = { style: tmp.commandNameContainer, children: null };
    let obj7 = { variant: "heading-lg/semibold", color: "text-default", children: command.displayName };
    const items19 = [ref6(tmp3(5761).Text, obj7)];
    let obj8 = { variant: "heading-xs/medium", color: "text-default", children: command.displayDescription };
    items19[1] = ref6(tmp3(5761).Text, obj8);
    obj6.children = items19;
    const items20 = [ref7(closure_7, obj6), , , , ,];
    let tmp79Result = tmp69;
    if (tmp69) {
      let obj9 = {
        style: tmp.requiredOptionsContainer,
        onLayout: callback7,
        children: arr4.map((option, index) => {
          const obj = {
            option,
            autoFocusType: null,
            editedOptions: null,
            onOptionViewLayout: null,
            onStartEditing: null,
            onEndEditing: null,
            onOptionValueChange: null,
            onPressOption: null,
            onPressAttachmentOption: null,
            channel: null,
            optionValidationResults: null,
            setFocusedOption: null,
            command: null,
            optionValues: null,
          };
          if (0 === index) {
            if (!closure_58) {
              let NONE = constants.FIRST_REQUIRED_OPTION;
            }
            obj.autoFocusType = NONE;
            obj.editedOptions = first3;
            obj.onOptionViewLayout = onOptionViewLayout;
            obj.onStartEditing = onStartEditing;
            obj.onEndEditing = callback5;
            obj.onOptionValueChange = callback2;
            obj.onPressOption = callback6;
            obj.onPressAttachmentOption = onPressAttachmentOption;
            obj.channel = _undefined.channel;
            obj.optionValidationResults = first2;
            obj.setFocusedOption = setFocusedOption;
            obj.command = command;
            obj.optionValues = optionValues;
            return dependencyMap(tmp2, obj, option.name);
          }
          NONE = constants.NONE;
        }),
      };
      tmp79Result = tmp79(tmp78, obj9);
    }
    items20[1] = tmp79Result;
    let tmp79Result3 = !tmp69;
    if (!tmp69) {
      tmp79Result3 = tmp71;
    }
    if (tmp79Result3) {
      const obj10 = { style: tmp.noRequiredOptionsCalloutContainer, children: null };
      const obj11 = { variant: "body-sm/medium", color: "text-strong", style: { textAlign: "center" }, children: null };
      const intl = tmp3(1113).intl;
      obj11.children = intl.string(tmp3(1113).t.HS2KtY);
      obj10.children = tmp79(tmp3(5761).Text, obj11);
      tmp79Result3 = tmp79(tmp78, obj10);
    }
    items20[2] = tmp79Result3;
    let tmp79Result4 = !tmp71;
    if (!tmp71) {
      const obj12 = { style: tmp.noOptionCalloutContainer, children: null };
      const obj13 = { variant: "body-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
      const intl2 = tmp3(1113).intl;
      obj13.children = intl2.string(tmp3(1113).t.G8lEFB);
      obj12.children = tmp79(tmp3(5761).Text, obj13);
      tmp79Result4 = tmp79(tmp78, obj12);
    }
    items20[3] = tmp79Result4;
    if (tmp76Result) {
      const obj14 = { children: null };
      const obj15 = {
        style: tmp.optionalOptionsSectionTitle,
        variant: "body-md/normal",
        color: "text-default",
        children: null,
      };
      const intl3 = tmp3(1113).intl;
      obj15.children = intl3.string(tmp3(1113).t["5C107K"]);
      const items21 = [tmp79(tmp3(5761).Text, obj15), ,];
      const obj16 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first1.map((option, index) => {
          items = [optionalOptionsChild.optionalOptionsChild, ,];
          let optionalOptionsFirstChild = 0 === index;
          if (optionalOptionsFirstChild) {
            optionalOptionsFirstChild = optionalOptionsChild.optionalOptionsFirstChild;
          }
          items[1] = optionalOptionsFirstChild;
          const obj = {
            style: items,
            option,
            autoFocusType: null,
            onDismiss,
            editedOptions: first3,
            onOptionViewLayout,
            onStartEditing,
            onEndEditing: callback5,
            onOptionValueChange: callback2,
            onPressOption: callback6,
            onPressAttachmentOption,
            channel: _undefined.channel,
            optionValidationResults: first2,
            setFocusedOption,
            command,
            optionValues,
            isPreSelectedOption: null,
          };
          items[2] = index === first1.length - 1 && optionalOptionsChild.optionalOptionsLastChild;
          const current = ref10.current;
          obj.autoFocusType = current.has(option.name) ? constants.NONE : constants.OPTIONAL_OPTION_ADDED;
          const current2 = ref10.current;
          obj.isPreSelectedOption = current2.has(option.name);
          return dependencyMap(CommandOptionViewDefault, obj, option.name);
        }),
      };
      items21[1] = tmp79(tmp78, obj16);
      const obj17 = { layout: tmp3(12711).LayoutAnimation, collapsable: false, children: null };
      const obj18 = { style: tmp.optionalOptionList, options: tmp20, onSelectOption: callback9 };
      obj17.children = tmp79(tmp31(12745), obj18);
      items21[2] = tmp79(tmp31(1652).View, obj17);
      obj14.children = items21;
      tmp76Result = tmp76(tmp77, obj14);
    }
    const obj19 = { children: null };
    items20[4] = tmp76Result;
    const obj20 = { size: sum1 };
    items20[5] = ref6(tmp3(1187).Spacer, obj20);
    obj4.children = items20;
    const items22 = [ref7(BottomSheetScrollView, obj4)];
    const obj21 = {
      enableSubmit: tmp23[0],
      onSubmit: callback4,
      animatedStyle,
      onHeightChange: tmp32[1],
      isSending: sharedValue,
      footerStickyInsetBottom: sum2,
    };
    items22[1] = ref6(closure_26, obj21);
    obj19.children = items22;
    tmp76Result2 = tmp76(tmp77, obj19);
    tmp73 = tmp79;
  } else {
    tmp73 = ref6;
    const obj22 = { command, onPressBack: callback };
    tmp76Result2 = ref6(optionValues, obj22);
  }
  const obj23 = { style: tmp.container, children: null };
  const items23 = [
    tmp73(require("AppLauncherCommandViewHeader").AppLauncherCommandViewHeader, {
      command,
      onPressBack: callback,
      scrollOffsetY: sharedValue1,
      section,
    }),
    tmp76Result2,
  ];
  obj23.children = items23;
  return ref7(closure_7, obj23);
}
function AppLauncherCommandView(command) {
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  let loading;
  let bottomSheetExpandReasonRef;
  closure_5 = undefined;
  ({ installOnDemand, onCommandExecuted } = command);
  expandBottomSheet(loading[55])(null != context.channel, "channel should not be null");
  const tmp3 = expandBottomSheet(loading[56])();
  importAll = tmp3;
  const channel = context.channel;
  closure_129_0 = analyticsLocation;
  closure_129_1 = sectionName;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  const command1 = require("ApplicationCommandQueryApi").useCommand({ channel, type: "channel" }, commandId);
  const command2 = command1.command;
  closure_129_2 = command2;
  const application = command1.application;
  const tmp7 = closure_11({ channel, type: "channel" }, true, true);
  const tmp8 = closure_12(true, true);
  let tmp9 = null;
  if (null != application) {
    const result = tmp8.result;
    let descriptor;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp11.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp7.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp9 = descriptor;
  }
  closure_129_3 = tmp9;
  let tmp13 = null != application;
  if (tmp13) {
    const result3 = tmp7.result;
    let tmp14;
    if (result3 != null) {
      tmp14 = result3.sections[application.id];
    }
    tmp13 = null != tmp14;
  }
  closure_129_4 = noop.useRef(false);
  items = [command2, tmp9, analyticsLocation, sectionName];
  const effect = noop.useEffect(() => {
    let current = null == command;
    if (!current) {
      current = null == loading;
    }
    if (!current) {
      current = bottomSheetExpandReasonRef.current;
    }
    if (!current) {
      const obj2 = { command, triggerSection: null, location: null, sectionName: null };
      const obj = ApplicationCommandUtils;
      obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(loading);
      obj2.location = command;
      obj2.sectionName = expandBottomSheet;
      obj.trackCommandSelected(obj2);
      bottomSheetExpandReasonRef.current = true;
    }
  }, items);
  let obj = require("ApplicationCommandQueryApi");
  const tmp16 = command;
  const items1 = [command(loading[35]).ApplicationCommandType.CHAT];
  const permissionContext = command(loading[59]).usePermissionContext(channel, items1);
  if (null != tmp9) {
    if (null != command2) {
      ({ context: context2, userId, roleIds, isImpersonating } = permissionContext);
      let guild_id;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        const tmp4Result = tmp4(tmp[60]);
        allowedForUser = tmp4Result.computeAllowedForUser(
          tmp9.permissions,
          context2.guild_id,
          userId,
          roleIds,
          isImpersonating,
        );
      }
      let guild_id1;
      if (context2 != null) {
        guild_id1 = context2.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        allowedForChannel = tmp4(tmp[60]).computeAllowedForChannel(tmp9.permissions, context2, context2.guild_id);
        const tmp4Result3 = tmp4(tmp[60]);
      }
      const obj4 = {
        applicationAllowedForUser: allowedForUser,
        applicationAllowedForChannel: allowedForChannel,
        commandBotId: tmp9.botId,
        isGuildInstalled: tmp13,
      };
      let obj5 = { command: command2, sectionDescriptor: tmp9, hasPermission: null, loading: null };
      const tmp4Result4 = tmp4(tmp[60]);
      const hasAccessResult = tmp4(tmp[60]).hasAccess(command2, permissionContext, obj4);
      obj5.hasPermission =
        tmp4(tmp[60]).hasAccess(command2, permissionContext, obj4) === tmp4(tmp[60]).HasAccessResult.ALLOWED &&
        permissionContext.hasBaseAccessPermissions;
      obj5.loading = tmp8.fetchState.fetching || tmp7.fetchState.fetching;
      const tmp27 =
        tmp4(tmp[60]).hasAccess(command2, permissionContext, obj4) === tmp4(tmp[60]).HasAccessResult.ALLOWED &&
        permissionContext.hasBaseAccessPermissions;
    }
    loading = obj5.loading;
    let command3 = command;
    ({ sectionDescriptor, hasPermission } = obj5);
    if (command == null) {
      command3 = obj5.command;
    }
    bottomSheetExpandReasonRef = tmp16(tmp[25]).useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
    let tmp29 = null != command3;
    if (tmp29) {
      let options = command3.options;
      if (options == null) {
        options = [];
      }
      tmp29 = options.length > 0;
    }
    closure_5 = tmp29;
    const items2 = [command, tmp29, loading, tmp3, bottomSheetExpandReasonRef, expandBottomSheet];
    const effect1 = noop.useEffect(() => {
      let tmp = closure_2;
      if (closure_2) {
        let tmp2 = closure_5;
        if (!closure_5) {
          let tmp4 = !loading;
          if (!loading) {
            tmp4 = null == command;
          }
          tmp2 = tmp4;
        }
        tmp = tmp2;
      }
      if (tmp) {
        bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
        if (expandBottomSheet != null) {
          expandBottomSheet();
        }
      }
    }, items2);
    const obj6 = {
      command: command3,
      context,
      section: null,
      preSelectedCommand: null,
      loading: null,
      hasPermissions: null,
      installOnDemand: null,
      sectionName: null,
      analyticsLocation: null,
      onCommandExecuted: null,
    };
    if (section == null) {
      section = sectionDescriptor;
    }
    obj6.section = section;
    if (preSelectedCommand == null) {
      preSelectedCommand = null;
    }
    obj6.preSelectedCommand = preSelectedCommand;
    obj6.loading = loading;
    obj6.hasPermissions = null != command || hasPermission;
    obj6.installOnDemand = installOnDemand;
    obj6.sectionName = sectionName;
    obj6.analyticsLocation = analyticsLocation;
    obj6.onCommandExecuted = onCommandExecuted;
    return closure_20(AppLauncherCommandViewInner, obj6);
  }
  obj5 = {
    command: null,
    sectionDescriptor: null,
    hasPermission: false,
    loading: tmp8.fetchState.fetching || tmp7.fetchState.fetching,
  };
  let obj3 = command(loading[59]);
  const tmp28 = tmp8.fetchState.fetching || tmp7.fetchState.fetching;
}
function LoadingState() {
  return dependencyMap(metroImportDefault, {
    style: { flex: 1, justifyContent: "center", alignItems: "center" },
    children: dependencyMap(React5, { size: "large" }),
  });
}
function NotFoundState(onPress) {
  const tmp = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND,
  );
  const obj2 = { style: tmp.emptyStateContainer, children: null };
  const obj3 = {
    style: tmp.emptyState,
    lightSource: _modDef12746,
    darkSource: _modDef12747,
    title: null,
    body: null,
    children: null,
  };
  const intl = util.intl;
  obj3.title = intl.string(util.t["pX/qb9"]);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.exOQVY);
  const obj4 = {
    shrink: true,
    size: "sm",
    variant: "secondary",
    onPress: onPress.onPressBack,
    pillStyle: tmp.failureStateButtonPill,
    style: tmp.failureStateButtonWrapper,
    text: null,
  };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["/g10LC"]);
  obj3.children = dependencyMap(BaseTextButton.BaseTextButton, obj4);
  obj2.children = dependencyMap(native.EmptyState, obj3);
  return dependencyMap(metroImportDefault, obj2);
}
function NoPermsState(command) {
  command = command.command;
  const tmp = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS,
  );
  const obj2 = { style: tmp.emptyStateContainer, children: null };
  const obj3 = { style: tmp.commandNameContainer, children: null };
  items = [
    dependencyMap(Text_Text.Text, {
      variant: "heading-lg/semibold",
      color: "text-default",
      children: command.displayName,
    }),
    dependencyMap(Text_Text.Text, {
      variant: "heading-xs/medium",
      color: "text-default",
      children: command.displayDescription,
    }),
  ];
  obj3.children = items;
  const items1 = [guild(metroImportDefault, obj3)];
  const obj6 = {
    style: tmp.emptyState,
    lightSource: _modDef12662,
    darkSource: _modDef12663,
    title: null,
    body: null,
    children: null,
  };
  const intl = util.intl;
  obj6.title = intl.string(util.t.TzufcR);
  const intl2 = util.intl;
  obj6.body = intl2.string(util.t["I/O+A1"]);
  const obj7 = {
    shrink: true,
    size: "sm",
    variant: "secondary",
    onPress: command.onPressBack,
    pillStyle: tmp.failureStateButtonPill,
    style: tmp.failureStateButtonWrapper,
    text: null,
  };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t["/g10LC"]);
  obj6.children = dependencyMap(BaseTextButton.BaseTextButton, obj7);
  items1[1] = dependencyMap(native.EmptyState, obj6);
  obj2.children = items1;
  return guild(metroImportDefault, obj2);
}
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, ActivityIndicator: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const ApplicationCommandIndexStore = fn(9912);
({ useContextIndexState: closure_11, useUserIndexState: closure_12 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1498);
({
  AppLauncherOptionAutoFocusType: closure_14,
  useAppLauncherNavigation: closure_15,
  DEFAULT_CONTENT_PADDING,
} = AppLauncherNativeConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = Constants);
const MediaKeyboardTarget = fn(1623).MediaKeyboardTarget;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  container: { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND },
  optionsContainer: null,
  requiredOptionsContainer: null,
  optionalOptionsContainer: null,
  optionalOptionsChild: null,
  optionalOptionsFirstChild: null,
  optionalOptionsLastChild: null,
  footerContainer: null,
  submitButton: null,
  optionalOptionsSectionTitle: null,
  optionalOptionList: null,
  noRequiredOptionsCalloutContainer: null,
  noOptionCalloutContainer: null,
  emptyState: null,
  emptyStateContainer: null,
  failureStateButtonWrapper: null,
  failureStateButtonPill: null,
  commandNameContainer: null,
  linearGradient: null,
};
let obj3 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.optionsContainer = {
  paddingTop: fn(12703).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingBottom: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj2.requiredOptionsContainer = { marginTop: 24, gap: 24 };
obj2.optionalOptionsContainer = {};
obj2.optionalOptionsChild = { marginBottom: 24 };
obj2.optionalOptionsFirstChild = { marginTop: 12 };
obj2.optionalOptionsLastChild = { marginBottom: 12 };
obj2.footerContainer = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
};
obj2.submitButton = { flex: 1, overflow: "hidden" };
obj2.optionalOptionsSectionTitle = { marginTop: 36 };
obj2.optionalOptionList = { marginTop: 12 };
let obj4 = {
  paddingTop: fn(12703).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingBottom: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
obj2.noRequiredOptionsCalloutContainer = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
let obj5 = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
obj2.noOptionCalloutContainer = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
obj2.emptyState = { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 };
let obj6 = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
obj2.emptyStateContainer = {
  paddingTop: fn(12703).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  flex: 1,
};
obj2.failureStateButtonWrapper = { marginTop: 24, alignSelf: "center" };
let obj7 = { paddingTop: fn(12703).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
obj2.failureStateButtonPill = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj2.commandNameContainer = { alignItems: "center", justifyContent: "center", textAlign: "center" };
let obj8 = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj2.linearGradient = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_23 = createStyles.createStyles(obj2);
let closure_24 = {
  code: "(function AppLauncherCommandViewScreenTsx1(){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;return scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);})",
};
let closure_25 = {
  code: "(function AppLauncherCommandViewScreenTsx2(){let[shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,isSending]=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function AppLauncherCommandViewScreenTsx1Factory([_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]){const AppLauncherCommandViewScreenTsx1=function(){return scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);};AppLauncherCommandViewScreenTsx1.__closure=[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes];AppLauncherCommandViewScreenTsx1.__workletHash=323925726197;AppLauncherCommandViewScreenTsx1.__initData=_worklet_323925726197_init_data;return AppLauncherCommandViewScreenTsx1;}([_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes])))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};})",
};
let closure_27 = {
  code: "(function AppLauncherCommandViewScreenTsx3(){let[bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom]=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx",
);

export default function AppLauncherCommandViewScreen(route) {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = {
      command: tmp,
      context,
      section: tmp2,
      preSelectedCommand: tmp3,
      installOnDemand: tmp5,
      sectionName: tmp6,
      analyticsLocation: tmp4,
      expandBottomSheet: tmp7,
      onCommandExecuted: tmp8,
    };
    tmp9 = dependencyMap(AppLauncherCommandView, obj);
  }
  return tmp9;
}
