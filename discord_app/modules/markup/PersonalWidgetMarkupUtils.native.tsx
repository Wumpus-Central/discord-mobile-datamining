// === Module 8712: parsePersonalWidgetReact ===

// Module 8712 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4436 */;
import parseLinkDefault from "parseLink" /* 4903 */;
import importDefaultResult from "combineMarkupRules" /* 4902 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7828 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;