// === Module 12536: ApplicationWidgetMarkupUtils ===

// Module 12536 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5880 */;
import MarkupRulesDefault from "MarkupRules" /* 6166 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 12537 */;
import combineMarkupRules from "combineMarkupRules" /* 6165 */;
import apply from "apply" /* 12 */;
import MarkupParser_mod from "MarkupParser" /* 8515 */;

const items = ["text", "link", "emoji"];
const items1 = [apply.pick(MarkupRulesDefault.RULES, items), { image: MarkupLiteralImageRuleDefault }, MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items1);
let MarkupParser = MarkupParser_mod;
let closure_0 = MarkupParser.reactParserFor(importDefaultResultResult);
let MarkupParser = MarkupParser_mod;
let closure_1 = MarkupParser.astParserFor(importDefaultResultResult);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export function parseApplicationWidgetText(text, arg1) {
  const merged = Object.assign(arg1);
  return closure_0(text, true, { allowLinks: true });
}
export function parseApplicationWidgetTextToAST(arg0, arg1) {
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, { allowLinks: true });
}