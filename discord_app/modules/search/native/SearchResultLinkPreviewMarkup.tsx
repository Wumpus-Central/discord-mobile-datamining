// === Module 17740: SearchResultLinkPreviewMarkup ===

// Module 17740 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5464 */;
import combineMarkupRules from "combineMarkupRules" /* 5463 */;
import MarkupParser from "MarkupParser" /* 8225 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17741).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17741);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));