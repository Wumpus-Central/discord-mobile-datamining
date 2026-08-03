const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4462)(str);
};
export const useUID = function useUID() {
  return importDefault(5569)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5569)(() => callback(table[0])("uid_")));
};