// _runtime/01748_toggleSlowAnimationsOnUIRuntime.js
import NativeWorklets from "01709_NativeWorklets.js";

require = arg1;
const dependencyMap = arg6;

export function toggleSlowAnimationsOnUIRuntime() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.toggleSlowAnimationsOnUIRuntime();
}
