// === Module 16923: SearchResultLinkPreviewMarkup ===

// Module 16923 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5085 */;
import combineMarkupRules from "combineMarkupRules" /* 5084 */;
import MarkupParser from "MarkupParser" /* 8123 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16924).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16924);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));