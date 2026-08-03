// === Module 12070: ? ===

// Module 12070
import { AnalyticEvents } from "ME";
import { jsxs } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { commandClickable: null };
obj = { color: require("Themes").colors.MENTION_FOREGROUND, backgroundColor: require("Themes").colors.MENTION_BACKGROUND, marginEnd: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_12 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function UserProfileAboutMeCardCommand(channel) {
  let command;
  let require;
  ({ application: require, command } = channel);
  channel = channel.channel;
  const tmp = callback();
  const items = ["/", command.displayName];
  return jsxs(require(channel[5]).Text, {
    variant: "text-md/bold",
    onPress() {
      let obj = outer1_0(channel[6]);
      const bestActiveInput = obj.getBestActiveInput();
      obj = { channelId: channel.id, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let str;
      if (bestActiveInput != null) {
        str = bestActiveInput.getText();
      }
      if (str == null) {
        str = "";
      }
      obj[1] = str;
      ({ id: obj4[2], displayName: obj4[3] } = command);
      obj[4] = function onOpenCustomKeyboard(arg0) {
        let openCustomKeyboardResult;
        if (bestActiveInput != null) {
          openCustomKeyboardResult = bestActiveInput.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj[5] = function onSetCommand() {
        let obj = command(channel[8]);
        let id;
        if (bestActiveInput != null) {
          id = tmp3.id;
        }
        obj = { application_id: id, command_id: outer1_1.id, guild_id: outer1_2.getGuildId() };
        const merged = Object.assign(outer2_0(channel[9]).collectChannelAnalyticsMetadata(outer1_2));
        obj.track(outer2_3.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const obj3 = outer2_0(channel[9]);
        const tmp5 = outer1_1;
        const tmp6 = outer1_2;
        command(channel[10]).hideActionSheet();
        command(channel[11])();
        if (bestActiveInput != null) {
          obj5.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = obj5.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: null, command: null, section: null, location: null };
            obj[0] = tmp6.id;
            obj[1] = tmp5;
            let applicationCommandSection = null;
            if (null != tmp3) {
              applicationCommandSection = tmp7(tmp2[12]).getApplicationCommandSection(tmp3);
              const tmp7Result = tmp7(tmp2[12]);
            }
            obj[2] = applicationCommandSection;
            obj[3] = tmp7(tmp2[13]).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
      };
      const result = outer1_0(channel[7]).handleTapCommandMention(obj);
    },
    onLongPress() {
      return outer1_0(channel[7]).handleLongPressCommandMention(command.displayName, command.id);
    },
    style: callback().commandClickable,
    children: items
  });
});
let result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;