// === Module 14890: PersonalWidgetMarkupUtils ===

// Module 14890 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5744 */;
import MarkupRulesDefault from "MarkupRules" /* 6022 */;
import combineMarkupRules from "combineMarkupRules" /* 6021 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8399 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;