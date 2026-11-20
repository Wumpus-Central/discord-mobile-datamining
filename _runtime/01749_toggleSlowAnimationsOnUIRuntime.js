// === Module 1749: toggleSlowAnimationsOnUIRuntime ===

// Module 1749 (toggleSlowAnimationsOnUIRuntime)
import NativeWorklets from "NativeWorklets" /* 1710 */;

require = arg1;
const dependencyMap = arg6;

export function toggleSlowAnimationsOnUIRuntime() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.toggleSlowAnimationsOnUIRuntime();
}