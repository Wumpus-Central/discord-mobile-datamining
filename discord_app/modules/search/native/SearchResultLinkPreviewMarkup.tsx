// === Module 16870: SearchResultLinkPreviewMarkup ===

// Module 16870 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import combineMarkupRules from "combineMarkupRules" /* 5793 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 16871 */;
import MarkupParser from "MarkupParser" /* 7657 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;