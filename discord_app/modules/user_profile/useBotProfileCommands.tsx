// discord_app/modules/user_profile/useBotProfileCommands.tsx
import react2 from "../../../_runtime/00576_react.js";
import ApplicationCommandQueryApiAll from "../application_commands/ApplicationCommandQueryApi.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let type;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let application;
      let commands;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = ApplicationCommandQueryApiAll;
      const accessibleCommandsForApplication = obj2.useAccessibleCommandsForApplication(arg0, arg1, arg2);
      ({ commands, application } = accessibleCommandsForApplication);
      if (cResult[0] !== commands) {
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
                  const tmp3 =
                    type === closure_1_0(closure_1_2[4]).ApplicationCommandOptionType.SUB_COMMAND ||
                    type === closure_1_0(closure_1_2[4]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
                  return tmp3;
                });
              }
              tmp = null == found;
            }
            return tmp;
          });
        }
        cResult[0] = commands;
        cResult[1] = found;
        tmp3 = found;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === application) {
        let tmp6;
        if (cResult[3] === tmp3) {
          tmp6 = cResult[4];
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
      let items;
      const obj = ApplicationCommandQueryApiAll;
      const accessibleCommandsForApplication = obj.useAccessibleCommandsForApplication(arg0, arg1, arg2);
      const commands = accessibleCommandsForApplication.commands;
      const obj2 = {
        application: accessibleCommandsForApplication.application,
        commands: react.useMemo(() => {
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
                    const tmp3 =
                      type === closure_1_0(closure_1_2[4]).ApplicationCommandOptionType.SUB_COMMAND ||
                      type === closure_1_0(closure_1_2[4]).ApplicationCommandOptionType.SUB_COMMAND_GROUP;
                    return tmp3;
                  });
                }
                tmp = null == found;
              }
              return tmp;
            });
          }
          return found;
        }, items),
      };
      items = [commands];
      return obj2;
    };
const result = size.fileFinishedImporting("modules/user_profile/useBotProfileCommands.tsx");

export default tmp2;
