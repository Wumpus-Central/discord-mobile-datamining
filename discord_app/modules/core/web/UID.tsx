// discord_app/modules/core/web/UID.tsx
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return require("../../../../_runtime/04491_uniqueId.js")(str);
};
export const useUID = function useUID() {
  return require("../../../hooks/useInitialValue.tsx")(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(require("../../../hooks/useInitialValue.tsx")(() => callback(table[0])("uid_")));
};