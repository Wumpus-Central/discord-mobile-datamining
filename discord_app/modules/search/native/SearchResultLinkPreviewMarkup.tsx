// === Module 18128: SearchResultLinkPreviewMarkup ===

// Module 18128 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5982 */;
import combineMarkupRules from "combineMarkupRules" /* 5981 */;
import MarkupParser from "MarkupParser" /* 8344 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18129).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18129);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));