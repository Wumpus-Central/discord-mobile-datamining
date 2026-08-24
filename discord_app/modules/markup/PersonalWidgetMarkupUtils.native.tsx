// === Module 12344: parsePersonalWidgetReact ===

// Module 12344 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4771 */;
import parseLinkDefault from "parseLink" /* 6846 */;
import importDefaultResult from "combineMarkupRules" /* 6845 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 6940 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;