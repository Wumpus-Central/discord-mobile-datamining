// discord_app/modules/react_compiler/ReactCompilerGating.tsx
import libdiscoreExperiments from "../libdiscore/libdiscoreExperiments.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ReactCompilerExperiment = libdiscoreExperiments.ReactCompilerExperiment;
const cachedEnabled = ReactCompilerExperiment.getCachedEnabled();
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerGating.tsx");

export function isReactCompilerEnabled() {
  return closure_0;
}
export function isReactCompilerBuild() {
  return true;
}
