// discord_app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx
import closure_4 from "getIndexKey";
import getCommandContext from "getCommandContext";
import LinearGradient from "LinearGradient";
import get_ActivityIndicator from "timingNone";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getIndexKey from "getIndexKey";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import ME from "ME";
import { MediaKeyboardTarget } from "DRAG_HANDLE";
import jsxProd from "CollapsingText";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/11500_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/11501_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/11577_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/11578_registerAsset.js";
import { CollapsingText } from "../../../../../design/components/Button/native/BaseTextButton.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { AppLauncherEntrypoint } from "../../../AppLauncherTypes.tsx";
import { handleApplicationSelected } from "../../AppLauncherNativeUtils.tsx";

let DEFAULT_CONTENT_PADDING;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function AppLauncherCommandViewFooter(arg0) {
  let animatedStyle;
  let enableSubmit;
  let footerStickyInsetBottom;
  let isSending;
  let onSubmit;
  let require;
  ({ onHeightChange: require, isSending } = arg0);
  let closure_2;
  let stateFromStores;
  let first;
  let callback;
  ({ enableSubmit, onSubmit, animatedStyle, footerStickyInsetBottom } = arg0);
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(0), 2);
  closure_2 = tmp2[1];
  let obj = require(stateFromStores[14]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = callback(React.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
  let obj1 = require(stateFromStores[15]);
  let fn = function h() {
    if (stateFromStores) {
      let obj = {};
    } else if (first) {
      obj = { opacity: 1, transform: null };
      let obj1 = { translateX: null };
      const obj9 = outer1_0(stateFromStores[16]);
      const fn = function e() {
        const obj = callback(4036);
        return callback(4036).runOnJS(callback(4272).triggerHapticFeedback)(callback(4272).HapticFeedbackTypes.IMPACT_LIGHT);
      };
      const obj2 = { runOnJS: null, triggerHapticFeedback: null, HapticFeedbackTypes: null };
      obj2[0] = outer1_0(stateFromStores[15]).runOnJS;
      obj2[1] = outer1_0(stateFromStores[18]).triggerHapticFeedback;
      obj2[2] = outer1_0(stateFromStores[18]).HapticFeedbackTypes;
      fn.__closure = obj2;
      fn.__workletHash = 8545458901090;
      fn.__initData = outer1_25;
      obj1[0] = outer1_0(stateFromStores[15]).withDelay(100, obj9.withTiming(-4, outer1_0(stateFromStores[17]).timingStandard, "respect-motion-settings", fn));
      const items = [obj1];
      obj[1] = items;
      const obj8 = outer1_0(stateFromStores[15]);
    } else {
      obj = outer1_0(stateFromStores[16]);
      obj1 = isSending;
      let num = 1;
      if (isSending.get()) {
        num = 0;
      }
      obj = { opacity: null, transform: null };
      obj[0] = obj.withTiming(num, outer1_0(stateFromStores[17]).timingStandard);
      let obj3 = outer1_0(stateFromStores[16]);
      let num2 = 0;
      if (obj1.get()) {
        num2 = 100;
      }
      obj3 = { translateX: null };
      obj3[0] = obj3.withTiming(num2, outer1_0(stateFromStores[17]).timingStandard);
      const items1 = [obj3];
      obj[1] = items1;
    }
    return obj;
  };
  obj = { shouldReduceMotion: stateFromStores, isPressedDown: first, withDelay: require(stateFromStores[15]).withDelay, withTiming: require(stateFromStores[16]).withTiming, timingStandard: require(stateFromStores[17]).timingStandard, runOnJS: require(stateFromStores[15]).runOnJS, triggerHapticFeedback: require(stateFromStores[18]).triggerHapticFeedback, HapticFeedbackTypes: require(stateFromStores[18]).HapticFeedbackTypes, isSending };
  fn.__closure = obj;
  fn.__workletHash = 576353278359;
  fn.__initData = closure_24;
  animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      callback2(height);
      if (callback != null) {
        callback(height);
      }
    },
    style: items1,
    children: null
  };
  items1 = [tmp.footerContainer, animatedStyle];
  obj1 = { style: obj2, start: constants.START, end: obj3, colors: null, pointerEvents: "none" };
  obj2 = { width: "100%", top: -12, bottom: -footerStickyInsetBottom, left: tmp.footerContainer.paddingHorizontal, position: "absolute" };
  obj3 = { x: 0, y: 12 / (tmp2[0] + 12) };
  const tmp7 = isSending(stateFromStores[19]);
  const items2 = [require(stateFromStores[20]).hexWithOpacity(tmp.linearGradient.backgroundColor, 0), tmp.linearGradient.backgroundColor];
  obj1[3] = items2;
  const items3 = [callback5(tmp7, obj1), ];
  const obj4 = {
    onPress: onSubmit,
    onPressIn() {
      return callback3(true);
    },
    onPressOut() {
      return callback3(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton,
    text: null,
    icon: null,
    iconPosition: "end"
  };
  const intl = require(stateFromStores[22]).intl;
  obj4[5] = intl.string(require(stateFromStores[22]).t.TXNS7S);
  const obj5 = { style: animatedStyle, children: null };
  const obj6 = { style: { marginLeft: 8 }, color: null, size: "sm" };
  obj6[1] = isSending(stateFromStores[12]).unsafe_rawColors.WHITE;
  obj5[1] = callback5(require(stateFromStores[23]).SendMessageIcon, obj6);
  obj4[6] = callback5(isSending(stateFromStores[15]).View, obj5);
  items3[1] = callback5(require(stateFromStores[21]).BaseTextButton, obj4);
  obj[2] = items3;
  return callback6(isSending(stateFromStores[15]).View, obj);
}
function AppLauncherCommandViewInner(command) {
  let arr4;
  let c23;
  let c30;
  let hasPermissions;
  let installOnDemand;
  let loading;
  let preSelectedCommand;
  let section;
  let tmp20;
  command = command.command;
  const context = command.context;
  ({ preSelectedCommand, installOnDemand } = command);
  const sectionName = command.sectionName;
  const analyticsLocation = command.analyticsLocation;
  const onCommandExecuted = command.onCommandExecuted;
  let React;
  let c7;
  let keyboardCloseReasonRef;
  let entrypoint;
  let chatInputRef;
  let ref;
  let callback3;
  let createGuildRoleRecordFromRust;
  let closure_14;
  let callback4;
  let c16;
  let guild_id;
  let stateFromStores;
  let closure_19;
  let callback5;
  let callback6;
  let closure_22;
  let createCacheKey;
  let first;
  let closure_25;
  let closure_26;
  let first1;
  let closure_28;
  let closure_29;
  c30 = undefined;
  let closure_31;
  let first2;
  let closure_33;
  let closure_34;
  let first3;
  let closure_36;
  let first4;
  let closure_38;
  let first5;
  let closure_40;
  let sum1;
  let sum2;
  let sharedValue;
  let sharedValue1;
  let callback1;
  let callback2;
  let c47;
  let commandContext;
  callback3 = undefined;
  let height;
  let maximum;
  let bottomSheetPosition;
  let closure_53;
  callback5 = undefined;
  callback6 = undefined;
  let closure_56;
  let setLatch;
  let tryCallback;
  let closure_59;
  let closure_60;
  let closure_61;
  ({ section, loading, hasPermissions } = command);
  let tmp = createCacheKey();
  React = tmp;
  let tmp2 = callback4();
  c7 = tmp2;
  let obj = command(sectionName[24]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  let obj1 = React;
  ref = React.useRef(null);
  callback3 = React.useRef({});
  createGuildRoleRecordFromRust = React.useRef(0);
  closure_14 = React.useRef(0);
  callback4 = React.useRef(0);
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  let id;
  if (command != null) {
    id = command.id;
  }
  let tmp9 = null;
  if (commandId === id) {
    let prefilledOptions;
    if (preSelectedCommand != null) {
      prefilledOptions = preSelectedCommand.prefilledOptions;
    }
    if (prefilledOptions == null) {
      prefilledOptions = null;
    }
    tmp9 = prefilledOptions;
  }
  c16 = tmp9;
  guild_id = context.channel.guild_id;
  let tmp3Result = tmp3(tmp4[14]);
  let items = [createGuildRoleRecordFromRust];
  stateFromStores = tmp3Result.useStateFromStores(items, () => ref2.getRolesSnapshot(guild_id));
  closure_19 = obj1.useRef(false);
  callback5 = obj1.useRef(Date.now());
  callback6 = obj1.useRef(null);
  closure_22 = obj1.useRef(false);
  const items1 = [command];
  const effect = obj1.useEffect(() => {
    if (null != current) {
      current = ref6.current;
      current = ref5.current;
      current = ref7.current;
      return () => {
        if (!outer1_22.current) {
          const _Date = Date;
          const diff = Date.now() - current;
          let obj = command(sectionName[25]);
          obj = { time_spent: null, num_options: null, used_options: null, last_used_option_type: null };
          obj[0] = diff;
          const options = current.options;
          let num;
          if (options != null) {
            num = options.length;
          }
          if (num == null) {
            num = 0;
          }
          obj[1] = num;
          obj[2] = current;
          obj[3] = current;
          obj.trackWithMetadata(constants.APP_LAUNCHER_COMMAND_CLOSED, obj);
        }
      };
    }
  }, items1);
  const items2 = [chatInputRef, keyboardCloseReasonRef, tmp2];
  const callback = obj1.useCallback(() => {
    let arr = _undefined2;
    if (_undefined2.canGoBack()) {
      arr = arr.pop();
    } else {
      keyboardCloseReasonRef.current = command(sectionName[24]).AppLauncherKeyboardCloseReason.BACK;
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
  closure_26 = obj1.useRef(new Set());
  const tmp17 = onCommandExecuted(obj1.useState([]), 2);
  first1 = tmp17[0];
  closure_28 = tmp17[1];
  let set = new Set();
  closure_29 = obj1.useRef(new Set());
  const set1 = new Set();
  [tmp20, c30] = onCommandExecuted(obj1.useState([]), 2);
  closure_31 = obj1.useRef({});
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
  closure_40 = tmp29[1];
  const tmp32 = onCommandExecuted(obj1.useState(0), 2);
  let sum = context(tmp4[26])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom + tmp32[0];
  sum1 = sum + context(tmp4[12]).space.PX_16;
  sum2 = context(tmp4[26])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom + context(tmp4[12]).space.PX_16;
  tmp3Result = tmp3(tmp4[15]);
  sharedValue = tmp3Result.useSharedValue(false);
  const set2 = new Set();
  sharedValue1 = command(sectionName[15]).useSharedValue(0);
  const items3 = [first4, sum1, sharedValue1];
  callback1 = obj1.useCallback((required) => {
    const diff = first4 - sum1;
    const diff1 = diff - command(sectionName[13]).COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (required.required) {
        let current3 = ref2.current;
      } else {
        current3 = ref3.current;
      }
      const sum = ref.current[required.name] + current3;
      const diff2 = sum - command(sectionName[13]).COLLAPSED_HEADER_HEIGHT;
      sum1 = sharedValue1.get() + diff1;
      if (tmp15) {
        const current4 = ref.current;
        if (current4 != null) {
          const obj = { y: null, animated: true };
          const _Math = Math;
          obj[0] = Math.max(0, diff2 - diff1 / 2);
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
    ref10.current[name.name] = content;
    let obj = {};
    const merged = Object.assign(first2);
    obj = { option: name, content, guildId: context.channel.guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: command(sectionName[28]).CommandOrigin.APPLICATION_LAUNCHER };
    obj[name.name] = command(sectionName[27]).validateOptionContent(obj);
    callback2(obj);
    closure_19.current = true;
    closure_21.current = name.type;
  }, items4);
  const tmp40 = context(sectionName[29])(command);
  c47 = tmp40;
  const items5 = [guild_id, command, , , , ];
  let id1;
  if (tmp40 != null) {
    id1 = tmp40.id;
  }
  items5[2] = id1;
  items5[3] = tmp9;
  items5[4] = stateFromStores;
  items5[5] = context.channel.id;
  const effect1 = obj1.useEffect(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    let id1;
    if (_undefined5 != null) {
      id1 = _undefined5.id;
    }
    if (id !== id1) {
      closure_0 = [];
      let items = [];
      let closure_2 = [];
      let closure_3 = {};
      closure_31.current = {};
      if (tmp != null) {
        const options = tmp.options;
        if (options != null) {
          const item = options.forEach((required) => {
            let arr = required;
            if (true !== required.required) {
              let obj = outer1_16;
              let someResult;
              if (outer1_16 != null) {
                someResult = obj.some((name) => name.name === name.name);
              }
              if (someResult) {
                arr = items.push(required);
                let obj1 = command(sectionName[30]);
                obj = { option: null, prefilledValues: null, guildId: null, roles: null };
                obj[0] = required;
                obj[1] = outer1_16;
                obj[2] = outer1_17;
                obj[3] = outer1_18;
                outer1_31.current[required.name] = obj1.getInitialOptionValues(obj);
                obj = { option: null, content: null, guildId: null, channelId: null, allowEmptyValues: false, commandOrigin: null };
                obj[0] = required;
                obj[1] = outer1_31.current[required.name];
                obj[2] = outer1_17;
                obj[3] = items.channel.id;
                obj[5] = command(sectionName[28]).CommandOrigin.APPLICATION_LAUNCHER;
                closure_3[required.name] = command(sectionName[27]).validateOptionContent(obj);
                const obj4 = command(sectionName[27]);
              } else {
                arr = arr.push(required);
              }
            } else {
              arr2.push(required);
              obj1 = { option: null, prefilledValues: null, guildId: null, roles: null };
              obj1[0] = required;
              obj1[1] = outer1_16;
              obj1[2] = outer1_17;
              obj1[3] = outer1_18;
              outer1_31.current[required.name] = command(sectionName[30]).getInitialOptionValues(obj1);
              const obj6 = command(sectionName[30]);
              const obj2 = { option: null, content: null, guildId: null, channelId: null, allowEmptyValues: false, commandOrigin: null };
              obj2[0] = required;
              obj2[1] = outer1_31.current[required.name];
              obj2[2] = outer1_17;
              obj2[3] = items.channel.id;
              obj2[5] = command(sectionName[28]).CommandOrigin.APPLICATION_LAUNCHER;
              closure_3[required.name] = command(sectionName[27]).validateOptionContent(obj2);
              const obj8 = command(sectionName[27]);
            }
          });
        }
      }
      command(sectionName[31]).batchUpdates(() => {
        outer1_33(closure_3);
        outer1_23(closure_2);
        items = [...items];
        outer1_25(items);
        outer1_28(items);
        outer1_30(closure_0);
        outer1_36(new Set());
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
  const items6 = [callback1, chatInputRef, command, commandContext, sharedValue, keyboardCloseReasonRef, onCommandExecuted, first2, sectionName];
  callback3 = obj1.useCallback(() => {
    let rootCommand;
    if (null != command) {
      const firstInvalidOption = command(sectionName[33]).getFirstInvalidOption(tmp, first2);
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const set = new Set(Object.keys(tmp16));
        callback4(set);
        callback1(firstInvalidOption);
        let tmp14Result = tmp14(tmp15[25]);
        let obj = { application_id: null, command_id: null, argument_type: null, is_required: null };
        ({ applicationId: obj2[0], rootCommand } = tmp);
        let id;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        obj[1] = id;
        let num = firstInvalidOption.type;
        if (num == null) {
          num = 3;
        }
        obj[2] = tmp14(tmp15[34]).ApplicationCommandOptionType[num];
        obj[3] = firstInvalidOption.required;
        tmp14Result.trackWithMetadata(_undefined3.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
      } else {
        callback3(false);
        let result = sharedValue.set(true);
        closure_22.current = true;
        tmp14Result = tmp14(tmp15[35]);
        obj = { command: null, optionValues: null, context: null, sectionName: null, commandOrigin: null };
        obj[0] = tmp;
        obj[1] = tmp14(tmp15[36]).parseOptionValuesForSend(commandContext.channel, tmp, ref10.current);
        obj[2] = commandContext;
        obj[3] = sectionName;
        obj[4] = tmp14(tmp15[28]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
        const result1 = tmp14Result.executeAppLauncherCommand(obj);
        const tmp14Result1 = tmp14(tmp15[36]);
        result1.then(() => {
          const result = outer1_0(outer1_3[18]).triggerHapticFeedback(outer1_0(outer1_3[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_8.current = outer1_0(outer1_3[24]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
            if (callback != null) {
              callback();
            }
          }, 300);
        }).catch(() => {
          callback(true);
          const result = closure_43.set(false);
        });
        const nextPromise = result1.then(() => {
          const result = outer1_0(outer1_3[18]).triggerHapticFeedback(outer1_0(outer1_3[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_8.current = outer1_0(outer1_3[24]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
            if (callback != null) {
              callback();
            }
          }, 300);
        });
      }
      const obj3 = command(sectionName[33]);
      tmp16 = first2;
    }
  }, items6);
  callback3(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  callback4 = obj1.useCallback(analyticsLocation(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c2 = 2;
        if (0 === channel) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            if (c2) {
              if (null == outer1_0) {
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const obj1 = { applicationId: null, channel: null, commandIntegrationTypes: null, appLauncherContext: null };
                obj1[0] = tmp9.applicationId;
                obj1[1] = channel.channel;
                obj1[2] = tmp9.integration_types;
                const obj2 = { entrypoint: null, location: null, sectionName: null };
                obj2[0] = outer1_9;
                obj2[1] = outer1_4;
                obj2[2] = outer1_3;
                obj1[3] = obj2;
                channel = 1;
                c2 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = outer1_0(outer1_3[37]).installApplicationOnDemandIfNeeded(obj1);
                return obj3;
              }
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (!arg1.isAuthorized) {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
        callback();
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c2 = tmp;
        throw tmp11;
      }
    }
  }), items7);
  height = tmp31(tmp4[38])({ ignoreKeyboard: true }).height;
  maximum = tmp31(tmp4[39])().maximum;
  const tmp3Result2 = command(sectionName[32]);
  bottomSheetPosition = command(sectionName[24]).useRequiredAppLauncherContext().bottomSheetPosition;
  const tmp3Result3 = command(sectionName[24]);
  function et() {
    let obj = { transform: null };
    obj = { translateY: -bottomSheetPosition.get() - height + maximum - sum2 };
    const items = [obj];
    obj[0] = items;
    return obj;
  }
  et.__closure = { bottomSheetPosition, screenHeight: height, maxHeight: maximum, footerStickyInsetBottom: sum2 };
  et.__workletHash = 3470381437387;
  et.__initData = first1;
  const items8 = [first3, callback1];
  const animatedStyle = command(sectionName[15]).useAnimatedStyle(et);
  closure_53 = obj1.useCallback((name) => {
    first3.delete(name.name);
    callback4(new Set(first3));
    callback1(name);
  }, items8);
  const items9 = [first3, ];
  let name;
  if (first5 != null) {
    name = first5.name;
  }
  items9[1] = name;
  callback5 = obj1.useCallback((name) => {
    first3.add(name.name);
    callback4(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      callback6(null);
    }
  }, items9);
  const items10 = [command];
  callback6 = obj1.useCallback((arg0) => {
    if (null != command) {
      let obj = command(sectionName[25]);
      obj = { application_id: null, command_id: null, option_name: null, option_type: null };
      ({ applicationId: obj2[0], id: obj2[1] } = command);
      ({ name: obj2[2], type: obj2[3] } = arg0);
      obj.trackWithMetadata(_undefined3.APPLICATION_COMMAND_OPTION_PRESSED, obj);
    }
  }, items10);
  const items11 = [chatInputRef, context.channel, callback5, callback6];
  closure_56 = obj1.useCallback((option) => {
    let analyticsLocation;
    let onCommandExecuted;
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
      obj = { channel: null, draftType: null, extensions: null, uploadLimit: 1, disableWhenReachedLimit: false, includedUploadIds: null, onAttachPress: null, onPressCamera: null, onPressItem: null, onViewAll: null, onManageLimited: null, onClose: null, onBack: null };
      obj[0] = obj.channel;
      obj[1] = mediaKeyboardDraftType;
      obj[2] = allowedExtensions;
      let items = [option.name];
      obj[5] = items;
      obj[6] = function onAttachPress() {
        let obj = command(sectionName[40]);
        obj = {};
        const FILE_ATTACHMENT = command(sectionName[45]).UploadOrigin.FILE_ATTACHMENT;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (outer1_3.length > 0) {
              const obj = command(sectionName[43]);
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!outer1_4(items)) {
                return outer1_5();
              }
            }
            const result = command(sectionName[40]).addAttachmentForCommand(obj.channel.id, outer2_10, arg0[0], outer1_1, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.handleAttachFile(obj);
      };
      obj[7] = function onPressCamera(previewType) {
        let obj = command(sectionName[40]);
        obj = {};
        const IMAGE_PICKER = command(sectionName[45]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (outer1_3.length > 0) {
              const obj = command(sectionName[43]);
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!outer1_4(items)) {
                return outer1_5();
              }
            }
            const result = command(sectionName[40]).addAttachmentForCommand(obj.channel.id, outer2_10, arg0[0], outer1_1, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.previewType = previewType;
        obj.handleCameraDialog(obj);
      };
      obj[8] = function onPressItem(item) {
        const obj = command(sectionName[42]);
        const result = obj.hideMediaKeyboardActionSheet();
        const result1 = command(sectionName[40]).mediaNodeToUploadItem(item.item);
        if (allowedExtensions.length > 0) {
          let tmpResult = tmp(tmp2[43]);
          const items = [tmpResult.getFileFromUploadItem(result1).filename];
          if (!callback(items)) {
            return callback2();
          }
        }
        tmpResult = tmp(tmp2[40]);
        const result2 = tmpResult.addAttachmentForCommand(item.channelId, outer1_10, result1, obj, tmp(tmp2[45]).UploadOrigin.IMAGE_PICKER);
      };
      obj[9] = function onViewAll() {
        let obj = command(sectionName[40]);
        obj = {};
        const IMAGE_PICKER = command(sectionName[45]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[42]).hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: guild_id,
          onSelectFiles(arg0) {
            if (outer1_3.length > 0) {
              const obj = command(sectionName[43]);
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!outer1_4(items)) {
                return outer1_5();
              }
            }
            const result = command(sectionName[40]).addAttachmentForCommand(obj.channel.id, outer2_10, arg0[0], outer1_1, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.draftType = mediaKeyboardDraftType;
        obj.handleViewAllDialog(obj);
      };
      obj[10] = function onManageLimited() {
        let obj = FILE_ATTACHMENT(allowedExtensions[40]);
        obj = { onDismissKeyboard: FILE_ATTACHMENT(allowedExtensions[42]).hideMediaKeyboardActionSheet, onRestoreKeyboard: closure_17 };
        const result = obj.handleLimitedPickerDialog(obj);
      };
      obj[11] = function onClose() {
        outer1_54(FILE_ATTACHMENT);
      };
      obj[12] = function onBack() {
        const result = FILE_ATTACHMENT(allowedExtensions[42]).hideMediaKeyboardActionSheet();
      };
      let result1 = tmp(tmp2[42]).showMediaKeyboardActionSheet(obj);
      const tmpResult1 = tmp(tmp2[42]);
    } else {
      obj = {};
      FILE_ATTACHMENT = tmp(tmp2[45]).UploadOrigin.FILE_ATTACHMENT;
      obj1 = { channel: null, uploadLimit: 1, extensions: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null };
      obj1[0] = obj.channel;
      obj1[2] = allowedExtensions;
      obj1[3] = function onDismissKeyboard() {
        return IMAGE_PICKER(table[42]).hideMediaKeyboardActionSheet();
      };
      obj1[4] = guild_id;
      obj1[5] = function onSelectFiles(arg0) {
        if (outer1_3.length > 0) {
          const obj = command(sectionName[43]);
          const items = [obj.getFileFromUploadItem(arg0[0]).filename];
          if (!outer1_4(items)) {
            return outer1_5();
          }
        }
        const result = command(sectionName[40]).addAttachmentForCommand(obj.channel.id, outer2_10, arg0[0], outer1_1, IMAGE_PICKER);
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
    createGuildRoleRecordFromRust.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items13 = [first5, setLatch];
  const callback8 = obj1.useCallback((nativeEvent) => {
    closure_14.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items12);
  closure_59 = obj1.useCallback((nativeEvent, name) => {
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
  const items14 = [first1, first, callback2, guild_id, stateFromStores, , ];
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
  const items15 = [first1, first, first2, first3, , , ];
  let name1;
  const callback9 = obj1.useCallback((name) => {
    let current = ref8.current;
    current.add(name.name);
    const items = [];
    items[HermesBuiltin.arraySpread(first1, 0)] = name;
    callback(items);
    _undefined4(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    callback6(name);
    let obj = command(sectionName[30]);
    obj = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    callback2(name, obj.getInitialOptionValues(obj));
    closure_19.current = true;
    closure_21.current = name.type;
    let applicationId;
    if (command != null) {
      applicationId = tmp6.applicationId;
    }
    obj = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    let id;
    if (command != null) {
      id = tmp6.id;
    }
    obj[1] = id;
    ({ name: obj4[2], type: obj4[3] } = name);
    command(sectionName[25]).trackWithMetadata(_undefined3.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj);
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
  closure_60 = obj1.useCallback((name) => {
    let closure_0 = name;
    let current = ref8.current;
    current.delete(name.name);
    const current2 = ref9.current;
    current2.delete(name.name);
    callback(first1.filter((name) => name.name !== name.name));
    _undefined4(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp3[tmp];
    let obj = {};
    const merged = Object.assign(first2);
    callback2(obj);
    first3.delete(name.name);
    callback4(new Set(first3));
    name = undefined;
    if (first5 != null) {
      name = first5.name;
    }
    if (name.name === name) {
      callback6(null);
    }
    const set = new Set(first3);
    let applicationId;
    if (closure_0 != null) {
      applicationId = tmp16.applicationId;
    }
    obj = { application_id: applicationId, command_id: null, option_name: null, option_type: null };
    let id;
    if (closure_0 != null) {
      id = tmp16.id;
    }
    obj[1] = id;
    ({ name: obj3[2], type: obj3[3] } = name);
    command(sectionName[25]).trackWithMetadata(_undefined3.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj);
  }, items15);
  const callback10 = obj1.useCallback((nativeEvent) => callback5(nativeEvent.nativeEvent.layout.height), []);
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
    tmp70Result = callback5(c30, {});
    let tmp67 = callback5;
  } else if (null == command) {
    obj = { onPressBack: null };
    obj[0] = callback;
    tmp70Result = callback5(closure_31, obj);
    tmp67 = callback5;
  } else if (hasPermissions) {
    obj = { ref: null, contentContainerStyle: null, scrollIndicatorInsets: null, scrollToOverflowEnabled: true, onContentSizeChange: null, preserveScrollMomentum: true, lockableScrollableContentOffsetY: null, keyboardShouldPersistTaps: "handled", contentInsetAdjustmentBehavior: "never", automaticallyAdjustContentInsets: false, onLayout: null, automaticallyAdjustsScrollIndicatorInsets: false, children: null };
    obj[0] = ref;
    const items16 = [tmp.optionsContainer];
    obj[1] = items16;
    obj1 = { bottom: null };
    obj1[0] = sum1;
    obj[2] = obj1;
    obj[4] = callback11;
    obj[6] = sharedValue1;
    obj[10] = callback10;
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.commandNameContainer;
    let obj3 = { variant: "heading-lg/bold", color: "text-default", children: null };
    obj3[2] = command.displayName;
    const items17 = [callback5(tmp3(tmp4[49]).Text, obj3), ];
    let obj4 = { variant: "heading-sm/medium", color: "text-default", children: null };
    obj4[2] = command.displayDescription;
    items17[1] = callback5(tmp3(tmp4[49]).Text, obj4);
    obj2[1] = items17;
    const items18 = [callback6(c7, obj2), , , , , ];
    let tmp73Result = tmp63;
    if (tmp63) {
      const obj5 = { style: null, onLayout: null, children: null };
      obj5[0] = tmp.requiredOptionsContainer;
      obj5[1] = callback7;
      obj5[2] = arr4.map((name) => {
        const obj = { option: name, autoFocusType: null, editedOptions: null, onOptionViewLayout: null, onStartEditing: null, onEndEditing: null, onOptionValueChange: null, onPressOption: null, onPressAttachmentOption: null, channel: null, optionValidationResults: null, setFocusedOption: null, command: null, optionValues: null };
        if (0 === arg1) {
          if (!closure_61) {
            let NONE = ref3.FIRST_REQUIRED_OPTION;
          }
          obj[1] = NONE;
          obj[2] = first3;
          obj[3] = closure_59;
          obj[4] = closure_53;
          obj[5] = callback5;
          obj[6] = callback2;
          obj[7] = callback6;
          obj[8] = closure_56;
          obj[9] = context.channel;
          obj[10] = first2;
          obj[11] = closure_40;
          obj[12] = command;
          obj[13] = closure_31;
          return closure_20(tmp2, obj, name.name);
        }
        NONE = ref3.NONE;
      });
      tmp73Result = tmp73(tmp72, obj5);
    }
    items18[1] = tmp73Result;
    tmp73Result = !tmp63;
    if (!tmp63) {
      tmp73Result = tmp65;
    }
    if (tmp73Result) {
      let obj6 = { style: null, children: null };
      obj6[0] = tmp.noRequiredOptionsCalloutContainer;
      const obj7 = { variant: "text-sm/medium", color: "text-strong", style: null, children: null };
      obj7[2] = { textAlign: "center" };
      const intl = tmp3(tmp4[22]).intl;
      obj7[3] = intl.string(tmp3(tmp4[22]).t.HS2KtY);
      obj6[1] = tmp73(tmp3(tmp4[49]).Text, obj7);
      tmp73Result = tmp73(tmp72, obj6);
    }
    items18[2] = tmp73Result;
    let tmp73Result1 = !tmp65;
    if (!tmp65) {
      let obj8 = { style: null, children: null };
      obj8[0] = tmp.noOptionCalloutContainer;
      const obj9 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      obj9[2] = { textAlign: "center" };
      const intl2 = tmp3(tmp4[22]).intl;
      obj9[3] = intl2.string(tmp3(tmp4[22]).t.G8lEFB);
      obj8[1] = tmp73(tmp3(tmp4[49]).Text, obj9);
      tmp73Result1 = tmp73(tmp72, obj8);
    }
    items18[3] = tmp73Result1;
    if (tmp70Result) {
      const obj10 = { children: null };
      const obj11 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
      obj11[0] = tmp.optionalOptionsSectionTitle;
      const intl3 = tmp3(tmp4[22]).intl;
      obj11[3] = intl3.string(tmp3(tmp4[22]).t["5C107K"]);
      const items19 = [tmp73(tmp3(tmp4[49]).Text, obj11), , ];
      const obj12 = { style: null, onLayout: null, collapsable: false, children: null };
      obj12[0] = tmp.optionalOptionsContainer;
      obj12[1] = callback8;
      obj12[3] = first1.map((name) => {
        const items = [_undefined.optionalOptionsChild, , ];
        let optionalOptionsFirstChild = 0 === arg1;
        if (optionalOptionsFirstChild) {
          optionalOptionsFirstChild = tmp3.optionalOptionsFirstChild;
        }
        items[1] = optionalOptionsFirstChild;
        const tmp = closure_20;
        const tmp2 = context(sectionName[50]);
        const tmp4 = arg1 === first1.length - 1 && _undefined.optionalOptionsLastChild;
        items[2] = tmp4;
        const current = ref9.current;
        const current2 = ref9.current;
        return tmp(tmp2, { style: items, option: name, autoFocusType: current.has(name.name) ? closure_14.NONE : closure_14.OPTIONAL_OPTION_ADDED, onDismiss: closure_60, editedOptions: first3, onOptionViewLayout: closure_59, onStartEditing: closure_53, onEndEditing: callback5, onOptionValueChange: callback2, onPressOption: callback6, onPressAttachmentOption: closure_56, channel: context.channel, optionValidationResults: first2, setFocusedOption: closure_40, command, optionValues: closure_31, isPreSelectedOption: current2.has(name.name) }, name.name);
      });
      items19[1] = tmp73(tmp31(tmp4[15]).View, obj12);
      const obj13 = { layout: null, collapsable: false, children: null };
      obj13[0] = tmp3(tmp4[51]).LayoutAnimation;
      const obj14 = { style: null, options: null, onSelectOption: null };
      obj14[0] = tmp.optionalOptionList;
      obj14[1] = tmp20;
      obj14[2] = callback9;
      obj13[2] = tmp73(tmp31(tmp4[52]), obj14);
      items19[2] = tmp73(tmp31(tmp4[15]).View, obj13);
      obj10[0] = items19;
      tmp70Result = tmp70(tmp71, obj10);
    }
    const obj15 = { children: null };
    items18[4] = tmp70Result;
    const obj16 = { size: null };
    obj16[0] = sum1;
    items18[5] = callback5(tmp3(tmp4[53]).Spacer, obj16);
    obj[12] = items18;
    const items20 = [callback6(BottomSheetScrollView, obj), ];
    const obj17 = { enableSubmit: null, onSubmit: null, animatedStyle: null, onHeightChange: null, isSending: null, footerStickyInsetBottom: null };
    obj17[0] = tmp23[0];
    obj17[1] = callback4;
    obj17[2] = animatedStyle;
    obj17[3] = tmp32[1];
    obj17[4] = sharedValue;
    obj17[5] = sum2;
    items20[1] = callback5(closure_26, obj17);
    obj15[0] = items20;
    tmp70Result = tmp70(tmp71, obj15);
    tmp67 = tmp73;
  } else {
    tmp67 = callback5;
    const obj18 = { command: null, onPressBack: null };
    obj18[0] = command;
    obj18[1] = callback;
    tmp70Result = callback5(first2, obj18);
  }
  const obj19 = { style: tmp.container, children: null };
  const items21 = [tmp70Result, tmp67(command(sectionName[13]).AppLauncherCommandViewHeader, { command, onPressBack: callback, scrollOffsetY: sharedValue1, section })];
  obj19[1] = items21;
  return callback6(c7, obj19);
}
function AppLauncherCommandView(command) {
  let analyticsLocation;
  let context;
  let context2;
  let expandBottomSheet;
  let hasPermission;
  let installOnDemand;
  let isImpersonating;
  let onCommandExecuted;
  let preSelectedCommand;
  let roleIds;
  let section;
  let sectionDescriptor;
  let sectionName;
  let userId;
  command = command.command;
  analyticsLocation = command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  sectionName = expandBottomSheet;
  let command2;
  let loading;
  let bottomSheetExpandReasonRef;
  let c5;
  ({ installOnDemand, onCommandExecuted } = command);
  sectionName(loading[54])(null != context.channel, "channel should not be null");
  const tmp3 = sectionName(loading[55])();
  command2 = tmp3;
  const channel = context.channel;
  command2 = undefined;
  loading = undefined;
  bottomSheetExpandReasonRef = undefined;
  let obj = command2(loading[56]);
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  command = obj.useCommand({ channel, type: "channel" }, commandId);
  command2 = command.command;
  const application = command.application;
  const tmp7 = callback2({ channel, type: "channel" }, true, true);
  const tmp8 = callback3(true, true);
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
  loading = tmp9;
  let tmp13 = null != application;
  if (tmp13) {
    const result3 = tmp7.result;
    let tmp14;
    if (result3 != null) {
      tmp14 = result3.sections[application.id];
    }
    tmp13 = null != tmp14;
  }
  let obj1 = React;
  bottomSheetExpandReasonRef = React.useRef(false);
  const items = [command2, tmp9, analyticsLocation, sectionName];
  const effect = React.useEffect(() => {
    let current = null == command2;
    if (!current) {
      current = null == loading;
    }
    if (!current) {
      current = bottomSheetExpandReasonRef.current;
    }
    if (!current) {
      let obj = analyticsLocation(loading[57]);
      obj = { command: null, triggerSection: null, location: null, sectionName: null };
      obj[0] = command2;
      obj[1] = analyticsLocation(loading[57]).getCommandTriggerSection(loading);
      obj[2] = analyticsLocation;
      obj[3] = sectionName;
      obj.trackCommandSelected(obj);
      bottomSheetExpandReasonRef.current = true;
      const obj3 = analyticsLocation(loading[57]);
    }
  }, items);
  const items1 = [analyticsLocation(loading[34]).ApplicationCommandType.CHAT];
  const permissionContext = analyticsLocation(loading[58]).usePermissionContext(channel, items1);
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
        allowedForUser = tmp4Result.computeAllowedForUser(tmp9.permissions, context2.guild_id, userId, roleIds, isImpersonating);
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
      obj = { applicationAllowedForUser: null, applicationAllowedForChannel: null, commandBotId: null, isGuildInstalled: null };
      obj[0] = allowedForUser;
      obj[1] = allowedForChannel;
      obj[2] = tmp9.botId;
      obj[3] = tmp13;
      obj = { command: null, sectionDescriptor: null, hasPermission: null, loading: null };
      obj[0] = command2;
      obj[1] = tmp9;
      const tmp4Result1 = tmp4(tmp[59]);
      const hasAccessResult = tmp4(tmp[59]).hasAccess(command2, permissionContext, obj);
      obj[2] = tmp4(tmp[59]).hasAccess(command2, permissionContext, obj) === tmp4(tmp[59]).HasAccessResult.ALLOWED && permissionContext.hasBaseAccessPermissions;
      obj[3] = tmp8.fetchState.fetching || tmp7.fetchState.fetching;
      const tmp27 = tmp4(tmp[59]).hasAccess(command2, permissionContext, obj) === tmp4(tmp[59]).HasAccessResult.ALLOWED && permissionContext.hasBaseAccessPermissions;
    }
    loading = obj.loading;
    let command3 = command;
    ({ sectionDescriptor, hasPermission } = obj);
    if (command == null) {
      command3 = obj.command;
    }
    bottomSheetExpandReasonRef = analyticsLocation(tmp[24]).useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
    let tmp29 = null != command3;
    if (tmp29) {
      let options = command3.options;
      if (options == null) {
        options = [];
      }
      tmp29 = options.length > 0;
    }
    c5 = tmp29;
    const items2 = [command, tmp29, loading, tmp3, bottomSheetExpandReasonRef, expandBottomSheet];
    const effect1 = obj1.useEffect(() => {
      let tmp = command2;
      if (command2) {
        let tmp2 = c5;
        if (!c5) {
          let tmp4 = !loading;
          if (!loading) {
            tmp4 = null == analyticsLocation;
          }
          tmp2 = tmp4;
        }
        tmp = tmp2;
      }
      if (tmp) {
        bottomSheetExpandReasonRef.current = analyticsLocation(loading[24]).AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
        if (sectionName != null) {
          sectionName();
        }
      }
    }, items2);
    obj1 = { command: null, context: null, section: null, preSelectedCommand: null, loading: null, hasPermissions: null, installOnDemand: null, sectionName: null, analyticsLocation: null, onCommandExecuted: null };
    obj1[0] = command3;
    obj1[1] = context;
    if (section == null) {
      section = sectionDescriptor;
    }
    obj1[2] = section;
    if (preSelectedCommand == null) {
      preSelectedCommand = null;
    }
    obj1[3] = preSelectedCommand;
    obj1[4] = loading;
    obj1[5] = null != command || hasPermission;
    obj1[6] = installOnDemand;
    obj1[7] = sectionName;
    obj1[8] = analyticsLocation;
    obj1[9] = onCommandExecuted;
    return closure_20(AppLauncherCommandViewInner, obj1);
  }
  obj = { command: null, sectionDescriptor: null, hasPermission: false, loading: tmp8.fetchState.fetching || tmp7.fetchState.fetching };
}
function LoadingState() {
  return callback5(closure_7, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: callback5(closure_8, { size: "large" }) });
}
function NotFoundState(onPress) {
  const tmp = createCacheKey();
  let obj = handleApplicationSelected;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherEntrypoint.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  obj = { style: tmp.emptyStateContainer, children: null };
  obj = { style: tmp.emptyState, lightSource: null, darkSource: null, title: null, body: null, children: null };
  obj[1] = registerAsset;
  obj[2] = registerAsset;
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["pX/qb9"]);
  const intl2 = getSystemLocale.intl;
  obj[4] = intl2.string(getSystemLocale.t.exOQVY);
  const obj1 = { shrink: true, size: "sm", variant: "secondary", onPress: onPress.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: null };
  const intl3 = getSystemLocale.intl;
  obj1[6] = intl3.string(getSystemLocale.t["/g10LC"]);
  obj[5] = callback5(CollapsingText.BaseTextButton, obj1);
  obj[1] = callback5(Button.EmptyState, obj);
  return callback5(closure_7, obj);
}
function NoPermsState(command) {
  command = command.command;
  const tmp = createCacheKey();
  let obj = handleApplicationSelected;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherEntrypoint.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  obj = { style: tmp.emptyStateContainer, children: null };
  obj = { style: tmp.commandNameContainer, children: null };
  const items = [callback5(Text.Text, { variant: "heading-lg/bold", color: "text-default", children: command.displayName }), callback5(Text.Text, { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription })];
  obj[1] = items;
  const items1 = [callback6(closure_7, obj), ];
  const obj3 = { style: tmp.emptyState, lightSource: null, darkSource: null, title: null, body: null, children: null };
  obj3[1] = registerAsset;
  obj3[2] = registerAsset;
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t.TzufcR);
  const intl2 = getSystemLocale.intl;
  obj3[4] = intl2.string(getSystemLocale.t["I/O+A1"]);
  const obj4 = { shrink: true, size: "sm", variant: "secondary", onPress: command.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: null };
  const intl3 = getSystemLocale.intl;
  obj4[6] = intl3.string(getSystemLocale.t["/g10LC"]);
  obj3[5] = callback5(CollapsingText.BaseTextButton, obj4);
  items1[1] = callback5(Button.EmptyState, obj3);
  obj[1] = items1;
  return callback6(closure_7, obj);
}
({ View: error, ActivityIndicator: metroImportAll, ScrollView: c9 } = get_ActivityIndicator);
({ useContextIndexState: unpackModuleId, useUserIndexState: closure_12 } = getIndexKey);
({ AppLauncherOptionAutoFocusType: closure_14, useAppLauncherNavigation: closure_15, DEFAULT_CONTENT_PADDING } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = ME);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
createCacheKey = { container: null, optionsContainer: null, requiredOptionsContainer: null, optionalOptionsContainer: null, optionalOptionsChild: null, optionalOptionsFirstChild: null, optionalOptionsLastChild: null, footerContainer: null, submitButton: null, optionalOptionsSectionTitle: null, optionalOptionList: null, noRequiredOptionsCalloutContainer: null, noOptionCalloutContainer: null, emptyState: null, emptyStateContainer: null, failureStateButtonWrapper: null, failureStateButtonPill: null, commandNameContainer: null, linearGradient: null };
createCacheKey = { height: "100%", backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[0] = createCacheKey;
let obj1 = { paddingTop: null, paddingHorizontal: null, paddingBottom: null, backgroundColor: null };
obj1[0] = require("DEFAULT_CONTENT_PADDING").EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + require("Themes").space.PX_4;
obj1[1] = DEFAULT_CONTENT_PADDING;
obj1[2] = DEFAULT_CONTENT_PADDING;
obj1[3] = require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
createCacheKey[1] = obj1;
createCacheKey[2] = { marginTop: 24, gap: 24 };
createCacheKey[3] = {};
createCacheKey[4] = { marginBottom: 24 };
createCacheKey[5] = { marginTop: 12 };
createCacheKey[6] = { marginBottom: 12 };
createCacheKey[7] = { position: "absolute", left: 0, bottom: 0, right: 0, paddingHorizontal: DEFAULT_CONTENT_PADDING };
createCacheKey[8] = { flex: 1, overflow: "hidden" };
createCacheKey[9] = { marginTop: 36 };
createCacheKey[10] = { marginTop: 12 };
createCacheKey[11] = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 24, borderRadius: require("Themes").radii.lg };
let obj2 = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 24, borderRadius: require("Themes").radii.lg };
createCacheKey[12] = { padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: require("Themes").radii.lg };
createCacheKey[13] = { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 };
let obj4 = { paddingTop: null, flex: 1 };
obj4[0] = require("DEFAULT_CONTENT_PADDING").EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + require("Themes").space.PX_4;
createCacheKey[14] = obj4;
createCacheKey[15] = { marginTop: 24, alignSelf: "center" };
let obj3 = { padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: require("Themes").radii.lg };
createCacheKey[16] = { borderRadius: require("Themes").radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
createCacheKey[17] = { alignItems: "center", justifyContent: "center", textAlign: "center" };
let obj5 = { borderRadius: require("Themes").radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
createCacheKey[18] = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_24 = { code: "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
let closure_25 = { code: "function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_27 = { code: "function AppLauncherCommandViewScreenTsx3(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}" };
let obj6 = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let result = require("noop").fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx");

export default function AppLauncherCommandViewScreen(route) {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = { command: null, context: null, section: null, preSelectedCommand: null, installOnDemand: null, sectionName: null, analyticsLocation: null, expandBottomSheet: null, onCommandExecuted: null };
    obj[0] = tmp;
    obj[1] = context;
    obj[2] = tmp2;
    obj[3] = tmp3;
    obj[4] = tmp5;
    obj[5] = tmp6;
    obj[6] = tmp4;
    obj[7] = tmp7;
    obj[8] = tmp8;
    tmp9 = callback5(AppLauncherCommandView, obj);
  }
  return tmp9;
};