// === Module 16760: SearchResultLinkPreviewMarkup ===

// Module 16760 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5049 */;
import combineMarkupRules from "combineMarkupRules" /* 5048 */;
import MarkupParser from "MarkupParser" /* 8061 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16761).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16761);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));