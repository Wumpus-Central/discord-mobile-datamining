// === Module 8758: uid ===

// Module 8758 (uid)
import set from "set" /* 2 */;
import uniqueIdDefault from "uniqueId" /* 4692 */;
import useInitialValueDefault from "useInitialValue" /* 5909 */;

const result = set.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return useInitialValueDefault(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValueDefault(() => callback(table[0])("uid_")));
};