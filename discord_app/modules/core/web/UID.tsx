// discord_app/modules/core/web/UID.tsx
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import uniqueIdDefault from "../../../../_runtime/06024_uniqueId.js";
import size from "../../../../_runtime/metro/00002__.js";

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
