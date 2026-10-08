// === Module 13209: PersonalWidgetMarkupUtils ===

// Module 13209 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5078 */;
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import combineMarkupRules from "combineMarkupRules" /* 5397 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7978 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;