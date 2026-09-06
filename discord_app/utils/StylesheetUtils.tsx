// discord_app/utils/StylesheetUtils.tsx
import StringUtils from "StringUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(button, button) {
  const substr = [...arguments].slice();
  const tmp =
    button["" + button + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
