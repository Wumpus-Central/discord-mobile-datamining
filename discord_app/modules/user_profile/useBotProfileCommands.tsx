// discord_app/modules/user_profile/useBotProfileCommands.tsx
import ApplicationCommandQueryApiAll from "../application_commands/ApplicationCommandQueryApi.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default function useBotProfileCommands(channel, arg1, arg2) {
  let obj = ApplicationCommandQueryApiAll;
  const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(channel, arg1, arg2);
  const commands = accessibleCommandsForApplication.commands;
  obj = { application: accessibleCommandsForApplication.application, commands: null };
  const items = [commands];
  obj.commands = noop.useMemo(() => {
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
              return (
                type === closure_1_0(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND ||
                type === closure_1_0(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP
              );
            });
          }
          tmp = null == found;
        }
        return tmp;
      });
    }
    return found;
  }, items);
  return obj;
}
