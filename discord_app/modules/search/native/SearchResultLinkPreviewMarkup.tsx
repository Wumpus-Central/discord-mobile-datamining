// === Module 18039: SearchResultLinkPreviewMarkup ===

// Module 18039 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5968 */;
import combineMarkupRules from "combineMarkupRules" /* 5967 */;
import MarkupParser from "MarkupParser" /* 8330 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18040).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18040);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));