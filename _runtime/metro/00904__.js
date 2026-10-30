// _runtime/metro/00904__.js
import _mod905 from "00905__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export () => {
  const navigationEntry = _mod905.getNavigationEntry();
  let num;
  if (navigationEntry != null) {
    num = navigationEntry.activationStart;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}