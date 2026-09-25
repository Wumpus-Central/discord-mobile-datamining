// === Module 16463: SearchResultLinkPreviewMarkup ===

// Module 16463 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5297 */;
import combineMarkupRules from "combineMarkupRules" /* 5296 */;
import MarkupParser from "MarkupParser" /* 7424 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16464).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16464);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));