// === Module 18695: SearchResultLinkPreviewMarkup ===

// Module 18695 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6029 */;
import combineMarkupRules from "combineMarkupRules" /* 6028 */;
import MarkupParser from "MarkupParser" /* 8436 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18696).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18696);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));