// === Module 19131: SearchResultLinkPreviewMarkup ===

// Module 19131 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6168 */;
import combineMarkupRules from "combineMarkupRules" /* 6167 */;
import MarkupParser from "MarkupParser" /* 8521 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19132).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19132);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));