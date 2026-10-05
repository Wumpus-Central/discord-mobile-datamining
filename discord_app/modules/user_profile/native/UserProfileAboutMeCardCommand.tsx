// discord_app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ApplicationCommandUtils from "../../application_commands/ApplicationCommandUtils.tsx";
import ApplicationCommandTypes from "../../application_commands/ApplicationCommandTypes.tsx";
import MarkupReactCommandRule from "../../markup/native/MarkupReactCommandRule.tsx";
import navigateToLastChannelDefault from "../../main_tabs_v2/native/navigateToLastChannel.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let application;

let obj2;
const AnalyticEvents = Constants.AnalyticEvents;
const jsxs = Fragment.jsxs;
let obj = { commandClickable: obj2 };
obj2 = {
  color: nativeDefault.colors.MENTION_FOREGROUND,
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  marginEnd: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_12,
};
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (application) => {
        let channel;
        const tmp = application;
        let obj = application(channel[6]);
        const cResult = obj.c(12);
        application = application.application;
        const command = application.command;
        const tmp2 = channel;
        channel = application.channel;
        const tmp4 = closure_5();
        if (cResult[0] === application) {
          if (cResult[1] === channel) {
            let tmp5;
            if (cResult[2] === command) {
              tmp5 = cResult[3];
            }
            if (cResult[4] === command.displayName) {
              let tmp6;
              if (cResult[5] === command.id) {
                tmp6 = cResult[6];
              }
              if (cResult[7] === command.displayName) {
                if (cResult[8] === tmp4.commandClickable) {
                  if (cResult[9] === tmp5) {
                    let tmp7;
                    if (cResult[10] === tmp6) {
                      tmp7 = cResult[11];
                    }
                    return tmp7;
                  }
                }
              }
              const items = ["/", command.displayName];
              const tmp9 = jsxs(tmp(tmp2[15]).Text, {
                variant: "text-md/bold",
                onPress: tmp5,
                onLongPress: tmp6,
                style: tmp4.commandClickable,
                children: items,
              });
              cResult[7] = command.displayName;
              cResult[8] = tmp4.commandClickable;
              cResult[9] = tmp5;
              cResult[10] = tmp6;
              cResult[11] = tmp9;
              tmp7 = tmp9;
            }
            const fn2 = function s() {
              const obj = MarkupReactCommandRule;
              return obj.handleLongPressCommandMention(command.displayName, command.id);
            };
            cResult[4] = command.displayName;
            cResult[5] = command.id;
            cResult[6] = fn2;
            tmp6 = fn2;
          }
        }
        const fn = function c() {
          let str;
          let obj = application(channel[7]);
          const bestActiveInput = obj.getBestActiveInput();
          let obj2 = {
            channelId: channel.id,
            currentText: str,
            commandId: null,
            commandName: null,
            onOpenCustomKeyboard(arg0) {
              let openCustomKeyboardResult;
              if (bestActiveInput != null) {
                openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
              }
              return openCustomKeyboardResult;
            },
            onSetCommand() {
              let applicationCommandSection;
              let id;
              const track = AnalyticsUtilsDefault.track;
              const POPULAR_APPLICATION_COMMAND_CLICKED = AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED;
              AnalyticsUtilsDefault;
              if (application != null) {
                id = application.id;
              }
              const obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
              const obj2 = AppAnalyticsUtils;
              const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
              track(POPULAR_APPLICATION_COMMAND_CLICKED, obj);
              const tmpResult = ActionSheetActionCreatorsDefault;
              tmpResult.hideAllActionSheets();
              navigateToLastChannelDefault();
              if (bestActiveInput != null) {
                bestActiveInput.openSystemKeyboard();
              }
              if (bestActiveInput != null) {
                const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
                if (applicationCommandManager != null) {
                  const obj3 = {
                    channelId: channel.id,
                    command,
                    section: applicationCommandSection,
                    location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS,
                  };
                  applicationCommandSection = null;
                  const setCommand = applicationCommandManager.setCommand;
                  if (null != application) {
                    const tmp8Result = ApplicationCommandUtils;
                    applicationCommandSection = tmp8Result.getApplicationCommandSection(application);
                  }
                  setCommand(obj3);
                }
              }
            },
          };
          str = undefined;
          const handleTapCommandMention = application(channel[8]).handleTapCommandMention;
          application(channel[8]);
          if (bestActiveInput != null) {
            str = bestActiveInput.getText();
          }
          if (str == null) {
            str = "";
          }
          ({ id: obj3.commandId, displayName: obj3.commandName } = command);
          const result = handleTapCommandMention(obj2);
        };
        cResult[0] = application;
        cResult[1] = channel;
        cResult[2] = command;
        cResult[3] = fn;
        tmp5 = fn;
      }
    : (channel) => {
        let command;
        ({ application: require, command } = channel);
        channel = channel.channel;
        const tmp = closure_5();
        const items = ["/", command.displayName];
        return jsxs(require("Text/Text").Text, {
          variant: "text-md/bold",
          onPress() {
            let str;
            let obj = require("ChatInputUtils");
            const bestActiveInput = obj.getBestActiveInput();
            let obj2 = {
              channelId: channel.id,
              currentText: str,
              commandId: null,
              commandName: null,
              onOpenCustomKeyboard(arg0) {
                let openCustomKeyboardResult;
                if (bestActiveInput != null) {
                  openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
                }
                return openCustomKeyboardResult;
              },
              onSetCommand() {
                let applicationCommandSection;
                let id;
                const track = AnalyticsUtilsDefault.track;
                const POPULAR_APPLICATION_COMMAND_CLICKED = AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED;
                AnalyticsUtilsDefault;
                if (require != null) {
                  id = require.id;
                }
                const obj = { application_id: id, command_id: command.id, guild_id: channel.getGuildId() };
                const obj2 = AppAnalyticsUtils;
                const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
                track(POPULAR_APPLICATION_COMMAND_CLICKED, obj);
                const tmpResult = ActionSheetActionCreatorsDefault;
                tmpResult.hideAllActionSheets();
                navigateToLastChannelDefault();
                if (bestActiveInput != null) {
                  bestActiveInput.openSystemKeyboard();
                }
                if (bestActiveInput != null) {
                  const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
                  if (applicationCommandManager != null) {
                    const obj3 = {
                      channelId: channel.id,
                      command,
                      section: applicationCommandSection,
                      location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.POPULAR_COMMANDS,
                    };
                    applicationCommandSection = null;
                    const setCommand = applicationCommandManager.setCommand;
                    if (null != require) {
                      const tmp8Result = ApplicationCommandUtils;
                      applicationCommandSection = tmp8Result.getApplicationCommandSection(require);
                    }
                    setCommand(obj3);
                  }
                }
              },
            };
            str = undefined;
            const handleTapCommandMention = require("MarkupReactCommandRule").handleTapCommandMention;
            require("MarkupReactCommandRule");
            if (bestActiveInput != null) {
              str = bestActiveInput.getText();
            }
            if (str == null) {
              str = "";
            }
            ({ id: obj3.commandId, displayName: obj3.commandName } = command);
            const result = handleTapCommandMention(obj2);
          },
          onLongPress() {
            const obj = MarkupReactCommandRule;
            return obj.handleLongPressCommandMention(command.displayName, command.id);
          },
          style: tmp.commandClickable,
          children: items,
        });
      },
);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;
