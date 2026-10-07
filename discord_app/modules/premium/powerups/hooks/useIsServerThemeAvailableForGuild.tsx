// discord_app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
import GuildThemeResolver from "../../../guild_themes/GuildThemeResolver.tsx";
import ServerThemeExperiment from "../experiments/ServerThemeExperiment.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default (arg0, arg1) => {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, arg1);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(arg0, arg1);
};
