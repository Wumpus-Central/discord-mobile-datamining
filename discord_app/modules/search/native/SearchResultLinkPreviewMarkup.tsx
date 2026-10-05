// === Module 16849: SearchResultLinkPreviewMarkup ===

// Module 16849 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5787 */;
import combineMarkupRules from "combineMarkupRules" /* 5786 */;
import MarkupSearchResultLinkPreviewReactRules from "MarkupSearchResultLinkPreviewReactRules" /* 16850 */;
import MarkupParser from "MarkupParser" /* 7646 */;
import size from "module_2" /* 2 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = MarkupSearchResultLinkPreviewReactRules.createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;