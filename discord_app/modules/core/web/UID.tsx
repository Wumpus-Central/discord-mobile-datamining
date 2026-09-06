// discord_app/modules/core/web/UID.tsx
import uniqueIdDefault from "../../../../_runtime/04764_uniqueId.js";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return useInitialValueDefault(() => uniqueIdDefault("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValueDefault(() => uniqueIdDefault("uid_")));
};
