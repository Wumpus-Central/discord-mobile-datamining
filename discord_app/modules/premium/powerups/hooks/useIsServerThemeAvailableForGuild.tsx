// === Module 14116: useIsServerThemeAvailableForGuild ===

// Module 14116 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5003 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5013 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(arg0, arg1) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, arg1);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(arg0, arg1);
};