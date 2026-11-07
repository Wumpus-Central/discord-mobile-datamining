// === Module 19089: SearchResultLinkPreviewMarkup ===

// Module 19089 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6166 */;
import combineMarkupRules from "combineMarkupRules" /* 6165 */;
import MarkupParser from "MarkupParser" /* 8515 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19090).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19090);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));