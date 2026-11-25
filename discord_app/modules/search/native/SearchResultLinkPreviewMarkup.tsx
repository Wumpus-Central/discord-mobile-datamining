// === Module 18926: SearchResultLinkPreviewMarkup ===

// Module 18926 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7041 */;
import combineMarkupRules from "combineMarkupRules" /* 7040 */;
import MarkupParser from "markup/MarkupParser" /* 7148 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18927).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18927);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));