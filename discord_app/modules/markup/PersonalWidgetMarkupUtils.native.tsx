// discord_app/modules/markup/PersonalWidgetMarkupUtils.native.tsx
import MarkupReactRulesDefault from "MarkupReactRules.native.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import combineMarkupRules from "combineMarkupRules.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import MarkupParser from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;