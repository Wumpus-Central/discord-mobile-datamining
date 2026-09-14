// === Module 16789: SearchResultLinkPreviewMarkup ===

// Module 16789 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5079 */;
import combineMarkupRules from "combineMarkupRules" /* 5078 */;
import MarkupParser from "MarkupParser" /* 8091 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16790).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16790);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));