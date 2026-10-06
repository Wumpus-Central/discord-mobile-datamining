// === Module 11791: AppLauncherCommandViewScreen ===

// Module 11791 (AppLauncherCommandViewScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import Server from "Server" /* 1985 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import BaseTextButton2 from "BaseTextButton" /* 5602 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7043 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import Upload from "Upload" /* 7282 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7287 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8826 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8961 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10377 */;
import showMediaKeyboardActionSheet from "showMediaKeyboardActionSheet" /* 10378 */;
import AppLauncherContext from "AppLauncherContext" /* 11007 */;
import ApplicationCommandOptionValueParser from "ApplicationCommandOptionValueParser" /* 11621 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11679 */;
import AssetRegistryDefault from "AssetRegistry" /* 11752 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11753 */;
import AppLauncherCommandViewHeader from "AppLauncherCommandViewHeader" /* 11792 */;
import ApplicationCommandValidationUtils from "ApplicationCommandValidationUtils" /* 11793 */;
import application_commands_ApplicationCommandValidationUtils from "application_commands/ApplicationCommandValidationUtils" /* 11795 */;
import CommandOptionViewDefault from "CommandOptionView" /* 11798 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11833 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11834 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8827 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, num3, num4, num5, obj1, set, set2, str, tmp25, tmp29;

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
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function AppLauncherCommandViewInner(command) {
  let BottomSheetScrollView;
  let Text;
  let Text2;
  let _undefined;
  let arr4;
  let c24;
  let c31;
  let closure_29;
  let hasPermissions;
  let installOnDemand;
  let intl;
  let intl2;
  let intl3;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let loading;
  let obj11;
  let obj13;
  let obj18;
  let obj5;
  let optionalOptionsChild;
  let preSelectedCommand;
  let section;
  let tmp20;
  let tmp70;
  let tmp73Result2;
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
  let ref8;
  closure_23 = undefined;
  c24 = undefined;
  let first;
  let closure_26;
  let ref9;
  let first1;
  __initData4 = undefined;
  let ref10;
  c31 = undefined;
  let optionValues;
  let first2;
  closure_34 = undefined;
  closure_35 = undefined;
  let first4;
  let closure_37;
  let first5;
  let closure_39;
  let first6;
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
  let closure_62;
  ({ section, loading, hasPermissions } = command);
  const tmp = closure_23();
  react = tmp;
  let tmp2 = ref4();
  let closure_7 = tmp2;
  const tmp3 = command;
  let tmp4 = sectionName;
  let obj = command(sectionName[26]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  let obj2 = react;
  react.useRef(null);
  const ref = react.useRef({});
  const ref2 = react.useRef({});
  const ref3 = react.useRef(0);
  ref4 = react.useRef(0);
  const ref5 = react.useRef(0);
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
  let items = [ref2];
  const tmp3Result = tmp3(tmp4[16]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildRoleStore.getRolesSnapshot(guild_id));
  ref6 = obj2.useRef(false);
  ref7 = obj2.useRef(Date.now());
  ref8 = obj2.useRef(null);
  closure_23 = obj2.useRef(false);
  const items1 = [command];
  const effect = obj2.useEffect(() => {
    let current;
    if (null != current) {
      current = ref8.current;
      return () => {
        let num;
        if (!ref.current) {
          const _Date = Date;
          const diff = Date.now() - current;
          const options = command.options;
          const obj = { time_spent: diff, num_options: num, used_options: current, last_used_option_type: current };
          num = undefined;
          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
          const APP_LAUNCHER_COMMAND_CLOSED = constants.APP_LAUNCHER_COMMAND_CLOSED;
          AppAnalyticsUtils;
          if (options != null) {
            num = options.length;
          }
          if (num == null) {
            num = 0;
          }
          trackWithMetadata(APP_LAUNCHER_COMMAND_CLOSED, obj);
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
  const tmp14 = onCommandExecuted(obj2.useState([]), 2);
  [arr4, c24] = tmp14;
  const tmp15 = onCommandExecuted(obj2.useState([]), 2);
  first = tmp15[0];
  closure_26 = tmp15[1];
  const useRef = obj2.useRef;
  set = new Set();
  ref9 = useRef(set);
  const tmp17 = onCommandExecuted(obj2.useState([]), 2);
  first1 = tmp17[0];
  __initData4 = tmp17[1];
  const useRef2 = obj2.useRef;
  const set1 = new Set();
  ref10 = useRef2(set1);
  [tmp20, c31] = onCommandExecuted(obj2.useState([]), 2);
  onCommandExecuted(obj2.useState([]), 2);
  optionValues = obj2.useRef({});
  const tmp21 = onCommandExecuted(obj2.useState({}), 2);
  first2 = tmp21[0];
  closure_34 = tmp21[1];
  let tmp23 = onCommandExecuted(obj2.useState(true), 2);
  closure_35 = tmp23[1];
  const first3 = tmp23[0];
  const useState = obj2.useState;
  set2 = new Set();
  const tmp26 = onCommandExecuted(useState(set2), 2);
  first4 = tmp26[0];
  closure_37 = tmp26[1];
  const tmp28 = onCommandExecuted(obj2.useState(0), 2);
  first5 = tmp28[0];
  closure_39 = tmp28[1];
  const tmp30 = onCommandExecuted(obj2.useState(null), 2);
  first6 = tmp30[0];
  setFocusedOption = tmp30[1];
  const bottom = context(tmp4[28])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom;
  const insets = context(tmp4[28])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets;
  const tmp33 = onCommandExecuted(obj2.useState(0), 2);
  let sum = insets.bottom + tmp33[0];
  const tmp34 = tmp33[1];
  sum1 = sum + context(tmp4[12]).space.PX_16;
  sum2 = bottom + context(tmp4[12]).space.PX_16;
  const tmp3Result6 = tmp3(tmp4[17]);
  sharedValue = tmp3Result6.useSharedValue(false);
  const tmp3Result7 = tmp3(tmp4[17]);
  sharedValue1 = tmp3Result7.useSharedValue(0);
  const items3 = [first5, sum1, sharedValue1];
  callback1 = obj2.useCallback((required) => {
    const diff = first5 - sum1;
    const diff1 = diff - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (null != ref.current[required.name]) {
        if (diff1 > 0) {
          let current3;
          if (required.required) {
            current3 = ref3.current;
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
          const value = sharedValue1.get();
          sum2 = value + diff1;
          if (num >= diff1) {
            const tmp23 = sum1 < value || sum1 > sum2;
            if (tmp23) {
              const current5 = ref.current;
              if (current5 != null) {
                const _Math2 = Math;
                const scrollTo2 = current5.scrollTo;
                const obj2 = { y: Math.max(0, sum1 - diff1), animated: true };
                scrollTo2(obj2);
              }
            }
          } else {
            if (sum1 > value) {
              let diff3;
              if (diff2 < sum2) {
                diff3 = diff2;
                if (sum1 > sum2) {
                  diff3 = sum1 - diff1;
                }
              }
              const current4 = ref.current;
              if (current4 != null) {
                const _Math = Math;
                const scrollTo = current4.scrollTo;
                const obj = { y: Math.max(0, diff3), animated: true };
                scrollTo(obj);
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
        const tmp5 = diff4 > 0 && sharedValue1.get() > diff4;
        if (tmp5) {
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd({ animated: true });
          }
        }
      }
    }
  }, items3);
  const items4 = [context.channel.guild_id, context.channel.id, first2];
  callback2 = obj2.useCallback((name, content) => {
    optionValues.current[name.name] = content;
    const obj = {};
    const merged = Object.assign(first2);
    name = name.name;
    const obj2 = ApplicationCommandValidationUtils;
    const obj3 = { option: name, content, guildId: context.channel.guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
    obj[name] = obj2.validateOptionContent(obj3);
    closure_34(obj);
    ref6.current = true;
    ref8.current = name.type;
  }, items4);
  const tmp42 = context(tmp4[31])(command);
  id = tmp42;
  const items5 = [guild_id, command, , , , ];
  let id1;
  const useEffect = obj2.useEffect;
  if (tmp42 != null) {
    id1 = tmp42.id;
  }
  items5[2] = id1;
  items5[3] = tmp9;
  items5[4] = stateFromStores;
  items5[5] = context.channel.id;
  const effect1 = useEffect(() => {
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
      let closure_2 = [];
      let closure_3 = {};
      closure_32.current = {};
      if (closure_0 != null) {
        const options = tmp.options;
        if (options != null) {
          const item = options.forEach((required) => {
            closure_0 = required;
            if (true !== required.required) {
              let someResult;
              if (prefilledOptions != null) {
                someResult = prefilledOptions.some((name) => name.name === name.name);
              }
              if (someResult) {
                items.push(required);
                const current = optionValues.current;
                const name = required.name;
                const obj3 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
                const obj2 = AppLauncherNativeUtils;
                current[name] = obj2.getInitialOptionValues(obj3);
                const name2 = required.name;
                const obj4 = { option: required, content: optionValues.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
                const prop = ApplicationCommandValidationUtils.validateOptionContent;
                ApplicationCommandValidationUtils;
                closure_3[name2] = prop(obj4);
              } else {
                closure_0.push(required);
              }
            } else {
              closure_2.push(required);
              const current2 = optionValues.current;
              const name3 = required.name;
              const obj6 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
              const obj5 = AppLauncherNativeUtils;
              current2[name3] = obj5.getInitialOptionValues(obj6);
              const name4 = required.name;
              const obj7 = { option: required, content: optionValues.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
              const prop1 = ApplicationCommandValidationUtils.validateOptionContent;
              ApplicationCommandValidationUtils;
              closure_3[name4] = prop1(obj7);
            }
          });
        }
      }
      const obj = command(sectionName[33]);
      obj.batchUpdates(() => {
        closure_34(closure_3);
        c24(closure_2);
        items = [...items];
        closure_26(items);
        closure_29(items);
        c31(closure_0);
        set = new Set();
        closure_37(set);
      });
      let current = ref9.current;
      current.clear();
      const item1 = items.forEach((name) => {
        const current = ref.current;
        return current.add(name.name);
      });
      let current2 = ref10.current;
      current2.clear();
      const item2 = items.forEach((name) => {
        const current = ref2.current;
        return current.add(name.name);
      });
    }
  }, items5);
  const tmp3Result8 = tmp3(tmp4[34]);
  commandContext = tmp3Result8.useCommandContext(context);
  const items6 = [callback1, chatInputRef, command, commandContext, sharedValue, keyboardCloseReasonRef, onCommandExecuted, first2, sectionName];
  callback3 = obj2.useCallback(function() {
    let ApplicationCommandOptionType;
    let num;
    let rootCommand;
    let tmp13Result4;
    if (null != command) {
      const obj2 = application_commands_ApplicationCommandValidationUtils;
      const firstInvalidOption = obj2.getFirstInvalidOption(command, first2);
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const self = this;
        const self2 = this;
        set = new Set(Object.keys(first2));
        closure_37(set);
        callback1(firstInvalidOption);
        let obj = { application_id: null, command_id: id, argument_type: ApplicationCommandOptionType[num], is_required: firstInvalidOption.required };
        ({ applicationId: obj.application_id, rootCommand } = command);
        id = undefined;
        const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
        const APPLICATION_COMMAND_VALIDATION_FAILED = ref5.APPLICATION_COMMAND_VALIDATION_FAILED;
        AppAnalyticsUtils;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        num = firstInvalidOption.type;
        ApplicationCommandOptionType = Server.ApplicationCommandOptionType;
        if (num == null) {
          num = 3;
        }
        trackWithMetadata(APPLICATION_COMMAND_VALIDATION_FAILED, obj);
      } else {
        closure_35(false);
        let result = sharedValue.set(true);
        closure_23.current = true;
        const obj3 = { command, optionValues: tmp13Result4.parseOptionValuesForSend(commandContext.channel, command, optionValues.current), context: commandContext, sectionName, commandOrigin: ApplicationCommandTypes.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
        const executeAppLauncherCommand = AppLauncherUtils.executeAppLauncherCommand;
        AppLauncherUtils;
        tmp13Result4 = ApplicationCommandOptionValueParser;
        const result1 = executeAppLauncherCommand(obj3);
        const nextPromise = result1.then(() => {
          const obj = command(sectionName[20]);
          const result = obj.triggerHapticFeedback(command(sectionName[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_1_8.current = command(sectionName[26]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
            if (closure_1_5 != null) {
              closure_1_5();
            }
          }, 300);
        });
        nextPromise.catch(() => {
          closure_1_35(true);
          const result = sharedValue.set(false);
        });
      }
    }
  }, items6);
  ref(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  const callback4 = obj2.useCallback(analyticsLocation(function*() {
    let closure_0;
    let obj5;
    let obj6;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (installOnDemand) {
            if (null == command) {
              c2 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj4 = { applicationId: command.applicationId, channel: context.channel, commandIntegrationTypes: command.integration_types, appLauncherContext: obj6 };
              obj6 = { entrypoint, location: analyticsLocation, sectionName };
              c1 = 1;
              c2 = 1;
              const obj7 = { value: obj5.installApplicationOnDemandIfNeeded(obj4), done: false };
              obj5 = tmp(sectionName[39]);
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
          return { value: "IconComponent", done: null };
        }
        closure_128_50();
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  }), items7);
  height = tmp32(tmp4[40])({ ignoreKeyboard: true }).height;
  maximum = tmp32(tmp4[41])().maximum;
  const tmp3Result9 = tmp3(tmp4[26]);
  bottomSheetPosition = tmp3Result9.useRequiredAppLauncherContext().bottomSheetPosition;
  function ot() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: -bottomSheetPosition.get() - height + maximum - sum2 }];
    ({ translateY: -bottomSheetPosition.get() - height + maximum - sum2 });
    return obj;
  }
  ot.__closure = { bottomSheetPosition, screenHeight: height, maxHeight: maximum, footerStickyInsetBottom: sum2 };
  ot.__workletHash = 10939625510733;
  ot.__initData = __initData4;
  const items8 = [first4, callback1];
  const tmp3Result10 = tmp3(tmp4[17]);
  const animatedStyle = tmp3Result10.useAnimatedStyle(ot);
  onStartEditing = obj2.useCallback((name) => {
    first4.delete(name.name);
    set = new Set(first4);
    closure_37(set);
    callback1(name);
  }, items8);
  const items9 = [first4, ];
  let name;
  const useCallback = obj2.useCallback;
  if (first6 != null) {
    name = first6.name;
  }
  items9[1] = name;
  callback5 = useCallback((name) => {
    first4.add(name.name);
    set = new Set(first4);
    closure_37(set);
    let name1;
    name = name.name;
    if (first6 != null) {
      name1 = first6.name;
    }
    if (name === name1) {
      setFocusedOption(null);
    }
  }, items9);
  const items10 = [command];
  callback6 = obj2.useCallback((arg0) => {
    if (null != command) {
      const obj3 = { application_id: null, command_id: null, option_name: null, option_type: null };
      ({ applicationId: obj2.application_id, id: obj2.command_id } = command);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      const obj = AppAnalyticsUtils;
      obj.trackWithMetadata(ref5.APPLICATION_COMMAND_OPTION_PRESSED, obj3);
    }
  }, items10);
  const items11 = [chatInputRef, context.channel, callback5, callback6];
  onPressAttachmentOption = obj2.useCallback((option) => {
    let items;
    let onRestoreKeyboard;
    let obj = { target: stateFromStores.APP_LAUNCHER, option };
    let obj2 = command(sectionName[42]);
    const mediaKeyboardDraftType = obj2.getMediaKeyboardDraftType(obj.target);
    let fileTypes;
    if (option.type === command(sectionName[36]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    let tmpResult = command(sectionName[43]);
    const fileTypeFiltering = tmpResult.getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    ({ validateFilenames: analyticsLocation, showInvalidFileTypeAlert: onCommandExecuted } = fileTypeFiltering);
    const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
    callback6(option);
    const tmpResult4 = command(sectionName[46]);
    let result = tmpResult4.dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      const obj3 = {
        channel: obj.channel,
        draftType: mediaKeyboardDraftType,
        extensions: allowedExtensions,
        uploadLimit: 1,
        disableWhenReachedLimit: false,
        includedUploadIds: items,
        onAttachPress() {
            obj = {};
            const handleAttachFile = command(sectionName[42]).handleAttachFile;
            command(sectionName[42]);
            const FILE_ATTACHMENT = command(sectionName[47]).UploadOrigin.FILE_ATTACHMENT;
            const obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleAttachFile(obj);
          },
        onPressCamera(previewType) {
            obj = { previewType };
            const handleCameraDialog = command(sectionName[42]).handleCameraDialog;
            command(sectionName[42]);
            const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
            const obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleCameraDialog(obj);
          },
        onPressItem(channelId) {
            channelId = channelId.channelId;
            const item = channelId.item;
            obj = showMediaKeyboardActionSheet;
            const result = obj.hideMediaKeyboardActionSheet();
            const obj2 = MediaKeyboardUtils;
            const result1 = obj2.mediaNodeToUploadItem(item);
            if (allowedExtensions.length > 0) {
              const items = [];
              const tmpResult = utils_UploadUtils;
              items[0] = tmpResult.getFileFromUploadItem(result1).filename;
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const tmpResult2 = MediaKeyboardUtils;
            const result2 = tmpResult2.addAttachmentForCommand(channelId, chatInputRef, result1, obj, Upload.UploadOrigin.IMAGE_PICKER);
          },
        onViewAll() {
            obj = { draftType: mediaKeyboardDraftType };
            const handleViewAllDialog = command(sectionName[42]).handleViewAllDialog;
            command(sectionName[42]);
            const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
            let obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleViewAllDialog(obj);
          },
        onManageLimited() {
            obj = option(allowedExtensions[42]);
            const obj2 = { onDismissKeyboard: option(allowedExtensions[44]).hideMediaKeyboardActionSheet, onRestoreKeyboard };
            const result = obj.handleLimitedPickerDialog(obj2);
          },
        onClose() {
            callback5(option);
          },
        onBack() {
            obj = option(allowedExtensions[44]);
            const result = obj.hideMediaKeyboardActionSheet();
          }
      };
      items = [option.name];
      const tmpResult5 = command(sectionName[44]);
      let result1 = tmpResult5.showMediaKeyboardActionSheet(obj3);
    } else {
      const obj4 = {};
      let handleAttachFile = command(sectionName[42]).handleAttachFile;
      command(sectionName[42]);
      let FILE_ATTACHMENT = command(sectionName[47]).UploadOrigin.FILE_ATTACHMENT;
      const obj5 = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
            obj = IMAGE_PICKER(allowedExtensions[44]);
            return obj.hideMediaKeyboardActionSheet();
          },
        onRestoreKeyboard: prefilledOptions,
        onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const obj2 = MediaKeyboardUtils;
            const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
      };
      let merged = Object.assign(obj5);
      handleAttachFile(obj4);
    }
  }, items11);
  const tmp54 = context(tmp4[48])(() => {
    callback1(first6);
  });
  setLatch = tmp54.setLatch;
  tryCallback = tmp54.tryCallback;
  const items12 = [tryCallback];
  const callback7 = obj2.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items13 = [first6, setLatch, callback1];
  const callback8 = obj2.useCallback((nativeEvent) => {
    ref4.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items12);
  onOptionViewLayout = obj2.useCallback((nativeEvent, name) => {
    ({ height, y: closure_12.current[name.name] } = nativeEvent.nativeEvent.layout);
    ref2.current[name.name] = height;
    if (null == ref.current[name.name]) {
      name = undefined;
      if (first6 != null) {
        name = first6.name;
      }
      if (name === name.name) {
        setLatch(true);
      }
    }
    let name1;
    if (first6 != null) {
      name1 = first6.name;
    }
    const tmp4 = name1 === name.name && null != ref2.current[name.name] && height > ref2.current[name.name];
    if (tmp4) {
      callback1(name);
    }
  }, items13);
  const items14 = [first6, callback1];
  const effect2 = obj2.useEffect(() => {
    if (null != first6) {
      callback1(tmp);
    }
  }, items14);
  const items15 = [first1, first, callback2, guild_id, stateFromStores, , ];
  let applicationId;
  const useCallback2 = obj2.useCallback;
  if (command != null) {
    applicationId = command.applicationId;
  }
  items15[5] = applicationId;
  let id2;
  if (command != null) {
    id2 = command.id;
  }
  items15[6] = id2;
  const items16 = [first1, first, first2, first4, , , ];
  let name1;
  const callback21 = useCallback2((name) => {
    let current = ref9.current;
    current.add(name.name);
    const items = [];
    items[HermesBuiltin.arraySpread(items, first1, 0)] = name;
    closure_29(items);
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    setFocusedOption(name);
    const obj = AppLauncherNativeUtils;
    const obj2 = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    callback2(name, obj.getInitialOptionValues(obj2));
    ref6.current = true;
    ref8.current = name.type;
    let applicationId;
    const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
    const APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED = ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED;
    AppAnalyticsUtils;
    if (command != null) {
      applicationId = command.applicationId;
    }
    const obj5 = { application_id: applicationId, command_id: id, option_name: null, option_type: null };
    id = undefined;
    if (command != null) {
      id = command.id;
    }
    ({ name: obj3.option_name, type: obj3.option_type } = name);
    trackWithMetadata(APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj5);
  }, items15);
  const useCallback3 = obj2.useCallback;
  if (first6 != null) {
    name1 = first6.name;
  }
  items16[4] = name1;
  let applicationId1;
  if (command != null) {
    applicationId1 = command.applicationId;
  }
  items16[5] = applicationId1;
  let id3;
  if (command != null) {
    id3 = command.id;
  }
  items16[6] = id3;
  onDismiss = useCallback3((name) => {
    let current = ref9.current;
    current.delete(name.name);
    const current2 = ref10.current;
    current2.delete(name.name);
    closure_29(first1.filter((name) => name.name !== name.name));
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    delete closure_12.current[name.name];
    delete closure_13.current[name.name];
    delete closure_32.current[name.name];
    delete first2[name.name];
    const obj = {};
    const merged = Object.assign(first2);
    closure_34(obj);
    first4.delete(name.name);
    set = new Set(first4);
    closure_37(set);
    let name1;
    name = name.name;
    if (first6 != null) {
      name1 = first6.name;
    }
    if (name === name1) {
      setFocusedOption(null);
    }
    let applicationId;
    const trackWithMetadata = command(sectionName[27]).trackWithMetadata;
    const APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED = ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED;
    command(sectionName[27]);
    if (name != null) {
      applicationId = tmp14.applicationId;
    }
    const obj3 = { application_id: applicationId, command_id: id, option_name: null, option_type: null };
    id = undefined;
    if (name != null) {
      id = tmp14.id;
    }
    ({ name: obj2.option_name, type: obj2.option_type } = name);
    trackWithMetadata(APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj3);
  }, items16);
  const callback9 = obj2.useCallback((nativeEvent) => closure_39(nativeEvent.nativeEvent.layout.height), []);
  let tmp73Result = first.length > 0;
  let tmp68 = tmp66;
  const callback10 = obj2.useCallback((arg0, current) => {
    ref5.current = current;
    return current;
  }, []);
  if (arr4.length <= 0) {
    tmp68 = tmp73Result;
  }
  let prefilledOptions1;
  if (preSelectedCommand != null) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_62 = null != prefilledOptions1;
  if (entrypoint === tmp3(tmp4[49]).AppLauncherEntrypoint.VOICE) {
    BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = tmp3(tmp4[50]).BottomSheetScrollView;
  }
  if (loading) {
    tmp73Result2 = ref6(first2, {});
    tmp70 = ref6;
  } else if (null == command) {
    let obj3 = { onPressBack: callback };
    tmp73Result2 = ref6(closure_34, obj3);
    tmp70 = ref6;
  } else if (hasPermissions) {
    let obj4 = { ref, contentContainerStyle: items17, scrollIndicatorInsets: obj5, scrollToOverflowEnabled: true, onContentSizeChange: callback10, preserveScrollMomentum: true, lockableScrollableContentOffsetY: sharedValue1, keyboardShouldPersistTaps: "handled", contentInsetAdjustmentBehavior: "never", automaticallyAdjustContentInsets: false, onLayout: callback9, automaticallyAdjustsScrollIndicatorInsets: false, children: items19 };
    items17 = [tmp.optionsContainer];
    obj5 = { bottom: sum1 };
    let obj6 = { style: tmp.commandNameContainer, children: items18 };
    let obj7 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
    items18 = [ref6(tmp3(tmp4[51]).Text, obj7), ];
    const obj8 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
    items18[1] = ref6(tmp3(tmp4[51]).Text, obj8);
    items19 = [ref7(closure_7, obj6), , , , , ];
    let tmp76Result = tmp66;
    if (tmp76Result) {
      const obj9 = {
        style: tmp.requiredOptionsContainer,
        onLayout: callback7,
        children: arr4.map((option, index) => {
              const obj = { option, autoFocusType: null, editedOptions: null, onOptionViewLayout: null, onStartEditing: null, onEndEditing: null, onOptionValueChange: null, onPressOption: null, onPressAttachmentOption: null, channel: null, optionValidationResults: null, setFocusedOption: null, command: null, optionValues: null };
              if (0 === index) {
                let NONE;
                if (!closure_62) {
                  NONE = ref3.FIRST_REQUIRED_OPTION;
                }
                obj.autoFocusType = NONE;
                obj.editedOptions = first4;
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
                return ref6(tmp2, obj, option.name);
              }
              NONE = ref3.NONE;
            })
      };
      tmp76Result = tmp76(tmp75, obj9);
    }
    items19[1] = tmp76Result;
    let tmp76Result3 = !tmp66 && tmp68;
    if (tmp76Result3) {
      const obj10 = { style: tmp.noRequiredOptionsCalloutContainer, children: ref6(Text, obj11) };
      obj11 = { variant: "text-sm/medium", color: "text-strong", style: { textAlign: "center" }, children: intl.string(tmp3(tmp4[23]).t.HS2KtY) };
      Text = tmp3(tmp4[51]).Text;
      intl = tmp3(tmp4[23]).intl;
      tmp76Result3 = tmp76(tmp75, obj10);
    }
    items19[2] = tmp76Result3;
    let tmp76Result4 = !tmp68;
    if (tmp76Result4) {
      const obj12 = { style: tmp.noOptionCalloutContainer, children: ref6(Text2, obj13) };
      obj13 = { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: intl2.string(tmp3(tmp4[23]).t.G8lEFB) };
      Text2 = tmp3(tmp4[51]).Text;
      intl2 = tmp3(tmp4[23]).intl;
      tmp76Result4 = tmp76(tmp75, obj12);
    }
    items19[3] = tmp76Result4;
    if (tmp73Result) {
      const obj14 = { children: items20 };
      const obj15 = { style: tmp.optionalOptionsSectionTitle, variant: "text-md/normal", color: "text-default", children: intl3.string(tmp3(tmp4[23]).t["5C107K"]) };
      const Text3 = tmp3(tmp4[51]).Text;
      intl3 = tmp3(tmp4[23]).intl;
      items20 = [ref6(Text3, obj15), , ];
      const obj16 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first1.map((option, index) => {
              let current;
              let current2;
              const items = [optionalOptionsChild.optionalOptionsChild, , ];
              let optionalOptionsFirstChild = 0 === index;
              const tmp2 = CommandOptionViewDefault;
              if (optionalOptionsFirstChild) {
                optionalOptionsFirstChild = optionalOptionsChild.optionalOptionsFirstChild;
              }
              items[1] = optionalOptionsFirstChild;
              const tmp4 = index === first1.length - 1 && optionalOptionsChild.optionalOptionsLastChild;
              items[2] = tmp4;
              const obj = { style: items, option, autoFocusType: current.has(option.name) ? ref3.NONE : ref3.OPTIONAL_OPTION_ADDED, onDismiss, editedOptions: first4, onOptionViewLayout, onStartEditing, onEndEditing: callback5, onOptionValueChange: callback2, onPressOption: callback6, onPressAttachmentOption, channel: context.channel, optionValidationResults: first2, setFocusedOption, command, optionValues, isPreSelectedOption: current2.has(option.name) };
              current = ref10.current;
              current2 = ref10.current;
              return ref6(tmp2, obj, option.name);
            })
      };
      items20[1] = ref6(closure_7, obj16);
      const obj17 = { layout: tmp3(tmp4[53]).LayoutAnimation, collapsable: false, children: ref6(context(tmp4[54]), obj18) };
      const View = tmp32(tmp4[17]).View;
      obj18 = { style: tmp.optionalOptionList, options: tmp20, onSelectOption: callback21 };
      items20[2] = ref6(View, obj17);
      tmp73Result = tmp73(tmp74, obj14);
    }
    const obj19 = { children: items21 };
    items19[4] = tmp73Result;
    const obj20 = { size: sum1 };
    items19[5] = ref6(tmp3(tmp4[55]).Spacer, obj20);
    items21 = [ref7(BottomSheetScrollView, obj4), ];
    const obj21 = { enableSubmit: first3, onSubmit: callback4, animatedStyle, onHeightChange: tmp34, isSending: sharedValue, footerStickyInsetBottom: sum2 };
    items21[1] = ref6(first1, obj21);
    tmp73Result2 = tmp73(tmp74, obj19);
    tmp70 = tmp76;
  } else {
    tmp70 = ref6;
    const obj22 = { command, onPressBack: callback };
    tmp73Result2 = ref6(closure_35, obj22);
  }
  const obj23 = { style: tmp.container, children: items22 };
  items22 = [tmp70(tmp3(tmp4[13]).AppLauncherCommandViewHeader, { command, onPressBack: callback, scrollOffsetY: sharedValue1, section }), tmp73Result2];
  return ref7(closure_7, obj23);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, ActivityIndicator: metroImportAll, ScrollView: c9 } = react_native);
({ useContextIndexState: unpackModuleId, useUserIndexState: closure_12 } = ApplicationCommandIndexStore);
({ AppLauncherOptionAutoFocusType: closure_14, useAppLauncherNavigation: closure_15, DEFAULT_CONTENT_PADDING } = AppLauncherNativeConstants);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = Constants);
const MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, optionsContainer: obj3, requiredOptionsContainer: { marginTop: 24, gap: 24 }, optionalOptionsContainer: {}, optionalOptionsChild: { marginBottom: 24 }, optionalOptionsFirstChild: { marginTop: 12 }, optionalOptionsLastChild: { marginBottom: 12 }, footerContainer: { position: "absolute", left: 0, bottom: 0, right: 0, paddingHorizontal: DEFAULT_CONTENT_PADDING }, submitButton: { flex: 1, overflow: "hidden" }, optionalOptionsSectionTitle: { marginTop: 36 }, optionalOptionList: { marginTop: 12 }, noRequiredOptionsCalloutContainer: obj4, noOptionCalloutContainer: obj5, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 }, emptyStateContainer: obj6, failureStateButtonWrapper: { marginTop: 24, alignSelf: "center" }, failureStateButtonPill: obj7, commandNameContainer: { alignItems: "center", justifyContent: "center", textAlign: "center" }, linearGradient: obj8 };
obj2 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: AppLauncherCommandViewHeader.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj4 = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj5 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj6 = { paddingTop: AppLauncherCommandViewHeader.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
obj7 = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj8 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_23 = createStyles(obj);
const __initData = { code: "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion){return{};}if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,\"respect-motion-settings\",function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
const __initData3 = { code: "function AppLauncherCommandViewScreenTsx3(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
let closure_27 = { code: "function AppLauncherCommandViewScreenTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSending) => {
  let animatedStyle;
  let closure_2;
  let closure_5;
  let enableSubmit;
  let first;
  let footerStickyInsetBottom;
  let onHeightChange;
  let onSubmit;
  let stateFromStores;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let obj = onHeightChange(stateFromStores[15]);
  const cResult = obj.c(37);
  ({ onSubmit, animatedStyle, onHeightChange } = isSending);
  isSending = isSending.isSending;
  ({ enableSubmit, footerStickyInsetBottom } = isSending);
  const tmp4 = closure_23();
  const tmp5 = _slicedToArray;
  [first, importAll] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    let num = 1;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = onHeightChange(stateFromStores[16]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmp5Result = tmp5(react.useState(false), 2);
  const first1 = tmp5Result[0];
  _slicedToArray = tmp5Result[1];
  const tmpResult2 = onHeightChange(stateFromStores[17]);
  class T {
    constructor() {
      tmp = closure_3;
      if (tmp) {
        obj1 = {};
      } else {
        tmp2 = closure_4;
        if (tmp2) {
          obj7 = { opacity: 1, transform: null };
          obj8 = { translateX: null };
          tmp13 = closure_0;
          tmp14 = closure_3;
          tmp15 = closure_0(closure_3[17]);
          tmp16 = closure_0;
          tmp17 = closure_3;
          withDelay = tmp15.withDelay;
          tmp18 = closure_0(closure_3[18]);
          tmp19 = closure_0;
          tmp20 = closure_3;
          withTiming3 = tmp18.withTiming;
          fn = function e() {
            const obj = onHeightChange(stateFromStores[17]);
            const runOnJSResult = obj.runOnJS(onHeightChange(stateFromStores[20]).triggerHapticFeedback);
            return runOnJSResult(onHeightChange(stateFromStores[20]).HapticFeedbackTypes.IMPACT_LIGHT);
          };
          obj9 = { runOnJS: null, triggerHapticFeedback: null, HapticFeedbackTypes: null };
          tmp21 = closure_0;
          tmp22 = closure_3;
          timingStandard = closure_0(closure_3[19]).timingStandard;
          obj9.runOnJS = closure_0(closure_3[17]).runOnJS;
          tmp23 = closure_0;
          tmp24 = closure_3;
          obj9.triggerHapticFeedback = closure_0(closure_3[20]).triggerHapticFeedback;
          tmp25 = closure_0;
          tmp26 = closure_3;
          obj9.HapticFeedbackTypes = closure_0(closure_3[20]).HapticFeedbackTypes;
          fn.__closure = obj9;
          num3 = 8545458901090;
          fn.__workletHash = 8545458901090;
          tmp27 = closure_25;
          fn.__initData = closure_25;
          str = "respect-motion-settings";
          num4 = -4;
          tmp28 = tmp18;
          tmp29 = fn;
          num5 = 100;
          obj8.translateX = withDelay(100, withTiming3(-4, timingStandard, "respect-motion-settings", fn));
          items = [];
          items[0] = obj8;
          obj7.transform = items;
          obj1 = obj7;
        } else {
          tmp3 = closure_0;
          tmp4 = closure_3;
          tmp5 = closure_0(closure_3[18]);
          obj = isSending;
          withTiming = tmp5.withTiming;
          num = 1;
          if (isSending.get()) {
            num = 0;
          }
          obj1 = { opacity: null, transform: null };
          tmp6 = closure_0;
          tmp7 = closure_3;
          obj1.opacity = withTiming(num, closure_0(closure_3[19]).timingStandard);
          tmp8 = closure_0;
          tmp9 = closure_3;
          tmp10 = closure_0(closure_3[18]);
          withTiming2 = tmp10.withTiming;
          num2 = 0;
          if (obj.get()) {
            num2 = 100;
          }
          obj10 = { translateX: null };
          tmp11 = closure_0;
          tmp12 = closure_3;
          obj10.translateX = withTiming2(num2, closure_0(closure_3[19]).timingStandard);
          items1 = [];
          items1[0] = obj10;
          obj1.transform = items1;
        }
      }
      return obj1;
    }
  }
  let obj3 = { shouldReduceMotion: stateFromStores, isPressedDown: first1, withDelay: onHeightChange(tmp2[17]).withDelay, withTiming: onHeightChange(tmp2[18]).withTiming, timingStandard: onHeightChange(tmp2[19]).timingStandard, runOnJS: onHeightChange(tmp2[17]).runOnJS, triggerHapticFeedback: onHeightChange(tmp2[20]).triggerHapticFeedback, HapticFeedbackTypes: onHeightChange(tmp2[20]).HapticFeedbackTypes, isSending };
  T.__closure = obj3;
  T.__workletHash = 3221051482353;
  T.__initData = __initData;
  const animatedStyle1 = tmpResult2.useAnimatedStyle(T);
  if (cResult[2] !== onHeightChange) {
    class E {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        closure_2(height);
        if (onHeightChange != null) {
          onHeightChange(height);
        }
      }
    }
    cResult[2] = onHeightChange;
    let num2 = 3;
    cResult[3] = E;
  } else {
    class E {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        closure_2(height);
        if (onHeightChange != null) {
          onHeightChange(height);
        }
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class E {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        closure_2(height);
        if (onHeightChange != null) {
          onHeightChange(height);
        }
      }
    }
    if (cResult[7] === tmp4.footerContainer.paddingHorizontal) {
      class E {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          closure_2(height);
          if (onHeightChange != null) {
            onHeightChange(height);
          }
        }
      }
      const result = 12 / (first + 12);
      if (cResult[10] !== result) {
        class E {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            closure_2(height);
            if (onHeightChange != null) {
              onHeightChange(height);
            }
          }
        }
        tmp20[1] = result;
        cResult[10] = result;
        cResult[11] = tmp20;
      } else {
        class E {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            closure_2(height);
            if (onHeightChange != null) {
              onHeightChange(height);
            }
          }
        }
      }
      if (cResult[12] !== tmp4.linearGradient.backgroundColor) {
        class E {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            closure_2(height);
            if (onHeightChange != null) {
              onHeightChange(height);
            }
          }
        }
        cResult[12] = tmp4.linearGradient.backgroundColor;
        cResult[13] = obj7.hexWithOpacity(tmp4.linearGradient.backgroundColor, 0);
        const hexWithOpacityResult = obj7.hexWithOpacity(tmp4.linearGradient.backgroundColor, 0);
      } else {
        class E {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            closure_2(height);
            if (onHeightChange != null) {
              onHeightChange(height);
            }
          }
        }
      }
      if (cResult[14] === tmp4.linearGradient.backgroundColor) {
        class E {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            closure_2(height);
            if (onHeightChange != null) {
              onHeightChange(height);
            }
          }
        }
        if (cResult[17] === tmp23) {
          class E {
            constructor(nativeEvent) {
              const height = nativeEvent.nativeEvent.layout.height;
              closure_2(height);
              if (onHeightChange != null) {
                onHeightChange(height);
              }
            }
          }
        }
        let obj4 = { style: tmp17, start: constants3.START, end: tmp20, colors: tmp23, pointerEvents: "none" };
        cResult[17] = tmp23;
        cResult[18] = tmp17;
        cResult[19] = tmp20;
        cResult[20] = closure_20(isSending(stateFromStores[22]), obj4);
        const tmp28 = closure_20(isSending(stateFromStores[22]), obj4);
      }
      let items1 = [tmp21, tmp4.linearGradient.backgroundColor];
      cResult[14] = tmp4.linearGradient.backgroundColor;
      cResult[15] = tmp21;
      cResult[16] = items1;
    }
    const rect = { width: "100%", top: -12, bottom: -footerStickyInsetBottom, left: tmp4.footerContainer.paddingHorizontal, position: "absolute" };
    cResult[7] = tmp4.footerContainer.paddingHorizontal;
    cResult[8] = -footerStickyInsetBottom;
    cResult[9] = rect;
  }
  const items2 = [tmp4.footerContainer, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.footerContainer;
  cResult[6] = items2;
}) : ((arg0) => {
  let SendMessageIcon;
  let View2;
  let animatedStyle;
  let closure_2;
  let closure_5;
  let enableSubmit;
  let first;
  let first1;
  let footerStickyInsetBottom;
  let intl;
  let isSending;
  let items1;
  let items2;
  let items3;
  let obj8;
  let obj9;
  let onSubmit;
  let point;
  let require;
  let useReducedMotion;
  ({ onHeightChange: require, isSending } = arg0);
  closure_2 = undefined;
  let stateFromStores;
  first1 = undefined;
  _slicedToArray = undefined;
  ({ enableSubmit, onSubmit, animatedStyle, footerStickyInsetBottom } = arg0);
  const tmp = closure_23();
  [first, closure_2] = react.useState(0);
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first1, _slicedToArray] = react.useState(false);
  let obj2 = require("ReanimatedRexport");
  let fn = function h() {
    let fn;
    let items;
    let items1;
    let obj2;
    let timingStandard;
    let withDelay;
    let withTiming3;
    if (stateFromStores) {
      obj2 = {};
    } else if (first1) {
      const obj3 = { opacity: 1, transform: items };
      const obj4 = { translateX: withDelay(100, withTiming3(-4, timingStandard, "respect-motion-settings", fn)) };
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      withTiming3 = timing.withTiming;
      fn = function e() {
        const obj = closure_1_0(stateFromStores[17]);
        const runOnJSResult = obj.runOnJS(closure_1_0(stateFromStores[20]).triggerHapticFeedback);
        return runOnJSResult(closure_1_0(stateFromStores[20]).HapticFeedbackTypes.IMPACT_LIGHT);
      };
      const obj5 = { runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
      timingStandard = timingPresets.timingStandard;
      fn.__closure = obj5;
      fn.__workletHash = 16763250045668;
      fn.__initData = __initData;
      items = [obj4];
      obj2 = obj3;
    } else {
      const withTiming = timing.withTiming;
      let num = 1;
      timing;
      if (isSending.get()) {
        num = 0;
      }
      obj2 = { opacity: withTiming(num, timingPresets.timingStandard), transform: items1 };
      const withTiming2 = timing.withTiming;
      let num2 = 0;
      timing;
      if (isSending.get()) {
        num2 = 100;
      }
      items1 = [{ translateX: withTiming2(num2, timingPresets.timingStandard) }];
      const obj6 = { translateX: withTiming2(num2, timingPresets.timingStandard) };
    }
    return obj2;
  };
  let obj3 = { shouldReduceMotion: stateFromStores, isPressedDown: first1, withDelay: require("ReanimatedRexport").withDelay, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback, HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes, isSending };
  fn.__closure = obj3;
  fn.__workletHash = 9254309165845;
  fn.__initData = __initData3;
  const animatedStyle1 = obj2.useAnimatedStyle(fn);
  let obj4 = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      closure_2(height);
      if (_require != null) {
        _require(height);
      }
    },
    style: items1,
    children: items3
  };
  items1 = [tmp.footerContainer, animatedStyle];
  const View = isSending(stateFromStores[17]).View;
  let obj5 = { style: { width: "100%", top: -12, bottom: -footerStickyInsetBottom, left: tmp.footerContainer.paddingHorizontal, position: "absolute" }, start: constants3.START, end: point, colors: items2, pointerEvents: "none" };
  point = { x: 0, y: 12 / (first + 12) };
  items2 = [, ];
  const tmp8 = isSending(stateFromStores[22]);
  const obj7 = require("ColorUtils");
  items2[0] = obj7.hexWithOpacity(tmp.linearGradient.backgroundColor, 0);
  items2[1] = tmp.linearGradient.backgroundColor;
  items3 = [closure_20(tmp8, obj5), ];
  let obj6 = {
    onPress: onSubmit,
    onPressIn() {
      return closure_5(true);
    },
    onPressOut() {
      return closure_5(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton,
    text: intl.string(require("intl").t.TXNS7S),
    icon: closure_20(View2, obj8),
    iconPosition: "end"
  };
  const BaseTextButton = require("BaseTextButton").BaseTextButton;
  intl = require("intl").intl;
  obj8 = { style: animatedStyle1, children: closure_20(SendMessageIcon, obj9) };
  View2 = isSending(stateFromStores[17]).View;
  obj9 = { style: { marginLeft: 8 }, color: isSending(stateFromStores[12]).unsafe_rawColors.WHITE, size: "sm" };
  SendMessageIcon = require("SendMessageIcon").SendMessageIcon;
  items3[1] = closure_20(BaseTextButton, obj6);
  return closure_21(View, obj4);
});
let __initData4 = { code: "function AppLauncherCommandViewScreenTsx5(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((command) => {
  let analyticsLocation;
  let context;
  let expandBottomSheet;
  let hasPermission;
  let installOnDemand;
  let loading;
  let preSelectedCommand;
  let section;
  let sectionDescriptor;
  let sectionName;
  let tmp7;
  let tmp = command;
  let tmp2 = loading;
  const obj = command(loading[15]);
  const cResult = obj.c(21);
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, installOnDemand, sectionName, expandBottomSheet } = command);
  const onCommandExecuted = command.onCommandExecuted;
  let tmp4 = expandBottomSheet(loading[56])(null != context.channel, "channel should not be null");
  const tmp5 = expandBottomSheet(loading[57])();
  let closure_2 = tmp5;
  const tmp6 = closure_32(context.channel, preSelectedCommand, analyticsLocation, sectionName);
  loading = tmp6.loading;
  let command2 = command;
  ({ sectionDescriptor, hasPermission } = tmp6);
  if (command == null) {
    command2 = tmp6.command;
  }
  const tmpResult = tmp(tmp2[26]);
  const bottomSheetExpandReasonRef = tmpResult.useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
  if (cResult[0] !== command2) {
    let tmp8 = null != command2;
    if (tmp8) {
      let options = command2.options;
      if (options == null) {
        options = [];
      }
      tmp8 = options.length > 0;
    }
    cResult[0] = command2;
    cResult[1] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  let closure_5 = tmp7;
  if (cResult[2] === bottomSheetExpandReasonRef) {
    if (cResult[3] === command) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === expandBottomSheet) {
          if (cResult[6] === loading) {
            let tmp9;
            let tmp10;
            if (cResult[7] === tmp5) {
              tmp9 = cResult[8];
              tmp10 = cResult[9];
            }
            const effect = react.useEffect(tmp9, tmp10);
            if (section == null) {
              section = sectionDescriptor;
            }
            if (preSelectedCommand == null) {
              preSelectedCommand = null;
            }
            if (cResult[10] === analyticsLocation) {
              if (cResult[11] === context) {
                if (cResult[12] === installOnDemand) {
                  if (cResult[13] === loading) {
                    if (cResult[14] === onCommandExecuted) {
                      if (cResult[15] === sectionName) {
                        if (cResult[16] === command2) {
                          if (cResult[17] === section) {
                            if (cResult[18] === preSelectedCommand) {
                              let tmp14;
                              if (cResult[19] === (null != command || hasPermission)) {
                                tmp14 = cResult[20];
                              }
                              return tmp14;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj2 = { command: command2, context, section, preSelectedCommand, loading, hasPermissions: null != command || hasPermission, installOnDemand, sectionName, analyticsLocation, onCommandExecuted };
            const tmp17 = closure_20(AppLauncherCommandViewInner, obj2);
            cResult[10] = analyticsLocation;
            cResult[11] = context;
            cResult[12] = installOnDemand;
            cResult[13] = loading;
            cResult[14] = onCommandExecuted;
            cResult[15] = sectionName;
            cResult[16] = command2;
            cResult[17] = section;
            cResult[18] = preSelectedCommand;
            class P {
              constructor() {
                tmp = closure_2;
                if (tmp) {
                  tmp2 = closure_5;
                  if (!tmp2) {
                    tmp3 = loading;
                    tmp4 = !loading;
                    if (tmp4) {
                      tmp5 = command;
                      tmp6 = null;
                      tmp4 = null == command;
                    }
                    tmp2 = tmp4;
                  }
                  tmp = tmp2;
                }
                if (tmp) {
                  tmp7 = closure_4;
                  tmp8 = closure_0;
                  tmp9 = closure_3;
                  closure_4.current = closure_0(closure_3[26]).AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
                  tmp10 = null;
                  if (expandBottomSheet != null) {
                    tmp11 = expandBottomSheet();
                  }
                }
                return;
              }
            }
            cResult[20] = tmp17;
            tmp14 = tmp17;
          }
        }
      }
    }
  }
  class P {
    constructor() {
      tmp = closure_2;
      if (tmp) {
        tmp2 = closure_5;
        if (!tmp2) {
          tmp3 = loading;
          tmp4 = !loading;
          if (tmp4) {
            tmp5 = command;
            tmp6 = null;
            tmp4 = null == command;
          }
          tmp2 = tmp4;
        }
        tmp = tmp2;
      }
      if (tmp) {
        tmp7 = closure_4;
        tmp8 = closure_0;
        tmp9 = closure_3;
        closure_4.current = closure_0(closure_3[26]).AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
        tmp10 = null;
        if (expandBottomSheet != null) {
          tmp11 = expandBottomSheet();
        }
      }
      return;
    }
  }
  const items = [command, tmp7, loading, tmp5, bottomSheetExpandReasonRef, expandBottomSheet];
  cResult[2] = bottomSheetExpandReasonRef;
  cResult[3] = command;
  cResult[4] = tmp7;
  cResult[5] = expandBottomSheet;
  cResult[6] = loading;
  cResult[7] = tmp5;
  cResult[8] = P;
  cResult[9] = items;
  tmp10 = items;
  tmp9 = P;
}) : ((command) => {
  let analyticsLocation;
  let context;
  let expandBottomSheet;
  let hasPermission;
  let installOnDemand;
  let onCommandExecuted;
  let preSelectedCommand;
  let section;
  let sectionDescriptor;
  let sectionName;
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  let loading;
  let bottomSheetExpandReasonRef;
  let closure_5;
  ({ installOnDemand, onCommandExecuted } = command);
  let tmp = loading;
  let tmp2 = expandBottomSheet(loading[56])(null != context.channel, "channel should not be null");
  const tmp3 = expandBottomSheet(loading[57])();
  let closure_2 = tmp3;
  let tmp4 = closure_32(context.channel, preSelectedCommand, analyticsLocation, sectionName);
  loading = tmp4.loading;
  let command2 = command;
  ({ sectionDescriptor, hasPermission } = tmp4);
  if (command == null) {
    command2 = tmp4.command;
  }
  const obj = command(tmp[26]);
  bottomSheetExpandReasonRef = obj.useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
  let tmp5 = null != command2;
  if (tmp5) {
    let options = command2.options;
    if (options == null) {
      options = [];
    }
    tmp5 = options.length > 0;
  }
  closure_5 = tmp5;
  const items = [command, tmp5, loading, tmp3, bottomSheetExpandReasonRef, expandBottomSheet];
  const effect = react.useEffect(() => {
    let tmp = closure_2;
    if (tmp) {
      let tmp2 = closure_5;
      if (!tmp2) {
        tmp2 = !loading && null == command;
        const tmp4 = !loading && null == command;
      }
      tmp = tmp2;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items);
  const obj2 = { command: command2, context, section, preSelectedCommand, loading, hasPermissions: null != command || hasPermission, installOnDemand, sectionName, analyticsLocation, onCommandExecuted };
  if (section == null) {
    section = sectionDescriptor;
  }
  if (preSelectedCommand == null) {
    preSelectedCommand = null;
  }
  return closure_20(AppLauncherCommandViewInner, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let analyticsLocation;
  let command;
  let context;
  let expandBottomSheet;
  let installOnDemand;
  let onCommandExecuted;
  let preSelectedCommand;
  let section;
  let sectionName;
  const obj = react2;
  const cResult = obj.c(10);
  ({ command, context, section, preSelectedCommand, analyticsLocation, installOnDemand, sectionName, expandBottomSheet, onCommandExecuted } = route.route.params);
  let tmp2 = null;
  if (null != context) {
    if (cResult[0] === analyticsLocation) {
      if (cResult[1] === command) {
        if (cResult[2] === context) {
          if (cResult[3] === expandBottomSheet) {
            if (cResult[4] === installOnDemand) {
              if (cResult[5] === onCommandExecuted) {
                if (cResult[6] === preSelectedCommand) {
                  if (cResult[7] === section) {
                    let tmp3;
                    if (cResult[8] === sectionName) {
                      tmp3 = cResult[9];
                    }
                    tmp2 = tmp3;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj2 = { command, context, section, preSelectedCommand, installOnDemand, sectionName, analyticsLocation, expandBottomSheet, onCommandExecuted };
    const tmp6 = closure_20(closure_31, obj2);
    cResult[0] = analyticsLocation;
    cResult[1] = command;
    cResult[2] = context;
    cResult[3] = expandBottomSheet;
    cResult[4] = installOnDemand;
    cResult[5] = onCommandExecuted;
    cResult[6] = preSelectedCommand;
    cResult[7] = section;
    cResult[8] = sectionName;
    cResult[9] = tmp6;
    tmp3 = tmp6;
  }
  return tmp2;
}) : ((route) => {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = { command: tmp, context, section: tmp2, preSelectedCommand: tmp3, installOnDemand: tmp5, sectionName: tmp6, analyticsLocation: tmp4, expandBottomSheet: tmp7, onCommandExecuted: tmp8 };
    tmp9 = closure_20(closure_31, obj);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, commandId, _location, sectionName) => {
  let command;
  let context;
  let descriptor;
  let isImpersonating;
  let roleIds;
  let tmp4;
  let tmp9;
  let userId;
  _require = _location;
  let obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] !== channel) {
    let obj2 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = command(tmp2[58]);
  commandId = undefined;
  const useCommand = tmp6.useCommand;
  if (commandId != null) {
    commandId = commandId.commandId;
  }
  const command1 = useCommand(tmp4, commandId);
  command = command1.command;
  const application = command1.application;
  if (cResult[2] !== channel) {
    const obj3 = { channel, type: "channel" };
    cResult[2] = channel;
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  const tmp10 = closure_11(tmp9, true, true);
  const tmp11 = closure_12(true, true);
  let tmp12 = null;
  if (null != application) {
    const result = tmp11.result;
    descriptor = undefined;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp14.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp10.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp12 = descriptor;
  }
  descriptor = tmp12;
  let tmp16 = null != application;
  if (tmp16) {
    const result3 = tmp10.result;
    let tmp17;
    if (result3 != null) {
      tmp17 = result3.sections[application.id];
    }
    tmp16 = null != tmp17;
  }
  const ref = react.useRef(false);
  if (cResult[4] === _location) {
    if (cResult[5] === command) {
      if (cResult[6] === tmp12) {
        let tmp18;
        let tmp19;
        let tmp22;
        let tmp38;
        if (cResult[7] === sectionName) {
          tmp18 = cResult[8];
          tmp19 = cResult[9];
        }
        const effect = react.useEffect(tmp18, tmp19);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [require("Server").ApplicationCommandType.CHAT];
          cResult[10] = items;
          tmp22 = items;
        } else {
          tmp22 = cResult[10];
        }
        const tmpResult = require("CommandPermissionContext");
        const permissionContext = tmpResult.usePermissionContext(channel, tmp22);
        if (null != tmp12) {
          if (null != command) {
            ({ context, userId, roleIds, isImpersonating } = permissionContext);
            if (cResult[13] === command) {
              if (cResult[14] === context) {
                if (cResult[15] === tmp16) {
                  if (cResult[16] === isImpersonating) {
                    if (cResult[17] === permissionContext) {
                      if (cResult[18] === roleIds) {
                        if (cResult[19] === tmp12.botId) {
                          if (cResult[20] === tmp12.permissions) {
                            let tmp24;
                            if (cResult[21] === userId) {
                              tmp24 = cResult[22];
                            }
                            const tmp34 = tmp24 === command(descriptor[61]).HasAccessResult.ALLOWED && tmp39;
                            if (cResult[23] === command) {
                              if (cResult[24] === tmp12) {
                                if (cResult[25] === tmp34) {
                                  let tmp36;
                                  if (cResult[26] === (tmp11.fetchState.fetching || tmp10.fetchState.fetching)) {
                                    tmp36 = cResult[27];
                                  }
                                  return tmp36;
                                }
                              }
                            }
                            const obj5 = { command, sectionDescriptor: tmp12, hasPermission: tmp34, loading: tmp11.fetchState.fetching || tmp10.fetchState.fetching };
                            cResult[23] = command;
                            cResult[24] = tmp12;
                            cResult[25] = tmp34;
                            cResult[26] = tmp11.fetchState.fetching || tmp10.fetchState.fetching;
                            cResult[27] = obj5;
                            tmp36 = obj5;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let guild_id;
            if (context != null) {
              guild_id = context.guild_id;
            }
            let allowedForUser = null;
            if (null != guild_id) {
              const tmp5Result = command(descriptor[61]);
              allowedForUser = tmp5Result.computeAllowedForUser(tmp12.permissions, context.guild_id, userId, roleIds, isImpersonating);
            }
            let guild_id1;
            if (context != null) {
              guild_id1 = context.guild_id;
            }
            let allowedForChannel = null;
            if (null != guild_id1) {
              const tmp5Result3 = command(descriptor[61]);
              allowedForChannel = tmp5Result3.computeAllowedForChannel(tmp12.permissions, context, context.guild_id);
            }
            const obj6 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp12.botId, isGuildInstalled: tmp16 };
            const tmp5Result4 = command(descriptor[61]);
            const hasAccessResult = tmp5Result4.hasAccess(command, permissionContext, obj6);
            cResult[13] = command;
            cResult[14] = context;
            cResult[15] = tmp16;
            cResult[16] = isImpersonating;
            cResult[17] = permissionContext;
            cResult[18] = roleIds;
            cResult[19] = tmp12.botId;
            cResult[20] = tmp12.permissions;
            cResult[21] = userId;
            cResult[22] = hasAccessResult;
            tmp24 = hasAccessResult;
          }
        }
        if (cResult[11] !== (tmp11.fetchState.fetching || tmp10.fetchState.fetching)) {
          const obj7 = { command: null, sectionDescriptor: null, hasPermission: false, loading: tmp11.fetchState.fetching || tmp10.fetchState.fetching };
          cResult[11] = tmp11.fetchState.fetching || tmp10.fetchState.fetching;
          cResult[12] = obj7;
          tmp38 = obj7;
        } else {
          tmp38 = cResult[12];
        }
        return tmp38;
      }
    }
  }
  const fn = function f() {
    let obj2;
    const current = null == command || null == descriptor || ref.current;
    if (!current) {
      const obj = { command, triggerSection: obj2.getCommandTriggerSection(descriptor), location: _location, sectionName };
      const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
      ApplicationCommandUtils;
      obj2 = ApplicationCommandUtils;
      trackCommandSelected(obj);
      ref.current = true;
    }
  };
  const items1 = [command, tmp12, _location, sectionName];
  cResult[4] = _location;
  cResult[5] = command;
  cResult[6] = tmp12;
  cResult[7] = sectionName;
  cResult[8] = fn;
  cResult[9] = items1;
  tmp19 = items1;
  tmp18 = fn;
}) : ((channel, commandId, _location, sectionName) => {
  let command;
  let context;
  let descriptor;
  let hasAccessResult;
  let isImpersonating;
  let roleIds;
  let userId;
  _require = _location;
  let obj = { channel, type: "channel" };
  commandId = undefined;
  const useCommand = command(descriptor[58]).useCommand;
  command(descriptor[58]);
  if (commandId != null) {
    commandId = commandId.commandId;
  }
  const command1 = useCommand(obj, commandId);
  command = command1.command;
  const application = command1.application;
  let obj2 = { channel, type: "channel" };
  const tmp6 = closure_11(obj2, true, true);
  const tmp7 = closure_12(true, true);
  let tmp8 = null;
  if (null != application) {
    const result = tmp7.result;
    descriptor = undefined;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp10.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp6.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp8 = descriptor;
  }
  descriptor = tmp8;
  let tmp12 = null != application;
  if (tmp12) {
    const result3 = tmp6.result;
    let tmp13;
    if (result3 != null) {
      tmp13 = result3.sections[application.id];
    }
    tmp12 = null != tmp13;
  }
  const ref = react.useRef(false);
  const items = [command, tmp8, _location, sectionName];
  const effect = react.useEffect(() => {
    let obj2;
    const current = null == command || null == descriptor || ref.current;
    if (!current) {
      const obj = { command, triggerSection: obj2.getCommandTriggerSection(descriptor), location: _location, sectionName };
      const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
      ApplicationCommandUtils;
      obj2 = ApplicationCommandUtils;
      trackCommandSelected(obj);
      ref.current = true;
    }
  }, items);
  const usePermissionContext = require("CommandPermissionContext").usePermissionContext;
  const items1 = [];
  require("CommandPermissionContext");
  items1[0] = require("Server").ApplicationCommandType.CHAT;
  const permissionContext = usePermissionContext(channel, items1);
  if (null != tmp8) {
    if (null != command) {
      ({ context, userId, roleIds, isImpersonating } = permissionContext);
      let guild_id;
      const hasBaseAccessPermissions = permissionContext.hasBaseAccessPermissions;
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        const tmpResult = command(descriptor[61]);
        allowedForUser = tmpResult.computeAllowedForUser(tmp8.permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context != null) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        const tmpResult3 = command(descriptor[61]);
        allowedForChannel = tmpResult3.computeAllowedForChannel(tmp8.permissions, context, context.guild_id);
      }
      const obj3 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp8.botId, isGuildInstalled: tmp12 };
      const obj4 = { command, sectionDescriptor: tmp8, hasPermission: hasAccessResult === command(descriptor[61]).HasAccessResult.ALLOWED && hasBaseAccessPermissions, loading: tmp7.fetchState.fetching || tmp6.fetchState.fetching };
      const tmpResult4 = command(descriptor[61]);
      hasAccessResult = tmpResult4.hasAccess(command, permissionContext, obj3);
      hasAccessResult === command(descriptor[61]).HasAccessResult.ALLOWED && hasBaseAccessPermissions;
      return obj4;
    }
  }
  const loading = tmp7.fetchState.fetching || tmp6.fetchState.fetching;
  return { command: null, sectionDescriptor: null, hasPermission: false, loading };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: closure_20(metroImportAll, { size: "large" }) };
    const tmp6 = closure_20(metroImportDefault, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: closure_20(metroImportAll, { size: "large" }) };
  return closure_20(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressBack) => {
  let emptyState;
  let emptyStateContainer;
  let failureStateButtonPill;
  let failureStateButtonWrapper;
  let tmp10;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  onPressBack = onPressBack.onPressBack;
  const tmp4 = closure_23();
  const obj2 = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj2.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  ({ emptyStateContainer, emptyState } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["pX/qb9"]);
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.exOQVY);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp6 = stringResult;
    tmp7 = stringResult1;
  } else {
    [tmp6, tmp7] = cResult;
  }
  ({ failureStateButtonPill, failureStateButtonWrapper } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult2 = intl3.string(intl4.t["/g10LC"]);
    cResult[2] = stringResult2;
    tmp10 = stringResult2;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === onPressBack) {
    if (cResult[4] === tmp4.failureStateButtonPill) {
      let tmp12;
      if (cResult[5] === tmp4.failureStateButtonWrapper) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.emptyState) {
        let tmp14;
        if (cResult[8] === tmp12) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4.emptyStateContainer) {
          let tmp18;
          if (cResult[11] === tmp14) {
            tmp18 = cResult[12];
          }
          return tmp18;
        }
        const obj3 = { style: emptyStateContainer, children: tmp14 };
        const tmp21 = closure_20(metroImportDefault, obj3);
        cResult[10] = tmp4.emptyStateContainer;
        cResult[11] = tmp14;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj4 = { style: emptyState, lightSource: AssetRegistryDefault3, darkSource: AssetRegistryDefault4, title: tmp6, body: tmp7, children: tmp12 };
      const EmptyState = native.EmptyState;
      const tmp17 = closure_20(EmptyState, obj4);
      cResult[7] = tmp4.emptyState;
      cResult[8] = tmp12;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = closure_20(BaseTextButton2.BaseTextButton, { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: failureStateButtonPill, style: failureStateButtonWrapper, text: tmp10 });
  cResult[3] = onPressBack;
  cResult[4] = tmp4.failureStateButtonPill;
  cResult[5] = tmp4.failureStateButtonWrapper;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((onPressBack) => {
  let BaseTextButton;
  let EmptyState;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  onPressBack = onPressBack.onPressBack;
  const tmp = closure_23();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  const obj2 = { style: tmp.emptyStateContainer, children: closure_20(EmptyState, obj3) };
  obj3 = { style: tmp.emptyState, lightSource: AssetRegistryDefault3, darkSource: AssetRegistryDefault4, title: intl.string(intl4.t["pX/qb9"]), body: intl2.string(intl4.t.exOQVY), children: closure_20(BaseTextButton, obj4) };
  EmptyState = native.EmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  obj4 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: intl3.string(intl4.t["/g10LC"]) };
  BaseTextButton = BaseTextButton2.BaseTextButton;
  intl3 = intl4.intl;
  return closure_20(metroImportDefault, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let command;
  let failureStateButtonPill;
  let failureStateButtonWrapper;
  let items;
  let items1;
  let onPressBack;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(22);
  ({ onPressBack, command } = arg0);
  const tmp4 = closure_23();
  const obj2 = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj2.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  const emptyStateContainer = tmp4.emptyStateContainer;
  if (cResult[0] !== command.displayName) {
    const obj3 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
    const tmp8 = closure_20(Text_Text.Text, obj3);
    cResult[0] = command.displayName;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== command.displayDescription) {
    const obj4 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
    const tmp11 = closure_20(Text_Text.Text, obj4);
    cResult[2] = command.displayDescription;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.commandNameContainer) {
    if (cResult[5] === tmp6) {
      let tmp12;
      let tmp16;
      let tmp15;
      let tmp19;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      const _Symbol = Symbol;
      const emptyState = tmp4.emptyState;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.TzufcR);
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t["I/O+A1"]);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        tmp16 = stringResult1;
        tmp15 = stringResult;
      } else {
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const _Symbol2 = Symbol;
      ({ failureStateButtonPill, failureStateButtonWrapper } = tmp4);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t["/g10LC"]);
        cResult[10] = stringResult2;
        tmp19 = stringResult2;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === onPressBack) {
        if (cResult[12] === tmp4.failureStateButtonPill) {
          let tmp21;
          if (cResult[13] === tmp4.failureStateButtonWrapper) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.emptyState) {
            let tmp24;
            if (cResult[16] === tmp21) {
              tmp24 = cResult[17];
            }
            if (cResult[18] === tmp4.emptyStateContainer) {
              if (cResult[19] === tmp24) {
                let tmp28;
                if (cResult[20] === tmp12) {
                  tmp28 = cResult[21];
                }
                return tmp28;
              }
            }
            const obj5 = { style: emptyStateContainer, children: items };
            items = [tmp12, tmp24];
            const tmp31 = closure_21(metroImportDefault, obj5);
            cResult[18] = tmp4.emptyStateContainer;
            cResult[19] = tmp24;
            cResult[20] = tmp12;
            cResult[21] = tmp31;
            tmp28 = tmp31;
          }
          const obj6 = { style: emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault2, title: tmp15, body: tmp16, children: tmp21 };
          const EmptyState = native.EmptyState;
          const tmp27 = closure_20(EmptyState, obj6);
          cResult[15] = tmp4.emptyState;
          cResult[16] = tmp21;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj7 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: failureStateButtonPill, style: failureStateButtonWrapper, text: tmp19 };
      const tmp23 = closure_20(BaseTextButton2.BaseTextButton, obj7);
      cResult[11] = onPressBack;
      cResult[12] = tmp4.failureStateButtonPill;
      cResult[13] = tmp4.failureStateButtonWrapper;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
  }
  const obj8 = { style: tmp4.commandNameContainer, children: items1 };
  items1 = [tmp6, tmp9];
  const tmp13 = closure_21(metroImportDefault, obj8);
  cResult[4] = tmp4.commandNameContainer;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((command) => {
  let BaseTextButton;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj7;
  command = command.command;
  const onPressBack = command.onPressBack;
  const tmp = closure_23();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  const obj3 = { style: tmp.commandNameContainer, children: items };
  items = [, ];
  const obj2 = { style: tmp.emptyStateContainer, children: items1 };
  const obj4 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
  items[0] = closure_20(Text_Text.Text, obj4);
  const obj5 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
  items[1] = closure_20(Text_Text.Text, obj5);
  items1 = [closure_21(metroImportDefault, obj3), ];
  const obj6 = { style: tmp.emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault2, title: intl.string(intl4.t.TzufcR), body: intl2.string(intl4.t["I/O+A1"]), children: closure_20(BaseTextButton, obj7) };
  const EmptyState = native.EmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  obj7 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: intl3.string(intl4.t["/g10LC"]) };
  BaseTextButton = BaseTextButton2.BaseTextButton;
  intl3 = intl4.intl;
  items1[1] = closure_20(EmptyState, obj6);
  return closure_21(metroImportDefault, obj2);
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx");

export default tmp8;