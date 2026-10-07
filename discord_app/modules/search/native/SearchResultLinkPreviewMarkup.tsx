// === Module 16870: SearchResultLinkPreviewMarkup ===

// Module 16870 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import combineMarkupRules from "combineMarkupRules" /* 5793 */;
import MarkupParser from "MarkupParser" /* 7657 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16871).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16871);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));