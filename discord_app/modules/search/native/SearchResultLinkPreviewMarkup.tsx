// === Module 19507: SearchResultLinkPreviewMarkup ===

// Module 19507 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6334 */;
import combineMarkupRules from "combineMarkupRules" /* 6333 */;
import MarkupParser from "MarkupParser" /* 9216 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19508).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19508);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));