// === Module 18636: SearchResultLinkPreviewMarkup ===

// Module 18636 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6022 */;
import combineMarkupRules from "combineMarkupRules" /* 6021 */;
import MarkupParser from "MarkupParser" /* 8399 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18637).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18637);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));