// discord_app/modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx
import MarkupReactRulesDefault from "../markup/MarkupReactRules.native.tsx";
import MarkupRulesDefault from "../markup/MarkupRules.tsx";
import MarkupLiteralImageRuleDefault from "../markup/MarkupLiteralImageRule.tsx";
import combineMarkupRules from "../markup/combineMarkupRules.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import MarkupParser from "../../../discord_common/js/packages/markup/MarkupParser.tsx";

const items = ["text", "link", "emoji"];
const items1 = [
  apply.pick(MarkupRulesDefault.RULES, items),
  { image: MarkupLiteralImageRuleDefault },
  MarkupReactRulesDefault(),
];
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
