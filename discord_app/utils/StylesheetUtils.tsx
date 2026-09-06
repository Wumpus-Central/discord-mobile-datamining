// discord_app/utils/StylesheetUtils.tsx
import StringUtils from "StringUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
