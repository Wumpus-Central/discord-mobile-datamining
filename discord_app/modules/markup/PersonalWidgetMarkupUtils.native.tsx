// === Module 14343: PersonalWidgetMarkupUtils ===

// Module 14343 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5692 */;
import MarkupRulesDefault from "MarkupRules" /* 5968 */;
import combineMarkupRules from "combineMarkupRules" /* 5967 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8330 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;