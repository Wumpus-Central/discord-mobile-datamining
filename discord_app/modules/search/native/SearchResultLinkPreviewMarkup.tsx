// === Module 16884: SearchResultLinkPreviewMarkup ===

// Module 16884 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5083 */;
import combineMarkupRules from "combineMarkupRules" /* 5082 */;
import MarkupParser from "MarkupParser" /* 8103 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16885).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16885);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));