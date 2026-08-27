// === Module 12671: items ===

// Module 12671 (items)
import MarkupTextDefault from "MarkupText" /* 4436 */;
import parseLinkDefault from "parseLink" /* 4903 */;
import parseDefault from "parse" /* 12672 */;
import importDefaultResult from "combineMarkupRules" /* 4902 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7828 */;

const items = ["text", "link", "emoji"];
const items1 = [importDefaultResult1.pick(parseLinkDefault.RULES, items), , ];
items1[1] = { image: parseDefault };
items1[2] = MarkupTextDefault();
const importDefaultResultResult = importDefaultResult(items1);
const obj = { image: parseDefault };
let closure_0 = importAllResult.reactParserFor(importDefaultResultResult);
let closure_1 = importAllResult.astParserFor(importDefaultResultResult);
const importAllResult1 = importAllResult;
const result = require("set").fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export const parseApplicationWidgetText = function parseApplicationWidgetText(text, arg1) {
  const merged = Object.assign(arg1);
  return callback(text, true, { allowLinks: true });
};
export const parseApplicationWidgetTextToAST = function parseApplicationWidgetTextToAST(arg0, arg1) {
  const merged = Object.assign(arg1);
  return callback2(arg0, true, { allowLinks: true });
};