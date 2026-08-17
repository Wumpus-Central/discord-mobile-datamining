// discord_app/modules/markup/PersonalWidgetMarkupUtils.native.tsx
import MarkupTextDefault from "MarkupText" /* 4766 */;
import parseLinkDefault from "parseLink" /* 6809 */;
import importDefaultResult from "combineMarkupRules" /* 6808 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 6902 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;