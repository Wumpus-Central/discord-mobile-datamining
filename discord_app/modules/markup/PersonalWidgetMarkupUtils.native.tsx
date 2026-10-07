// === Module 8344: PersonalWidgetMarkupUtils ===

// Module 8344 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4884 */;
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import combineMarkupRules from "combineMarkupRules" /* 5793 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7657 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;