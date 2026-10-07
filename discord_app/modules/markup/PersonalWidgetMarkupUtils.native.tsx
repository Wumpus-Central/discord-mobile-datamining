// discord_app/modules/markup/PersonalWidgetMarkupUtils.native.tsx
import MarkupReactRulesDefault from "MarkupReactRules.native.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import combineMarkupRules from "combineMarkupRules.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import MarkupParser from "../../../discord_common/js/packages/markup/MarkupParser.tsx";

const items = [
  apply.pick(MarkupRulesDefault.RULES, [
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
  MarkupReactRulesDefault(),
];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
