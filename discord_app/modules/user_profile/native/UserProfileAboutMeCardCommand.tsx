// discord_app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { jsxs } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = fn;
let obj = { color: ThemesDefault.colors.MENTION_FOREGROUND, backgroundColor: ThemesDefault.colors.MENTION_BACKGROUND, marginEnd: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_12 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function UserProfileAboutMeCardCommand(channel) {
  ({ application: require, command } = channel);
  channel = channel.channel;
  const tmp = callback();
  const items = ["/", command.displayName];
  return jsxs(require(channel[5]).Text, {
    variant: "text-md/bold",
    onPress() {
      let obj = require(channel[6]);
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
          id = bestActiveInput.id;
        }
        obj = { application_id: id, command_id: closure_1_1.id, guild_id: closure_1_2.getGuildId() };
        const merged = Object.assign(require(channel[9]).collectChannelAnalyticsMetadata(closure_1_2));
        obj.track(AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, obj);
        const obj3 = require(channel[9]);
        command(channel[10]).hideActionSheet();
        command(channel[11])();
        if (bestActiveInput != null) {
          bestActiveInput.openSystemKeyboard();
        }
        if (bestActiveInput != null) {
          const applicationCommandManager = bestActiveInput.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            obj = { channelId: null, command: null, section: null, location: null };
            obj[0] = closure_1_2.id;
            obj[1] = closure_1_1;
            let applicationCommandSection = null;
            if (null != bestActiveInput) {
              applicationCommandSection = require(channel[12]).getApplicationCommandSection(bestActiveInput);
              const tmp7Result = require(channel[12]);
            }
            obj[2] = applicationCommandSection;
            obj[3] = require(channel[13]).ApplicationCommandTriggerLocations.POPULAR_COMMANDS;
            applicationCommandManager.setCommand(obj);
          }
        }
        const tmpResult = command(channel[10]);
      };
      const result = require(channel[7]).handleTapCommandMention(obj);
    },
    onLongPress() {
      return require(channel[7]).handleLongPressCommandMention(command.displayName, command.id);
    },
    style: callback().commandClickable,
    children: items
  });
});
let result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCardCommand.tsx");

export default memoResult;