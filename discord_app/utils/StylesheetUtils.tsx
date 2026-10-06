// === Module 13917: StylesheetUtils ===

// Module 13917 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(button, button2) {
  const substr = [...arguments].slice();
  const tmp = button["" + button + substr.reduce(substr, (acc, item) => {
    const obj = StringUtils;
    return acc + obj.upperCaseFirstChar(item);
  }, "")];
  return null != tmp ? tmp : undefined;
};