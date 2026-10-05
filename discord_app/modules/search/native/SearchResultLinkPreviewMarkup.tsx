// discord_app/modules/search/native/SearchResultLinkPreviewMarkup.tsx
import MarkupRulesDefault from "../../markup/MarkupRules.tsx";
import combineMarkupRules from "../../markup/combineMarkupRules.tsx";
import MarkupSearchResultLinkPreviewReactRules from "../../markup/native/MarkupSearchResultLinkPreviewReactRules.tsx";
import MarkupParser from "../../../../discord_common/js/packages/markup/MarkupParser.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
