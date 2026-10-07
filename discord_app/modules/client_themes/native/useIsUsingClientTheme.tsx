// discord_app/modules/client_themes/native/useIsUsingClientTheme.tsx
import useActiveTheme from "useActiveTheme.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default () => useActiveTheme.useIsClientThemeOrCustomThemeActive();
