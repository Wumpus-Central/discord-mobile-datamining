// === Module 18017: SearchResultLinkPreviewMarkup ===

// Module 18017 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5969 */;
import combineMarkupRules from "combineMarkupRules" /* 5968 */;
import MarkupParser from "MarkupParser" /* 8329 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18018).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18018);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));