// === Module 1748: toggleSlowAnimationsOnUIRuntime ===

// Module 1748 (toggleSlowAnimationsOnUIRuntime)
import NativeWorklets from "NativeWorklets" /* 1709 */;

require = arg1;
const dependencyMap = arg6;

export function toggleSlowAnimationsOnUIRuntime() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.toggleSlowAnimationsOnUIRuntime();
}