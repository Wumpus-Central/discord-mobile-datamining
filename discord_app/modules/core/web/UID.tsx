// === Module 9856: UID ===

// Module 9856 (UID)
import useInitialValueDefault from "useInitialValue" /* 5607 */;
import uniqueIdDefault from "uniqueId" /* 6024 */;
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