// discord_app/modules/user_profile/useBotProfileCommands.tsx
import c from "../../../_runtime/00576_c.js";
import ApplicationCommandQueryApiAll from "../application_commands/ApplicationCommandQueryApi.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      const cResult = c.c(5);
      const accessibleCommandsForApplication = ApplicationCommandQueryApiAll.useAccessibleCommandsForApplication(
        arg0,
        arg1,
        arg2,
      );
      ({ commands, application } = accessibleCommandsForApplication);
      if (cResult[0] !== commands) {
        let found;
        if (commands != null) {
          found = commands.filter((nsfw) => {
            let tmp = true !== nsfw.nsfw;
            if (tmp) {
              options = nsfw.options;
              let found;
              if (options != null) {
                found = options.find((type) => {
                  type = type.type;
                  return (
                    type === closure_1_0(dependencyMap[4]).ApplicationCommandOptionType.SUB_COMMAND ||
                    type === closure_1_0(dependencyMap[4]).ApplicationCommandOptionType.SUB_COMMAND_GROUP
                  );
                });
              }
              tmp = null == found;
            }
            return tmp;
          });
        }
        cResult[0] = commands;
        cResult[1] = found;
        let tmp3 = found;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === application) {
        if (cResult[3] === tmp3) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
      const obj3 = { application, commands: tmp3 };
      cResult[2] = application;
      cResult[3] = tmp3;
      cResult[4] = obj3;
      tmp6 = obj3;
    }
  : (arg0, arg1, arg2) => {
      const accessibleCommandsForApplication = ApplicationCommandQueryApiAll.useAccessibleCommandsForApplication(
        arg0,
        arg1,
        arg2,
      );
      const commands = accessibleCommandsForApplication.commands;
      const obj2 = { application: accessibleCommandsForApplication.application, commands: null };
      const items = [commands];
      obj2.commands = noop.useMemo(() => {
        let found;
        if (commands != null) {
          found = commands.filter((nsfw) => {
            let tmp = true !== nsfw.nsfw;
            if (tmp) {
              options = nsfw.options;
              let found;
              if (options != null) {
                found = options.find((type) => {
                  type = type.type;
                  return (
                    type === closure_1_0(dependencyMap[4]).ApplicationCommandOptionType.SUB_COMMAND ||
                    type === closure_1_0(dependencyMap[4]).ApplicationCommandOptionType.SUB_COMMAND_GROUP
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
      return obj2;
    };
