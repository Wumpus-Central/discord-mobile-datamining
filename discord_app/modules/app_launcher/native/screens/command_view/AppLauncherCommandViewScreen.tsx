// === Module 11858: AppLauncherCommandViewScreen ===

// Module 11858 (AppLauncherCommandViewScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Server from "Server" /* 1997 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import Text_Text from "Text/Text" /* 5086 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import BaseTextButton from "BaseTextButton" /* 5376 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7231 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7235 */;
import Upload from "Upload" /* 7730 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7741 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9185 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 9974 */;
import showMediaKeyboardActionSheet from "showMediaKeyboardActionSheet" /* 9975 */;
import AppLauncherContext from "AppLauncherContext" /* 11232 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11233 */;
import ApplicationCommandOptionValueParser from "ApplicationCommandOptionValueParser" /* 11685 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11744 */;
import _modDef11818 from "module_11818" /* 11818 */;
import _modDef11819 from "module_11819" /* 11819 */;
import AppLauncherCommandViewHeader from "AppLauncherCommandViewHeader" /* 11859 */;
import ApplicationCommandValidationUtils from "ApplicationCommandValidationUtils" /* 11860 */;
import application_commands_ApplicationCommandValidationUtils from "application_commands/ApplicationCommandValidationUtils" /* 11862 */;
import CommandOptionViewDefault from "CommandOptionView" /* 11865 */;
import _modDef11918 from "module_11918" /* 11918 */;
import _modDef11919 from "module_11919" /* 11919 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;

require = fn;
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
  let ref8;
  closure_23 = undefined;
  c24 = undefined;
  let first;
  closure_26 = undefined;
  let first1;
  __initData4 = undefined;
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
  closure_62 = undefined;
  ({ section, loading, hasPermissions } = command);
  const tmp = closure_23();
  noop = tmp;
  const tmp2 = ref4();
  closure_7 = tmp2;
  const requiredAppLauncherContext = command(sectionName[26]).useRequiredAppLauncherContext();
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
  let obj = command(sectionName[26]);
  let items = [ref2];
  stateFromStores = command(sectionName[16]).useStateFromStores(items, () => GuildRoleStore.getRolesSnapshot(guild_id));
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
          options = command.options;
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
  const tmp3Result = command(sectionName[16]);
  [arr4, c24] = onCommandExecuted(noop.useState([]), 2);
  const tmp15 = onCommandExecuted(noop.useState([]), 2);
  first = tmp15[0];
  closure_26 = tmp15[1];
  const tmp14 = onCommandExecuted(noop.useState([]), 2);
  noop.useRef(new Set());
  const tmp17 = onCommandExecuted(noop.useState([]), 2);
  first1 = tmp17[0];
  __initData4 = tmp17[1];
  let set = new Set();
  noop.useRef(new Set());
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
  let sum = context(tmp4[28])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom + tmp32[0];
  sum1 = sum + context(tmp4[12]).space.PX_16;
  sum2 = context(tmp4[28])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom + context(tmp4[12]).space.PX_16;
  const set2 = new Set();
  sharedValue = command(sectionName[17]).useSharedValue(false);
  const tmp3Result6 = command(sectionName[17]);
  sharedValue1 = command(sectionName[17]).useSharedValue(0);
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
          sum2 = value + diff1;
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
    obj[name.name] = obj2.validateOptionContent({ option: name, content, guildId: context.channel.guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER });
    closure_34(obj);
    closure_20.current = true;
    closure_22.current = name.type;
  }, items4);
  const tmp40 = context(sectionName[31])(command);
  id = tmp40;
  const items5 = [guild_id, command, , , , ];
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
      let items = [];
      closure_2 = [];
      closure_3 = {};
      closure_32.current = {};
      if (tmp != null) {
        options = tmp.options;
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
                const obj3 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
                closure_32.current[required.name] = AppLauncherNativeUtils.getInitialOptionValues(obj3);
                const obj5 = { option: required, content: closure_32.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
                closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj5);
              } else {
                name.push(required);
              }
            } else {
              closure_2.push(required);
              const obj7 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
              closure_32.current[required.name] = AppLauncherNativeUtils.getInitialOptionValues(obj7);
              const obj9 = { option: required, content: closure_32.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
              closure_3[required.name] = ApplicationCommandValidationUtils.validateOptionContent(obj9);
            }
          });
        }
      }
      command(sectionName[33]).batchUpdates(() => {
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
      const obj = command(sectionName[33]);
    }
  }, items5);
  const tmp3Result7 = command(sectionName[17]);
  commandContext = command(sectionName[34]).useCommandContext(context);
  const items6 = [callback1, chatInputRef, command, commandContext, sharedValue, keyboardCloseReasonRef, onCommandExecuted, first2, sectionName];
  callback3 = obj2.useCallback(() => {
    if (null != command) {
      const firstInvalidOption = application_commands_ApplicationCommandValidationUtils.getFirstInvalidOption(command, first2);
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
        obj4.optionValues = ApplicationCommandOptionValueParser.parseOptionValuesForSend(commandContext.channel, command, optionValues.current);
        obj4.context = commandContext;
        obj4.sectionName = sectionName;
        obj4.commandOrigin = ApplicationCommandTypes.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
        const result1 = tmp14Result3.executeAppLauncherCommand(obj4);
        const tmp14Result4 = ApplicationCommandOptionValueParser;
        result1.then(() => {
          const result = command(sectionName[20]).triggerHapticFeedback(command(sectionName[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
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
        }).catch(() => {
          closure_1_35(true);
          const result = sharedValue.set(false);
        });
        const nextPromise = result1.then(() => {
          const result = command(sectionName[20]).triggerHapticFeedback(command(sectionName[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
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
      }
    }
  }, items6);
  ref(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  const callback4 = obj2.useCallback(analyticsLocation(function*() {
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
              const obj4 = { applicationId: command.applicationId, channel: context.channel, commandIntegrationTypes: command.integration_types, appLauncherContext: null };
              const obj6 = { entrypoint, location: analyticsLocation, sectionName };
              obj4.appLauncherContext = obj6;
              c1 = 1;
              c2 = 1;
              const obj7 = { value: tmp2(sectionName[39]).installApplicationOnDemandIfNeeded(obj4), done: false };
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
      } catch (tmp11) {
        c2 = tmp;
        throw tmp11;
      }
    }
  }), items7);
  height = tmp31(tmp4[40])({ ignoreKeyboard: true }).height;
  maximum = tmp31(tmp4[41])().maximum;
  const tmp3Result8 = command(sectionName[34]);
  bottomSheetPosition = command(sectionName[26]).useRequiredAppLauncherContext().bottomSheetPosition;
  const tmp3Result9 = command(sectionName[26]);
  function ot() {
    const obj = { transform: null };
    const items = [{ translateY: -bottomSheetPosition.get() - height + maximum - sum2 }];
    obj.transform = items;
    return obj;
  }
  ot.__closure = { bottomSheetPosition, screenHeight: height, maxHeight: maximum, footerStickyInsetBottom: sum2 };
  ot.__workletHash = 10939625510733;
  ot.__initData = __initData4;
  const items8 = [first3, callback1];
  const animatedStyle = command(sectionName[17]).useAnimatedStyle(ot);
  onStartEditing = obj2.useCallback((name) => {
    first3.delete(name.name);
    closure_37(new Set(first3));
    callback1(name);
  }, items8);
  const items9 = [first3, ];
  let name;
  if (first5 != null) {
    name = first5.name;
  }
  items9[1] = name;
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
  }, items9);
  const items10 = [command];
  callback6 = obj2.useCallback((arg0) => {
    if (null != command) {
      ({ applicationId: obj2.application_id, id: obj2.command_id } = command);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_OPTION_PRESSED, { application_id: null, command_id: null, option_name: null, option_type: null });
      const obj3 = { application_id: null, command_id: null, option_name: null, option_type: null };
    }
  }, items10);
  const items11 = [chatInputRef, context.channel, callback5, callback6];
  onPressAttachmentOption = obj2.useCallback((option) => {
    let FILE_ATTACHMENT = option;
    let obj = { target: stateFromStores.APP_LAUNCHER, option };
    const mediaKeyboardDraftType = command(sectionName[42]).getMediaKeyboardDraftType(obj.target);
    let fileTypes;
    if (option.type === command(sectionName[36]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    let obj2 = command(sectionName[42]);
    const fileTypeFiltering = command(sectionName[43]).getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    ({ validateFilenames: analyticsLocation, showInvalidFileTypeAlert: onCommandExecuted } = fileTypeFiltering);
    callback6(option);
    let tmpResult = command(sectionName[43]);
    let result = command(sectionName[46]).dismissGlobalKeyboard();
    if (fileTypeFiltering.mediaFilesAllowed) {
      const obj3 = { channel: obj.channel, draftType: mediaKeyboardDraftType, extensions: allowedExtensions, uploadLimit: 1, disableWhenReachedLimit: false, includedUploadIds: null, onAttachPress: null, onPressCamera: null, onPressItem: null, onViewAll: null, onManageLimited: null, onClose: null, onBack: null };
      let items = [option.name];
      obj3.includedUploadIds = items;
      obj3.onAttachPress = function onAttachPress() {
        obj = command(sectionName[42]);
        FILE_ATTACHMENT = command(sectionName[47]).UploadOrigin.FILE_ATTACHMENT;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[44]).hideMediaKeyboardActionSheet();
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
            const result = MediaKeyboardUtils.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
        });
        obj.handleAttachFile({});
      };
      obj3.onPressCamera = function onPressCamera(previewType) {
        obj = command(sectionName[42]);
        const obj2 = {};
        const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[44]).hideMediaKeyboardActionSheet();
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
            const result = MediaKeyboardUtils.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
        });
        obj2.previewType = previewType;
        obj.handleCameraDialog(obj2);
      };
      obj3.onPressItem = function onPressItem(item) {
        obj = showMediaKeyboardActionSheet;
        const result = obj.hideMediaKeyboardActionSheet();
        const result1 = MediaKeyboardUtils.mediaNodeToUploadItem(item.item);
        if (allowedExtensions.length > 0) {
          const items = [utils_UploadUtils.getFileFromUploadItem(result1).filename];
          if (!analyticsLocation(items)) {
            return onCommandExecuted();
          }
          const tmpResult = utils_UploadUtils;
        }
        const result2 = MediaKeyboardUtils.addAttachmentForCommand(item.channelId, chatInputRef, result1, obj, Upload.UploadOrigin.IMAGE_PICKER);
        const tmpResult2 = MediaKeyboardUtils;
      };
      obj3.onViewAll = function onViewAll() {
        obj = command(sectionName[42]);
        let obj2 = {};
        const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
          channel: obj.channel,
          uploadLimit: 1,
          extensions: allowedExtensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[44]).hideMediaKeyboardActionSheet();
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
            const result = MediaKeyboardUtils.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
        });
        obj2.draftType = mediaKeyboardDraftType;
        obj.handleViewAllDialog(obj2);
      };
      obj3.onManageLimited = function onManageLimited() {
        obj = FILE_ATTACHMENT(allowedExtensions[42]);
        const result = obj.handleLimitedPickerDialog({ onDismissKeyboard: FILE_ATTACHMENT(allowedExtensions[44]).hideMediaKeyboardActionSheet, onRestoreKeyboard });
      };
      obj3.onClose = function onClose() {
        callback5(FILE_ATTACHMENT);
      };
      obj3.onBack = function onBack() {
        const result = FILE_ATTACHMENT(allowedExtensions[44]).hideMediaKeyboardActionSheet();
      };
      let result1 = command(sectionName[44]).showMediaKeyboardActionSheet(obj3);
      const tmpResult5 = command(sectionName[44]);
    } else {
      const obj4 = {};
      FILE_ATTACHMENT = command(sectionName[47]).UploadOrigin.FILE_ATTACHMENT;
      const obj5 = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
            return IMAGE_PICKER(allowedExtensions[44]).hideMediaKeyboardActionSheet();
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
            const result = MediaKeyboardUtils.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
      };
      let merged = Object.assign(obj5);
      command(sectionName[42]).handleAttachFile(obj4);
      const tmpResult6 = command(sectionName[42]);
    }
    const tmpResult4 = command(sectionName[46]);
  }, items11);
  const tmp52 = context(sectionName[48])(() => {
    callback1(first5);
  });
  setLatch = tmp52.setLatch;
  tryCallback = tmp52.tryCallback;
  const items12 = [tryCallback];
  const callback7 = obj2.useCallback((nativeEvent) => {
    closure_14.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items13 = [first5, setLatch, callback1];
  const callback8 = obj2.useCallback((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items12);
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
  }, items13);
  const items14 = [first5, callback1];
  const effect2 = obj2.useEffect(() => {
    if (null != first5) {
      callback1(tmp);
    }
  }, items14);
  const items15 = [first1, first, callback2, guild_id, stateFromStores, , ];
  let applicationId;
  if (command != null) {
    applicationId = command.applicationId;
  }
  items15[5] = applicationId;
  let id2;
  if (command != null) {
    id2 = command.id;
  }
  items15[6] = id2;
  const items16 = [first1, first, first2, first3, , , ];
  let name1;
  const callback9 = obj2.useCallback((name) => {
    let current = ref9.current;
    current.add(name.name);
    const items = [];
    items[HermesBuiltin.arraySpread(first1, 0)] = name;
    closure_29(items);
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    setFocusedOption(name);
    callback2(name, AppLauncherNativeUtils.getInitialOptionValues({ option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores }));
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
  }, items15);
  if (first5 != null) {
    name1 = first5.name;
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
  onDismiss = obj2.useCallback((name) => {
    let current = ref9.current;
    current.delete(name.name);
    const current2 = ref10.current;
    current2.delete(name.name);
    closure_29(first1.filter((name) => name.name !== name.name));
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
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
    command(sectionName[27]).trackWithMetadata(ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj4);
    const obj2 = command(sectionName[27]);
  }, items16);
  const callback10 = obj2.useCallback((nativeEvent) => closure_39(nativeEvent.nativeEvent.layout.height), []);
  let tmp71Result = first.length > 0;
  let tmp66 = tmp64;
  const callback11 = obj2.useCallback((arg0, current) => {
    closure_16.current = current;
    return current;
  }, []);
  if (arr4.length <= 0) {
    tmp66 = tmp71Result;
  }
  let prefilledOptions1;
  if (preSelectedCommand != null) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_62 = null != prefilledOptions1;
  if (entrypoint === command(sectionName[49]).AppLauncherEntrypoint.VOICE) {
    let BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = tmp3(tmp4[50]).BottomSheetScrollView;
  }
  if (loading) {
    let tmp71Result2 = ref6(first2, {});
    let tmp68 = ref6;
  } else if (null == command) {
    let obj3 = { onPressBack: callback };
    tmp71Result2 = ref6(closure_34, obj3);
    tmp68 = ref6;
  } else if (hasPermissions) {
    let obj4 = { ref, contentContainerStyle: tmp.optionsContainer, scrollIndicatorInsets: null, scrollToOverflowEnabled: true, onContentSizeChange: null, preserveScrollMomentum: true, lockableScrollableContentOffsetY: null, keyboardShouldPersistTaps: "handled", contentInsetAdjustmentBehavior: "never", automaticallyAdjustContentInsets: false, onLayout: null, automaticallyAdjustsScrollIndicatorInsets: false, children: null };
    let obj5 = { bottom: sum1 };
    obj4.scrollIndicatorInsets = obj5;
    obj4.onContentSizeChange = callback11;
    obj4.lockableScrollableContentOffsetY = sharedValue1;
    obj4.onLayout = callback10;
    let obj6 = { style: tmp.commandNameContainer, children: null };
    let obj7 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
    const items17 = [ref6(tmp3(tmp4[51]).Text, obj7), ];
    let obj8 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
    items17[1] = ref6(tmp3(tmp4[51]).Text, obj8);
    obj6.children = items17;
    const items18 = [ref7(closure_7, obj6), , , , , ];
    let tmp74Result = tmp64;
    if (tmp64) {
      let obj9 = {
        style: tmp.requiredOptionsContainer,
        onLayout: callback7,
        children: arr4.map((option, index) => {
              const obj = { option, autoFocusType: null, editedOptions: null, onOptionViewLayout: null, onStartEditing: null, onEndEditing: null, onOptionValueChange: null, onPressOption: null, onPressAttachmentOption: null, channel: null, optionValidationResults: null, setFocusedOption: null, command: null, optionValues: null };
              if (0 === index) {
                if (!closure_62) {
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
                return constants2(tmp2, obj, option.name);
              }
              NONE = constants.NONE;
            })
      };
      tmp74Result = tmp74(tmp73, obj9);
    }
    items18[1] = tmp74Result;
    let tmp74Result3 = !tmp64;
    if (!tmp64) {
      tmp74Result3 = tmp66;
    }
    if (tmp74Result3) {
      const obj10 = { style: tmp.noRequiredOptionsCalloutContainer, children: null };
      const obj11 = { variant: "text-sm/medium", color: "text-strong", style: { textAlign: "center" }, children: null };
      const intl = tmp3(tmp4[23]).intl;
      obj11.children = intl.string(tmp3(tmp4[23]).t.HS2KtY);
      obj10.children = tmp74(tmp3(tmp4[51]).Text, obj11);
      tmp74Result3 = tmp74(tmp73, obj10);
    }
    items18[2] = tmp74Result3;
    let tmp74Result4 = !tmp66;
    if (!tmp66) {
      const obj12 = { style: tmp.noOptionCalloutContainer, children: null };
      const obj13 = { variant: "text-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
      const intl2 = tmp3(tmp4[23]).intl;
      obj13.children = intl2.string(tmp3(tmp4[23]).t.G8lEFB);
      obj12.children = tmp74(tmp3(tmp4[51]).Text, obj13);
      tmp74Result4 = tmp74(tmp73, obj12);
    }
    items18[3] = tmp74Result4;
    if (tmp71Result) {
      const obj14 = { children: null };
      const obj15 = { style: tmp.optionalOptionsSectionTitle, variant: "text-md/normal", color: "text-default", children: null };
      const intl3 = tmp3(tmp4[23]).intl;
      obj15.children = intl3.string(tmp3(tmp4[23]).t["5C107K"]);
      const items19 = [tmp74(tmp3(tmp4[51]).Text, obj15), , ];
      const obj16 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first1.map((option, index) => {
              const items = [optionalOptionsChild.optionalOptionsChild, , ];
              let optionalOptionsFirstChild = 0 === index;
              if (optionalOptionsFirstChild) {
                optionalOptionsFirstChild = optionalOptionsChild.optionalOptionsFirstChild;
              }
              items[1] = optionalOptionsFirstChild;
              const obj = { style: items, option, autoFocusType: null, onDismiss, editedOptions: first3, onOptionViewLayout, onStartEditing, onEndEditing: callback5, onOptionValueChange: callback2, onPressOption: callback6, onPressAttachmentOption, channel: context.channel, optionValidationResults: first2, setFocusedOption, command, optionValues, isPreSelectedOption: null };
              items[2] = index === first1.length - 1 && optionalOptionsChild.optionalOptionsLastChild;
              const current = ref10.current;
              obj.autoFocusType = current.has(option.name) ? constants.NONE : constants.OPTIONAL_OPTION_ADDED;
              const current2 = ref10.current;
              obj.isPreSelectedOption = current2.has(option.name);
              return constants2(CommandOptionViewDefault, obj, option.name);
            })
      };
      items19[1] = tmp74(tmp73, obj16);
      const obj17 = { layout: tmp3(tmp4[53]).LayoutAnimation, collapsable: false, children: null };
      const obj18 = { style: tmp.optionalOptionList, options: tmp20, onSelectOption: callback9 };
      obj17.children = tmp74(tmp31(tmp4[54]), obj18);
      items19[2] = tmp74(tmp31(tmp4[17]).View, obj17);
      obj14.children = items19;
      tmp71Result = tmp71(tmp72, obj14);
    }
    const obj19 = { children: null };
    items18[4] = tmp71Result;
    const obj20 = { size: sum1 };
    items18[5] = ref6(tmp3(tmp4[55]).Spacer, obj20);
    obj4.children = items18;
    const items20 = [ref7(BottomSheetScrollView, obj4), ];
    const obj21 = { enableSubmit: tmp23[0], onSubmit: callback4, animatedStyle, onHeightChange: tmp32[1], isSending: sharedValue, footerStickyInsetBottom: sum2 };
    items20[1] = ref6(first1, obj21);
    obj19.children = items20;
    tmp71Result2 = tmp71(tmp72, obj19);
    tmp68 = tmp74;
  } else {
    tmp68 = ref6;
    const obj22 = { command, onPressBack: callback };
    tmp71Result2 = ref6(closure_35, obj22);
  }
  const obj23 = { style: tmp.container, children: null };
  const items21 = [tmp68(command(sectionName[13]).AppLauncherCommandViewHeader, { command, onPressBack: callback, scrollOffsetY: sharedValue1, section }), tmp71Result2];
  obj23.children = items21;
  return ref7(closure_7, obj23);
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ActivityIndicator: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const ApplicationCommandIndexStore = fn(9186);
({ useContextIndexState: closure_11, useUserIndexState: closure_12 } = ApplicationCommandIndexStore);
const AppLauncherNativeConstants = fn(1501);
({ AppLauncherOptionAutoFocusType: closure_14, useAppLauncherNavigation: closure_15, DEFAULT_CONTENT_PADDING } = AppLauncherNativeConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = Constants);
const MediaKeyboardTarget = fn(1626).MediaKeyboardTarget;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, optionsContainer: null, requiredOptionsContainer: null, optionalOptionsContainer: null, optionalOptionsChild: null, optionalOptionsFirstChild: null, optionalOptionsLastChild: null, footerContainer: null, submitButton: null, optionalOptionsSectionTitle: null, optionalOptionList: null, noRequiredOptionsCalloutContainer: null, noOptionCalloutContainer: null, emptyState: null, emptyStateContainer: null, failureStateButtonWrapper: null, failureStateButtonPill: null, commandNameContainer: null, linearGradient: null };
let obj3 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.optionsContainer = { paddingTop: fn(11859).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.requiredOptionsContainer = { marginTop: 24, gap: 24 };
obj2.optionalOptionsContainer = {};
obj2.optionalOptionsChild = { marginBottom: 24 };
obj2.optionalOptionsFirstChild = { marginTop: 12 };
obj2.optionalOptionsLastChild = { marginBottom: 12 };
obj2.footerContainer = { position: "absolute", left: 0, bottom: 0, right: 0, paddingHorizontal: DEFAULT_CONTENT_PADDING };
obj2.submitButton = { flex: 1, overflow: "hidden" };
obj2.optionalOptionsSectionTitle = { marginTop: 36 };
obj2.optionalOptionList = { marginTop: 12 };
let obj4 = { paddingTop: fn(11859).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj2.noRequiredOptionsCalloutContainer = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 24, borderRadius: nativeDefault.radii.lg };
let obj5 = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj2.noOptionCalloutContainer = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj2.emptyState = { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 };
let obj6 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj2.emptyStateContainer = { paddingTop: fn(11859).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
obj2.failureStateButtonWrapper = { marginTop: 24, alignSelf: "center" };
let obj7 = { paddingTop: fn(11859).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
obj2.failureStateButtonPill = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj2.commandNameContainer = { alignItems: "center", justifyContent: "center", textAlign: "center" };
let obj8 = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj2.linearGradient = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_23 = createStyles.createStyles(obj2);
const __initData = { code: "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion){return{};}if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,\"respect-motion-settings\",function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
const __initData3 = { code: "function AppLauncherCommandViewScreenTsx3(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
let closure_27 = { code: "function AppLauncherCommandViewScreenTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandViewFooter(isSending) {
  const cResult = onHeightChange(stateFromStores[15]).c(37);
  ({ onSubmit, animatedStyle, onHeightChange } = isSending);
  isSending = isSending.isSending;
  ({ enableSubmit, footerStickyInsetBottom } = isSending);
  const tmp4 = closure_23();
  const tmp6 = _slicedToArray(noop.useState(0), 2);
  importAll = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj = onHeightChange(stateFromStores[15]);
  const tmp5 = _slicedToArray;
  stateFromStores = onHeightChange(stateFromStores[16]).useStateFromStores(tmp7, tmp8);
  const tmp5Result = tmp5(noop.useState(false), 2);
  const isPressedDown = tmp5Result[0];
  _slicedToArray = tmp5Result[1];
  const tmpResult = onHeightChange(stateFromStores[16]);
  class T {
    constructor() {
      if (closure_3) {
        obj1 = {};
      } else {
        tmp = closure_4;
        if (closure_4) {
          obj11 = { opacity: 1, transform: null };
          obj12 = { translateX: null };
          tmp10 = closure_0;
          tmp11 = closure_3;
          obj8 = closure_0(closure_3[17]);
          tmp12 = closure_0;
          tmp13 = closure_3;
          obj9 = closure_0(closure_3[18]);
          tmp14 = closure_0;
          tmp15 = closure_3;
          fn = function e() {
            const obj = onHeightChange(4810);
            return onHeightChange(4810).runOnJS(onHeightChange(5055).triggerHapticFeedback)(onHeightChange(5055).HapticFeedbackTypes.IMPACT_LIGHT);
          };
          obj13 = { runOnJS: null, triggerHapticFeedback: null, HapticFeedbackTypes: null };
          tmp16 = closure_0;
          tmp17 = closure_3;
          obj13.runOnJS = closure_0(closure_3[17]).runOnJS;
          tmp18 = closure_0;
          tmp19 = closure_3;
          obj13.triggerHapticFeedback = closure_0(closure_3[20]).triggerHapticFeedback;
          tmp20 = closure_0;
          tmp21 = closure_3;
          obj13.HapticFeedbackTypes = closure_0(closure_3[20]).HapticFeedbackTypes;
          fn.__closure = obj13;
          num3 = 8545458901090;
          fn.__workletHash = 8545458901090;
          tmp22 = closure_25;
          fn.__initData = closure_25;
          str = "respect-motion-settings";
          num4 = -4;
          tmp23 = obj9;
          tmp24 = fn;
          num5 = 100;
          obj12.translateX = obj8.withDelay(100, obj9.withTiming(-4, closure_0(closure_3[19]).timingStandard, "respect-motion-settings", fn));
          items = [];
          items[0] = obj12;
          obj11.transform = items;
          obj1 = obj11;
        } else {
          tmp2 = closure_0;
          tmp3 = closure_3;
          obj = closure_0(closure_3[18]);
          obj2 = isSending;
          num = 1;
          if (isSending.get()) {
            num = 0;
          }
          obj1 = { opacity: null, transform: null };
          tmp4 = closure_0;
          tmp5 = closure_3;
          obj1.opacity = obj.withTiming(num, closure_0(closure_3[19]).timingStandard);
          tmp6 = closure_0;
          tmp7 = closure_3;
          obj4 = closure_0(closure_3[18]);
          num2 = 0;
          if (obj2.get()) {
            num2 = 100;
          }
          obj14 = { translateX: null };
          tmp8 = closure_0;
          tmp9 = closure_3;
          obj14.translateX = obj4.withTiming(num2, closure_0(closure_3[19]).timingStandard);
          items1 = [];
          items1[0] = obj14;
          obj1.transform = items1;
        }
      }
      return obj1;
    }
  }
  const tmpResult2 = onHeightChange(stateFromStores[17]);
  T.__closure = { shouldReduceMotion: stateFromStores, isPressedDown, withDelay: onHeightChange(stateFromStores[17]).withDelay, withTiming: onHeightChange(stateFromStores[18]).withTiming, timingStandard: onHeightChange(stateFromStores[19]).timingStandard, runOnJS: onHeightChange(stateFromStores[17]).runOnJS, triggerHapticFeedback: onHeightChange(stateFromStores[20]).triggerHapticFeedback, HapticFeedbackTypes: onHeightChange(stateFromStores[20]).HapticFeedbackTypes, isSending };
  T.__workletHash = 3221051482353;
  T.__initData = __initData;
  const animatedStyle1 = tmpResult2.useAnimatedStyle(T);
  if (cResult[2] !== onHeightChange) {
    class E {
      constructor(arg0) {
        height = isSending.nativeEvent.layout.height;
        tmp = closure_2(height);
        if (onHeightChange != null) {
          tmp2 = onHeightChange(height);
        }
        return;
      }
    }
    cResult[2] = onHeightChange;
    cResult[3] = E;
  } else {
    class E {
      constructor(arg0) {
        height = isSending.nativeEvent.layout.height;
        tmp = closure_2(height);
        if (onHeightChange != null) {
          tmp2 = onHeightChange(height);
        }
        return;
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class E {
      constructor(arg0) {
        height = isSending.nativeEvent.layout.height;
        tmp = closure_2(height);
        if (onHeightChange != null) {
          tmp2 = onHeightChange(height);
        }
        return;
      }
    }
    if (cResult[7] === tmp4.footerContainer.paddingHorizontal) {
      class E {
        constructor(arg0) {
          height = isSending.nativeEvent.layout.height;
          tmp = closure_2(height);
          if (onHeightChange != null) {
            tmp2 = onHeightChange(height);
          }
          return;
        }
      }
      const result = 12 / (tmp6[0] + 12);
      if (cResult[10] !== result) {
        class E {
          constructor(arg0) {
            height = isSending.nativeEvent.layout.height;
            tmp = closure_2(height);
            if (onHeightChange != null) {
              tmp2 = onHeightChange(height);
            }
            return;
          }
        }
        tmp19[1] = result;
        cResult[10] = result;
        cResult[11] = tmp19;
      } else {
        class E {
          constructor(arg0) {
            height = isSending.nativeEvent.layout.height;
            tmp = closure_2(height);
            if (onHeightChange != null) {
              tmp2 = onHeightChange(height);
            }
            return;
          }
        }
      }
      if (cResult[12] !== tmp4.linearGradient.backgroundColor) {
        class E {
          constructor(arg0) {
            height = isSending.nativeEvent.layout.height;
            tmp = closure_2(height);
            if (onHeightChange != null) {
              tmp2 = onHeightChange(height);
            }
            return;
          }
        }
        const hexWithOpacityResult = obj7.hexWithOpacity(tmp4.linearGradient.backgroundColor, 0);
        cResult[12] = tmp4.linearGradient.backgroundColor;
        cResult[13] = hexWithOpacityResult;
      } else {
        class E {
          constructor(arg0) {
            height = isSending.nativeEvent.layout.height;
            tmp = closure_2(height);
            if (onHeightChange != null) {
              tmp2 = onHeightChange(height);
            }
            return;
          }
        }
      }
      if (cResult[14] === tmp4.linearGradient.backgroundColor) {
        class E {
          constructor(arg0) {
            height = isSending.nativeEvent.layout.height;
            tmp = closure_2(height);
            if (onHeightChange != null) {
              tmp2 = onHeightChange(height);
            }
            return;
          }
        }
        if (cResult[17] === tmp22) {
          class E {
            constructor(arg0) {
              height = isSending.nativeEvent.layout.height;
              tmp = closure_2(height);
              if (onHeightChange != null) {
                tmp2 = onHeightChange(height);
              }
              return;
            }
          }
        }
        let obj4 = { style: tmp16, start: constants3.START, end: tmp19, colors: tmp22, pointerEvents: "none" };
        const tmp27 = closure_20(isSending(tmp2[22]), obj4);
        cResult[17] = tmp22;
        cResult[18] = tmp16;
        cResult[19] = tmp19;
        cResult[20] = tmp27;
      }
      let items1 = [tmp20, tmp4.linearGradient.backgroundColor];
      cResult[14] = tmp4.linearGradient.backgroundColor;
      cResult[15] = tmp20;
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
  let obj3 = { shouldReduceMotion: stateFromStores, isPressedDown, withDelay: onHeightChange(stateFromStores[17]).withDelay, withTiming: onHeightChange(stateFromStores[18]).withTiming, timingStandard: onHeightChange(stateFromStores[19]).timingStandard, runOnJS: onHeightChange(stateFromStores[17]).runOnJS, triggerHapticFeedback: onHeightChange(stateFromStores[20]).triggerHapticFeedback, HapticFeedbackTypes: onHeightChange(stateFromStores[20]).HapticFeedbackTypes, isSending };
}) : (function AppLauncherCommandViewFooter(arg0) {
  ({ onHeightChange: require, isSending } = arg0);
  let stateFromStores;
  isPressedDown = undefined;
  _slicedToArray = undefined;
  ({ enableSubmit, onSubmit, animatedStyle, footerStickyInsetBottom } = arg0);
  const tmp = closure_23();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  closure_2 = tmp2[1];
  let items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [isPressedDown, _slicedToArray] = noop.useState(false);
  let obj = require("initialize");
  let fn = function h() {
    if (stateFromStores) {
      let obj3 = {};
    } else if (first) {
      const obj5 = { opacity: 1, transform: null };
      const obj6 = { translateX: null };
      const obj9 = timing;
      const fn = function e() {
        const obj = closure_1_0(4810);
        return closure_1_0(4810).runOnJS(closure_1_0(5055).triggerHapticFeedback)(closure_1_0(5055).HapticFeedbackTypes.IMPACT_LIGHT);
      };
      const obj7 = { runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
      fn.__closure = obj7;
      fn.__workletHash = 16763250045668;
      fn.__initData = __initData;
      obj6.translateX = ReanimatedRexport.withDelay(100, obj9.withTiming(-4, timingPresets.timingStandard, "respect-motion-settings", fn));
      const items = [obj6];
      obj5.transform = items;
      obj3 = obj5;
    } else {
      let num = 1;
      if (isSending.get()) {
        num = 0;
      }
      obj3 = { opacity: timing.withTiming(num, timingPresets.timingStandard), transform: null };
      let num2 = 0;
      if (isSending.get()) {
        num2 = 100;
      }
      const obj10 = { translateX: timing.withTiming(num2, timingPresets.timingStandard) };
      const items1 = [obj10];
      obj3.transform = items1;
    }
    return obj3;
  };
  const obj2 = require("ReanimatedRexport");
  fn.__closure = { shouldReduceMotion: stateFromStores, isPressedDown, withDelay: require("ReanimatedRexport").withDelay, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback, HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes, isSending };
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
    style: null,
    children: null
  };
  let items1 = [tmp.footerContainer, animatedStyle];
  obj4.style = items1;
  let obj5 = { style: { width: "100%", top: -12, bottom: -footerStickyInsetBottom, left: tmp.footerContainer.paddingHorizontal, position: "absolute" }, start: constants3.START, end: null, colors: null, pointerEvents: "none" };
  const point = { x: 0, y: 12 / (tmp2[0] + 12) };
  obj5.end = point;
  let obj3 = { shouldReduceMotion: stateFromStores, isPressedDown, withDelay: require("ReanimatedRexport").withDelay, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard, runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback, HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes, isSending };
  const tmp7 = isSending(stateFromStores[22]);
  const items2 = [require("ColorUtils").hexWithOpacity(tmp.linearGradient.backgroundColor, 0), tmp.linearGradient.backgroundColor];
  obj5.colors = items2;
  const items3 = [closure_20(tmp7, obj5), ];
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
    text: null,
    icon: null,
    iconPosition: "end"
  };
  const intl = require("util").intl;
  obj6.text = intl.string(require("util").t.TXNS7S);
  let obj8 = { style: animatedStyle1, children: null };
  let obj7 = require("ColorUtils");
  obj8.children = closure_20(require("SendMessageIcon").SendMessageIcon, { style: { marginLeft: 8 }, color: isSending(stateFromStores[12]).unsafe_rawColors.WHITE, size: "sm" });
  obj6.icon = closure_20(isSending(stateFromStores[17]).View, obj8);
  items3[1] = closure_20(require("BaseTextButton").BaseTextButton, obj6);
  obj4.children = items3;
  return closure_21(isSending(stateFromStores[17]).View, obj4);
});
let __initData4 = { code: "function AppLauncherCommandViewScreenTsx5(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}" };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandView(command) {
  const cResult = command(loading[15]).c(21);
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, installOnDemand, sectionName, expandBottomSheet } = command);
  const onCommandExecuted = command.onCommandExecuted;
  expandBottomSheet(loading[56])(null != context.channel, "channel should not be null");
  const tmp5 = expandBottomSheet(loading[57])();
  closure_2 = tmp5;
  const tmp6 = closure_32(context.channel, preSelectedCommand, analyticsLocation, sectionName);
  loading = tmp6.loading;
  let command2 = command;
  ({ sectionDescriptor, hasPermission } = tmp6);
  if (command == null) {
    command2 = tmp6.command;
  }
  const obj = command(loading[15]);
  const bottomSheetExpandReasonRef = command(loading[26]).useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
  if (cResult[0] !== command2) {
    let tmp8 = null != command2;
    if (tmp8) {
      options = command2.options;
      if (options == null) {
        options = [];
      }
      tmp8 = options.length > 0;
    }
    cResult[0] = command2;
    cResult[1] = tmp8;
    let tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  closure_5 = tmp7;
  if (cResult[2] === bottomSheetExpandReasonRef) {
    if (cResult[3] === command) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === expandBottomSheet) {
          if (cResult[6] === loading) {
            if (cResult[7] === tmp5) {
              let tmp9 = cResult[8];
              let tmp10 = cResult[9];
            }
            const effect = noop.useEffect(tmp9, tmp10);
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
                              if (cResult[19] === tmp13) {
                                let tmp14 = cResult[20];
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
                if (closure_2) {
                  tmp2 = closure_5;
                  if (!closure_5) {
                    tmp3 = loading;
                    tmp4 = !loading;
                    if (!loading) {
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
      if (closure_2) {
        tmp2 = closure_5;
        if (!closure_5) {
          tmp3 = loading;
          tmp4 = !loading;
          if (!loading) {
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
  const tmpResult = command(loading[26]);
}) : (function AppLauncherCommandView(command) {
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  let loading;
  let bottomSheetExpandReasonRef;
  closure_5 = undefined;
  ({ installOnDemand, onCommandExecuted } = command);
  expandBottomSheet(loading[56])(null != context.channel, "channel should not be null");
  const tmp3 = expandBottomSheet(loading[57])();
  closure_2 = tmp3;
  let tmp4 = closure_32(context.channel, preSelectedCommand, analyticsLocation, sectionName);
  loading = tmp4.loading;
  let command2 = command;
  ({ sectionDescriptor, hasPermission } = tmp4);
  if (command == null) {
    command2 = tmp4.command;
  }
  bottomSheetExpandReasonRef = command(loading[26]).useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
  let tmp5 = null != command2;
  if (tmp5) {
    options = command2.options;
    if (options == null) {
      options = [];
    }
    tmp5 = options.length > 0;
  }
  closure_5 = tmp5;
  const items = [command, tmp5, loading, tmp3, bottomSheetExpandReasonRef, expandBottomSheet];
  const effect = noop.useEffect(() => {
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
  }, items);
  const obj2 = { command: command2, context, section: null, preSelectedCommand: null, loading: null, hasPermissions: null, installOnDemand: null, sectionName: null, analyticsLocation: null, onCommandExecuted: null };
  if (section == null) {
    section = sectionDescriptor;
  }
  obj2.section = section;
  if (preSelectedCommand == null) {
    preSelectedCommand = null;
  }
  obj2.preSelectedCommand = preSelectedCommand;
  obj2.loading = loading;
  obj2.hasPermissions = null != command || hasPermission;
  obj2.installOnDemand = installOnDemand;
  obj2.sectionName = sectionName;
  obj2.analyticsLocation = analyticsLocation;
  obj2.onCommandExecuted = onCommandExecuted;
  return closure_20(AppLauncherCommandViewInner, obj2);
});
fn(558);
let obj9 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreSelectedCommand(channel, commandId, _location, sectionName) {
  _require = _location;
  const cResult = require("c").c(28);
  if (cResult[0] !== channel) {
    let obj2 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let obj = require("c");
  commandId = undefined;
  if (commandId != null) {
    commandId = commandId.commandId;
  }
  const command1 = command(descriptor[58]).useCommand(tmp4, commandId);
  command = command1.command;
  const application = command1.application;
  if (cResult[2] !== channel) {
    const obj4 = { channel, type: "channel" };
    cResult[2] = channel;
    cResult[3] = obj4;
    let tmp8 = obj4;
  } else {
    tmp8 = cResult[3];
  }
  const tmp9 = closure_11(tmp8, true, true);
  const tmp10 = closure_12(true, true);
  let tmp11 = null;
  if (null != application) {
    const result = tmp10.result;
    descriptor = undefined;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp13.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp9.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp11 = descriptor;
  }
  descriptor = tmp11;
  let tmp15 = null != application;
  if (tmp15) {
    const result3 = tmp9.result;
    let tmp16;
    if (result3 != null) {
      tmp16 = result3.sections[application.id];
    }
    tmp15 = null != tmp16;
  }
  noop.useRef(false);
  if (cResult[4] === _location) {
    if (cResult[5] === command) {
      if (cResult[6] === tmp11) {
        if (cResult[7] === sectionName) {
          let tmp17 = cResult[8];
          let tmp18 = cResult[9];
        }
        const effect = noop.useEffect(tmp17, tmp18);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [tmp(tmp2[36]).ApplicationCommandType.CHAT];
          cResult[10] = items;
          let tmp21 = items;
        } else {
          tmp21 = cResult[10];
        }
        const permissionContext = tmp(tmp2[60]).usePermissionContext(channel, tmp21);
        if (null != tmp11) {
          if (null != command) {
            ({ context, userId, roleIds, isImpersonating } = permissionContext);
            if (cResult[13] === command) {
              if (cResult[14] === context) {
                if (cResult[15] === tmp15) {
                  if (cResult[16] === isImpersonating) {
                    if (cResult[17] === permissionContext) {
                      if (cResult[18] === roleIds) {
                        if (cResult[19] === tmp11.botId) {
                          if (cResult[20] === tmp11.permissions) {
                            if (cResult[21] === userId) {
                              let tmp23 = cResult[22];
                            }
                            const tmp33 = tmp23 === tmp5(tmp2[61]).HasAccessResult.ALLOWED && tmp38;
                            if (cResult[23] === command) {
                              if (cResult[24] === tmp11) {
                                if (cResult[25] === tmp33) {
                                  if (cResult[26] === tmp34) {
                                    let tmp35 = cResult[27];
                                  }
                                  return tmp35;
                                }
                              }
                            }
                            const obj6 = { command, sectionDescriptor: tmp11, hasPermission: tmp33, loading: tmp10.fetchState.fetching || tmp9.fetchState.fetching };
                            cResult[23] = command;
                            cResult[24] = tmp11;
                            cResult[25] = tmp33;
                            cResult[26] = tmp10.fetchState.fetching || tmp9.fetchState.fetching;
                            cResult[27] = obj6;
                            tmp35 = obj6;
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
              const tmp5Result = tmp5(tmp2[61]);
              allowedForUser = tmp5Result.computeAllowedForUser(tmp11.permissions, context.guild_id, userId, roleIds, isImpersonating);
            }
            let guild_id1;
            if (context != null) {
              guild_id1 = context.guild_id;
            }
            let allowedForChannel = null;
            if (null != guild_id1) {
              allowedForChannel = tmp5(tmp2[61]).computeAllowedForChannel(tmp11.permissions, context, context.guild_id);
              const tmp5Result3 = tmp5(tmp2[61]);
            }
            const obj7 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp11.botId, isGuildInstalled: tmp15 };
            const hasAccessResult = tmp5(tmp2[61]).hasAccess(command, permissionContext, obj7);
            cResult[13] = command;
            cResult[14] = context;
            cResult[15] = tmp15;
            cResult[16] = isImpersonating;
            cResult[17] = permissionContext;
            cResult[18] = roleIds;
            cResult[19] = tmp11.botId;
            cResult[20] = tmp11.permissions;
            cResult[21] = userId;
            cResult[22] = hasAccessResult;
            tmp23 = hasAccessResult;
            const tmp5Result4 = tmp5(tmp2[61]);
          }
        }
        if (cResult[11] !== (tmp10.fetchState.fetching || tmp9.fetchState.fetching)) {
          const obj8 = { command: null, sectionDescriptor: null, hasPermission: false, loading: tmp36 };
          cResult[11] = tmp36;
          cResult[12] = obj8;
          let tmp37 = obj8;
        } else {
          tmp37 = cResult[12];
        }
        return tmp37;
      }
    }
  }
  const fn = function f() {
    let current = null == command;
    if (!current) {
      current = null == descriptor;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const obj2 = { command, triggerSection: null, location: null, sectionName: null };
      const obj = ApplicationCommandUtils;
      obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(descriptor);
      obj2.location = _location;
      obj2.sectionName = sectionName;
      obj.trackCommandSelected(obj2);
      ref.current = true;
    }
  };
  const items1 = [command, tmp11, _location, sectionName];
  cResult[4] = _location;
  cResult[5] = command;
  cResult[6] = tmp11;
  cResult[7] = sectionName;
  cResult[8] = fn;
  cResult[9] = items1;
  tmp18 = items1;
  tmp17 = fn;
  let obj3 = command(descriptor[58]);
}) : (function usePreSelectedCommand(channel, commandId, _location, sectionName) {
  _require = _location;
  commandId = undefined;
  if (commandId != null) {
    commandId = commandId.commandId;
  }
  const command1 = command(descriptor[58]).useCommand({ channel, type: "channel" }, commandId);
  command = command1.command;
  const application = command1.application;
  const tmp5 = closure_11({ channel, type: "channel" }, true, true);
  const tmp6 = closure_12(true, true);
  let tmp7 = null;
  if (null != application) {
    const result = tmp6.result;
    descriptor = undefined;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp9.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp5.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp7 = descriptor;
  }
  descriptor = tmp7;
  let tmp11 = null != application;
  if (tmp11) {
    const result3 = tmp5.result;
    let tmp12;
    if (result3 != null) {
      tmp12 = result3.sections[application.id];
    }
    tmp11 = null != tmp12;
  }
  noop.useRef(false);
  const items = [command, tmp7, _location, sectionName];
  const effect = noop.useEffect(() => {
    let current = null == command;
    if (!current) {
      current = null == descriptor;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const obj2 = { command, triggerSection: null, location: null, sectionName: null };
      const obj = ApplicationCommandUtils;
      obj2.triggerSection = ApplicationCommandUtils.getCommandTriggerSection(descriptor);
      obj2.location = _location;
      obj2.sectionName = sectionName;
      obj.trackCommandSelected(obj2);
      ref.current = true;
    }
  }, items);
  let obj = command(descriptor[58]);
  let obj2 = { channel, type: "channel" };
  let obj3 = { channel, type: "channel" };
  const items1 = [require("Server").ApplicationCommandType.CHAT];
  const permissionContext = require("CommandPermissionContext").usePermissionContext(channel, items1);
  if (null != tmp7) {
    if (null != command) {
      ({ context, userId, roleIds, isImpersonating } = permissionContext);
      let guild_id;
      if (context != null) {
        guild_id = context.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        const tmpResult = tmp(tmp2[61]);
        allowedForUser = tmpResult.computeAllowedForUser(tmp7.permissions, context.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context != null) {
        guild_id1 = context.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        allowedForChannel = tmp(tmp2[61]).computeAllowedForChannel(tmp7.permissions, context, context.guild_id);
        const tmpResult3 = tmp(tmp2[61]);
      }
      const obj5 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp7.botId, isGuildInstalled: tmp11 };
      const obj6 = { command, sectionDescriptor: tmp7, hasPermission: null, loading: null };
      const tmpResult4 = tmp(tmp2[61]);
      const hasAccessResult = tmp(tmp2[61]).hasAccess(command, permissionContext, obj5);
      obj6.hasPermission = tmp(tmp2[61]).hasAccess(command, permissionContext, obj5) === tmp(tmp2[61]).HasAccessResult.ALLOWED && permissionContext.hasBaseAccessPermissions;
      obj6.loading = tmp6.fetchState.fetching || tmp5.fetchState.fetching;
      return obj6;
    }
  }
  const loading = tmp6.fetchState.fetching || tmp5.fetchState.fetching;
  return { command: null, sectionDescriptor: null, hasPermission: false, loading };
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function LoadingState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: constants2(closure_1_8, { size: "large" }) };
    const tmp6 = constants2(React5, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LoadingState() {
  return constants2(React5, { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: constants2(closure_1_8, { size: "large" }) });
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotFoundState(onPressBack) {
  const cResult = c.c(13);
  onPressBack = onPressBack.onPressBack;
  const tmp4 = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  ({ emptyStateContainer, emptyState } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["pX/qb9"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.exOQVY);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp6 = stringResult;
    tmp7 = stringResult1;
  } else {
    [tmp6, tmp7] = cResult;
  }
  ({ failureStateButtonPill, failureStateButtonWrapper } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t["/g10LC"]);
    cResult[2] = stringResult2;
    let tmp10 = stringResult2;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === onPressBack) {
    if (cResult[4] === tmp4.failureStateButtonPill) {
      if (cResult[5] === tmp4.failureStateButtonWrapper) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.emptyState) {
        if (cResult[8] === tmp12) {
          let tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4.emptyStateContainer) {
          if (cResult[11] === tmp14) {
            let tmp18 = cResult[12];
          }
          return tmp18;
        }
        const obj3 = { style: emptyStateContainer, children: tmp14 };
        const tmp21 = constants2(React5, obj3);
        cResult[10] = tmp4.emptyStateContainer;
        cResult[11] = tmp14;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj4 = { style: emptyState, lightSource: _modDef11918, darkSource: _modDef11919, title: tmp6, body: tmp7, children: tmp12 };
      const tmp17 = constants2(native.EmptyState, obj4);
      cResult[7] = tmp4.emptyState;
      cResult[8] = tmp12;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp13 = constants2(BaseTextButton.BaseTextButton, { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: failureStateButtonPill, style: failureStateButtonWrapper, text: tmp10 });
  cResult[3] = onPressBack;
  cResult[4] = tmp4.failureStateButtonPill;
  cResult[5] = tmp4.failureStateButtonWrapper;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function NotFoundState(onPress) {
  const tmp = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  const obj2 = { style: tmp.emptyStateContainer, children: null };
  const obj3 = { style: tmp.emptyState, lightSource: _modDef11918, darkSource: _modDef11919, title: null, body: null, children: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["pX/qb9"]);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.exOQVY);
  const obj4 = { shrink: true, size: "sm", variant: "secondary", onPress: onPress.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["/g10LC"]);
  obj3.children = constants2(BaseTextButton.BaseTextButton, obj4);
  obj2.children = constants2(native.EmptyState, obj3);
  return constants2(React5, obj2);
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoPermsState(arg0) {
  const cResult = c.c(22);
  ({ onPressBack, command } = arg0);
  const tmp4 = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  if (cResult[0] !== command.displayName) {
    const obj3 = { variant: "heading-lg/bold", color: "text-default", children: command.displayName };
    const tmp8 = constants2(Text_Text.Text, obj3);
    cResult[0] = command.displayName;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== command.displayDescription) {
    const obj4 = { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription };
    const tmp11 = constants2(Text_Text.Text, obj4);
    cResult[2] = command.displayDescription;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.commandNameContainer) {
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp9) {
        let tmp12 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.TzufcR);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["I/O+A1"]);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        let tmp16 = stringResult1;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const _Symbol2 = Symbol;
      ({ failureStateButtonPill, failureStateButtonWrapper } = tmp4);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t["/g10LC"]);
        cResult[10] = stringResult2;
        let tmp19 = stringResult2;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === onPressBack) {
        if (cResult[12] === tmp4.failureStateButtonPill) {
          if (cResult[13] === tmp4.failureStateButtonWrapper) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.emptyState) {
            if (cResult[16] === tmp21) {
              let tmp24 = cResult[17];
            }
            if (cResult[18] === tmp4.emptyStateContainer) {
              if (cResult[19] === tmp24) {
                if (cResult[20] === tmp12) {
                  let tmp28 = cResult[21];
                }
                return tmp28;
              }
            }
            const obj5 = { style: tmp4.emptyStateContainer, children: null };
            const items = [tmp12, tmp24];
            obj5.children = items;
            const tmp31 = guild(React5, obj5);
            cResult[18] = tmp4.emptyStateContainer;
            cResult[19] = tmp24;
            cResult[20] = tmp12;
            cResult[21] = tmp31;
            tmp28 = tmp31;
          }
          const obj6 = { style: tmp4.emptyState, lightSource: _modDef11818, darkSource: _modDef11819, title: tmp15, body: tmp16, children: tmp21 };
          const tmp27 = constants2(native.EmptyState, obj6);
          cResult[15] = tmp4.emptyState;
          cResult[16] = tmp21;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj7 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: failureStateButtonPill, style: failureStateButtonWrapper, text: tmp19 };
      const tmp23 = constants2(BaseTextButton.BaseTextButton, obj7);
      cResult[11] = onPressBack;
      cResult[12] = tmp4.failureStateButtonPill;
      cResult[13] = tmp4.failureStateButtonWrapper;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
  }
  const obj8 = { style: tmp4.commandNameContainer, children: null };
  const items1 = [tmp6, tmp9];
  obj8.children = items1;
  const tmp13 = guild(React5, obj8);
  cResult[4] = tmp4.commandNameContainer;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function NoPermsState(command) {
  command = command.command;
  const tmp = closure_23();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  const obj2 = { style: tmp.emptyStateContainer, children: null };
  const obj3 = { style: tmp.commandNameContainer, children: null };
  const items = [constants2(Text_Text.Text, { variant: "heading-lg/bold", color: "text-default", children: command.displayName }), constants2(Text_Text.Text, { variant: "heading-sm/medium", color: "text-default", children: command.displayDescription })];
  obj3.children = items;
  const items1 = [guild(React5, obj3), ];
  const obj6 = { style: tmp.emptyState, lightSource: _modDef11818, darkSource: _modDef11819, title: null, body: null, children: null };
  const intl = util.intl;
  obj6.title = intl.string(util.t.TzufcR);
  const intl2 = util.intl;
  obj6.body = intl2.string(util.t["I/O+A1"]);
  const obj7 = { shrink: true, size: "sm", variant: "secondary", onPress: command.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t["/g10LC"]);
  obj6.children = constants2(BaseTextButton.BaseTextButton, obj7);
  items1[1] = constants2(native.EmptyState, obj6);
  obj2.children = items1;
  return guild(React5, obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandViewScreen(route) {
  const cResult = c.c(10);
  ({ command, context, section, preSelectedCommand, analyticsLocation, installOnDemand, sectionName, expandBottomSheet, onCommandExecuted } = route.route.params);
  if (null == context) {
    return null;
  } else {
    if (cResult[0] === analyticsLocation) {
      if (cResult[1] === command) {
        if (cResult[2] === context) {
          if (cResult[3] === expandBottomSheet) {
            if (cResult[4] === installOnDemand) {
              if (cResult[5] === onCommandExecuted) {
                if (cResult[6] === preSelectedCommand) {
                  if (cResult[7] === section) {
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj2 = { command, context, section, preSelectedCommand, installOnDemand, sectionName, analyticsLocation, expandBottomSheet, onCommandExecuted };
    const tmp5 = constants2(closure_31, obj2);
    cResult[0] = analyticsLocation;
    cResult[1] = command;
    cResult[2] = context;
    cResult[3] = expandBottomSheet;
    cResult[4] = installOnDemand;
    cResult[5] = onCommandExecuted;
    cResult[6] = preSelectedCommand;
    cResult[7] = section;
    cResult[8] = sectionName;
    cResult[9] = tmp5;
  }
}) : (function AppLauncherCommandViewScreen(route) {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = { command: tmp, context, section: tmp2, preSelectedCommand: tmp3, installOnDemand: tmp5, sectionName: tmp6, analyticsLocation: tmp4, expandBottomSheet: tmp7, onCommandExecuted: tmp8 };
    tmp9 = constants2(closure_31, obj);
  }
  return tmp9;
});