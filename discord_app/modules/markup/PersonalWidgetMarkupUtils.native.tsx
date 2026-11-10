// === Module 15265: PersonalWidgetMarkupUtils ===

// Module 15265 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5882 */;
import MarkupRulesDefault from "MarkupRules" /* 6168 */;
import combineMarkupRules from "combineMarkupRules" /* 6167 */;
import apply from "apply" /* 12 */;
import MarkupParser from "MarkupParser" /* 8521 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;