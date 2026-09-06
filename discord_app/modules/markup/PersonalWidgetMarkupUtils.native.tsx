// === Module 8660: parsePersonalWidgetReact ===

// Module 8660 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4551 */;
import parseLinkDefault from "parseLink" /* 4998 */;
import importDefaultResult from "combineMarkupRules" /* 4997 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7987 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;