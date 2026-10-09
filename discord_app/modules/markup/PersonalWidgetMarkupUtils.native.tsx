// === Module 13302: PersonalWidgetMarkupUtils ===

// Module 13302 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5079 */;
import MarkupRulesDefault from "MarkupRules" /* 5399 */;
import combineMarkupRules from "combineMarkupRules" /* 5398 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7986 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;