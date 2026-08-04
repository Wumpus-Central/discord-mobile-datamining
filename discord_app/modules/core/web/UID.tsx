// discord_app/modules/core/web/UID.tsx
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4400)(str);
};
export const useUID = function useUID() {
  return importDefault(5507)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5507)(() => callback(table[0])("uid_")));
};