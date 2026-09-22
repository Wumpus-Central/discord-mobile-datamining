// === Module 17162: SearchResultLinkPreviewMarkup ===

// Module 17162 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5210 */;
import combineMarkupRules from "combineMarkupRules" /* 5209 */;
import MarkupParser from "MarkupParser" /* 8249 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17163).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17163);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));