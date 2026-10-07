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

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxs = fn(21).jsxs;
const createStyles = fn(4896);
let obj = {
  commandClickable: {
    color: nativeDefault.colors.MENTION_FOREGROUND,
    backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
    marginEnd: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_12,
  },
};
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  color: nativeDefault.colors.MENTION_FOREGROUND,
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  marginEnd: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_12,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (application) => {
        const cResult = application(channel[6]).c(12);
        application = application.application;
        const command = application.command;
        channel = application.channel;
        const tmp4 = closure_5();
        if (cResult[0] === application) {
          if (cResult[1] === channel) {
            if (cResult[2] === command) {
              let tmp5 = cResult[3];
            }
            if (cResult[4] === command.displayName) {
              if (cResult[5] === command.id) {
                let tmp6 = cResult[6];
              }
              if (cResult[7] === command.displayName) {
                if (cResult[8] === tmp4.commandClickable) {
                  if (cResult[9] === tmp5) {
                    if (cResult[10] === tmp6) {
                      let tmp7 = cResult[11];
                    }
                    return tmp7;
                  }
                }
              }
              let obj2 = {
                variant: "text-md/bold",
                onPress: tmp5,
                onLongPress: tmp6,
                style: tmp4.commandClickable,
                children: null,
              };
              const items = ["/", command.displayName];
              obj2.children = items;
              const tmp9 = jsxs(tmp(tmp2[15]).Text, {
                variant: "text-md/bold",
                onPress: tmp5,
                onLongPress: tmp6,
                style: tmp4.commandClickable,
                children: null,
              });
              cResult[7] = command.displayName;
              cResult[8] = tmp4.commandClickable;
              cResult[9] = tmp5;
              cResult[10] = tmp6;
              cResult[11] = tmp9;
              tmp7 = tmp9;
            }
            const fn2 = function s() {
              return MarkupReactCommandRule.handleLongPressCommandMention(command.displayName, command.id);
            };
            cResult[4] = command.displayName;
            cResult[5] = command.id;
            cResult[6] = fn2;
            tmp6 = fn2;
          }
        }
        const fn = function c() {
          const bestActiveInput = application(channel[7]).getBestActiveInput();
          let obj = application(channel[7]);
          let obj2 = {
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
            let id;
            if (application != null) {
              id = application.id;
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
                if (null != application) {
                  applicationCommandSection = ApplicationCommandUtils.getApplicationCommandSection(application);
                  const tmp7Result = ApplicationCommandUtils;
                }
                obj4.section = applicationCommandSection;
                obj4.location = ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
                applicationCommandManager.setCommand(obj4);
              }
            }
            const tmpResult = ActionSheetActionCreatorsDefault;
          };
          const result = application(channel[8]).handleTapCommandMention(obj2);
        };
        cResult[0] = application;
        cResult[1] = channel;
        cResult[2] = command;
        cResult[3] = fn;
        tmp5 = fn;
        let obj = application(channel[6]);
        tmp = application;
        tmp2 = channel;
      }
    : (channel) => {
        ({ application: require, command } = channel);
        channel = channel.channel;
        let obj = {
          variant: "text-md/bold",
          onPress() {
            const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
            let obj = require("ChatInputUtils");
            let obj2 = {
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
          children: null,
        };
        const items = ["/", command.displayName];
        obj.children = items;
        return jsxs(require("Text/Text").Text, {
          variant: "text-md/bold",
          onPress() {
            const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
            let obj = require("ChatInputUtils");
            let obj2 = {
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
          children: null,
        });
      },
);
