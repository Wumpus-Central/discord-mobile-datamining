// === Module 17947: SearchResultLinkPreviewMarkup ===

// Module 17947 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5962 */;
import combineMarkupRules from "combineMarkupRules" /* 5961 */;
import MarkupParser from "MarkupParser" /* 8320 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17948).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17948);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));