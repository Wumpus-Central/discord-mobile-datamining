// === Module 19005: SearchResultLinkPreviewMarkup ===

// Module 19005 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6169 */;
import combineMarkupRules from "combineMarkupRules" /* 6168 */;
import MarkupParser from "MarkupParser" /* 8585 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19006).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19006);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));