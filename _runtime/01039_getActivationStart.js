// _runtime/01039_getActivationStart.js
import getNavigationEntry from "01040_getNavigationEntry.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getActivationStart = () => {
  const navigationEntry = getNavigationEntry.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
