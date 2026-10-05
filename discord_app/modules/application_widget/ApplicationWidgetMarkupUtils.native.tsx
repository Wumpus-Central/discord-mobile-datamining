// discord_app/modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx
import MarkupReactRulesDefault from "../markup/MarkupReactRules.native.tsx";
import MarkupRulesDefault from "../markup/MarkupRules.tsx";
import MarkupLiteralImageRuleDefault from "../markup/MarkupLiteralImageRule.tsx";
import combineMarkupRules from "../markup/combineMarkupRules.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import MarkupParser_mod from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = ["text", "link", "emoji"];
const items1 = [module_12.pick(MarkupRulesDefault.RULES, items), , ];
let obj = { image: MarkupLiteralImageRuleDefault };
items1[1] = obj;
items1[2] = MarkupReactRulesDefault();
const importDefaultResultResult = combineMarkupRules(items1);
let MarkupParser = MarkupParser_mod;
let closure_0 = MarkupParser.reactParserFor(importDefaultResultResult);
MarkupParser = MarkupParser_mod;
let closure_1 = MarkupParser.astParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export const parseApplicationWidgetText = function parseApplicationWidgetText(text, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_0(text, true, obj);
};
export const parseApplicationWidgetTextToAST = function parseApplicationWidgetTextToAST(arg0, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, obj);
};