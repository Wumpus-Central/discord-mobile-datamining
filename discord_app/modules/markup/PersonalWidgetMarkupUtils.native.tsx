// === Module 8311: PersonalWidgetMarkupUtils ===

// Module 8311 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4878 */;
import MarkupRulesDefault from "MarkupRules" /* 5787 */;
import combineMarkupRules from "combineMarkupRules" /* 5786 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7646 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;