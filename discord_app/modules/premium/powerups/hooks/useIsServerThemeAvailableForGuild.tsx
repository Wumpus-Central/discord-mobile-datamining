// === Module 14061: useIsServerThemeAvailableForGuild ===

// Module 14061 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4964 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4974 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(arg0, arg1) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, arg1);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(arg0, arg1);
};