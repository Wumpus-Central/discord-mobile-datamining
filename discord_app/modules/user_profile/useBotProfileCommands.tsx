// discord_app/modules/user_profile/useBotProfileCommands.tsx
import noop from "noop";

const require = arg1;
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel) {
  let obj = importAll(9583);
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  obj = {
    application: accessibleCommandsForApplication.application,
    commands: React.useMemo(() => {
      let found;
      if (commands != null) {
        found = commands.filter((nsfw) => {
          let tmp = true !== nsfw.nsfw;
          if (tmp) {
            const options = nsfw.options;
            let found;
            if (options != null) {
              found = options.find((type) => {
                type = type.type;
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