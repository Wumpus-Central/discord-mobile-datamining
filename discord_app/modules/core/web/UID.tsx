// === Module 9162: UID ===

// Module 9162 (UID)
import useInitialValueDefault from "useInitialValue" /* 5911 */;
import uniqueIdDefault from "uniqueId" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return useInitialValueDefault(() => uniqueIdDefault("uid_"));
}
export function UID(children) {
  return children.children(useInitialValueDefault(() => uniqueIdDefault("uid_")));
}