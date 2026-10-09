// === Module 17299: SearchResultLinkPreviewMarkup ===

// Module 17299 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5399 */;
import combineMarkupRules from "combineMarkupRules" /* 5398 */;
import MarkupParser from "MarkupParser" /* 7986 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17300).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17300);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));