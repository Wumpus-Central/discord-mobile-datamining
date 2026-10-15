// === Module 17706: SearchResultLinkPreviewMarkup ===

// Module 17706 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5462 */;
import combineMarkupRules from "combineMarkupRules" /* 5461 */;
import MarkupParser from "MarkupParser" /* 8222 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17707).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17707);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));