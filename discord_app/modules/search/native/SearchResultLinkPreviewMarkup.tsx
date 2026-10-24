// === Module 18115: SearchResultLinkPreviewMarkup ===

// Module 18115 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5982 */;
import combineMarkupRules from "combineMarkupRules" /* 5981 */;
import MarkupParser from "MarkupParser" /* 8344 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18116).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18116);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));