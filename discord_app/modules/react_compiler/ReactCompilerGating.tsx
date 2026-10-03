// === Module 558: ReactCompilerGating ===

// Module 558 (ReactCompilerGating)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import size from "module_2" /* 2 */;

const ReactCompilerExperiment = libdiscoreExperiments.ReactCompilerExperiment;
const cachedEnabled = ReactCompilerExperiment.getCachedEnabled();
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerGating.tsx");

export function isReactCompilerEnabled() {
  return closure_0;
}
export function isReactCompilerBuild() {
  return true;
}