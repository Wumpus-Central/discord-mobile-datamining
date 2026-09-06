// discord_app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import BaseTextButton from "../../../../../design/components/Button/native/BaseTextButton.native.tsx";
import utils_UploadUtils from "../../../../../utils/native/UploadUtils.tsx";
import ApplicationCommandUtils from "../../../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import MediaKeyboardUtils from "../../../../media_keyboard/native/MediaKeyboardUtils.tsx";
import showMediaKeyboardActionSheet from "../../../../media_keyboard/native/showMediaKeyboardActionSheet.tsx";
import AppLauncherContext from "../../AppLauncherContext.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import _modDef12114 from "../../../../../../_runtime/metro/12114__.js";
import _modDef12115 from "../../../../../../_runtime/metro/12115__.js";
import AppLauncherCommandViewHeader from "AppLauncherCommandViewHeader.tsx";
import ApplicationCommandValidationUtils from "../../../../application_commands/ApplicationCommandValidationUtils.tsx";
import application_commands_ApplicationCommandValidationUtils from "../../../../application_commands/native/ApplicationCommandValidationUtils.tsx";
import CommandOptionViewDefault from "CommandOptionView.tsx";
import _modDef12193 from "../../../../../../_runtime/metro/12193__.js";
import _modDef12194 from "../../../../../../_runtime/metro/12194__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

require = fn;
function AppLauncherCommandViewFooter(arg0) {
  ({ onHeightChange: require, isSending } = arg0);
  let stateFromStores;
  _slicedToArray = undefined;
  ({ enableSubmit, onSubmit, animatedStyle, footerStickyInsetBottom } = arg0);
  const tmp = closure_23();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  closure_2 = tmp2[1];
  let obj = require("initialize");
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const isPressedDown = tmp4[0];
  _slicedToArray = tmp4[1];
  let obj1 = require("ReanimatedRexport");
  let fn = function h() {
    if (stateFromStores) {
      let obj = {};
    } else if (first) {
      obj = { opacity: 1, transform: null };
      let obj1 = { translateX: null };
      const obj9 = timing;
      const fn = function e() {
        const obj = closure_1_0(4296);
        return closure_1_0(4296).runOnJS(closure_1_0(4528).triggerHapticFeedback)(
          closure_1_0(4528).HapticFeedbackTypes.IMPACT_LIGHT,
        );
      };
      const obj2 = {
        runOnJS: ReanimatedRexport.runOnJS,
        triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
        HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      };
      fn.__closure = obj2;
      fn.__workletHash = 8545458901090;
      fn.__initData = __initData;
      obj1.translateX = ReanimatedRexport.withDelay(
        100,
        obj9.withTiming(-4, timingPresets.timingStandard, "respect-motion-settings", fn),
      );
      const items = [obj1];
      obj.transform = items;
    } else {
      obj = timing;
      obj1 = isSending;
      let num = 1;
      if (isSending.get()) {
        num = 0;
      }
      obj = { opacity: null, transform: null };
      obj.opacity = obj.withTiming(num, timingPresets.timingStandard);
      let obj3 = timing;
      let num2 = 0;
      if (obj1.get()) {
        num2 = 100;
      }
      obj3 = { translateX: null };
      obj3.translateX = obj3.withTiming(num2, timingPresets.timingStandard);
      const items1 = [obj3];
      obj.transform = items1;
    }
    return obj;
  };
  obj = {
    shouldReduceMotion: stateFromStores,
    isPressedDown,
    withDelay: require("ReanimatedRexport").withDelay,
    withTiming: require("timing").withTiming,
    timingStandard: require("timingPresets").timingStandard,
    runOnJS: require("ReanimatedRexport").runOnJS,
    triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback,
    HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes,
    isSending,
  };
  fn.__closure = obj;
  fn.__workletHash = 576353278359;
  fn.__initData = __initData;
  animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      closure_2(height);
      if (require != null) {
        require(height);
      }
    },
    style: null,
    children: null,
  };
  let items1 = [tmp.footerContainer, animatedStyle];
  obj.style = items1;
  obj1 = {
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
  obj1.end = point;
  const tmp7 = isSending(stateFromStores[19]);
  const items2 = [
    require("ColorUtils").hexWithOpacity(tmp.linearGradient.backgroundColor, 0),
    tmp.linearGradient.backgroundColor,
  ];
  obj1.colors = items2;
  const items3 = [closure_20(tmp7, obj1)];
  let obj2 = {
    onPress: onSubmit,
    onPressIn() {
      return closure_5(true);
    },
    onPressOut() {
      return closure_5(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton,
    text: null,
    icon: null,
    iconPosition: "end",
  };
  const intl = require("util").intl;
  obj2.text = intl.string(require("util").t.TXNS7S);
  let obj3 = { style: animatedStyle, children: null };
  const obj7 = require("ColorUtils");
  obj3.children = closure_20(require("SendMessageIcon").SendMessageIcon, {
    style: { marginLeft: 8 },
    color: isSending(stateFromStores[12]).unsafe_rawColors.WHITE,
    size: "sm",
  });
  obj2.icon = closure_20(isSending(stateFromStores[15]).View, obj3);
  items3[1] = closure_20(require("BaseTextButton").BaseTextButton, obj2);
  obj.children = items3;
  return closure_21(isSending(stateFromStores[15]).View, obj);
}
function AppLauncherCommandViewInner(command) {
  command = command.command;
  const context = command.context;
  ({ preSelectedCommand, installOnDemand } = command);
  const sectionName = command.sectionName;
  const analyticsLocation = command.analyticsLocation;
  const onCommandExecuted = command.onCommandExecuted;
  let ref4;
  let prefilledOptions;
  let guild_id;
  let stateFromStores;
  let ref6;
  let ref7;
  closure_22 = undefined;
  c23 = undefined;
  let first;
  closure_25 = undefined;
  let ref8;
  let first1;
  closure_28 = undefined;
  c30 = undefined;
  let optionValues;
  let first2;
  closure_33 = undefined;
  closure_34 = undefined;
  let first3;
  closure_36 = undefined;
  let first4;
  closure_38 = undefined;
  let first5;
  let setFocusedOption;
  let sum1;
  let sum2;
  let sharedValue;
  let sharedValue1;
  let callback1;
  let callback2;
  let id;
  let commandContext;
  let callback3;
  let height;
  let maximum;
  let bottomSheetPosition;
  let onStartEditing;
  let callback5;
  let callback6;
  let onPressAttachmentOption;
  let setLatch;
  let tryCallback;
  let onOptionViewLayout;
  let onDismiss;
  closure_61 = undefined;
  ({ section, loading, hasPermissions } = command);
  let tmp = c23();
  noop = tmp;
  const tmp2 = ref4();
  closure_7 = tmp2;
  let obj = command(sectionName[24]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  let obj1 = noop;
  noop.useRef(null);
  const ref = noop.useRef({});
  const ref2 = noop.useRef(0);
  noop.useRef(0);
  ref4 = noop.useRef(0);
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
  let tmp3Result = tmp3(tmp4[14]);
  let items = [ref2];
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildRoleStore.getRolesSnapshot(guild_id));
  obj1.useRef(false);
  ref6 = obj1.useRef(Date.now());
  ref7 = obj1.useRef(null);
  closure_22 = obj1.useRef(false);
  const items1 = [command];
  const effect = obj1.useEffect(() => {
    if (null != current) {
      current = ref7.current;
      return () => {
        if (!ref.current) {
          const _Date = Date;
          const diff = Date.now() - current;
          const obj = { time_spent: diff, num_options: null, used_options: null, last_used_option_type: null };
          const options = command.options;
          let num;
          if (options != null) {
            num = options.length;
          }
          if (num == null) {
            num = 0;
          }
          obj.num_options = num;
          obj.used_options = current;
          obj.last_used_option_type = current;
          obj.trackWithMetadata(constants2.APP_LAUNCHER_COMMAND_CLOSED, obj);
        }
      };
    }
  }, items1);
  const items2 = [chatInputRef, keyboardCloseReasonRef, tmp2];
  const callback = obj1.useCallback(() => {
    let arr = closure_7;
    if (closure_7.canGoBack()) {
      arr = arr.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items2);
  [arr4, c23] = onCommandExecuted(obj1.useState([]), 2);
  let tmp15 = onCommandExecuted(obj1.useState([]), 2);
  first = tmp15[0];
  closure_25 = tmp15[1];
  const tmp14 = onCommandExecuted(obj1.useState([]), 2);
  ref8 = obj1.useRef(new Set());
  const tmp17 = onCommandExecuted(obj1.useState([]), 2);
  first1 = tmp17[0];
  closure_28 = tmp17[1];
  let set = new Set();
  obj1.useRef(new Set());
  const set1 = new Set();
  [tmp20, c30] = onCommandExecuted(obj1.useState([]), 2);
  optionValues = obj1.useRef({});
  const tmp21 = onCommandExecuted(obj1.useState({}), 2);
  first2 = tmp21[0];
  closure_33 = tmp21[1];
  const tmp23 = onCommandExecuted(obj1.useState(true), 2);
  closure_34 = tmp23[1];
  const tmp19 = onCommandExecuted(obj1.useState([]), 2);
  const tmp25 = onCommandExecuted(obj1.useState(new Set()), 2);
  first3 = tmp25[0];
  closure_36 = tmp25[1];
  const tmp27 = onCommandExecuted(obj1.useState(0), 2);
  first4 = tmp27[0];
  closure_38 = tmp27[1];
  const tmp29 = onCommandExecuted(obj1.useState(null), 2);
  first5 = tmp29[0];
  setFocusedOption = tmp29[1];
  const tmp32 = onCommandExecuted(obj1.useState(0), 2);
  let sum =
    context(tmp4[26])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom + tmp32[0];
  sum1 = sum + context(tmp4[12]).space.PX_16;
  sum2 =
    context(tmp4[26])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom +
    context(tmp4[12]).space.PX_16;
  tmp3Result = tmp3(tmp4[15]);
  sharedValue = tmp3Result.useSharedValue(false);
  const set2 = new Set();
  sharedValue1 = command(sectionName[15]).useSharedValue(0);
  const items3 = [first4, sum1, sharedValue1];
  callback1 = obj1.useCallback((required) => {
    const diff = first4 - sum1;
    const diff1 = diff - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (required.required) {
        let current3 = ref2.current;
      } else {
        current3 = ref3.current;
      }
      const sum = ref.current[required.name] + current3;
      const diff2 = sum - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
      sum1 = sharedValue1.get() + diff1;
      if (tmp15) {
        const current4 = ref.current;
        if (current4 != null) {
          const obj = { y: null, animated: true };
          const _Math = Math;
          obj.y = Math.max(0, diff2 - diff1 / 2);
          current4.scrollTo(obj);
        }
      }
      tmp15 = diff2 < sharedValue1.get() || diff2 > sum1;
    } else {
      const diff3 = ref4.current - diff1;
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
        tmp5 = diff3 > 0 && obj2.get() > diff3;
      }
      obj2 = sharedValue1;
    }
  }, items3);
  const items4 = [context.channel.guild_id, context.channel.id, first2];
  callback2 = obj1.useCallback((name, content) => {
    optionValues.current[name.name] = content;
    let obj = {};
    const merged = Object.assign(first2);
    obj = {
      option: name,
      content,
      guildId: context.channel.guild_id,
      channelId: context.channel.id,
      allowEmptyValues: false,
      commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
    };
    obj[name.name] = ApplicationCommandValidationUtils.validateOptionContent(obj);
    closure_33(obj);
    closure_19.current = true;
    closure_21.current = name.type;
  }, items4);
  const tmp40 = context(sectionName[29])(command);
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
  const effect1 = obj1.useEffect(() => {
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
      let items = [];
      closure_2 = [];
      closure_3 = {};
      closure_31.current = {};
      if (tmp != null) {
        const options = tmp.options;
        if (options != null) {
          const item = options.forEach((required) => {
            const name = required;
            if (true !== required.required) {
              let obj = prefilledOptions;
              let someResult;
              if (prefilledOptions != null) {
                someResult = obj.some((name) => name.name === name.name);
              }
              if (someResult) {
                items.push(required);
                let obj1 = AppLauncherNativeUtils;
                obj = {
                  option: required,
                  prefilledValues: prefilledOptions,
                  guildId: guild_id,
                  roles: stateFromStores,
                };
                closure_31.current[required.name] = obj1.getInitialOptionValues(obj);
                obj = {
                  option: required,
                  content: closure_31.current[required.name],
                  guildId: guild_id,
                  channelId: context.channel.id,
                  allowEmptyValues: false,
                  commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
                };
                closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj);
              } else {
                name.push(required);
              }
            } else {
              closure_2.push(required);
              obj1 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
              closure_31.current[required.name] = AppLauncherNativeUtils.getInitialOptionValues(obj1);
              const obj2 = {
                option: required,
                content: closure_31.current[required.name],
                guildId: guild_id,
                channelId: context.channel.id,
                allowEmptyValues: false,
                commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER,
              };
              closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj2);
            }
          });
        }
      }
      command(sectionName[31]).batchUpdates(() => {
        closure_33(closure_3);
        c23(closure_2);
        items = [...items];
        closure_25(items);
        closure_28(items);
        c30(closure_0);
        closure_36(new Set());
      });
      let current = ref8.current;
      current.clear();
      const item1 = items.forEach((name) => {
        const current = ref.current;
        return current.add(name.name);
      });
      const current2 = ref9.current;
      current2.clear();
      const item2 = items.forEach((name) => {
        const current = ref2.current;
        return current.add(name.name);
      });
      let obj = command(sectionName[31]);
    }
  }, items5);
  const tmp3Result1 = command(sectionName[15]);
  commandContext = command(sectionName[32]).useCommandContext(context);
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
  callback3 = obj1.useCallback(() => {
    if (null != command) {
      const firstInvalidOption = application_commands_ApplicationCommandValidationUtils.getFirstInvalidOption(
        tmp,
        first2,
      );
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const set = new Set(Object.keys(tmp16));
        closure_36(set);
        callback1(firstInvalidOption);
        let tmp14Result = tmp14(4740);
        let obj = { application_id: null, command_id: null, argument_type: null, is_required: null };
        ({ applicationId: obj2.application_id, rootCommand } = tmp);
        id = undefined;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        obj.command_id = id;
        let num = firstInvalidOption.type;
        if (num == null) {
          num = 3;
        }
        obj.argument_type = tmp14(1894).ApplicationCommandOptionType[num];
        obj.is_required = firstInvalidOption.required;
        tmp14Result.trackWithMetadata(constants2.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
      } else {
        closure_34(false);
        let result = sharedValue.set(true);
        closure_22.current = true;
        tmp14Result = tmp14(9289);
        obj = {
          command: tmp,
          optionValues: tmp14(11993).parseOptionValuesForSend(commandContext.channel, tmp, optionValues.current),
          context: commandContext,
          sectionName,
          commandOrigin: tmp14(7523).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW,
        };
        const result1 = tmp14Result.executeAppLauncherCommand(obj);
        const tmp14Result1 = tmp14(11993);
        result1
          .then(() => {
            const result = command(sectionName[18]).triggerHapticFeedback(
              command(sectionName[18]).HapticFeedbackTypes.IMPACT_MEDIUM,
            );
            const timerId = setTimeout(() => {
              closure_1_8.current = command(sectionName[24]).AppLauncherKeyboardCloseReason.COMMAND;
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
            closure_1_34(true);
            const result = sharedValue.set(false);
          });
        const nextPromise = result1.then(() => {
          const result = command(sectionName[18]).triggerHapticFeedback(
            command(sectionName[18]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          const timerId = setTimeout(() => {
            closure_1_8.current = command(sectionName[24]).AppLauncherKeyboardCloseReason.COMMAND;
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
      tmp16 = first2;
    }
  }, items6);
  ref(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  const callback4 = obj1.useCallback(
    analyticsLocation(function* (arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else if (installOnDemand) {
              if (null == command) {
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const obj1 = {
                  applicationId: tmp9.applicationId,
                  channel: context.channel,
                  commandIntegrationTypes: tmp9.integration_types,
                  appLauncherContext: null,
                };
                const obj2 = { entrypoint, location: analyticsLocation, sectionName };
                obj1.appLauncherContext = obj2;
                c1 = 1;
                c2 = 1;
                const obj3 = { value: tmp2(sectionName[37]).installApplicationOnDemandIfNeeded(obj1), done: false };
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
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
  height = tmp31(tmp4[38])({ ignoreKeyboard: true }).height;
  maximum = tmp31(tmp4[39])().maximum;
  const tmp3Result2 = command(sectionName[32]);
  bottomSheetPosition = command(sectionName[24]).useRequiredAppLauncherContext().bottomSheetPosition;
  const tmp3Result3 = command(sectionName[24]);
  function et() {
    let obj = { transform: null };
    obj = { translateY: -bottomSheetPosition.get() - height + maximum - sum2 };
    const items = [obj];
    obj.transform = items;
    return obj;
  }
  et.__closure = { bottomSheetPosition, screenHeight: height, maxHeight: maximum, footerStickyInsetBottom: sum2 };
  et.__workletHash = 3470381437387;
  et.__initData = first1;
  const items8 = [first3, callback1];
  const animatedStyle = command(sectionName[15]).useAnimatedStyle(et);
  onStartEditing = obj1.useCallback((name) => {
    first3.delete(name.name);
    closure_36(new Set(first3));
    callback1(name);
  }, items8);
  const items9 = [first3];
  let name;
  if (first5 != null) {
    name = first5.name;
  }
  items9[1] = name;
  callback5 = obj1.useCallback((name) => {
    first3.add(name.name);
    closure_36(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      setFocusedOption(null);
    }
  }, items9);
  const items10 = [command];
  callback6 = obj1.useCallback((arg0) => {
    if (null != command) {
      const obj = { application_id: null, command_id: null, option_name: null, option_type: null };
      ({ applicationId: obj2.application_id, id: obj2.command_id } = command);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      obj.trackWithMetadata(constants2.APPLICATION_COMMAND_OPTION_PRESSED, obj);
    }
  }, items10);
  const items11 = [chatInputRef, context.channel, callback5, callback6];
  onPressAttachmentOption = obj1.useCallback((option) => {
    let FILE_ATTACHMENT = option;
    let obj = { target: ref5.APP_LAUNCHER, option };
    let obj1 = command(sectionName[40]);
    const mediaKeyboardDraftType = obj1.getMediaKeyboardDraftType(obj.target);
    let fileTypes;
    if (option.type === command(sectionName[34]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    let tmpResult = tmp(tmp2[41]);
    const fileTypeFiltering = tmpResult.getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    ({ validateFilenames: analyticsLocation, showInvalidFileTypeAlert: onCommandExecuted } = fileTypeFiltering);
    callback6(option);
    tmpResult = tmp(tmp2[44]);
    let result = tmpResult.dismissGlobalKeyboard();
    if (fileTypeFiltering.mediaFilesAllowed) {
      obj = {
        channel: null,
        draftType: null,
        extensions: null,
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
      obj.channel = obj.channel;
      obj.draftType = mediaKeyboardDraftType;
      obj.extensions = allowedExtensions;
      let items = [option.name];
      obj.includedUploadIds = items;
      obj.onAttachPress = function onAttachPress() {
        command(sectionName[40]);
        obj = {};
        FILE_ATTACHMENT = command(sectionName[45]).UploadOrigin.FILE_ATTACHMENT;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              context.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        };
        const merged = Object.assign(obj);
        obj.handleAttachFile(obj);
      };
      obj.onPressCamera = function onPressCamera(previewType) {
        command(sectionName[40]);
        obj = {};
        const IMAGE_PICKER = command(sectionName[45]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              context.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        };
        const merged = Object.assign(obj);
        obj.previewType = previewType;
        obj.handleCameraDialog(obj);
      };
      obj.onPressItem = function onPressItem(item) {
        obj = showMediaKeyboardActionSheet;
        const result = obj.hideMediaKeyboardActionSheet();
        const result1 = MediaKeyboardUtils.mediaNodeToUploadItem(item.item);
        if (allowedExtensions.length > 0) {
          let tmpResult = tmp(5138);
          const items = [tmpResult.getFileFromUploadItem(result1).filename];
          if (!analyticsLocation(items)) {
            return onCommandExecuted();
          }
        }
        tmpResult = tmp(10635);
        const result2 = tmpResult.addAttachmentForCommand(
          item.channelId,
          chatInputRef,
          result1,
          obj,
          tmp(5128).UploadOrigin.IMAGE_PICKER,
        );
      };
      obj.onViewAll = function onViewAll() {
        command(sectionName[40]);
        obj = {};
        const IMAGE_PICKER = command(sectionName[45]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const result = MediaKeyboardUtils.addAttachmentForCommand(
              context.channel.id,
              chatInputRef,
              arg0[0],
              obj,
              IMAGE_PICKER,
            );
          },
        };
        const merged = Object.assign(obj);
        obj.draftType = mediaKeyboardDraftType;
        obj.handleViewAllDialog(obj);
      };
      obj.onManageLimited = function onManageLimited() {
        FILE_ATTACHMENT(allowedExtensions[40]);
        obj = {
          onDismissKeyboard: FILE_ATTACHMENT(allowedExtensions[42]).hideMediaKeyboardActionSheet,
          onRestoreKeyboard,
        };
        const result = obj.handleLimitedPickerDialog(obj);
      };
      obj.onClose = function onClose() {
        callback5(FILE_ATTACHMENT);
      };
      obj.onBack = function onBack() {
        const result = FILE_ATTACHMENT(allowedExtensions[42]).hideMediaKeyboardActionSheet();
      };
      let result1 = tmp(tmp2[42]).showMediaKeyboardActionSheet(obj);
      const tmpResult1 = tmp(tmp2[42]);
    } else {
      obj = {};
      FILE_ATTACHMENT = tmp(tmp2[45]).UploadOrigin.FILE_ATTACHMENT;
      obj1 = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
          return IMAGE_PICKER(allowedExtensions[42]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard: guild_id,
        onSelectFiles(arg0) {
          if (allowedExtensions.length > 0) {
            obj = utils_UploadUtils;
            const items = [obj.getFileFromUploadItem(arg0[0]).filename];
            if (!analyticsLocation(items)) {
              return onCommandExecuted();
            }
          }
          const result = MediaKeyboardUtils.addAttachmentForCommand(
            context.channel.id,
            chatInputRef,
            arg0[0],
            obj,
            IMAGE_PICKER,
          );
        },
      };
      let merged = Object.assign(obj1);
      tmp(tmp2[40]).handleAttachFile(obj);
      const tmpResult2 = tmp(tmp2[40]);
    }
  }, items11);
  const tmp52 = context(sectionName[46])(() => {
    callback1(first5);
  });
  setLatch = tmp52.setLatch;
  tryCallback = tmp52.tryCallback;
  const items12 = [tryCallback];
  const callback7 = obj1.useCallback((nativeEvent) => {
    closure_13.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items13 = [first5, setLatch];
  const callback8 = obj1.useCallback((nativeEvent) => {
    closure_14.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items12);
  onOptionViewLayout = obj1.useCallback((nativeEvent, name) => {
    let tmp = null == ref.current[name.name];
    ref.current[name.name] = nativeEvent.nativeEvent.layout.y;
    if (tmp) {
      name = undefined;
      if (first5 != null) {
        name = first5.name;
      }
      tmp = name === name.name;
    }
    if (tmp) {
      setLatch(true);
    }
  }, items13);
  const items14 = [first1, first, callback2, guild_id, stateFromStores, ,];
  let applicationId;
  if (command != null) {
    applicationId = command.applicationId;
  }
  items14[5] = applicationId;
  let id2;
  if (command != null) {
    id2 = command.id;
  }
  items14[6] = id2;
  const items15 = [first1, first, first2, first3, , ,];
  let name1;
  const callback9 = obj1.useCallback((name) => {
    let current = ref8.current;
    current.add(name.name);
    const items = [];
    items[HermesBuiltin.arraySpread(first1, 0)] = name;
    closure_28(items);
    _undefined(
      first.filter((name) => {
        const current = ref.current;
        return !current.has(name.name);
      }),
    );
    setFocusedOption(name);
    let obj = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    callback2(name, obj.getInitialOptionValues(obj));
    closure_19.current = true;
    closure_21.current = name.type;
    let applicationId;
    if (command != null) {
      applicationId = tmp6.applicationId;
    }
    obj = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    id = undefined;
    if (command != null) {
      id = tmp6.id;
    }
    obj.command_id = id;
    ({ name: obj4.option_name, type: obj4.option_type } = name);
    AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj);
  }, items14);
  if (first5 != null) {
    name1 = first5.name;
  }
  items15[4] = name1;
  let applicationId1;
  if (command != null) {
    applicationId1 = command.applicationId;
  }
  items15[5] = applicationId1;
  let id3;
  if (command != null) {
    id3 = command.id;
  }
  items15[6] = id3;
  onDismiss = obj1.useCallback((name) => {
    let current = ref8.current;
    current.delete(name.name);
    const current2 = ref9.current;
    current2.delete(name.name);
    closure_28(first1.filter((name) => name.name !== name.name));
    _undefined(
      first.filter((name) => {
        const current = ref.current;
        return !current.has(name.name);
      }),
    );
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp3[tmp];
    let obj = {};
    const merged = Object.assign(first2);
    closure_33(obj);
    first3.delete(name.name);
    closure_36(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      setFocusedOption(null);
    }
    const set = new Set(first3);
    let applicationId;
    if (name != null) {
      applicationId = tmp16.applicationId;
    }
    obj = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    id = undefined;
    if (name != null) {
      id = tmp16.id;
    }
    obj.command_id = id;
    ({ name: obj3.option_name, type: obj3.option_type } = name);
    command(sectionName[25]).trackWithMetadata(prefilledOptions.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj);
  }, items15);
  const callback10 = obj1.useCallback((nativeEvent) => closure_38(nativeEvent.nativeEvent.layout.height), []);
  let tmp70Result = first.length > 0;
  let tmp65 = tmp63;
  const callback11 = obj1.useCallback((arg0, current) => {
    closure_15.current = current;
    return current;
  }, []);
  if (arr4.length <= 0) {
    tmp65 = tmp70Result;
  }
  let prefilledOptions1;
  if (preSelectedCommand != null) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_61 = null != prefilledOptions1;
  if (entrypoint === command(sectionName[47]).AppLauncherEntrypoint.VOICE) {
    let BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = tmp3(tmp4[48]).BottomSheetScrollView;
  }
  if (loading) {
    tmp70Result = ref6(c30, {});
    let tmp67 = ref6;
  } else if (null == command) {
    obj = { onPressBack: callback };
    tmp70Result = ref6(optionValues, obj);
    tmp67 = ref6;
  } else if (hasPermissions) {
    obj = {
      ref,
      contentContainerStyle: null,
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
    const items16 = [tmp.optionsContainer];
    obj.contentContainerStyle = items16;
    obj1 = { bottom: sum1 };
    obj.scrollIndicatorInsets = obj1;
    obj.onContentSizeChange = callback11;
    obj.lockableScrollableContentOffsetY = sharedValue1;
    obj.onLayout = callback10;
    let obj2 = { style: tmp.commandNameContainer, children: null };
    let obj3 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
    const items17 = [ref6(tmp3(tmp4[49]).Text, obj3)];
    let obj4 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
    items17[1] = ref6(tmp3(tmp4[49]).Text, obj4);
    obj2.children = items17;
    const items18 = [ref7(closure_7, obj2), , , , ,];
    let tmp73Result = tmp63;
    if (tmp63) {
      const obj5 = {
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
            if (!closure_61) {
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
            obj.channel = context.channel;
            obj.optionValidationResults = first2;
            obj.setFocusedOption = setFocusedOption;
            obj.command = command;
            obj.optionValues = optionValues;
            return closure_2_20(tmp2, obj, option.name);
          }
          NONE = constants.NONE;
        }),
      };
      tmp73Result = tmp73(tmp72, obj5);
    }
    items18[1] = tmp73Result;
    tmp73Result = !tmp63;
    if (!tmp63) {
      tmp73Result = tmp65;
    }
    if (tmp73Result) {
      let obj6 = { style: tmp.noRequiredOptionsCalloutContainer, children: null };
      const obj7 = { variant: "text-sm/medium", color: "text-strong", style: { textAlign: "center" }, children: null };
      const intl = tmp3(tmp4[22]).intl;
      obj7.children = intl.string(tmp3(tmp4[22]).t.HS2KtY);
      obj6.children = tmp73(tmp3(tmp4[49]).Text, obj7);
      tmp73Result = tmp73(tmp72, obj6);
    }
    items18[2] = tmp73Result;
    let tmp73Result1 = !tmp65;
    if (!tmp65) {
      let obj8 = { style: tmp.noOptionCalloutContainer, children: null };
      const obj9 = { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
      const intl2 = tmp3(tmp4[22]).intl;
      obj9.children = intl2.string(tmp3(tmp4[22]).t.G8lEFB);
      obj8.children = tmp73(tmp3(tmp4[49]).Text, obj9);
      tmp73Result1 = tmp73(tmp72, obj8);
    }
    items18[3] = tmp73Result1;
    if (tmp70Result) {
      const obj10 = { children: null };
      const obj11 = {
        style: tmp.optionalOptionsSectionTitle,
        variant: "text-md/normal",
        color: "text-default",
        children: null,
      };
      const intl3 = tmp3(tmp4[22]).intl;
      obj11.children = intl3.string(tmp3(tmp4[22]).t["5C107K"]);
      const items19 = [tmp73(tmp3(tmp4[49]).Text, obj11), ,];
      const obj12 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first1.map((option, index) => {
          const items = [optionalOptionsChild.optionalOptionsChild, ,];
          let optionalOptionsFirstChild = 0 === index;
          if (optionalOptionsFirstChild) {
            optionalOptionsFirstChild = tmp3.optionalOptionsFirstChild;
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
            channel: context.channel,
            optionValidationResults: first2,
            setFocusedOption,
            command,
            optionValues,
            isPreSelectedOption: null,
          };
          items[2] = index === first1.length - 1 && optionalOptionsChild.optionalOptionsLastChild;
          const current = ref9.current;
          obj.autoFocusType = current.has(option.name) ? constants.NONE : constants.OPTIONAL_OPTION_ADDED;
          const current2 = ref9.current;
          obj.isPreSelectedOption = current2.has(option.name);
          return closure_2_20(CommandOptionViewDefault, obj, option.name);
        }),
      };
      items19[1] = tmp73(tmp31(tmp4[15]).View, obj12);
      const obj13 = { layout: tmp3(tmp4[51]).LayoutAnimation, collapsable: false, children: null };
      const obj14 = { style: tmp.optionalOptionList, options: tmp20, onSelectOption: callback9 };
      obj13.children = tmp73(tmp31(tmp4[52]), obj14);
      items19[2] = tmp73(tmp31(tmp4[15]).View, obj13);
      obj10.children = items19;
      tmp70Result = tmp70(tmp71, obj10);
    }
    const obj15 = { children: null };
    items18[4] = tmp70Result;
    const obj16 = { size: sum1 };
    items18[5] = ref6(tmp3(tmp4[53]).Spacer, obj16);
    obj.children = items18;
    const items20 = [ref7(BottomSheetScrollView, obj)];
    const obj17 = {
      enableSubmit: tmp23[0],
      onSubmit: callback4,
      animatedStyle,
      onHeightChange: tmp32[1],
      isSending: sharedValue,
      footerStickyInsetBottom: sum2,
    };
    items20[1] = ref6(ref8, obj17);
    obj15.children = items20;
    tmp70Result = tmp70(tmp71, obj15);
    tmp67 = tmp73;
  } else {
    tmp67 = ref6;
    const obj18 = { command, onPressBack: callback };
    tmp70Result = ref6(first2, obj18);
  }
  const obj19 = { style: tmp.container, children: null };
  const items21 = [
    tmp67(command(sectionName[13]).AppLauncherCommandViewHeader, {
      command,
      onPressBack: callback,
      scrollOffsetY: sharedValue1,
      section,
    }),
    tmp70Result,
  ];
  obj19.children = items21;
  return ref7(closure_7, obj19);
}
function AppLauncherCommandView(command) {
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  let loading;
  let bottomSheetExpandReasonRef;
  closure_5 = undefined;
  ({ installOnDemand, onCommandExecuted } = command);
  expandBottomSheet(loading[54])(null != context.channel, "channel should not be null");
  const tmp3 = expandBottomSheet(loading[55])();
  importAll = tmp3;
  const channel = context.channel;
  closure_129_0 = analyticsLocation;
  closure_129_1 = sectionName;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  let obj = require("ApplicationCommandQueryApi");
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  command = obj.useCommand({ channel, type: "channel" }, commandId);
  const command2 = command.command;
  closure_129_2 = command2;
  const application = command.application;
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
  let obj1 = noop;
  closure_129_4 = noop.useRef(false);
  const items = [command2, tmp9, analyticsLocation, sectionName];
  const effect = noop.useEffect(() => {
    let current = null == command;
    if (!current) {
      current = null == loading;
    }
    if (!current) {
      current = bottomSheetExpandReasonRef.current;
    }
    if (!current) {
      const obj = {
        command,
        triggerSection: ApplicationCommandUtils.getCommandTriggerSection(loading),
        location: command,
        sectionName: expandBottomSheet,
      };
      obj.trackCommandSelected(obj);
      bottomSheetExpandReasonRef.current = true;
    }
  }, items);
  const items1 = [command(loading[34]).ApplicationCommandType.CHAT];
  const permissionContext = command(loading[58]).usePermissionContext(channel, items1);
  if (null != tmp9) {
    if (null != command2) {
      ({ context: context2, userId, roleIds, isImpersonating } = permissionContext);
      let guild_id;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        let tmp4Result = tmp4(tmp[59]);
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
        tmp4Result = tmp4(tmp[59]);
        allowedForChannel = tmp4Result.computeAllowedForChannel(tmp9.permissions, context2, context2.guild_id);
      }
      obj = {
        applicationAllowedForUser: allowedForUser,
        applicationAllowedForChannel: allowedForChannel,
        commandBotId: tmp9.botId,
        isGuildInstalled: tmp13,
      };
      obj = { command: command2, sectionDescriptor: tmp9, hasPermission: null, loading: null };
      const tmp4Result1 = tmp4(tmp[59]);
      const hasAccessResult = tmp4(tmp[59]).hasAccess(command2, permissionContext, obj);
      obj.hasPermission =
        tmp4(tmp[59]).hasAccess(command2, permissionContext, obj) === tmp4(tmp[59]).HasAccessResult.ALLOWED &&
        permissionContext.hasBaseAccessPermissions;
      obj.loading = tmp8.fetchState.fetching || tmp7.fetchState.fetching;
      const tmp27 =
        tmp4(tmp[59]).hasAccess(command2, permissionContext, obj) === tmp4(tmp[59]).HasAccessResult.ALLOWED &&
        permissionContext.hasBaseAccessPermissions;
    }
    loading = obj.loading;
    let command3 = command;
    ({ sectionDescriptor, hasPermission } = obj);
    if (command == null) {
      command3 = obj.command;
    }
    bottomSheetExpandReasonRef = command(tmp[24]).useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
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
    const effect1 = obj1.useEffect(() => {
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
    obj1 = {
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
    obj1.section = section;
    if (preSelectedCommand == null) {
      preSelectedCommand = null;
    }
    obj1.preSelectedCommand = preSelectedCommand;
    obj1.loading = loading;
    obj1.hasPermissions = null != command || hasPermission;
    obj1.installOnDemand = installOnDemand;
    obj1.sectionName = sectionName;
    obj1.analyticsLocation = analyticsLocation;
    obj1.onCommandExecuted = onCommandExecuted;
    return closure_20(AppLauncherCommandViewInner, obj1);
  }
  obj = {
    command: null,
    sectionDescriptor: null,
    hasPermission: false,
    loading: tmp8.fetchState.fetching || tmp7.fetchState.fetching,
  };
}
function LoadingState() {
  return closure_1_20(React5, {
    style: { flex: 1, justifyContent: "center", alignItems: "center" },
    children: closure_1_20(React6, { size: "large" }),
  });
}
function NotFoundState(onPress) {
  const tmp = closure_23();
  let obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND,
  );
  obj = { style: tmp.emptyStateContainer, children: null };
  obj = {
    style: tmp.emptyState,
    lightSource: _modDef12193,
    darkSource: _modDef12194,
    title: null,
    body: null,
    children: null,
  };
  const intl = util.intl;
  obj.title = intl.string(util.t["pX/qb9"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.exOQVY);
  const obj1 = {
    shrink: true,
    size: "sm",
    variant: "secondary",
    onPress: onPress.onPressBack,
    pillStyle: tmp.failureStateButtonPill,
    style: tmp.failureStateButtonWrapper,
    text: null,
  };
  const intl3 = util.intl;
  obj1.text = intl3.string(util.t["/g10LC"]);
  obj.children = closure_1_20(BaseTextButton.BaseTextButton, obj1);
  obj.children = closure_1_20(native.EmptyState, obj);
  return closure_1_20(React5, obj);
}
function NoPermsState(command) {
  command = command.command;
  const tmp = closure_23();
  let obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS,
  );
  obj = { style: tmp.emptyStateContainer, children: null };
  obj = { style: tmp.commandNameContainer, children: null };
  const items = [
    closure_1_20(Text_Text.Text, { variant: "heading-lg/bold", color: "text-default", children: command.displayName }),
    closure_1_20(Text_Text.Text, {
      variant: "heading-sm/medium",
      color: "text-default",
      children: command.displayDescription,
    }),
  ];
  obj.children = items;
  const items1 = [__initData(React5, obj)];
  const obj3 = {
    style: tmp.emptyState,
    lightSource: _modDef12114,
    darkSource: _modDef12115,
    title: null,
    body: null,
    children: null,
  };
  const intl = util.intl;
  obj3.title = intl.string(util.t.TzufcR);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t["I/O+A1"]);
  const obj4 = {
    shrink: true,
    size: "sm",
    variant: "secondary",
    onPress: command.onPressBack,
    pillStyle: tmp.failureStateButtonPill,
    style: tmp.failureStateButtonWrapper,
    text: null,
  };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["/g10LC"]);
  obj3.children = closure_1_20(BaseTextButton.BaseTextButton, obj4);
  items1[1] = closure_1_20(native.EmptyState, obj3);
  obj.children = items1;
  return __initData(React5, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ActivityIndicator: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const ApplicationCommandIndexStore = fn(9290);
({ useContextIndexState: closure_11, useUserIndexState: closure_12 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1482);
({
  AppLauncherOptionAutoFocusType: closure_14,
  useAppLauncherNavigation: closure_15,
  DEFAULT_CONTENT_PADDING,
} = AppLauncherNativeConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = Constants);
const MediaKeyboardTarget = fn(1607).MediaKeyboardTarget;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
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
createStyles = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles.container = createStyles;
createStyles.optionsContainer = {
  paddingTop: fn(12154).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingBottom: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
createStyles.requiredOptionsContainer = { marginTop: 24, gap: 24 };
createStyles.optionalOptionsContainer = {};
createStyles.optionalOptionsChild = { marginBottom: 24 };
createStyles.optionalOptionsFirstChild = { marginTop: 12 };
createStyles.optionalOptionsLastChild = { marginBottom: 12 };
createStyles.footerContainer = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
};
createStyles.submitButton = { flex: 1, overflow: "hidden" };
createStyles.optionalOptionsSectionTitle = { marginTop: 36 };
createStyles.optionalOptionList = { marginTop: 12 };
let obj1 = {
  paddingTop: fn(12154).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingBottom: DEFAULT_CONTENT_PADDING,
  backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
};
createStyles.noRequiredOptionsCalloutContainer = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
let obj2 = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.noOptionCalloutContainer = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.emptyState = { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 };
let obj3 = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  borderRadius: nativeDefault.radii.lg,
};
createStyles.emptyStateContainer = {
  paddingTop: fn(12154).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4,
  flex: 1,
};
createStyles.failureStateButtonWrapper = { marginTop: 24, alignSelf: "center" };
let obj4 = { paddingTop: fn(12154).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
createStyles.failureStateButtonPill = {
  borderRadius: nativeDefault.radii.xxl,
  paddingHorizontal: 12,
  paddingVertical: 8,
};
createStyles.commandNameContainer = { alignItems: "center", justifyContent: "center", textAlign: "center" };
let obj5 = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
createStyles.linearGradient = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_23 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}",
};
let closure_25 = {
  code: "function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}",
};
let closure_27 = {
  code: "function AppLauncherCommandViewScreenTsx3(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}",
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
    tmp9 = closure_1_20(AppLauncherCommandView, obj);
  }
  return tmp9;
}
