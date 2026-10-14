// === Module 17466: SearchResultLinkPreviewMarkup ===

// Module 17466 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5407 */;
import combineMarkupRules from "combineMarkupRules" /* 5406 */;
import MarkupParser from "MarkupParser" /* 8012 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17467).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17467);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));