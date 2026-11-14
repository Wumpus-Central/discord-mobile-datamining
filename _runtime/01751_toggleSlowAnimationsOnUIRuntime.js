// === Module 1751: toggleSlowAnimationsOnUIRuntime ===

// Module 1751 (toggleSlowAnimationsOnUIRuntime)
import NativeWorklets from "NativeWorklets" /* 1712 */;

require = arg1;
const dependencyMap = arg6;

export function toggleSlowAnimationsOnUIRuntime() {
  const WorkletsModule = NativeWorklets.WorkletsModule;
  return WorkletsModule.toggleSlowAnimationsOnUIRuntime();
}