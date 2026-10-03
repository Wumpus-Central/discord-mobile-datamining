// === Module 13722: useIsServerThemeAvailableForGuild ===

// Module 13722 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4763 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4773 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default (arg0, arg1) => {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, arg1);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(arg0, arg1);
};