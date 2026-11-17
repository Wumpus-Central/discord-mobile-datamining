// === Module 12087: PersonalWidgetMarkupUtils ===

// Module 12087 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6048 */;
import MarkupRulesDefault from "MarkupRules" /* 6334 */;
import combineMarkupRules from "combineMarkupRules" /* 6333 */;
import apply from "apply" /* 12 */;
import MarkupParser from "MarkupParser" /* 9216 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;