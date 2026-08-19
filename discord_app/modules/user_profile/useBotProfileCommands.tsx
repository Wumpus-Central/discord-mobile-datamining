// discord_app/modules/user_profile/useBotProfileCommands.tsx
import findCommandInSectionAll from "../application_commands/ApplicationCommandQueryApi.tsx";
import noop from "../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel) {
  let obj = findCommandInSectionAll;
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  obj = {
    application: accessibleCommandsForApplication.application,
    commands: React.useMemo(() => {
      let found;
      if (commands != null) {
        found = commands.filter((item, index) => {
          let tmp = true !== item.nsfw;
          if (tmp) {
            const options = item.options;
            let found;
            if (options != null) {
              found = options.find((item, index) => {
                const type = item.type;
                return type === callback(table[2]).ApplicationCommandOptionType.SUB_COMMAND || type === callback(table[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
              });
            }
            tmp = null == found;
          }
          return tmp;
        });
      }
      return found;
    }, items)
  };
  items = [commands];
  return obj;
};