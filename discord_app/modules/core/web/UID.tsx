// discord_app/modules/core/web/UID.tsx
import { uniqueId } from "../../../../_runtime/04510_uniqueId.js";
import { useInitialValue } from "../../../hooks/useInitialValue.tsx";
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueId(str);
};
export const useUID = function useUID() {
  return useInitialValue(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValue(() => callback(table[0])("uid_")));
};