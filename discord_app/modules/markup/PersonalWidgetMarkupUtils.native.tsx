// discord_app/modules/markup/PersonalWidgetMarkupUtils.native.tsx
import MarkupTextDefault from "MarkupReactRules.native.tsx";
import parseLinkDefault from "MarkupRules.tsx";
import importDefaultResult from "combineMarkupRules.tsx";
import importDefaultResult1 from "../../../_runtime/00012_apply.js";
import importAllResult from "../../../discord_common/js/packages/markup/MarkupParser.tsx";

const items = [
  importDefaultResult1.pick(parseLinkDefault.RULES, [
    "escape",
    "text",
    "strong",
    "em",
    "u",
    "url",
    "autolink",
    "emoji",
    "invisibleUnicode",
  ]),
  MarkupTextDefault(),
];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
