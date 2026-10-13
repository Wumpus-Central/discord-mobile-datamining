// === Module 17432: SearchResultLinkPreviewMarkup ===

// Module 17432 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import combineMarkupRules from "combineMarkupRules" /* 5401 */;
import MarkupParser from "MarkupParser" /* 8005 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17433).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17433);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));