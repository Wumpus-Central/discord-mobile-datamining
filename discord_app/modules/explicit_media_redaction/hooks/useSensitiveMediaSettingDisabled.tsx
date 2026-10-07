// discord_app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
import useParentalControlSettings from "../../parent_tools/hooks/useParentalControlSettings.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx",
);

export const useSensitiveMediaSettingDisabled = () => useParentalControlSettings.useIsParentallyControlled();
