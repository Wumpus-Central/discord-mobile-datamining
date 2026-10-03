// === Module 918: ? ===

// Module 918
import _mod919 from "module_919" /* 919 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getActivationStart = () => {
  const navigationEntry = _mod919.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};