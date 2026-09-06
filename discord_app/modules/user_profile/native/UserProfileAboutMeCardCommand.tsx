// discord_app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandUtils from "../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "../../application_commands/ApplicationCommandTypes.tsx";
import MarkupReactCommandRule from "../../markup/native/MarkupReactCommandRule.tsx";
import navigateToLastChannelDefault from "../../main_tabs_v2/native/navigateToLastChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxs = fn(21).jsxs;
const createStyles = fn(4560);
let obj = { commandClickable: null };
obj = {
  color: nativeDefault.colors.MENTION_FOREGROUND,
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  marginEnd: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_12,
};
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
      obj = {
        channelId: channel.id,
        currentText: null,
        commandId: null,
        commandName: null,
        onOpenCustomKeyboard: null,
        onSetCommand: null,
      };
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
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: channel.id, command, section: null, location: null };
            let applicationCommandSection = null;
            if (null != id) {
              applicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection(id);
              const tmp7Result = ApplicationCommandUtils;
            }
            obj.section = applicationCommandSection;
            obj.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
        const tmpResult = ActionSheetActionCreatorsDefault;
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null,
  };
  const items = ["/", command.displayName];
  obj.children = items;
  return jsxs(require("Text/Text").Text, {
    variant: "text-md/bold",
    onPress() {
      let obj = require("ChatInputUtils");
      const bestActiveInput = obj.getBestActiveInput();
      obj = {
        channelId: channel.id,
        currentText: null,
        commandId: null,
        commandName: null,
        onOpenCustomKeyboard: null,
        onSetCommand: null,
      };
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
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        navigateToLastChannelDefault();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: channel.id, command, section: null, location: null };
            let applicationCommandSection = null;
            if (null != id) {
              applicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection(id);
              const tmp7Result = ApplicationCommandUtils;
            }
            obj.section = applicationCommandSection;
            obj.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
        const tmpResult = ActionSheetActionCreatorsDefault;
      };
      const result = require("MarkupReactCommandRule").handleTapCommandMention(obj);
    },
    onLongPress() {
      return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
    },
    style: closure_5().commandClickable,
    children: null,
  });
});
