// discord_app/modules/core/web/UID.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import uniqueIdDefault from "../../../../_runtime/05261_uniqueId.js";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";

const result = obj132.fileFinishedImporting("modules/core/web/UID.tsx");

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