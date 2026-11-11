// === Module 19318: SearchResultLinkPreviewMarkup ===

// Module 19318 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6281 */;
import combineMarkupRules from "combineMarkupRules" /* 6280 */;
import MarkupParser from "MarkupParser" /* 9150 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19319).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19319);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));