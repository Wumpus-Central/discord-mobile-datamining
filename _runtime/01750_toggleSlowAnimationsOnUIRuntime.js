// === Module 1750: toggleSlowAnimationsOnUIRuntime ===

// Module 1750 (toggleSlowAnimationsOnUIRuntime)
import NativeWorklets from "NativeWorklets" /* 1711 */;

require = arg1;
const dependencyMap = arg6;

export function toggleSlowAnimationsOnUIRuntime() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.toggleSlowAnimationsOnUIRuntime();
}