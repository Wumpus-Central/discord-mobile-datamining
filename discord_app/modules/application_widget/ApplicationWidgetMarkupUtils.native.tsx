// === Module 9084: ApplicationWidgetMarkupUtils ===

// Module 9084 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4596 */;
import MarkupRulesDefault from "MarkupRules" /* 5048 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 9085 */;
import combineMarkupRules from "combineMarkupRules" /* 5047 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8039 */;

const items = ["text", "link", "emoji"];
const items1 = [apply.pick(MarkupRulesDefault.RULES, items), { image: MarkupLiteralImageRuleDefault }, MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items1);
let closure_0 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_1 = MarkupParser.astParserFor(importDefaultResultResult);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export const parseApplicationWidgetText = function parseApplicationWidgetText(text, arg1) {
  const merged = Object.assign(arg1);
  return closure_0(text, true, { allowLinks: true });
};
export const parseApplicationWidgetTextToAST = function parseApplicationWidgetTextToAST(arg0, arg1) {
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, { allowLinks: true });
};