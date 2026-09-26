// === Module 10781: UserProfileAboutMeCardCommand ===

// Module 10781 (UserProfileAboutMeCardCommand)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6941 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 10782 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 10787 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxs = fn(21).jsxs;
const createStyles = fn(4836);
let obj = { commandClickable: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default noop.memo(function UserProfileAboutMeCardCommand(channel) {
  ({ application: require, command } = channel);
  channel = channel.channel;
  let obj = {
    variant: "text-md/bold",
    onPress() {
      const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
      let obj = require("ChatInputUtils");
      let obj2 = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj2.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj2.onSetCommand = function onSetCommand() {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        const obj = AnalyticsUtilsDefault;
        const obj2 = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj2);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            const obj4 = { channelId: channel.id, command, section: null, location: null };
            let applicationCommandSection = null;
            if (null != id) {
              applicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection(id);
              const tmp7Result = ApplicationCommandUtils;
            }
            obj4.section = applicationCommandSection;
            obj4.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj4);
          }
        }
        const tmpResult = ActionSheetActionCreatorsDefault;
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj2);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null
  };
  const items = ["/", command.displayName];
  obj.children = items;
  return jsxs(require("Text/Text").Text, {
    variant: "text-md/bold",
    onPress() {
      const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
      let obj = require("ChatInputUtils");
      let obj2 = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj2.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj2.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj2.onSetCommand = function onSetCommand() {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        const obj = AnalyticsUtilsDefault;
        const obj2 = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj2);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            const obj4 = { channelId: channel.id, command, section: null, location: null };
            let applicationCommandSection = null;
            if (null != id) {
              applicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection(id);
              const tmp7Result = ApplicationCommandUtils;
            }
            obj4.section = applicationCommandSection;
            obj4.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj4);
          }
        }
        const tmpResult = ActionSheetActionCreatorsDefault;
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj2);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null
  });
});