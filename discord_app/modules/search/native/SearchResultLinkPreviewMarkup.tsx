// === Module 16827: SearchResultLinkPreviewMarkup ===

// Module 16827 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5082 */;
import combineMarkupRules from "combineMarkupRules" /* 5081 */;
import MarkupParser from "MarkupParser" /* 8094 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16828).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16828);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));