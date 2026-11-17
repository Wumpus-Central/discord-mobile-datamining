// === Module 10819: PersonalWidgetMarkupUtils ===

// Module 10819 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6059 */;
import MarkupRulesDefault from "MarkupRules" /* 6342 */;
import combineMarkupRules from "combineMarkupRules" /* 6341 */;
import apply from "apply" /* 12 */;
import MarkupParser from "markup/MarkupParser" /* 9227 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;