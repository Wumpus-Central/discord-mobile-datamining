// === Module 18771: SearchResultLinkPreviewMarkup ===

// Module 18771 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5936 */;
import combineMarkupRules from "combineMarkupRules" /* 5935 */;
import MarkupParser from "markup/MarkupParser" /* 8726 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18772).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18772);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));