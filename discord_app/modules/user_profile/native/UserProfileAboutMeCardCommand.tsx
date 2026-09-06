// === Module 11211: UserProfileAboutMeCardCommand ===

// Module 11211 (UserProfileAboutMeCardCommand)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 11212 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11217 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxs = fn(21).jsxs;
const createStyles = fn(4560);
let obj = { commandClickable: null };
obj = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, marginEnd: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12 };
obj.commandClickable = obj;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default noop.memo(function UserProfileAboutMeCardCommand(channel) {
  ({ application: require, command } = channel);
  channel = channel.channel;
  let obj = {
    variant: "text-md/bold",
    onPress() {
      let obj = require("ChatInputUtils");
      const bestActiveInput = obj.getBestActiveInput();
      obj = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        let obj = AnalyticsUtilsDefault;
        let id;
        if (closure_2_0 != null) {
          id = tmp3.id;
        }
        obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const tmp5 = command;
        const tmp6 = channel;
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          obj5.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj5.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: tmp6.id, command: tmp5, section: null, location: null };
            let applicationCommandSection = null;
            if (null != tmp3) {
              applicationCommandSection = tmp7(7521).getApplicationCommandSection(tmp3);
              const tmp7Result = tmp7(7521);
            }
            obj.section = applicationCommandSection;
            obj.location = tmp7(7523).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj);
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
      let obj = require("ChatInputUtils");
      const bestActiveInput = obj.getBestActiveInput();
      obj = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj.currentText = str;
      ({ id: obj4.commandId, displayName: obj4.commandName } = command);
      obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj.onSetCommand = function onSetCommand() {
        let obj = AnalyticsUtilsDefault;
        let id;
        if (closure_2_0 != null) {
          id = tmp3.id;
        }
        obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const tmp5 = command;
        const tmp6 = channel;
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          obj5.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj5.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: tmp6.id, command: tmp5, section: null, location: null };
            let applicationCommandSection = null;
            if (null != tmp3) {
              applicationCommandSection = tmp7(7521).getApplicationCommandSection(tmp3);
              const tmp7Result = tmp7(7521);
            }
            obj.section = applicationCommandSection;
            obj.location = tmp7(7523).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null
  });
});