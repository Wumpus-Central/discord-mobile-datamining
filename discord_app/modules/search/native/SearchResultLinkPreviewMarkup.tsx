// === Module 16684: SearchResultLinkPreviewMarkup ===

// Module 16684 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5470 */;
import combineMarkupRules from "combineMarkupRules" /* 5469 */;
import MarkupParser from "MarkupParser" /* 7594 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16685).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16685);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));